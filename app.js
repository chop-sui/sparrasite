const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize Express
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Router Setting
const router = require("./routes/index");
app.use(router);

// Launch app
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});