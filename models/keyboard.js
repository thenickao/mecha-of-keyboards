const mongoose = require("mongoose");

const keyboardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    keyboardSize: {type: String, required: true},
    otherSize: {type: String, required: false},
    layoutName: {type: String, required: false},
    connectivity: {type: String, required: true},
    switches: {type: String, required: false},
    switchFacing: {type: String, required: true},
    // hotswap: {type: Boolean, required: true},
    stabilizerType: {type: String, required: true},
    // knob: {type: Boolean, required: true},
    bodyMaterials: {type: String, required: true},
    plateOptions: {type: String, required: true},
    // rgb: {type: Boolean, required: true},
    averagePrice: {type: Number, required: true},
    img: {type: String, required: false},
});

const Keyboard = mongoose.model("Keyboard", keyboardSchema);

module.exports = Keyboard