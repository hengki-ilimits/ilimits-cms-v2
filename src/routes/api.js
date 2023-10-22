const express = require("express");

const promotionController = require("../controllers/promotionController.js");

const router = express.Router();

router.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});
router.get("/promotions", promotionController.findAll);
router.post("/promotions", promotionController.insertData);

module.exports = router;
