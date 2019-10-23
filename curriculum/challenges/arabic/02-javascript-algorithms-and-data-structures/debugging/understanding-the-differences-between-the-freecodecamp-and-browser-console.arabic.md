---
id: 587d7b83367417b2b2512b37
title: Understanding the Differences between the freeCodeCamp and Browser Console
challengeType: 1
videoUrl: ''
localeTitle: فهم الاختلافات بين freeCodeCamp و Browser Console
---

## Description
<section id="description"> قد تكون لاحظت أن بعض تحديات JavaScript freeCodeCamp تتضمن وحدة التحكم الخاصة بهم. تعمل وحدة التحكم هذه بشكل مختلف قليلاً عن وحدة تحكم المستعرض التي استخدمتها في التحدي الأخير. يتمثل التحدي التالي في إبراز بعض الاختلافات بين وحدة التحكم freeCodeCamp ووحدة تحكم المستعرض. أولا ، وحدة تحكم المتصفح. عندما تقوم بتحميل وتشغيل ملف جافا سكريبت عادي في متصفحك ، ستقوم عبارات <code>console.log()</code> بطباعة ما تطلبه بالضبط للطباعة إلى وحدة تحكم المستعرض بالضبط عدد المرات التي طلبتها. في محرر النص داخل المتصفح ، تكون العملية مختلفة قليلاً ويمكن أن تكون مربكة في البداية. تشغيل القيم التي تم تمريرها إلى <code>console.log()</code> في كتلة محرر النص ، كل مجموعة من الاختبارات بالإضافة إلى وقت آخر لأية استدعاءات دالة موجودة في التعليمات البرمجية. وهذا يفسح المجال لبعض السلوكيات المثيرة للاهتمام وقد يقوم برحلتك في البداية ، لأن القيمة المسجلة التي تتوقع أن ترى مرة واحدة فقط قد تطبع مرات أكثر اعتمادًا على عدد الاختبارات والقيم التي يتم تمريرها إلى تلك الاختبارات. إذا كنت ترغب في رؤية مخرجاتك الفردية فقط ولا داعي للقلق بشأن تشغيل الدورات الاختبارية ، فيمكنك استخدام <code>console.clear()</code> . </section>

## Instructions
<section id="instructions"> استخدم <code>console.log()</code> لطباعة المتغيرات في التعليمة البرمجية في المكان المحدد. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: استخدم <code>console.log()</code> لطباعة <code>outputTwo</code> المتغير. في وحدة تحكم المتصفح لديك ، يجب أن تطبع قيمة المتغير مرتين.
    testString: 'assert(code.match(/console\.log\(outputTwo\)/g), "Use <code>console.log()</code> to print the <code>outputTwo</code> variable.  In your Browser Console this should print out the value of the variable two times.");'
  - text: استخدم <code>console.log()</code> لطباعة متغير <code>outputOne</code> .
    testString: 'assert(code.match(/console\.log\(outputOne\)/g), "Use <code>console.log()</code> to print the <code>outputOne</code> variable.");'
  - text: استخدم <code>console.clear()</code> لتعديل الإخراج الخاص بك بحيث يتم إخراج <code>outputOne</code> فقط مرة واحدة.
    testString: 'assert(code.match(/^(\s*console.clear\(\);?\s*)$/gm), "Use <code>console.clear()</code> to modify your output so that <code>outputOne</code> variable only outputs once.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable


let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once


// Use console.log() to print the outputOne variable

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
