---
id: 587d7fad367417b2b2512be2
title: Change Text with click Events
challengeType: 6
forumTopicId: 301500
localeTitle: Изменить текст с помощью кнопки «События»
---

## Description
<section id='description'>
Когда происходит событие клика, вы можете использовать JavaScript для обновления элемента HTML. Например, когда пользователь нажимает кнопку «Получить сообщение», она меняет текст элемента с классом <code>message</code>, чтобы сказать «Вот сообщение». Это работает, добавив следующий код в событие click: <code>document.getElementsByClassName(&#39;message&#39;)[0].textContent=&quot;Here is the message&quot;;</code>
</section>

## Instructions
<section id='instructions'>
Добавьте код внутри обработчика события <code>onclick</code> чтобы изменить текст внутри элемента <code>message</code> чтобы сказать «Вот сообщение».
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен использовать метод <code>document.getElementsByClassName</code> для выбора элемента с классом <code>message</code>и установки ему <code>textContent</code>для данной строки.
    testString: assert(code.match(/document\s*\.getElementsByClassName\(\s*?('|")message\1\s*?\)\[0\]\s*\.textContent\s*?=\s*?('|")Here is the message\2/g));

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

```html
// solution required
```

</section>
