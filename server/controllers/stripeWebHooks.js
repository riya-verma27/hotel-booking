import stripe from "stripe";
import Booking from "../models/Booking.js";
//API to handle stripe web hooks
 export const stripeWebHooks = async(req, res)=>{
    //stripe gateway initialized
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY );
    const sig = req.headers['stripe-signature'];
    let event;
    try {
        event = stripeInstance.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (error) {
        res.status(400).send(`Webhook Error: ${error.message}`);
    }
    //Handle event
    if(event.type === "payment_intent.succeeded"){
        const paymentIntent= event.data.object;
        const paymentIntentId= paymentIntent.id;
        //getting session meta data
        const session = await stripeInstance.checkout.sessions.list({
            payment_intent: paymentIntentId,
        });
        const{bookingId} = session.data[0].metadata;
        //Mark payment as paid
        await Booking.findByIdAndUpdate(bookingId,{isPaid: true, paymentMethod: 'Stripe'});
    }
    else{
        console.log("Unhandled event type: ", event.type);
    }
    res.json({received: true});
 }