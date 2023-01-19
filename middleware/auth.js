// Import dependencies
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.header("Authorization");
    let token = undefined;
    if (authHeader!=undefined && authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7, authHeader.length);
    }
    if (!token) return res.status(401).send({
        ok: false,
        error: "Access denied. No token provided"
    });

    try {
        const decoded = jwt.verify(token, "jwtPrivateKey");
        req.user = decoded;
    } catch (error) {
        return res.status(401).send({
            ok: false,
            error: "Token expired"
        });
    }

    next();
}