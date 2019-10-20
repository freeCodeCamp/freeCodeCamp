---
id: 56533eb9ac21ba0edf2244c9
title: Accessing Object Properties with Variables
challengeType: 1
videoUrl: ''
localeTitle: الوصول إلى خصائص الكائن مع المتغيرات
---

## Description
<section id="description"> استخدام آخر لتدوين قوس على الكائنات هو الوصول إلى خاصية يتم تخزينها كقيمة متغير. يمكن أن يكون هذا مفيدًا جدًا للتكرار من خلال خصائص الكائن أو عند الوصول إلى جدول البحث. في ما يلي مثال على استخدام متغير للوصول إلى موقع: <blockquote style=";text-align:right;direction:rtl"> var dogs = { <br> Fido: &quot;Mutt&quot;، Hunter: &quot;Doberman&quot;، Snoopie: &quot;Beagle&quot; <br> }؛ <br> var myDog = &quot;Hunter&quot; ؛ <br> var myBreed = dogs [myDog]؛ <br> console.log (myBreed)؛ // &quot;دوبيرمان&quot; </blockquote> هناك طريقة أخرى لاستخدام هذا المفهوم وهي عندما يتم جمع اسم المنشأة ديناميكيًا أثناء تنفيذ البرنامج ، كما يلي: <blockquote style=";text-align:right;direction:rtl"> var someObj = { <br> propName: &quot;John&quot; <br> }؛ <br> وظيفة propPrefix (str) { <br> var s = &quot;prop&quot; ؛ <br> return s + str؛ <br> } <br> var someProp = propPrefix (&quot;Name&quot;)؛ // someProp الآن يحمل القيمة &quot;propName&quot; <br> console.log (someObj [someProp])؛ // &quot;يوحنا&quot; </blockquote> لاحظ أننا <em>لا</em> نستخدم علامات اقتباس حول اسم المتغير عند استخدامه للوصول إلى الخاصية لأننا نستخدم <em>قيمة</em> المتغير ، وليس <em>الاسم</em> . </section>

## Instructions
<section id="instructions"> استخدم متغير <code>playerNumber</code> للبحث عن المشغل <code>16</code> في <code>testObj</code> باستخدام <code>testObj</code> قوس. ثم قم بتعيين هذا الاسم إلى متغير <code>player</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>playerNumber</code> رقمًا
    testString: 'assert(typeof playerNumber === "number", "<code>playerNumber</code> should be a number");'
  - text: يجب أن يكون <code>player</code> المتغير عبارة عن سلسلة
    testString: 'assert(typeof player === "string", "The variable <code>player</code> should be a string");'
  - text: يجب أن تكون قيمة <code>player</code> &quot;مونتانا&quot;
    testString: 'assert(player === "Montana", "The value of <code>player</code> should be "Montana"");'
  - text: يجب عليك استخدام تدوين قوس للوصول إلى <code>testObj</code>
    testString: 'assert(/testObj\s*?\[.*?\]/.test(code),"You should use bracket notation to access <code>testObj</code>");'
  - text: يجب عدم تعيين قيمة <code>Montana</code> إلى <code>player</code> المتغير مباشرةً.
    testString: 'assert(!code.match(/player\s*=\s*"|\"\s*Montana\s*"|\"\s*;/gi),"You should not assign the value <code>Montana</code> to the variable <code>player</code> directly.");'
  - text: يجب أن تستخدم المتغير <code>playerNumber</code> في تدوين <code>playerNumber</code>
    testString: 'assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code),"You should be using the variable <code>playerNumber</code> in your bracket notation");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber;       // Change this Line
var player = testObj;   // Change this Line

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
