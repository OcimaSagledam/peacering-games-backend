const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        user_name: { type: String, required: true, maxLength: 40 },
        password: { type: String, required: true, maxLength: 80 }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', UserSchema);
