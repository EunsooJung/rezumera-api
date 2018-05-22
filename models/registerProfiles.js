/*
 *
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const registerProfiles = new Schema({
    title: String,
    name: String,
    age: String,
    qualification: String,
    prog_languages: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('registers', registerProfiles);