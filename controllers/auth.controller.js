const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.do_auth = function (req, res) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++');
    console.log('Start User Authentication')
    console.log('--------------------------------------------');


    // Dummy data
    const users = [{ username: "dhruvesh.admin", password: "$2b$15$zqY2Q4eOoGzFpZkHJz9HS.BSfXc/HM2E/yTWa1awFmTMgN2bE72Uu", roles: ["admin"] }];

    // Get to user from the database, if the user is not there return error
    let user = users.find(u => u.username === req.body.username);
    if (!user) {
        res.status(400).send({
            ok: false,
            message: 'no credentials passed'
        })
    }

    // Compare the password with the password in the database
    if (req.body.password != undefined) {
        // const valid = await bcrypt.compare(req.body.password, user.password)
        // if (!valid) {
        //     res.status(400).send({
        //         ok: false,
        //         message: 'invalid credentials'
        //     })
        // }
    }
    console.log('start jwt sign')
    const token = jwt.sign({
        id: user._id,
        roles: user.roles,
    }, "jwtPrivateKey", { expiresIn: "15m" });
    console.log('end jwt sign')
    res.send({
        ok: true,
        access_token: token
    });

};