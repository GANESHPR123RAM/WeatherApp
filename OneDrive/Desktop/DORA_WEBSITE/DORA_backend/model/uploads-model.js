const mongoose = require("mongoose");

const DonarsSchema = new mongoose.Schema({
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

const PdfSchema = new mongoose.Schema({
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

const EventsSchema = new mongoose.Schema({
    duration: {
        type: String,
        require: true,
    },
    heading: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }
});

const TestimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    position: {
        type: String,
        require: true,
    },
    department: {
        type: String,
        require: true,
    },
    comment: {
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

const DoraTeamSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    position: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    Work: {
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


const DORASchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    position: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    email2: {
        type: String,
        require: true,
    },
    AboutDora: {
        type: String,
        require: true,
    },
    MessageFromDORA:{
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

const Tickerchema = new mongoose.Schema({
    heading: {
        type: String,
        require: true,
    },
    Link: {
        type: String,
        require: true,
    }
});

const TickerModel = mongoose.model('Ticker',Tickerchema)
const HomePdfModel = mongoose.model('HomePdf',PdfSchema)
const PdfModel = mongoose.model('Pdf',PdfSchema)
const DoraModel = mongoose.model("DORA",DORASchema)
const DoraTeamModel= mongoose.model("DoraTeam",DoraTeamSchema)
const EventsModel = mongoose.model("Events", EventsSchema)
const TestimonialModel = mongoose.model("Testimonial", TestimonialSchema)
const DonarsModel = mongoose.model("donars", DonarsSchema);
module.exports = {TickerModel,HomePdfModel,PdfModel, DonarsModel, TestimonialModel, EventsModel,DoraTeamModel,DoraModel };


