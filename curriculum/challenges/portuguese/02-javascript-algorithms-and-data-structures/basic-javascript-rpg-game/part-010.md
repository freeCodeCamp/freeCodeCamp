---
id: 5d5ab57f07f328a948d398d6
title: Part 10
challengeType: 0
dashedName: part-10
---

# --description--

In order to update HTML elements on the page, you need to get references to them in your JavaScript code. The code `let el = document.querySelector("#el");` gets a reference to an HTML element with an `id` of `el` and assigns it to the variable `el`.

Get a reference to the HTML element with the `id` of `button1` and assign it to a variable with the name `button1`.

# --hints--

See description above for instructions.

```js
assert(
  /let\s+button1\s*\=\s*document.querySelector\(\s*[\'\"\`]\s*\#button1\s*[\'\"\`]\s*\);?/.test(
    code
  )
);
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

let button1 = document.querySelector('#button1');
</script>
```
