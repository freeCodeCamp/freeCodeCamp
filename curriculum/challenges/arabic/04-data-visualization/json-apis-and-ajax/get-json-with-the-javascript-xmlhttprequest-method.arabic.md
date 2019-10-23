---
id: 587d7fae367417b2b2512be3
title: Get JSON with the JavaScript XMLHttpRequest Method
challengeType: 6
videoUrl: ''
localeTitle: احصل على JSON باستخدام طريقة جافا سكريبت XMLHttpRequest
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g), "Your code should create a new <code>XMLHttpRequest</code>.");'
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك الطريقة <code>open</code> لتهيئة طلب &quot;GET&quot; إلى freeCodeCamp Cat Photo API.
    testString: 'assert(code.match(/\.open\(\s*?("|")GET\1\s*?,\s*?("|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g), "Your code should use the <code>open</code> method to initialize a "GET" request to the freeCodeCamp Cat Photo API.");'
  - text: يجب استخدام التعليمات البرمجية ل <code>send</code> طريقة لإرسال الطلب.
    testString: 'assert(code.match(/\.send\(\s*\)/g), "Your code should use the <code>send</code> method to send the request.");'
  - text: يجب أن تحتوي التعليمات البرمجية الخاصة بك على معالج أحداث <code>onload</code> إلى وظيفة.
    testString: 'assert(code.match(/\.onload\s*=\s*function\(\s*?\)\s*?{/g), "Your code should have an <code>onload</code> event handler set to a function.");'
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك أسلوب <code>JSON.parse</code> لتحليل <code>responseText</code> .
    testString: 'assert(code.match(/JSON\.parse\(.*\.responseText\)/g), "Your code should use the <code>JSON.parse</code> method to parse the <code>responseText</code>.");'
  - text: يجب أن تحصل شفرتك على العنصر مع <code>message</code> الفصل وتغيير HTML الداخلي إلى سلسلة بيانات JSON.
    testString: 'assert(code.match(/document\.getElementsByClassName\(\s*?("|")message\1\s*?\)\[0\]\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g), "Your code should get the element with class <code>message</code> and change its inner HTML to the string of JSON data.");'

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
