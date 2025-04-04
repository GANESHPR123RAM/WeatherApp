const mongoose = require("mongoose");

const carouselSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    path: {
        type: String,
        require: true,
    },
    filename: {
        type: String,
        require: true,
    },

});

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    designation: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    LinkedIn: {
        type: String,
        require: true,
    },
    Instagram: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    path: {
        type: String,
        require: true,
    },
    filename: {
        type: String,
        require: true,
    },

});

const GallerySchema = new mongoose.Schema({
    Numberimg: {
        type: Number,
        require: true,
    },
    path: {
        type: String,
        require: true,
    },
    filename: {
        type: String,
        require: true,
    },

});

const carouselModel = mongoose.model("carousel", carouselSchema);
const GalleryModel = mongoose.model("Gallery", GallerySchema);
const HeadModel = mongoose.model("Head", TeamSchema);
const TeamModel = mongoose.model("Team", TeamSchema);
module.exports = {carouselModel,GalleryModel,HeadModel,TeamModel};