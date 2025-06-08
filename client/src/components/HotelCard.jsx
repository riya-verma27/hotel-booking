import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  return (
    <Link 
      to={'/room/' + room._id} 
      onClick={() => scrollTo(0, 0)} 
      key={room._id}
      className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
    >
      <div className="relative">
        <img 
          src={room.images[0]} 
          alt="room" 
          className="w-full h-48 object-cover"
        />
        {index % 2 === 0 && (
          <p className="absolute top-3 left-3 bg-white text-gray-800 text-xs px-2 py-1 rounded-full font-medium">
            Best Seller
          </p>
        )}
      </div>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <p className="font-playfair text-lg font-medium text-gray-800">
            {room.hotel.name}
          </p>
          <div className="flex items-center text-sm">
            <img src={assets.starIconFilled} alt="star" className="w-4 h-4 mr-1" />
            4.5
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 gap-1">
          <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-base text-gray-800 font-semibold">
            ${room.pricePerNight}
            <span className="text-sm text-gray-500">/night</span>
          </p>
          <button className="px-3 py-1 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
