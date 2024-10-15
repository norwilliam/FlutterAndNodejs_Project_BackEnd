const mongoose = require('mongoose');

const reporttSchema = new mongoose.Schema({
    title: { type: String, required: true },
    details: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, required: true },
},
    { timestamps: true, versionKey: false }
);
const Report = mongoose.model('Report', reporttSchema);

module.exports = Report;