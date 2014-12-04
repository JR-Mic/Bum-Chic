//Node modules:
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//go to the folder and find html. ours is named public.
app.use(express.static(__dirname + "/"));

app.listen(3000);