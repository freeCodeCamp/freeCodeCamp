---
id: 56533eb9ac21ba0edf2244c7
title: Accessing Object Properties with Dot Notation
challengeType: 1
videoUrl: ''
localeTitle: الوصول إلى خصائص كائن مع ترميز Dot
---

## Description
<section id="description"> هناك طريقتان للوصول إلى خصائص كائن: تدوين نقطي ( <code>.</code> ) وتدوين قوس ( <code>[]</code> ) ، شبيه بصفيف. Dot notation هو ما تستخدمه عندما تعرف اسم العقار الذي تحاول الوصول إليه في وقت مبكر. هنا عينة من استخدام تدوين النقطة ( <code>.</code> ) لقراءة خاصية الكائن: <blockquote style=";text-align:right;direction:rtl"> var myObj = { <br> prop1: &quot;val1&quot; ، <br> prop2: &quot;val2&quot; <br> }؛ <br> var prop1val = myObj.prop1 ، // val1 <br> var prop2val = myObj.prop2؛ // val2 </blockquote></section>

## Instructions
<section id="instructions"> قراءة في قيم خاصية <code>testObj</code> باستخدام التدوين النقطي. تعيين <code>hatValue</code> متغير يساوي <code>hat</code> خاصية الكائن وتعيين <code>shirtValue</code> متغير <code>shirtValue</code> يساوي <code>shirt</code> خاصية الكائن. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>hatValue</code> سلسلة
    testString: 'assert(typeof hatValue === "string" , "<code>hatValue</code> should be a string");'
  - text: قيمة <code>hatValue</code> يجب أن تكون <code>&quot;ballcap&quot;</code>
    testString: 'assert(hatValue === "ballcap" , "The value of <code>hatValue</code> should be <code>"ballcap"</code>");'
  - text: يجب أن يكون <code>shirtValue</code> عبارة عن سلسلة
    testString: 'assert(typeof shirtValue === "string" , "<code>shirtValue</code> should be a string");'
  - text: يجب أن تكون قيمة <code>shirtValue</code> <code>&quot;jersey&quot;</code>
    testString: 'assert(shirtValue === "jersey" , "The value of <code>shirtValue</code> should be <code>"jersey"</code>");'
  - text: يجب عليك استخدام dot notation مرتين
    testString: 'assert(code.match(/testObj\.\w+/g).length > 1, "You should use dot notation twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj;      // Change this line
var shirtValue = testObj;    // Change this line

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
