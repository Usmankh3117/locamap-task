const httpStatus = require("http-status");
const crg = require('country-reverse-geocoding').country_reverse_geocoding();
// Get Country name by lat long
exports.getCountryName = (req, res) => {
    try {
        let {lat, long}= req.params;
        var country = crg.get_country(parseFloat(lat),parseFloat(long));
        res.status(httpStatus.CREATED);
        return res.json({ code: httpStatus.CREATED, data: country });
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST);
        return res.json({ code: httpStatus.BAD_REQUEST, message: error });
    }
};
