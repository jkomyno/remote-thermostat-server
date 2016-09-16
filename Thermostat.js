// Thermostat class
(function() {

	function Thermostat() {
		this.status = false;
		this.temperature = 18;
	}

	// getters
	function getStatus() {
		return this.status
	}

	// setters
	function setStatus(newStatus) {
		this.status = newStatus
	}

	module.exports = Thermostat;
})();