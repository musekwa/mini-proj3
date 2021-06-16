const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const expertSchema = new Schema({
    name: String,
    job: String,
    description: String,
    expertise: String,
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

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.expert, expertSchema);