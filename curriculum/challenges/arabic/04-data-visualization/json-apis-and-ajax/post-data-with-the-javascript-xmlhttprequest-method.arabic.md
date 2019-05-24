---
id: 587d7faf367417b2b2512be9
title: Post Data with the JavaScript XMLHttpRequest Method
challengeType: 6
videoUrl: ''
localeTitle: نشر البيانات باستخدام طريقة XMLHttpRequest في جافا سكريبت
---

## Description
undefined

## Instructions
<section id="instructions"> قم بتحديث الكود لإنشاء وإرسال طلب &quot;POST&quot;. ثم أدخل اسمك في مربع الإدخال وانقر على &quot;إرسال رسالة&quot;. ستحل وظيفة AJAX محل &quot;الرد من الخادم سيكون هنا&quot;. مع رد الخادم. في هذه الحالة ، هو اسمك إلحاق &quot;يحب القطط&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g), "Your code should create a new <code>XMLHttpRequest</code>.");'
  - text: ''
    testString: 'assert(code.match(/\.open\(\s*?("|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g), "Your code should use the <code>open</code> method to initialize a "POST" request to the server.");'
  - text: ''
    testString: 'assert(code.match(/\.setRequestHeader\(\s*?("|")Content-Type\1\s*?,\s*?("|")text\/plain\2\s*?\)/g), "Your code should use the <code>setRequestHeader</code> method.");'
  - text: ''
    testString: 'assert(code.match(/\.onreadystatechange\s*?=/g), "Your code should have an <code>onreadystatechange</code> event handler set to a function.");'
  - text: ''
    testString: 'assert(code.match(/document\.getElementsByClassName\(\s*?("|")message\1\s*?\)\[0\]\.innerHTML\s*?=\s*?.+?\.responseText/g), "Your code should get the element with class <code>message</code> and change its inner HTML to the <code>responseText</code>.");'
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك طريقة <code>send</code> .
    testString: 'assert(code.match(/\.send\(\s*?userName\s*?\)/g), "Your code should use the <code>send</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('sendMessage').onclick=function(){

      var userName=document.getElementById('name').value;
      // Add your code below this line


      // Add your code above this line
    };
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
<h1>Cat Friends</h1>
<p class="message">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
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
