---
id: 587d78b2367417b2b2512b0f
title: Remove Items from an Array with pop() and shift()
challengeType: 1
videoUrl: ''
localeTitle: إزالة العناصر من صفيف مع pop () و shift ()
---

## Description
<section id="description"> كل من <code>push()</code> و <code>unshift()</code> لهما <code>unshift()</code> : <code>pop()</code> و <code>shift()</code> . كما قد تكون قد خمنت الآن ، بدلاً من إضافة ، <em>يزيل</em> <code>pop()</code> عنصرًا من نهاية صفيف ، بينما يزيل <code>shift()</code> عنصرًا من البداية. الاختلاف الرئيسي بين <code>pop()</code> و <code>shift()</code> وأبناء عمومتهم <code>push()</code> و <code>unshift()</code> ، هو أن كلا الأسلوبين لا <code>unshift()</code> معلمات ، وكل منهما يسمح فقط بتعديل مصفوفة بواسطة عنصر واحد في كل مرة. لنلقي نظرة: <blockquote style=";text-align:right;direction:rtl"> اسمحوا تحيات = [ماذا يكون ما يصل؟ ، &#39;مرحبا&#39; ، &#39;انظر يا!&#39;] ؛ <br><br> greetings.pop ()؛ <br> // الآن تساوي [&#39;ما الأمر؟&#39; ، &#39;مرحبا&#39;] <br><br> greetings.shift ()؛ <br> // الآن تساوي [&#39;مرحبا&#39;] </blockquote> يمكننا أيضًا إرجاع قيمة العنصر الذي تمت إزالته باستخدام أي من الطريقتين التاليتين: <blockquote style=";text-align:right;direction:rtl"> دعونا برزت = تحيات. pop () ؛ <br> // إرجاع &quot;مرحبًا&quot; <br> // تحيات الآن تساوي [] </blockquote></section>

## Instructions
<section id="instructions"> لقد حددنا وظيفة ، <code>popShift</code> ، والتي تأخذ مصفوفة كوسيطة وترجع مصفوفة جديدة. قم بتعديل الوظيفة ، باستخدام <code>pop()</code> و <code>shift()</code> ، لإزالة العناصر الأولى والأخيرة لصفيف الوسيطة ، وتعيين العناصر التي تم إزالتها للمتغيرات الخاصة بها ، بحيث يحتوي الصفيف الذي تم إرجاعه على قيمها. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>popShift([&quot;challenge&quot;, &quot;is&quot;, &quot;not&quot;, &quot;complete&quot;])</code> يجب أن يعيد <code>[&quot;challenge&quot;, &quot;complete&quot;]</code>'
    testString: 'assert.deepEqual(popShift(["challenge", "is", "not", "complete"]), ["challenge", "complete"], "<code>popShift(["challenge", "is", "not", "complete"])</code> should return <code>["challenge", "complete"]</code>");'
  - text: يجب أن تستخدم وظيفة <code>popShift</code> الأسلوب <code>pop()</code>
    testString: 'assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1, "The <code>popShift</code> function should utilize the <code>pop()</code> method");'
  - text: يجب أن تستخدم وظيفة <code>popShift</code> طريقة <code>shift()</code>
    testString: 'assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1, "The <code>popShift</code> function should utilize the <code>shift()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function popShift(arr) {
  let popped; // change this line
  let shifted; // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
