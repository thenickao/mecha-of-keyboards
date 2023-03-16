const mongoose = require("mongoose");

const keyboardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    keyboardSize: {type: String, required: true},
    otherSize: {type: String, required: false},
    color: {type: String, required: true},
    connection: {type: String, required: true},
    detach: {type: String, required: false},
    nonDetach: {type: String, required: false},
    switches: {type: String, required: false},
    switchFacing: {type: String, required: true},
    // hotswap: {type: Boolean, required: true},
    stabilizerType: {type: String, required: true},
    // knob: {type: Boolean, required: true},
    bodyMaterials: {type: String, required: true},
    plateOptions: {type: String, required: true},
    // rgb: {type: Boolean, required: true},
    price: {type: String, required: true},
    img: {type: String, required: false},
});

const Keyboard = mongoose.model("Keyboard", keyboardSchema);

module.exports = Keyboard