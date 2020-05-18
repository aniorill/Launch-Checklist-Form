// Write your JavaScript code here!
window.addEventListener("load", function (event) {
	
	fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
	response.json().then(function (json) {
		let missionDestination = document.getElementById("missionTarget");
		missionDestination.innerHTML =
			`<h2>Mission Destination</h2>
		<ol>
			 <li>Name: ${json[2].name}</li>
			 <li>Diameter: ${json[2].diameter}</li>
			 <li>Star: ${json[2].star}</li>
			 <li>Distance from Earth: ${json[2].distance}</li>
			 <li>Number of Moons: ${json[2].moons}</li>
		</ol>
	<img src="${json[2].image}">
	</img>`

	})
})

	let pilotNameInput = document.querySelector("input[name=pilotName]");
	let copilotNameInput = document.querySelector("input[name=copilotName]");
	let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
	let cargoMassInput = document.querySelector("input[name=cargoMass]");

	let form = document.querySelector("form");
	form.addEventListener("submit", function (event) {
		event.preventDefault();

		if (pilotNameInput.value === "" ||
			copilotNameInput.value === "" ||
			fuelLevelInput.value === "" ||
			cargoMassInput.value === "") {
			alert("All fields are required.")
		}
		if (isNaN(Number(pilotNameInput.value)) === false ||
			isNaN(Number(copilotNameInput.value)) === false) {
			alert("Invalid Input: Names must be a string.")
		}
		if (isNaN(Number(fuelLevelInput.value)) === true ||
			isNaN(Number(cargoMassInput.value)) === true) {
			alert("Invalid Input: Fuel Level and Cargo Mass must both be numbers.")
		}

		document.getElementById("faultyItems").innerHTML = `
	<ol>
	<li id="pilotStatus">Pilot ${pilotNameInput.value} is ready</li>
	<li id="copilotStatus">Co-pilot ${copilotNameInput.value} is ready</li>
	<li id="fuelStatus">Fuel level high enough for launch</li>
	<li id="cargoStatus">Cargo mass low enough for launch</li>
	</ol>`;
		//document.getElementById("faultyItems").style.visibility="visible";

		if (fuelLevelInput.value < 10000) {
			document.getElementById("faultyItems").style.visibility = "visible";
			document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey.";
			document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
			document.getElementById("launchStatus").style.color = "red";
		}
		if (cargoMassInput.value >= 10000) {
			document.getElementById("faultyItems").style.visibility = "visible";
			document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for the shuttle to launch.";
			document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
			document.getElementById("launchStatus").style.color = "red";

		}
		if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000) {
			document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
			document.getElementById("launchStatus").style.color = "green";
		}

			

	})
})

