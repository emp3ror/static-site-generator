var express = require('express');
app = express();
var http = require('http').Server(app);
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');

var config = require('./config');
// var list = config.list;

var port     = process.env.PORT || 8080;

// exit();

console.log("from serverjs");
app.use(morgan('dev'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// app.set('views', __dirname + '/app/views');
app.use("/styles",express.static(__dirname + "/app/views/styles"));

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


/*initialise the list file*/
fs.writeFile(config.list,"{}", { flag: 'wx' }, function (err) {
    if (err) {
    	console.log(err)
    };
    console.log("It's saved!");
    require('./app/routes.js')(app);
});

/*router*/


http.listen(port,function(){
  console.log('listening on *:'+port);
});  
 
