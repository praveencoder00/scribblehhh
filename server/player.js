const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    name: {
        type: String,   
        required: true,
        trim: true
    },
    socketID: {
        type: String,
        required: true,
        unique: true
    },
    score: {
        type: Number,
        default: 0
    },
    isPartyleader: {
        type: Boolean,
        default: false
    }
});

const playerModel = mongoose.model("Player", playerSchema);

module.exports = { playerModel, playerSchema };
