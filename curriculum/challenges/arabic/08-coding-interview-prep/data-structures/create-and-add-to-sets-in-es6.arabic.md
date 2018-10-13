---
id: 587d8254367417b2b2512c70
title: Create and Add to Sets in ES6
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function(){var test = checkSet(); return (test.size == 6) && test.has(1) && test.has(2) && test.has(3) && test.has("Taco") && test.has("Cat") && test.has("Awesome");})(), "Your <code>Set</code> should only contain the values <code>1, 2, 3, Taco, Cat, Awesome</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // change code below this line

  // change code above this line
  console.log(set);
  return set;
}

checkSet();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
