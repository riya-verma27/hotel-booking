import multer from "multer";

//Middle ware to upload hotel images

const upload = multer({
    storage : multer.diskStorage({})
});

export default upload;