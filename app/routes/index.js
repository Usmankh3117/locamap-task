const express = require('express');
const countryRoutes = require('./country.routes');

const router = express.Router();

router.use('/country', countryRoutes);

module.exports = router