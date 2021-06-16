const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const sponsorSchema = new Schema({
    name: String,
    category: String,
    description: String,
    evaluation: [{
        type: String,
        ref: CONFIG.mongodb.collections.user
    }],
    comments: [{
        body: String,
        user: {
            type: String,
            ref: CONFIG.mongodb.collections.user
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.sponsor, sponsorSchema);