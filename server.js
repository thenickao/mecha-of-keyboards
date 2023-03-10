// DEPENDENCIES
const express = require("express")
const app = express()
const methodOverride = require("method-override")
require("dotenv").config()
const Keyboard = require("./models/keyboard.js")
const keyboardController = require("./controllers/keyboards.js")
const mongoose = require("mongoose")

// DATABASE CONNECTION
mongoose.connect(process.send.DATABASE_URL)
const db = mongoose.connection
db.on("error", (error) => console.log(error.message + " is mongo not running?"))
db.on("connected", () => console.log("Mongo is Connected"))
db.on("disconnected", () => console.log("Mongo is Disconnected"))

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.use('/keyboards', keyboardsController)

// INDEX


// NEW


// DELETE


// UPDATE


// CREATE


// EDIT


// SHOW


// LISTENING
const PORT = process.env.PORT
app.listen(PORT, () => console.log("Server is listening on PORT:" + PORT))
