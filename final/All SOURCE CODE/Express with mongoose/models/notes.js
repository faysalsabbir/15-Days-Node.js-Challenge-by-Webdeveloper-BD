const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, 'Title mus be 3 char in minimum'],
        maxlength: 10
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 100
    }
}, {
    timestamps: true
})

const Note = mongoose.model('Note', notesSchema)
module.exports = Note

