const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShopItemSchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 100 },
        price: { type: Number, required: true },
        short_description: { type: String, required: true, maxLength: 400 },
        url: { type: String, required: true },
        urlHP: { type: String, required: false }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('ShopItem', ShopItemSchema);
