const express = require("express");
const router = express.Router();
const contactController = require("/Users/Daniel/Desktop/Proyectos/Mi Portafolio/src/controllers/contactController");

router.post("/send-email", contactController.sendContactEmail);

module.exports = router;
