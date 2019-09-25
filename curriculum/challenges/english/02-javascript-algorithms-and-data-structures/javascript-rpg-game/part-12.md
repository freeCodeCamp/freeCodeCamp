---
id: 5d64cf8f853b56a21cd16319
title: Part 12
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Here are the ids of the other HTML elements that we want a reference to in the JavaScript code: `button2`, `button3`, `text`, `xpText`, `healthText`, `goldText`, `monsterStats`, `monsterNameText`, `monsterHealthText`. 

Just like you did with `storeButton`, create variables and set them equal to the element references.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert(/const\s+button2\s*\=\s*document.querySelector\(\s*[\'\"\`]\s*\#button2\s*[\'\"\`]\s*\);?/.test(code) && /const\s+button3\s*\=\s*document.querySelector\(\s*[\'\"\`]\s*\#button3\s*[\'\"\`]\s*\);?/.test(code) && /const\s+text\s*\=\s*document.querySelector\(\s*[\'\"\`]\s*\#text\s*[\'\"\`]\s*\);?/.test(code) && /const\s+xpText\s*\=\s*document.querySelector\(\s*[\'\"\`]\s*\#xpText\s*[\'\"\`]\s*\);?/.test(code) && /const\s+healthText\s*\=\s*document.querySelector\(\s*[\'\"\`]\s*\#healthText\s*[\'\"\`]\s*\);?/.test(code) && /const\s+goldText\s*\=\s*document.querySelector\(\s*[\'\"\`]\s*\#goldText\s*[\'\"\`]\s*\);?/.test(code) && /const\s+monsterStats\s*\=\s*document.querySelector\(\s*[\'\"\`]\s*\#monsterStats\s*[\'\"\`]\s*\);?/.test(code) && /const\s+monsterNameText|monsterName\s*\=\s*document.querySelector\(\s*[\'\"\`]\s*\#monsterName\s*[\'\"\`]\s*\);?/.test(code) && /const\s+monsterHealthText|monsterHealth\s*\=\s*document.querySelector\(\s*[\'\"\`]\s*\#monsterHealth\s*[\'\"\`]\s*\);?/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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
  
</script>
```

</div>


### Before Test
<div id='html-setup'>

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

</div>


### After Test
<div id='html-teardown'>

```html
</body>
</html>
```

</div>


</section>

## Solution
<section id='solution'>


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
</script>
```

</section>
