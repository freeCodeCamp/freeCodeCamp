---
id: a8e512fbe388ac2f9198f0fa
title: Wherefore art thou
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 因此，你是艺术家
---

## Description
<section id="description">创建一个查看对象数组（第一个参数）的函数，并返回具有匹配的名称和值对的所有对象的数组（第二个参数）。如果要包含在返回的数组中，则源对象的每个名称和值对都必须存在于集合中的对象中。例如，如果第一个参数是<code>[{ first: &quot;Romeo&quot;, last: &quot;Montague&quot; }, { first: &quot;Mercutio&quot;, last: null }, { first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }]</code> ，第二个参数是<code>{ last: &quot;Capulet&quot; }</code> ，然后你必须从数组（第一个参数）返回第三个对象，因为它包含名称及其值，它作为第二个参数传递。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>whatIsInAName([{ first: &quot;Romeo&quot;, last: &quot;Montague&quot; }, { first: &quot;Mercutio&quot;, last: null }, { first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }], { last: &quot;Capulet&quot; })</code>应该返回<code>[{ first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }]</code>'
    testString: 'assert.deepEqual(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), [{ first: "Tybalt", last: "Capulet" }]);'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2 }], { &quot;apple&quot;: 1 })</code>应返回<code>[{ &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2 }]</code> 。'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }), [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]);'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }], { &quot;apple&quot;: 1, &quot;bat&quot;: 2 })</code>应该返回<code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }]</code> 。'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]);'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }], { &quot;apple&quot;: 1, &quot;cookie&quot;: 2 })</code>应该返回<code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }]</code> 。'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }), [{ "apple": 1, "bat": 2, "cookie": 2 }]);'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }, { &quot;bat&quot;:2 }], { &quot;apple&quot;: 1, &quot;bat&quot;: 2 })</code>应该返回<code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;:2 }]</code> 。'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, {"bat":2}], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]);'
  - text: '<code>whatIsInAName([{&quot;a&quot;: 1, &quot;b&quot;: 2, &quot;c&quot;: 3}], {&quot;a&quot;: 1, &quot;b&quot;: 9999, &quot;c&quot;: 3})</code>应该返回<code>[]</code>'
    testString: 'assert.deepEqual(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }), []);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line


  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
