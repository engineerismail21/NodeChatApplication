const express = require("express");

// load custom modules
const htmlDecorator = require("../middlewares/global/htmlDecorator");

const router = express.Router();

router.get("/", htmlDecorator("Users"), (req, res) => {
    res.render("users");
});

module.exports = router;