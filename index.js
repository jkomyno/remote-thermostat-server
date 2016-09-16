// import npm modules
var app = require('express')();
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	sendApiList(res);
});;

app.post('/', function(req, res) {
	sendApiList(res);
});;

app.get('*', function(req, res) {
	res.status(404).json({ error: "Url does not exist"});
});

app.post('*', function(req, res) {
	res.status(404).json({ error: "Url does not exist"});
});;

function sendApiList(res) {
	var strings = [];
	app._router.stack.forEach(function(r){
	  if (r.route && r.route.path){
	    strings.push(r.route.path);
	  }
	});
	strings.shift();
	strings.shift();
	strings.pop();
	strings.pop();
	res.send(strings.join("\n"));
}