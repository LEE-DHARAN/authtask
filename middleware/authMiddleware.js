const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils/config");

const auth = {
    verifyLogin: async (req, res, next) => {
        const token =
            req.header('Authorization').substring(7);

        if (!token) {
            return res.status(401).json({ message: "No token, authorization denied" });
        }

        try {
            const verified = jwt.verify(token, SECRET_KEY);
            req.userId = verified.id;
            next();
        } catch (err) {
            return res.status(401).json({ message: "Token is not valid" });
        }
        next();
    }
};
module.exports = auth;
