---
id: 5d67ad3de0696bdec46938e4
title: Part 37
challengeType: 0
dashedName: part-37
---

# --description--

Instead of assigning the `innerText` and `onClick` properties to specific strings and functions like it does now, the `update` function will use data from the `location` that is passed into it. First, data needs to be passed into the `update` function. Inside the `goTown` function, call the `update` function.

Here is how you would call a function named `exampleFunction`: `exampleFunction();`

# --hints--

See description above for instructions.

```js
assert(goTown.toString().match(/update\(\)/));
```

# --seed--

## --before-user-code--

```html
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>RPG - Dragon Repeller</title>
  <style>
    body {
      background-color: darkblue;
    }
    #text {
      background-color: black;
      color: white;
      padding: 10px;
    }
    #game {
      max-width: 500px;
      max-height: 400px;
      background-color: lightgray;
      color: white;
      margin: 0 auto;
      padding: 10px;
    }
    #controls {
      border: 1px black solid;
      padding: 5px;
    }
    #stats {
      border: 1px black solid;
      color: black;
      padding: 5px;
    }
    #monsterStats {
      display: none;
      border: 1px black solid;
      color: white;
      padding: 5px;
      background-color: red;
    }
    .stat {
      padding-right: 10px;
    }
  </style>
</head>
<body>
<div id="game">
  <div id="stats">
    <span class="stat">XP: <strong><span id="xpText">0</span></strong></span>
    <span class="stat">Health: <strong><span id="healthText">100</span></strong></span>
    <span class="stat">Gold: <strong><span id="goldText">50</span></strong></span>
  </div>
  <div id="controls">
    <button id="button1">Go to store</button>
    <button id="button2">Go to cave</button>
    <button id="button3">Fight dragon</button>
  </div>
  <div id="monsterStats">
    <span class="stat">Monster Name: <strong><span id="monsterName"></span></strong></span>
    <span class="stat">Health: <strong><span id="monsterHealth"></span></strong></span>
  </div>
  <div id="text">Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.</div>
</div>
```

## --after-user-code--

```html
</body>
</html>
```

## --seed-contents--

```html
<script>
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
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
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {  
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}

function goTown() {
}

function goStore() {
}

function goCave() {
  console.log("Going to cave.");
}

function fightDragon() {
  console.log("Fighting dragon.");
}

function buyHealth() {
}

function buyWeapon() {
}

</script>
```

# --solutions--

```html
<script>
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
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
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {  
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}

function goTown() {
  update();
}

function goStore() {
}

function goCave() {
  console.log("Going to cave.");
}

function fightDragon() {
  console.log("Fighting dragon.");
}

function buyHealth() {
}

function buyWeapon() {
}
</script>
```
