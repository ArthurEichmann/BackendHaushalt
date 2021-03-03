const mongoose = require('mongoose');

const RunningCostsSchema = mongoose.Schema({
    value: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cycle: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('RunningCosts', RunningCostsSchema);