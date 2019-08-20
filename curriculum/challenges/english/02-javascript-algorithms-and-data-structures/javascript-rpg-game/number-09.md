---
id: 5d5aae1207f328a948d398d5
title: Number 09
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
For now, let's start the player with just the stick. Delete the dagger and sword items in the array. More items will be added to the array during game play.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Delete the dagger and sword items in the array.
    testString: assert(inventory[0] === 'stick' && inventory.length === 1);

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
let inventory = ["stick", "dagger", "sword"];
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
```

</section>
