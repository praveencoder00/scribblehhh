const mongoose = require("mongoose");
const { playerSchema } = require("./player");

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true ,
        trim: true   
    },
    roomName: {
        type: String,
        required: true,
        unique: true,
        trim: true    
    },
    max_occupancy: {
        type: Number,
        required: true,
        default: 4
    },
    max_rounds: {
        type: Number,
        required: true,
        default: 5
    },
    current_round: {
        type: Number,
        default: 1
    },
    players:[playerSchema],
    game_state: {
        type: String,
        default: "waiting"
    },
    turn:playerSchema,
    turnIndex: {
        type: Number,
        default: 0  
    },
});

const roomModel = mongoose.model("Room", roomSchema);

module.exports =  roomModel;