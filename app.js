var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
app.set('port', process.env.PORT || 5000);

var app = express();
var apiai = require('apiai');
var apiapp = apiai("4155768d2ec44c59bd45b146fa5f3fac");

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  app.post(req,res);
});

app.post('/', function(req, res){
  console.log(req.body.chatText);
  var request = apiapp.textRequest(req.body.chatText, {
    sessionId: '123123'
  });
  request.on('response', function(response) {
      console.log(response);
      res.send(response);
  });
  request.on('error', function(error) {
      console.log(error);
      res.send(error);
  });
  request.end();
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});