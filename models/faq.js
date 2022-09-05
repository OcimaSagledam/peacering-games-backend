const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FAQSchema = new Schema(
    {
        title: { type: String, required: true, maxLength: 100 },
        question: { type: String, required: true, maxLength: 400 },
        date: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('FAQ', FAQSchema);