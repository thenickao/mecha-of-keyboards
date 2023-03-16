// DEPENDENCIES
const express = require("express")
const app = express()
const methodOverride = require("method-override")
require("dotenv").config()
const Keyboard = require("./models/keyboard.js")
const keyboardsController = require("./controllers/keyboards.js")
const mongoose = require("mongoose")
mongoose.set('strictQuery', false)

// DATABASE CONNECTION
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection
db.on("error", (error) => console.log(error.message + " is mongo not running?"))
db.on("connected", () => console.log("Mongo is Connected"))
db.on("disconnected", () => console.log("Mongo is Disconnected"))

// MIDDLEWARE
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.use("/keyboards", keyboardsController)

// LISTENING
const PORT = process.env.PORT
app.listen(PORT, () => console.log("Server is listening on PORT:" + PORT))
