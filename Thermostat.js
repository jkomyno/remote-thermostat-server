// Thermostat class
(function() {

	// getters
	exports.getStatus = function() {
		return true
	}

	exports.getTemperature = function() {
		return false
	}

	// setters
	exports.setStatus = function(newStatus) {
		console.log("newStatus is ", newStatus);
	}

	exports.setTemperature = function(newTemperature) {
		console.log("newTemperature is ", newTemperature);
	}
})();