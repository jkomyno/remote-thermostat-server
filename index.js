// import npm modules
var app = require('express')();
var bodyParser = require('body-parser');
// import custom modules
var thermostat = require('./Thermostat');

// express initialization
var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port);
console.log("server listening on port ", port);

// default express endpoints
app.get('/', function(req, res) {
	sendApiList(res)
});;

app.post('/', function(req, res) {
	sendApiList(res)
});;

// actual express endpoints
app.get('/temperature', function(req, res) {
	console.log('GET /temperature');
	handleGet(thermostat.getTemperature(), res)
});

app.get('/status', function(req, res) {
	console.log('GET /status');
	handleGet(thermostat.getStatus(), res)
});

app.post('/temperature', function(req, res) {
	thermostat.setTemperature(req.body.payload);
	handlePost(res)
});

app.post('/status', function(req, res) {
	thermostat.setStatus(req.body.payload);
	handlePost(res)
});

app.get('*', function(req, res) {
	res.status(404).json({ error: "Url does not exist" })
});

app.post('*', function(req, res) {
	res.status(404).json({ error: "Url does not exist" })
});



// function definitions

function setThermostatTemperature(temperature) {
	console.log("The new temperature will be",  temperature);
}

function handlePost(res) {
	res.json({
		response: true
	})
}

function handleGet(data, res) {
	res.json({
		response: data
	})
}

function sendApiList(res) {
	var strings = [];
	app._router.stack.forEach(function(r) {
	  if (r.route && r.route.path) {
	    strings.push(r.route.path);
	  }
	});
	strings.shift();
	strings.shift();
	strings.pop();
	strings.pop();
	res.send(strings.join("\n"));
}