---
id: 587d7fae367417b2b2512be3
title: Get JSON with the JavaScript XMLHttpRequest Method
challengeType: 6
videoUrl: ''
localeTitle: Получить JSON с помощью метода XMLHttpRequest JavaScript
---

## Description
undefined

## Instructions
<section id="instructions"> Обновите код для создания и отправки запроса «GET» в FreeCodeCamp Cat Photo API. Затем нажмите кнопку «Получить сообщение». Функция AJAX заменит текст «Сообщение будет здесь» с исходным выходом JSON из API. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g), "Your code should create a new <code>XMLHttpRequest</code>.");'
  - text: Ваш код должен использовать <code>open</code> метод для инициализации запроса «GET» в FreeCodeCamp Cat Photo API.
    testString: 'assert(code.match(/\.open\(\s*?("|")GET\1\s*?,\s*?("|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g), "Your code should use the <code>open</code> method to initialize a "GET" request to the freeCodeCamp Cat Photo API.");'
  - text: ''
    testString: 'assert(code.match(/\.send\(\s*\)/g), "Your code should use the <code>send</code> method to send the request.");'
  - text: В вашем коде должен быть обработчик события <code>onload</code> установленный на функцию.
    testString: 'assert(code.match(/\.onload\s*=\s*function\(\s*?\)\s*?{/g), "Your code should have an <code>onload</code> event handler set to a function.");'
  - text: ''
    testString: 'assert(code.match(/JSON\.parse\(.*\.responseText\)/g), "Your code should use the <code>JSON.parse</code> method to parse the <code>responseText</code>.");'
  - text: Ваш код должен получить элемент с <code>message</code> класса и изменить его внутренний HTML на строку данных JSON.
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
