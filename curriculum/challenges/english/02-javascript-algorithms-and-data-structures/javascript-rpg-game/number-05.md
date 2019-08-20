---
id: 5d5aaa5807f328a948d398d1
title: Number 05
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Now you will declare a variable without initializing it.
Using the <code>let</code> keyword, declare a variable called <code>fighting</code> but don't set it equal to anything.
Just end the line with a semicolon right after the variable name. 
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Using the <code>let</code> keyword, declare a variable called <code>fighting</code> but don't set it equal to anything.
    testString: assert(/let\s+fighting\s*;?/.test(code));

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
```

</section>
