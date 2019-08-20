---
id: 5d5aad2307f328a948d398d4
title: Number 08
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Since the inventory can store multiple items, change the value of <code>inventory</code> to an array with the items stick, dagger, and sword.
Here is an example of a variable sandwich that equals a three-item array: <code>let sandwich = ["peanut butter", "jelly", "bread"];</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Since the inventory can store multiple items, change the value of <code>inventory</code> to an array with the items stick, dagger, and sword.
    testString: assert(inventory.includes('stick') && inventory.includes('dagger') && inventory.includes('sword'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = "stick";
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
let inventory = ["stick", "dagger", "sword"];
```

</section>
