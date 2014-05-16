var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var integers = require('./constants/integers');
var strings = require('./constants/strings');
var bubble = require('./handlers/bubble');

mongoose.connect(strings.DEFAULT_DB_URL);

var app = express();

app.use(bodyParser());
app.set('port', process.env.PORT || integers.DEFAULT_PORT);

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/bubble', bubble.listBubbles);
app.post('/bubble', bubble.createBubble);

app.listen(app.get('port'));
