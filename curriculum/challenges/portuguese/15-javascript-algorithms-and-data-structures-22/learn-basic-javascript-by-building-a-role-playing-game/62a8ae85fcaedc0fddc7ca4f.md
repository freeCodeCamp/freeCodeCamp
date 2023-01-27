---
id: 62a8ae85fcaedc0fddc7ca4f
title: Passo 58
challengeType: 0
dashedName: step-58
---

# --description--

Adicione um segundo objeto ao array `locations` (lembre-se de separá-los com uma vírgula). Seguindo o padrão que você usou no primeiro objeto, crie as mesmas propriedades, mas use os valores da função `goStore`. Defina a propriedade `name` como `store`.

# --hints--

A variável `locations` deve ter dois valores.

```js
assert.lengthOf(locations, 2);
```

Os dois valores de `locations` devem ser objetos.


```js
assert.isObject(locations[0]);
assert.isObject(locations[1]);
```

O segundo objeto `locations` deve ter uma propriedade `name` com o valor de `store`.

```js
assert.equal(locations[1].name, "store");
```

O segundo objeto de `locations` deve ter uma propriedade `button text` que é um array.

```js
assert.isArray(locations[1]["button text"]);
```

A propriedade `button text` deve ter os valores de string `Buy 10 health (10 gold)`, `Buy weapon (30 gold)` e `Go to town square`.

```js
assert.equal(locations[1]["button text"][0], "Buy 10 health (10 gold)");
assert.equal(locations[1]["button text"][1], "Buy weapon (30 gold)");
assert.equal(locations[1]["button text"][2], "Go to town square");
```

O segundo objeto de `locations` deve ter uma propriedade `button functions` que é um array.

```js
assert.isArray(locations[1]["button functions"]);
```

A propriedade `button functions` deve ter os valores da função `buyHealth`, `buyWeapon` e `goTown`.

```js
assert.equal(locations[1]["button functions"][0], buyHealth);
assert.equal(locations[1]["button functions"][1], buyWeapon);
assert.equal(locations[1]["button functions"][2], goTown);
```

O segundo objeto de `locations` deve ter uma propriedade `text` que é uma string.

```js
assert.isString(locations[1].text);
```

O segundo objeto `locations` deve ter uma propriedade `text` com o valor de `You enter the store.`.

```js
assert.equal(locations[1].text, "You enter the store.");
```

Você não deve modificar o primeiro objeto `locations`.

```js
assert.deepEqual(locations[0], {
  name: "town square",
  "button text": ["Go to store", "Go to cave", "Fight dragon"],
  "button functions": [goStore, goCave, fightDragon],
  text: "You are in the town square. You see a sign that says \"Store\"."
});
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./styles.css">
    <title>RPG - Dragon Repeller</title>
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
        <div id="text">
            Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.
        </div>
    </div>
    <script src="./script.js"></script>
</body>
</html>
```

```css
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

#controls, #stats {
    border: 1px solid black;
    padding: 5px;
    color: black;
}

#monsterStats {
    display: none;
    border: 1px solid black;
    padding: 5px;
    color: white;
    background-color: red;
}

.stat {
    padding-right: 10px;
}
```

```js
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
const monsterName = document.querySelector("#monsterName");
const monsterHealthText =document.querySelector("#monsterHealth");
--fcc-editable-region--
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    }
];
--fcc-editable-region--

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
  text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}

function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go to town square";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "You enter the store.";
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
```
