---
id: 62a3bb9aeefe4b3fc43c6d7b
title: Passo 17
challengeType: 0
dashedName: step-17
---

# --description--

`button1` é uma variável que não vai ser reatribuída. Se você não vai atribuir um novo valor para uma variável, a melhor prática é usar a palavra-chave `const` para declará-la ao invés da palavra-chave `let`. Isso dirá ao JavaScript para lançar um erro se você acidentalmente reatribui-la.

Altere a variável `button1` para que seja declarada com a palavra-chave `const`.

# --hints--

A variável `button1` deve ser declarada com `const`.

```js
assert.match(code, /const\s+button1/);
```

A variável `button1` ainda deve ter o valor do elemento `#button1`.

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
      <div id="monsterStats"></div>
      <div id="text"></div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```

```js
let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

--fcc-editable-region--
let button1 = document.querySelector("#button1");
--fcc-editable-region--
```
