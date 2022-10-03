const express = require("express");

// load custom modules
const htmlDecorator = require("../middlewares/global/htmlDecorator");

const router = express.Router();

router.get("/", htmlDecorator("Inbox"), (req, res) => {
    res.render("inbox");
});

module.exports = router;