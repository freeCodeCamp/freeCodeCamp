---
id: 56bbb991ad1ed5201cd392d2
title: Add New Properties to a JavaScript Object
challengeType: 1
videoUrl: ''
localeTitle: 将新属性添加到JavaScript对象
---

## Description
<section id="description">您可以像修改现有JavaScript对象一样向现有JavaScript对象添加新属性。以下是我们如何为<code>ourDog</code>添加<code>&quot;bark&quot;</code>属性： <code>ourDog.bark = &quot;bow-wow&quot;;</code>或者我们的<code>ourDog[&quot;bark&quot;] = &quot;bow-wow&quot;;</code>现在当我们评估我们的<code>ourDog.bark</code> ，我们会得到他的吠声，“低头哇”。 </section>

## Instructions
<section id="instructions">向<code>myDog</code>添加<code>&quot;bark&quot;</code>属性并将其设置为狗声，例如“woof”。您可以使用点或括号表示法。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 将属性<code>&quot;bark&quot;</code>添加到<code>myDog</code> 。
    testString: 'assert(myDog.bark !== undefined, "Add the property <code>"bark"</code> to <code>myDog</code>.");'
  - text: 不要在设置部分添加<code>&quot;bark&quot;</code>
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
