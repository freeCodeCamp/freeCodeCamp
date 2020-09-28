---
id: 56533eb9ac21ba0edf2244c8
title: Accessing Object Properties with Bracket Notation
challengeType: 1
videoUrl: ''
localeTitle: الوصول إلى خصائص كائن مع تدرج قوس
---

## Description
<section id="description"> الطريقة الثانية للوصول إلى خصائص كائن تدوين قوس ( <code>[]</code> ). إذا كانت خاصية الكائن الذي تحاول الوصول إليه تحتوي على مسافة في اسمه ، فستحتاج إلى استخدام تدرج قوس. ومع ذلك ، لا يزال بإمكانك استخدام تدرج قوس على خصائص الكائن بدون مسافات. هنا عينة من استخدام تدرج قوس لقراءة خاصية الكائن: <blockquote style=";text-align:right;direction:rtl"> var myObj = { <br> &quot;اسم الفضاء&quot;: &quot;كيرك&quot; ، <br> &quot;مساحة إضافية&quot;: &quot;سبوك&quot; ، <br> &quot;NoSpace&quot;: &quot;USS Enterprise&quot; <br> }؛ <br> myObj [&quot;اسم الفضاء&quot;] ؛ // كيرك <br> myObj [&#39;More Space&#39;]؛ // سبوك <br> myObj [ &quot;NoSpace&quot;]؛ // يو اس اس انتربرايز </blockquote> لاحظ أن أسماء الخصائص التي تحتوي على مسافات يجب أن تكون بين علامتي اقتباس (مفرد أو مزدوج). </section>

## Instructions
<section id="instructions"> قراءة قيم خصائص <code>&quot;an entree&quot;</code> و <code>&quot;the drink&quot;</code> من <code>testObj</code> باستخدام تدوين قوس <code>entreeValue</code> إلى <code>entreeValue</code> <code>drinkValue</code> على التوالي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>entreeValue</code> عبارة عن سلسلة
    testString: 'assert(typeof entreeValue === "string" , "<code>entreeValue</code> should be a string");'
  - text: يجب أن تكون قيمة <code>entreeValue</code> <code>&quot;hamburger&quot;</code>
    testString: 'assert(entreeValue === "hamburger" , "The value of <code>entreeValue</code> should be <code>"hamburger"</code>");'
  - text: يجب أن يكون <code>drinkValue</code> سلسلة
    testString: 'assert(typeof drinkValue === "string" , "<code>drinkValue</code> should be a string");'
  - text: قيمة <code>drinkValue</code> يجب أن تكون <code>&quot;water&quot;</code>
    testString: 'assert(drinkValue === "water" , "The value of <code>drinkValue</code> should be <code>"water"</code>");'
  - text: يجب عليك استخدام تدوين قوس مرتين
    testString: 'assert(code.match(/testObj\s*?\[("|")[^""]+\1\]/g).length > 1, "You should use bracket notation twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj;   // Change this line
var drinkValue = testObj;    // Change this line

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
