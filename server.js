const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./app/routes/index');
const {port}= require('./config/var');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to LocaMap application." });
});
app.use('/v1', routes);

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});