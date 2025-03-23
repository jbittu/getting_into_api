const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    phone:{
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    technology: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    experience: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 2
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20,
        unique: true
    }
});

const Mentor = new mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;