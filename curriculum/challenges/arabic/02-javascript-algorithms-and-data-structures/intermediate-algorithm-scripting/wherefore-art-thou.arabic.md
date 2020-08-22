---
id: a8e512fbe388ac2f9198f0fa
title: Wherefore art thou
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: ولهذا السبب انت الفن
---

## Description
<section id="description"> قم بعمل وظيفة تبحث من خلال مجموعة من الكائنات (الوسيطة الأولى) وتقوم بإرجاع مصفوفة بكافة الكائنات التي لها أزواج قيم وأسماء متطابقة (وسيطة ثانية). يجب أن يكون كل اسم وقيمة زوج كائن المصدر موجودًا في الكائن من المجموعة إذا كان سيتم تضمينه في الصفيف الذي تم إرجاعه. على سبيل المثال ، إذا كانت الوسيطة الأولى هي <code>[{ first: &quot;Romeo&quot;, last: &quot;Montague&quot; }, { first: &quot;Mercutio&quot;, last: null }, { first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }]</code> ، والوسيطة الثانية هي <code>{ last: &quot;Capulet&quot; }</code> ، ثم يجب عليك إرجاع الكائن الثالث من الصفيف (الوسيطة الأولى) ، لأنه يحتوي على الاسم والقيمة الخاصة به ، التي تم تمريرها على أنها الوسيطة الثانية. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>whatIsInAName([{ first: &quot;Romeo&quot;, last: &quot;Montague&quot; }, { first: &quot;Mercutio&quot;, last: null }, { first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }], { last: &quot;Capulet&quot; })</code> يجب أن تعود <code>[{ first: &quot;Tybalt&quot;, last: &quot;Capulet&quot; }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), [{ first: "Tybalt", last: "Capulet" }], "<code>whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })</code> should return <code>[{ first: "Tybalt", last: "Capulet" }]</code>.");'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2 }], { &quot;apple&quot;: 1 })</code> يجب أن يعرض <code>[{ &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2 }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }), [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], "<code>whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })</code> should return <code>[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]</code>.");'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }], { &quot;apple&quot;: 1, &quot;bat&quot;: 2 })</code> يجب عرض <code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], "<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })</code> should return <code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]</code>.");'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }], { &quot;apple&quot;: 1, &quot;cookie&quot;: 2 })</code> يجب عرض <code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }), [{ "apple": 1, "bat": 2, "cookie": 2 }], "<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })</code> should return <code>[{ "apple": 1, "bat": 2, "cookie": 2 }]</code>.");'
  - text: '<code>whatIsInAName([{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;: 2 }, { &quot;bat&quot;:2 }], { &quot;apple&quot;: 1, &quot;bat&quot;: 2 })</code> <code>[{ &quot;apple&quot;: 1, &quot;bat&quot;: 2 }, { &quot;apple&quot;: 1, &quot;bat&quot;: 2, &quot;cookie&quot;:2 }]</code> .'
    testString: 'assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, {"bat":2}], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }], "<code>whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })</code> should return <code>[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }), [], "<code>whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})</code> should return <code>[]</code>");'

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
</section>
