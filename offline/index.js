var express = require('express');
app = express();
var http = require('http').Server(app);
var morgan = require('morgan');
var bodyParser = require('body-parser');


var port     = process.env.PORT || 8080;

// exit();

console.log("from serverjs");
app.use(morgan('dev'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


/*router*/
require('./app/routes.js')(app);

http.listen(port,function(){
  console.log('listening on *:'+port);
});  
 