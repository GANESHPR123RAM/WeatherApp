const express = require('express');
const multer = require('multer');
const authMiddleware = require("../middleware/authmiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const {
  updatDoraTeamById,
  deleteDoraTeamById,
  uploadPdf,
  uploadDonars,
  getDonars,
  Testimonialuploads,
  GetTestimonial,
  GetEvents,
  Eventsuploads,
  DoraTeamuploads,
  GetDoraTeam,
  GetDora,
  Dorauploads,
  updatDonarsById,
  deleteDonarsById,
  updatEventsById,
  deleteEventsById,
  updatDoraById,
  deleteDoraById,
  updatTestimonialById,
  deleteTestimonialById,
  deletePDFById,
  updatPDFById,
  GetTPDF,
  GetHomePDF,
  HomePdfUpload,
  deleteHomePdfById,
  deleteTickerById,
  Tickeruploads,
  GetTicker
} = require('../controllers/fileController');

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

// uploadDonars
router.post('/uploadFile', authMiddleware, adminMiddleware, upload.single('file'), uploadDonars);
router.get('/imgGet', getDonars);
router.route("/uploadFile/update/:id").patch(authMiddleware, adminMiddleware, updatDonarsById);
router.route("/uploadFile/delete/:id").delete(authMiddleware, adminMiddleware, deleteDonarsById);

// Eventsuploads
router.post('/uploadEvents', authMiddleware, adminMiddleware, Eventsuploads);
router.get('/GetEvents', GetEvents);
router.route("/uploadEvents/update/:id").patch(authMiddleware, adminMiddleware, updatEventsById);
router.route("/uploadEvents/delete/:id").delete(authMiddleware, adminMiddleware, deleteEventsById);

// DoraTeamuploads
router.post('/DoraTeamuploads', authMiddleware, adminMiddleware, upload.single('file'), DoraTeamuploads);
router.get('/GetDoraTeam', GetDoraTeam);
router.route("/DoraTeamuploads/update/:id").patch(authMiddleware, adminMiddleware, updatDoraTeamById);
router.route("/DoraTeamuploads/delete/:id").delete(authMiddleware, adminMiddleware, deleteDoraTeamById);

// Dorauploads
router.post('/Dorauploads', authMiddleware, adminMiddleware, upload.single('file'), Dorauploads);
router.get('/GetDora', GetDora);
router.route("/Dorauploads/update/:id").patch(authMiddleware, adminMiddleware, updatDoraById);
router.route("/Dorauploads/delete/:id").delete(authMiddleware, adminMiddleware, deleteDoraById);

// Testimonialuploads
router.post('/Testimonialuploads', authMiddleware, adminMiddleware, upload.single('file'), Testimonialuploads);
router.get('/GetTestimonial', GetTestimonial);
router.route("/Testimonialuploads/update/:id").patch(authMiddleware, adminMiddleware, updatTestimonialById);
router.route("/Testimonialuploads/delete/:id").delete(authMiddleware, adminMiddleware, deleteTestimonialById);

// uploadPdf
router.post('/uploadPdf', authMiddleware, adminMiddleware, upload.single('file'), uploadPdf);
router.get('/GetTPDF', GetTPDF);
router.route("/uploadPdf/update/:id").patch(authMiddleware, adminMiddleware, updatPDFById);
router.route("/uploadPdf/delete/:id").delete(authMiddleware, adminMiddleware, deletePDFById);

// uploadPdf
router.post('/HomePdfUpload', authMiddleware, adminMiddleware, upload.single('file'), HomePdfUpload);
router.get('/GetHomePDF', GetHomePDF);
router.route("/HomePdfUpload/delete/:id").delete(authMiddleware, adminMiddleware, deleteHomePdfById);

router.post('/Tickeruploads', authMiddleware, adminMiddleware, Tickeruploads);
router.get('/GetTicker', GetTicker);
router.route("/Tickeruploads/delete/:id").delete(authMiddleware, adminMiddleware, deleteTickerById);

module.exports = router;
