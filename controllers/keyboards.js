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

router.get('/seed', async (req, res) => {
	const newKeyboards = 
    [
		// {
        //     name: "Drop CTRL",
        //     keyboardSize: "80% | TKL | Tenkeyless",
        //     otherSize: "",
        //     color: "Black, Space Gray",
        //     connectivity: "Wired(Detachable)",
        //     detach: "USB C",
        //     nonDetach: "",
        //     switches: "Halo Clear, Halo True, Kaihua Speed Silver, Cherry MX Brown RGB",
        //     switchFacing: "North",
        //     hotswap: "on",
        //     knob: "off",
        //     bodyMaterials: "Aluminum",
        //     plateOptions: "",
        //     rgb: "on",
        //     price: 200,
        //     img: "https://massdrop-s3.imgix.net/product-images/drop-ctrl-mechanical-keyboard/FP/uEvppBzQUCfVlWKwE8Vw_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        // },
        // {
        //     name: "Drop ALT",
        //     keyboardSize: "65% | SF",
        //     otherSize: "",
        //     color: "Space Gray, Black",
        //     connectivity: "Wired(Detachable)",
        //     detach: "USB C",
        //     nonDetach: "",
        //     switches: "Halo Clear, Halo True, Kaihua Box White, Kaihua Speed Silver, Cherry MX Brown RGB",
        //     switchFacing: "North",
        //     hotswap: "on",
        //     knob: "off",
        //     bodyMaterials: "Aluminum",
        //     plateOptions: "",
        //     rgb: "on",
        //     price: 139,
        //     img: "https://massdrop-s3.imgix.net/product-images/drop-alt-mechanical-keyboard/FP/DpjxjEqSQZ2M9hEkqxvR_PC-alt.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        // },
        // {
        //     name: "Drop SHIFT",
        //     keyboardSize: "Other",
        //     otherSize: "1800/Compacted 100%",
        //     color: "Space Gray",
        //     connectivity: "Wired(Detachable)",
        //     detach: "USB C",
        //     nonDetach: "",
        //     switches: "Halo Clear, Halo True, MX BRown RGB",
        //     switchFacing: "North",
        //     hotswap: "on",
        //     knob: "off",
        //     bodyMaterials: "Aluminum",
        //     plateOptions: "",
        //     rgb: "on",
        //     price: 250,
        //     img: "https://massdrop-s3.imgix.net/product-images/drop-shift-mechanical-keyboard/FP/dDpXVALBTzCKAo2NppTZ_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        // },
        // {
        //     name: "Ducky One 3 Mini",
        //     keyboardSize: "60% | Mini",
        //     otherSize: "",
        //     color: "Daybreak",
        //     connectivity: "Wired(Detachable)",
        //     detach: "USB C",
        //     nonDetach: "",
        //     switches: "Cherry MX Black, Cherry MX Brown, Cherry MX Blue, Cherry MX Red, Cherry MX Silver, Cherry MX Clear, Cherry MX Silent Red",
        //     switchFacing: "North",
        //     hotswap: "on",
        //     knob: "off",
        //     bodyMaterials: "Plastic",
        //     plateOptions: "",
        //     rgb: "on",
        //     price: 119,
        //     img: "https://mechanicalkeyboards.com/shop/images/products/large_DKON2161ST-USPDDBBHHC1TUS_1.jpg",
        // },
        // {
        //     name: "Ducky One 3 SF",
        //     keyboardSize: "65% | SF",
        //     otherSize: "",
        //     color: "Daybreak",
        //     connectivity: "Wired(Detachable)",
        //     detach: "USB C",
        //     nonDetach: "",
        //     switches: "Cherry MX Black, Cherry MX Brown, Cherry MX Blue, Cherry MX Red, Cherry MX Silver, Cherry MX Clear, Cherry MX Silent Red",
        //     switchFacing: "North",
        //     hotswap: "on",
        //     knob: "off",
        //     bodyMaterials: "Plastic",
        //     plateOptions: "",
        //     rgb: "on",
        //     price: 129,
        //     img: "https://mechanicalkeyboards.com/shop/images/products/large_DKON2167ST-USPDDBBHHC1PS5_1.jpg",
        // },
        // {
        //     name: "Ducky One 3 TKL",
        //     keyboardSize: "80% | TKL | Tenkeyless",
        //     otherSize: "",
        //     color: "Daybreak",
        //     connectivity: "Wired(Detachable)",
        //     detach: "USB C",
        //     nonDetach: "",
        //     switches: "Cherry MX Black, Cherry MX Brown, Cherry MX Blue, Cherry MX Red, Cherry MX Silver, Cherry MX Clear, Cherry MX Silent Red",
        //     switchFacing: "North",
        //     hotswap: "on",
        //     knob: "off",
        //     bodyMaterials: "Plastic",
        //     plateOptions: "",
        //     rgb: "on",
        //     price: 149,
        //     img: "https://mechanicalkeyboards.com/shop/images/products/large_DKON2187ST-USPDDBBHHC1XNK_main.jpg",
        // },
        // {
        //     name: "Ducky One 3",
        //     keyboardSize: "100% | Full Size",
        //     otherSize: "",
        //     color: "Daybreak",
        //     connectivity: "Wired(Detachable)",
        //     detach: "USB C",
        //     nonDetach: "",
        //     switches: "Cherry MX Black, Cherry MX Brown, Cherry MX Blue, Cherry MX Red, Cherry MX Silver, Cherry MX Clear, Cherry MX Silent Red",
        //     switchFacing: "North",
        //     hotswap: "on",
        //     knob: "off",
        //     bodyMaterials: "Plastic",
        //     plateOptions: "",
        //     rgb: "on",
        //     price: 159,
        //     img: "https://mechanicalkeyboards.com/shop/images/products/large_DKON2108ST-USPDDBBHHC1WKN_1.jpg",
        // },
        {
            name: "GMMK PRO (Barebones)",
            keyboardSize: "Other",
            otherSize: "75%",
            color: "Black Slate, White Ice",
            connectivity: "Wired(Detachable)",
            detach: "USB C",
            nonDetach: "",
            switches: "",
            switchFacing: "South",
            hotswap: "on",
            knob: "on",
            bodyMaterials: "Aluminum",
            plateOptions: "Aluminum",
            rgb: "on",
            price: 169.99,
            img: "https://cdn.shopify.com/s/files/1/0549/2681/t/164/assets/gmmkpro-gallery-3_black.webp",
        },
        {
            name: "GMMK 2",
            keyboardSize: "65% | SF",
            otherSize: "",
            color: "Black, White, Pink",
            connectivity: "Wired(Detachable)",
            detach: "USB C",
            nonDetach: "",
            switches: "Glorious Fox Linear Switches (Pre-Lubed)",
            switchFacing: "North",
            hotswap: "on",
            knob: "off",
            bodyMaterials: "Aluminum",
            plateOptions: "",
            rgb: "on",
            price: 119.99,
            img: "https://cdn.shopify.com/s/files/1/0549/2681/t/164/assets/glorious_keyboards_gmmk_2_hero_lifestyle_2x.webp",
        },
        {
            name: "GMMK 2",
            keyboardSize: "Other",
            otherSize: "Full Size (96%)",
            color: "Black, White, Pink",
            connectivity: "Wired(Detachable)",
            detach: "USB C",
            nonDetach: "",
            switches: "Glorious Fox Linear Switches (Pre-Lubed)",
            switchFacing: "North",
            hotswap: "on",
            knob: "off",
            bodyMaterials: "Aluminum",
            plateOptions: "",
            rgb: "on",
            price: 119.99,
            img: "https://cdn.shopify.com/s/files/1/0549/2681/t/164/assets/glorious_keyboards_gmmk_2_black_96_lifestyle.webp",
        },
	]
    try {
        const seedItems = await Keyboard.create(newKeyboards)
        res.send(seedItems)
      } catch (err) {
        res.send(err.message)
      }
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