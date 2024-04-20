const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");
const contSchema = require("../validators/contact-validation");
const validate = require("../middlewares/validate-middleware");

router.route("/contact").post(validate(contSchema), contactForm);

module.exports = router;
