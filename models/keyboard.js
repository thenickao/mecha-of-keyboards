const mongoose = require("mongoose");

const keyboardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    keyboardSize: {type: String, required: true},
    otherSize: {type: String, required: false},
    color: {type: String, required: true},
    connectivity: {type: String, required: true},
    detach: {type: String, required: false},
    nonDetach: {type: String, required: false},
    switches: {type: String, required: false},
    switchFacing: {type: String, required: true},
    hotswap: {type: String, required: true},
    knob: {type: String, required: true},
    bodyMaterials: {type: String, required: true},
    plateOptions: {type: String, required: false},
    rgb: {type: String, required: true},
    price: {type: Number, required: true},
    img: {type: String, required: false},
});

const Keyboard = mongoose.model("Keyboard", keyboardSchema);

module.exports = Keyboard