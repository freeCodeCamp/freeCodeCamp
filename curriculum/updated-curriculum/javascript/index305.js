let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = [
	{
		name: "town square",
		"button text": ["Go to store", "Go to cave", "Fight dragon"],
		"button functions": [goStore, goCave, fightDragon],
		text: "You are in the town square. You see a sign that says \"Store.\""
	}
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {	
}

function goTown() {
	button1.innerText = "Go to store";
	button2.innerText = "Go to cave";
	button3.innerText = "Fight dragon";
	button1.onclick = goStore;
	button2.onclick = goCave;
	button3.onclick = fightDragon;
	text.innerText = "You are in the town square. You see a sign that says \"Store\"."
}

function goStore() {
	button1.innerText = "Buy 10 health (10 gold)";
	button2.innerText = "Buy weapon (30 gold)";
	button3.innerText = "Go to town square";
	button1.onclick = buyHealth;
	button2.onclick = buyWeapon;
	button3.onclick = goTown;
	text.innerText = "You enter the store."
}

function goCave() {
	console.log("Going to cave.")
}

function fightDragon() {
	console.log("Fighting dragon.")
}

function buyHealth() {
}

function buyWeapon() {
}

/* The locations array currently has one element which is an object. Within the array, and after the object's final curly brace, add a comma. On the next line within the array, add another object with all the same properties as the first object. Keep the property names the same on the second object, but change all the property values to the information from the `goStore` function. Also, set the name property to "store".
*/