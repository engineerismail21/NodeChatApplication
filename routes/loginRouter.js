const express = require("express");

// load custom modules
const htmlDecorator = require("../middlewares/global/htmlDecorator");

const router = express.Router();

router.get("/", htmlDecorator("Login"), (req, res) => {
    res.render("index");
});

module.exports = router;