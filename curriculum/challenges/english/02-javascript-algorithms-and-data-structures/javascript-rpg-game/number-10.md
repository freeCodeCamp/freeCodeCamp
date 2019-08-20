---
id: 5d5ab57f07f328a948d398d6
title: Number 10
challengeType: 0
isRequired: true
---

## Description
<section id='description'>
In order to update HTML elements on the page, you need to get references to them in your JavaScript code. The code <code>let el = document.querySelector("#el");</code> gets a reference to an HTML element with an <code>id</code> of <code>el</code> and assigns it to the variable <code>el</code>.
Get a reference to the HTML element with the <code>id</code> of <code>store</code> and assign it to a variable with the name <code>button1</code>.
***Note:*** Had to rename the id of button1 to store for these tests to work due to the way JS parses all HTML elements when it's included in the HTML file. Maybe this would change in the platform redesign.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Get a reference to the HTML element with the <code>id</code> of <code>store</code> and assign it to a variable with the name <code>button1</code>.
    testString: assert(typeof button1 === "object" && button1.id === 'store' && button1.innerHTML === 'Go to store');

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
    <button id="store">Go to store</button>
    <button id="cave">Go to cave</button>
    <button id="dragon">Fight dragon</button>
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


```js
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

let button1 = document.querySelector('#store');
```

</section>
