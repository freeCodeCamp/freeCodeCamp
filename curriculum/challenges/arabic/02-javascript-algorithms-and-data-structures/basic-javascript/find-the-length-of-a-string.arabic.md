---
id: bd7123c9c448eddfaeb5bdef
title: Find the Length of a String
challengeType: 1
videoUrl: ''
localeTitle: العثور على طول سلسلة
---

## Description
<section id="description"> يمكنك العثور على طول قيمة <code>String</code> بالكتابة. <code>.length</code> بعد متغير السلسلة أو سلسلة حرفية. <code>&quot;Alan Peter&quot;.length; // 10</code> على سبيل المثال ، إذا أنشأنا متغير <code>var firstName = &quot;Charles&quot;</code> ، يمكننا معرفة طول السلسلة <code>&quot;Charles&quot;</code> باستخدام الخاصية <code>firstName.length</code> . </section>

## Instructions
<section id="instructions"> استخدم خاصية <code>.length</code> لحساب عدد الأحرف في متغير <code>lastName</code> وتعيينه إلى <code>lastNameLength</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تساوي <code>lastNameLength</code> ثمانية.
    testString: 'assert((function(){if(typeof lastNameLength !== "undefined" && typeof lastNameLength === "number" && lastNameLength === 8){return true;}else{return false;}})(), "<code>lastNameLength</code> should be equal to eight.");'
  - text: 'يجب أن تحصل على طول اسم <code>lastName</code> باستخدام <code>.length</code> مثل هذا: <code>lastName.length</code> .'
    testString: 'assert((function(){if(code.match(/\.length/gi) && code.match(/\.length/gi).length >= 2 && code.match(/var lastNameLength \= 0;/gi) && code.match(/var lastNameLength \= 0;/gi).length >= 1){return true;}else{return false;}})(), "You should be getting the length of <code>lastName</code> by using <code>.length</code> like this: <code>lastName.length</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName;

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
