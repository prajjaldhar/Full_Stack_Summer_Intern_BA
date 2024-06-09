const express = require("express");
const ordercontroller = require("../controllers/ordercontroller");

const router = express.Router();

router.get("/", ordercontroller);

module.exports = router;
