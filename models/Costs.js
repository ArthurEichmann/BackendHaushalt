const mongoose = require('mongoose');

const CostsSchema = mongoose.Schema({
    value: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    where: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Costs', CostsSchema);