const Joi = require('joi');

module.exports = {
    // Get Country Name
    getCountryName: {
        params: Joi.object({
            lat: Joi.number().required(),
            long: Joi.number().required(),
        })
    }
}