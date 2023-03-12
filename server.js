// DEPENDENCIES
const express = require("express")
const app = express()
const methodOverride = require("method-override")
require("dotenv").config()
const Keyboard = require("./models/keyboard.js")
// const keyboardsController = require("./controllers/keyboards.js")
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
// app.use("/keyboards", keyboardsController)

// INDEX
app.get("/keyboards", (req, res) => {
    Keyboard.find({}, (error, allKeyboards) => {
        if (error) {
            console.log(error);
        } else {
            res.render("index.ejs", {
                keyboards: allKeyboards,
            });
        }
    });
});

// NEW
app.get("/keyboards/new", (req, res) => {
    res.render("new.ejs");
});

// DELETE
app.delete("/keyboards/:id", (req, res) => {
    Keyboard.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect("/keyboards");
    });
});

// UPDATE
app.put("/keyboards/:id", (req, res) => {
    Keyboard.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedKeyboard) => {
            res.redirect("/keyboards/" + req.params.id);
        }
    );
});

// CREATE
app.post("/keyboards", (req, res) => {
    Keyboard.create(req.body, (error, createdKeyboard) => {
        if (error) {
            console.log(error);
            res.send(error);
        }
        else {
            console.log(createdKeyboard)
            res.redirect("/keyboards");
        }
    });
});

// EDIT
app.get("/keyboards/:id/edit", (req, res) => {
    Keyboard.findById(req.params.id, (error, foundKeyboard) => {
        res.render("edit.ejs", {
            keyboard: foundKeyboard,
        });
    });
});

// SHOW
app.get("/keyboards/:id", (req, res) => {
    Keyboard.findById(req.params.id, (error, foundKeyboard) => {
        res.render("show.ejs", {
            keyboard: foundKeyboard
        });
    });
});


// LISTENING
const PORT = process.env.PORT
app.listen(PORT, () => console.log("Server is listening on PORT:" + PORT))
