const express = require("express")
const router = express.Router()
const Keyboard = require("../models/keyboard.js")

// INDEX
router.get("/", (req, res) => {
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

router.get("/name", (req, res) => {
    Keyboard.find({}, (error, allKeyboards) => {
        if (error) {
            console.log(error);
        } else {
            res.render("nameSort.ejs", {
                keyboards: allKeyboards,
            });
        }
    });
});

router.get("/size", (req, res) => {
    Keyboard.find({}, (error, allKeyboards) => {
        if (error) {
            console.log(error);
        } else {
            res.render("sizeSort.ejs", {
                keyboards: allKeyboards,
            });
        }
    });
});

router.get("/price", (req, res) => {
    Keyboard.find({}, (error, allKeyboards) => {
        if (error) {
            console.log(error);
        } else {
            res.render("priceSort.ejs", {
                keyboards: allKeyboards,
            });
        }
    });
});

// router.get('/seed', (req, res) =>{
// 	Keyboard.create([
// 		{
//             name: ,
//             keyboardSize: ,
//             otherSize: ,
//             color: ,
//             connection: ,
//             detach: ,
//             nonDetach: ,
//             switches: ,
//             switchFacing: ,
//             stabilizerType: ,
//             bodyMaterials: ,
//             plateOptions: ,
//             price: ,
//             img: ,
//         },
//         {
//             name: ,
//             keyboardSize: ,
//             otherSize: ,
//             color: ,
//             connection: ,
//             detach: ,
//             nonDetach: ,
//             switches: ,
//             switchFacing: ,
//             stabilizerType: ,
//             bodyMaterials: ,
//             plateOptions: ,
//             price: ,
//             img: ,
//         },
//         {
//             name: ,
//             keyboardSize: ,
//             otherSize: ,
//             color: ,
//             connection: ,
//             detach: ,
//             nonDetach: ,
//             switches: ,
//             switchFacing: ,
//             stabilizerType: ,
//             bodyMaterials: ,
//             plateOptions: ,
//             price: ,
//             img: ,
//         }
// 	], (err, data) => {
// 		res.redirect("/keyboards")
// 	})
// })

// NEW
router.get("/new", (req, res) => {
    res.render("new.ejs");
});

// DELETE
router.delete("/:id", (req, res) => {
    Keyboard.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect("/keyboards");
    });
});

// UPDATE
router.put("/:id", (req, res) => {
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
router.post("/", (req, res) => {
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
router.get("/:id/edit", (req, res) => {
    Keyboard.findById(req.params.id, (error, foundKeyboard) => {
        res.render("edit.ejs", {
            keyboard: foundKeyboard,
        });
    });
});

// SHOW
router.get("/:id", (req, res) => {
    Keyboard.findById(req.params.id, (error, foundKeyboard) => {
        res.render("show.ejs", {
            keyboard: foundKeyboard
        });
    });
});

module.exports = router