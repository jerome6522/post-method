var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.get('/', function (req, res){
    res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/process_post', urlencodedParser, function (req, res) {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        contact:req.body.contact,
        vehicle:req.body.vehicle,
        gender:req.body.gender,
        status:req.body.status
    };

    console.log(response);
    res.end(JSON.stringify(response));


});

app.listen(3001, () => {
    console.log('Server is running on (http://localhost:3001');
});