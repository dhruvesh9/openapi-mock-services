// Import dependencies
const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");

// Setup the express server router
const router = express.Router();

// On post
router.post("/", async (req, res) => {
    // Dummy data
    const users = [{ username: "dhruvesh.admin", password: "$2b$15$zqY2Q4eOoGzFpZkHJz9HS.BSfXc/HM2E/yTWa1awFmTMgN2bE72Uu", roles: ["admin"] }];

    // Get to user from the database, if the user is not there return error
    let user = users.find(u => u.username === req.body.username);
    if (!user){
        res.status(400).send({
            ok:false,
            message:'no credentials passed'
        })
    }

    // Compare the password with the password in the database
    const valid = await bcrypt.compare(req.body.password, user.password)
    if (!valid){
        res.status(400).send({
            ok:false,
            message:'invalid credentials'
        })
    }

    const token = jwt.sign({
        id: user._id,
        roles: user.roles,
    }, "jwtPrivateKey", { expiresIn: "15m" });

    res.send({
        ok: true,
        token: token
    });
});

// Export the router
module.exports = router;