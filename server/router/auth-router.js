const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middleware/validate-middleware");
const authMiddleware = require("../middleware/auth-middleware");


//router.get("/", (req, res)=> {
//    res.status(200).send("routing page");
//});

router.route("/").get(authControllers.home);

router.route("/register")
.post( validate(signupSchema), authControllers.register );
router.route("/login").post(authControllers.login );

router.route("/user").get( authMiddleware,authControllers.user );



module.exports = router;