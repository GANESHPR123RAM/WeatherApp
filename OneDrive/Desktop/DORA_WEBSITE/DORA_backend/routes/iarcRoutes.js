const express = require('express');
const multer = require('multer');
const authMiddleware = require("../middleware/authmiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const {GalleryUploads,getGallery,deleteGalleryById,carouselUploads,getCarousel,deleteCarouselById,Headuploads,getHead,deleteHeadById,Teamuploads,getTeam,deleteTeamById} = require('../controllers/iarcController');
const router = express.Router();


// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.post('/carouselUploads', authMiddleware, adminMiddleware, upload.single('file'), carouselUploads);
router.get('/getCarousel', getCarousel);
router.route("/carouselUploads/delete/:id").delete(authMiddleware, adminMiddleware, deleteCarouselById);

router.post('/GalleryUploads', authMiddleware, adminMiddleware, upload.single('file'), GalleryUploads);
router.get('/getGallery', getGallery);
router.route("/GalleryUploads/delete/:id").delete(authMiddleware, adminMiddleware, deleteGalleryById);

router.post('/Headuploads', authMiddleware, adminMiddleware, upload.single('file'), Headuploads);
router.get('/getHead', getHead);
router.route("/Headuploads/delete/:id").delete(authMiddleware, adminMiddleware, deleteHeadById);

router.post('/Teamuploads', authMiddleware, adminMiddleware, upload.single('file'), Teamuploads);
router.get('/getTeam', getTeam);
router.route("/Teamuploads/delete/:id").delete(authMiddleware, adminMiddleware, deleteTeamById);

module.exports = router;
