var express = require('express')
var bodyParser = require('body-parser');

var image = require('./routes/image');

var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/image', image);

app.listen(port, function () {
    console.log('up and running on port', port);
    
})