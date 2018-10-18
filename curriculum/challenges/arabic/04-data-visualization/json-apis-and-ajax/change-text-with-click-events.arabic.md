---
id: 587d7fad367417b2b2512be2
title: Change Text with click Events
challengeType: 6
videoUrl: ''
localeTitle: 'JSON APIs و AJAX: تغيير النص باستخدام النقر'
---

## Description
عندما تحدث عملية نقر، يمكنك أن تستخدم جافاسكريبت لتحديث عنصر

`HTML`

على سبيل المثال، عندما يقوم المستخدم بالنقر على زر

Get Message

سيتغير نص العنصر المرتبط بـ

`class`

ذو قيمة تساوي

`message`

إلى

"Here is the message"

هذا ما سيتم عند إضافة الكود التالي إلى دالة حادثة النقر:

```
document.getElementsByClassName('message')[0].textContent="Here is the message";
```

## Instructions
قم بإضافة الكود إلى داخل الدالة المسؤولة عن حالة النقر

`onclick`

لتغيير النص داخل عنصر

`message`

لتصبح

"Here is the message"


## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/document\.getElementsByClassName\(\s*?("|")message\1\s*?\)\[0\]\.textContent\s*?=\s*?("|")Here is the message\2/g), "Your code should use the <code>document.getElementsByClassName</code> method to select the element with class <code>message</code> and set its <code>textContent</code> to the given string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      // Add your code below this line


      // Add your code above this line
    }
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
<p class="message box">
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
