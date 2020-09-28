---
id: 587d7fad367417b2b2512be1
title: Handle Click Events with JavaScript using the onclick property
challengeType: 6
videoUrl: ''
localeTitle: Handle انقر على الأحداث باستخدام JavaScript باستخدام خاصية onclick
---

## Description
<section id="description"> تريد تنفيذ التعليمات البرمجية فقط بعد انتهاء تحميل صفحتك. ولهذا الغرض ، يمكنك إرفاق حدث JavaScript بالمستند المسمى <code>DOMContentLoaded</code> . إليك الرمز الذي يفعل هذا: <blockquote style=";text-align:right;direction:rtl"> document.addEventListener (&#39;DOMContentLoaded&#39;، function () { <br><br> })؛ </blockquote> يمكنك تنفيذ معالجات الأحداث التي تدخل داخل وظيفة <code>DOMContentLoaded</code> . يمكنك تنفيذ معالج حدث <code>onclick</code> الذي يتم تشغيله عند نقر المستخدم على العنصر الذي يحمل كود <code>getMessage</code> ، وذلك بإضافة الشفرة التالية: <blockquote style=";text-align:right;direction:rtl"> . document.getElementById ( &#39;getMessage&#39;) عند _ النقر = وظيفة () {}؛ </blockquote></section>

## Instructions
<section id="instructions"> إضافة معالج حدث انقر داخل الدالة <code>DOMContentLoaded</code> للعنصر الذي يحمل كود <code>getMessage</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك طريقة <code>document.getElementById</code> لتحديد عنصر <code>getMessage</code> .
    testString: 'assert(code.match(/document\.getElementById\(\s*?("|")getMessage\1\s*?\)/g), "Your code should use the <code>document.getElementById</code> method to select the <code>getMessage</code> element.");'
  - text: يجب أن تضيف التعليمات البرمجية معالج أحداث <code>onclick</code> .
    testString: 'assert(typeof document.getElementById("getMessage").onclick === "function", "Your code should add an <code>onclick</code> event handler.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    // Add your code below this line


    // Add your code above this line
  });
</script>
<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>
<h1>Cat Photo Finder</h1>
<p class="message">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
