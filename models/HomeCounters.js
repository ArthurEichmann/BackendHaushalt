const mongoose = require('mongoose');

const CounterSchema = mongoose.Schema({
    value: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('HomeCounter', CounterSchema);