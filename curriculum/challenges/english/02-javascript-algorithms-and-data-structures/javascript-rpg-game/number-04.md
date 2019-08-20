---
id: 5d5a903507f328a948d398d0
title: Number 04
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
We've been declaring variables with the <code>var</code> keyword.
However, in modern JavaScript, it's better to use <code>let</code> instead of <code>var</code> because it fixes a number of unusual behaviors with <code>var</code> that make it difficult to reason about.
Change every <code>var</code> to <code>let</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Change every <code>var</code> to <code>let</code>.
    testString: assert(/let\s+xp\s*\=\s*0\;?/.test(code) && /let\s+health\s*\=\s*100\;?/.test(code) && /let\s+gold\s*\=\s*50\;?/.test(code) && /let\s+currentWeapon\s*\=\s*0\;?/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var xp = 0;
var health = 100;
var gold = 50;
var currentWeapon = 0;
```

</div>


</section>

## Solution
<section id='solution'>


```js
var xp = 0;
var health = 100;
var gold = 50;
var currentWeapon = 0;
```

</section>
