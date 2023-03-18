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

router.get('/seed', (req, res) =>{
	Keyboard.create([
		{
            name: "Drop CTRL",
            keyboardSize: "80%",
            otherSize: "",
            color: "Black, Space Gray",
            connection: "Wired(Detachable)",
            detach: "USB C",
            nonDetach: "",
            switches: "Halo Clear, Halo True, Kaihua Speed Silver, Cherry MX Brown RGB",
            switchFacing: "North",
            hotswap: "on",
            knob: "off",
            bodyMaterials: "Aluminum",
            plateOptions: "",
            rgb: "on",
            price: 200,
            img: "https://massdrop-s3.imgix.net/product-images/drop-ctrl-mechanical-keyboard/FP/uEvppBzQUCfVlWKwE8Vw_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        },
        {
            name: "Drop ALT",
            keyboardSize: "65%",
            otherSize: "",
            color: "Space Gray, Black",
            connection: "Wired(Detachable)",
            detach: "USB C",
            nonDetach: "",
            switches: "Halo Clear, Halo True, Kaihua Box White, Kaihua Speed Silver, Cherry MX Brown RGB",
            switchFacing: "North",
            hotswap: "on",
            knob: "off",
            bodyMaterials: "Aluminum",
            plateOptions: "",
            rgb: "on",
            price: 139,
            img: "https://massdrop-s3.imgix.net/product-images/drop-alt-mechanical-keyboard/FP/DpjxjEqSQZ2M9hEkqxvR_PC-alt.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        },
        {
            name: "Drop SHIFT",
            keyboardSize: "custom",
            otherSize: "1800/Compacted 100%",
            color: "Space Gray",
            connection: "Wired(Detachable)",
            detach: "USB C",
            nonDetach: "",
            switches: "Halo Clear, Halo True, MX BRown RGB",
            switchFacing: "North",
            hotswap: "on",
            knob: "off",
            bodyMaterials: "Aluminum",
            plateOptions: "",
            rgb: "on",
            price: 250,
            img: "https://massdrop-s3.imgix.net/product-images/drop-shift-mechanical-keyboard/FP/dDpXVALBTzCKAo2NppTZ_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        },
        {
            name: "Ducky One 3 Mini",
            keyboardSize: "60%",
            otherSize: "",
            color: "Daybreak",
            connection: "Wired(Detachable)",
            detach: "USB C",
            nonDetach: "",
            switches: "Cherry MX Black, Cherry MX Brown, Cherry MX Blue, Cherry MX Red, Cherry MX Silver, Cherry MX Clear, Cherry MX Silent Red",
            switchFacing: "North",
            hotswap: "on",
            knob: "off",
            bodyMaterials: "Plastic",
            plateOptions: "",
            rgb: "on",
            price: 119,
            img: "https://mechanicalkeyboards.com/shop/images/products/large_DKON2161ST-USPDDBBHHC1TUS_1.jpg",
        },
        {
            name: "Ducky One 3 SF",
            keyboardSize: "65%",
            otherSize: "",
            color: "Daybreak",
            connection: "Wired(Detachable)",
            detach: "USB C",
            nonDetach: "",
            switches: "Cherry MX Black, Cherry MX Brown, Cherry MX Blue, Cherry MX Red, Cherry MX Silver, Cherry MX Clear, Cherry MX Silent Red",
            switchFacing: "North",
            hotswap: "on",
            knob: "off",
            bodyMaterials: "Plastic",
            plateOptions: "",
            rgb: "on",
            price: 129,
            img: "https://mechanicalkeyboards.com/shop/images/products/large_DKON2167ST-USPDDBBHHC1PS5_1.jpg",
        },
        {
            name: "Ducky One 3 TKL",
            keyboardSize: "80%",
            otherSize: "",
            color: "Daybreak",
            connection: "Wired(Detachable)",
            detach: "USB C",
            nonDetach: "",
            switches: "Cherry MX Black, Cherry MX Brown, Cherry MX Blue, Cherry MX Red, Cherry MX Silver, Cherry MX Clear, Cherry MX Silent Red",
            switchFacing: "North",
            hotswap: "on",
            knob: "off",
            bodyMaterials: "Plastic",
            plateOptions: "",
            rgb: "on",
            price: 149,
            img: "https://mechanicalkeyboards.com/shop/images/products/large_DKON2187ST-USPDDBBHHC1XNK_main.jpg",
        },
        {
            name: "Ducky One 3",
            keyboardSize: "100%",
            otherSize: "",
            color: "Daybreak",
            connection: "Wired(Detachable)",
            detach: "USB C",
            nonDetach: "",
            switches: "Cherry MX Black, Cherry MX Brown, Cherry MX Blue, Cherry MX Red, Cherry MX Silver, Cherry MX Clear, Cherry MX Silent Red",
            switchFacing: "North",
            hotswap: "on",
            knob: "off",
            bodyMaterials: "Plastic",
            plateOptions: "",
            rgb: "on",
            price: 159,
            img: "https://mechanicalkeyboards.com/shop/images/products/large_DKON2108ST-USPDDBBHHC1WKN_1.jpg",
        },
	], (err, data) => {
		res.redirect("/keyboards")
	})
})

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