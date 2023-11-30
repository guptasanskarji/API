const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    roll_no: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    department : {
        type: String
    },
    branch: {
        type: String
    },
    university: {
        type: String
    }
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;