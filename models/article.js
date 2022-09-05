const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
    {
        title: { type: String, required: true, maxLength: 100 },
        short_description: { type: String, required: true, maxLength: 400 },
        article: { type: String, required: true },
        url: { type: String, required: true },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Article', ArticleSchema);
