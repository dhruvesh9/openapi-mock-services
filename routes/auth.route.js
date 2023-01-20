// Import dependencies

const express = require("express");
const authController = require("../controllers/auth.controller");


// Setup the express server router
const router = express.Router();

// On post
router.post("/", authController.do_auth);

// Export the router
module.exports = router;