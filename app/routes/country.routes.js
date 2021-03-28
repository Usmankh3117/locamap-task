const express = require('express');
const {validate} = require("express-validation");
const countryController = require('../controllers/country.controller.js');
const {getCountryName} = require("../validations/country.validation");

const router = express.Router();
// Get Country name by lat long
router.route("/:lat/:long").get(validate(getCountryName),countryController.getCountryName);

module.exports = router;