---
id: 56bbb991ad1ed5201cd392d3
title: Delete Properties from a JavaScript Object
challengeType: 1
videoUrl: ''
localeTitle: حذف الخصائص من كائن JavaScript
---

## Description
<section id="description"> يمكننا أيضًا حذف خصائص من كائنات مثل: <code>delete ourDog.bark;</code> </section>

## Instructions
<section id="instructions"> حذف خاصية <code>&quot;tails&quot;</code> من <code>myDog</code> . يمكنك استخدام أي نقطة أو تدوين قوس. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: حذف الخاصية <code>&quot;tails&quot;</code> من <code>myDog</code> .
    testString: 'assert(typeof myDog === "object" && myDog.tails === undefined, "Delete the property <code>"tails"</code> from <code>myDog</code>.");'
  - text: لا تقم بتعديل إعداد <code>myDog</code>
    testString: 'assert(code.match(/"tails": 1/g).length > 1, "Do not modify the <code>myDog</code> setup");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line.

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
