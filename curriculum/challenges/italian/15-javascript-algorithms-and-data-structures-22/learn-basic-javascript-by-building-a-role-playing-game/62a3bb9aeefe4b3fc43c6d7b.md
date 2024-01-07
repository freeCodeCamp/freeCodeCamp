---
id: 62a3bb9aeefe4b3fc43c6d7b
title: Step 31
challengeType: 0
dashedName: step-31
---

# --description--

`button1` è una variabile che non sarà riassegnata. Se non riassegnerai un nuovo valore a una variabile, è una buona pratica dichiararla usando la parola chiave `const` invece della parola chiave `let`. In questo modo JavaScript ti darà un errore se la riassegni accidentalmente.

Cambia la variabile `button1` in modo che sia dichiarata con la parola chiave `const`.

# --hints--

La variabile `button1` dovrebbe essere dichiarata con `const`.

```js
assert.match(code, /const button1/);
```

La variabile `button1` dovrebbe ancora avere il valore dell'elemento `#button1`.

```js
assert.deepEqual(button1, document.querySelector("#button1"));
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

--fcc-editable-region--
let button1 = document.querySelector("#button1");
--fcc-editable-region--
```
