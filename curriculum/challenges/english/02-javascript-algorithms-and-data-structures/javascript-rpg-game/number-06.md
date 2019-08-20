---
id: 5d5aab5d07f328a948d398d2
title: Number 06
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Declare variables named <code>monsterHealth</code> and <code>inventory</code> without initializing them.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Declare variables named `monsterHealth` and `inventory` without initializing them.
    testString: assert(/let\s+monsterHealth\s*;?/.test(code) && /let\s+inventory\s*;?/.test(code));

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
let inventory;
```

</section>
