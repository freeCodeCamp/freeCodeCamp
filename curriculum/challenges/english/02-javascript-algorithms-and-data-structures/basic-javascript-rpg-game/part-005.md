---
id: 5d5aaa5807f328a948d398d1
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

Now you will declare a variable without initializing it.

Using the `let` keyword, declare a variable called `fighting` but don't set it equal to anything. Just end the line with a semicolon right after the variable name.

# --hints--

See description above for instructions.

```js
assert(/let\s+fighting\s*;?/.test(code) && fighting === undefined);
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
</script>
```
