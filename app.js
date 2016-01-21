"use strict";

var express = require('express');
var app = express();
var path = require('path'),
    pause = require('connect-pause');

app.use('/app', pause(2000), express.static(__dirname + '/app'));
app.use('/lang', express.static(__dirname + '/lang'));
app.use('/data', express.static(__dirname + '/data'));
app.use('/modules', express.static(__dirname + '/bower_components'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);