---
id: 56bbb991ad1ed5201cd392d2
title: Add New Properties to a JavaScript Object
challengeType: 1
videoUrl: ''
localeTitle: أضف خصائص جديدة إلى كائن JavaScript
---

## Description
<section id="description"> يمكنك إضافة خصائص جديدة إلى كائنات JavaScript الموجودة بالطريقة نفسها التي يمكنك تعديلها بها. في ما يلي كيفية إضافة خاصية <code>&quot;bark&quot;</code> إلى <code>ourDog</code> : <code>ourDog.bark = &quot;bow-wow&quot;;</code> أو <code>ourDog[&quot;bark&quot;] = &quot;bow-wow&quot;;</code> الآن عندما نقيم <code>ourDog.bark</code> ، <code>ourDog.bark</code> ، &quot;bow-wow&quot;. </section>

## Instructions
<section id="instructions"> إضافة خاصية <code>&quot;bark&quot;</code> إلى <code>myDog</code> وتعيينه إلى صوت كلب ، مثل &quot;woof&quot;. يمكنك استخدام أي نقطة أو تدوين قوس. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: إضافة <code>&quot;bark&quot;</code> الملكية إلى <code>myDog</code> .
    testString: 'assert(myDog.bark !== undefined, "Add the property <code>"bark"</code> to <code>myDog</code>.");'
  - text: لا تضف <code>&quot;bark&quot;</code> إلى قسم الإعداد
    testString: 'assert(!/bark[^\n]:/.test(code), "Do not add <code>"bark"</code> to the setup section");'

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
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
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
