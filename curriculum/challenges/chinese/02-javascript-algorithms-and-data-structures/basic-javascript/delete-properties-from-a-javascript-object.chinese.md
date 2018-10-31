---
id: 56bbb991ad1ed5201cd392d3
title: Delete Properties from a JavaScript Object
challengeType: 1
videoUrl: ''
localeTitle: 从JavaScript对象中删除属性
---

## Description
<section id="description">我们还可以删除对象中的属性，如下所示： <code>delete ourDog.bark;</code> </section>

## Instructions
<section id="instructions">从<code>myDog</code>删除<code>&quot;tails&quot;</code>属性。您可以使用点或括号表示法。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 从<code>myDog</code>删除属性<code>&quot;tails&quot;</code> 。
    testString: 'assert(typeof myDog === "object" && myDog.tails === undefined, "Delete the property <code>"tails"</code> from <code>myDog</code>.");'
  - text: 不要修改<code>myDog</code>设置
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
