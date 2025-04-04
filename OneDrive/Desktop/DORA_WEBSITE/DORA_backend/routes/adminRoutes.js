const express = require("express");
const { getAllUsers,deleteUserById, getUserById, updatUserById } = require("../controllers/adminController");
const authMiddleware = require("../middleware/authmiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");


const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);

router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, updatUserById);

router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUserById);
module.exports = router;