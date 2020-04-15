---
id: 587d7fae367417b2b2512be4
title: Access the JSON Data from an API
challengeType: 6
forumTopicId: 301499
localeTitle: Доступ к данным JSON из API
---

## Description
<section id='description'>
В предыдущей задаче вы видели, как получить данные JSON от FreeCodeCamp Cat Photo API. Теперь вы более подробно рассмотрите возвращенные данные, чтобы лучше понять формат JSON. Вспомните некоторые обозначения в JavaScript: <blockquote> [] -&gt; Квадратные скобки представляют собой массив <br> {} -&gt; Фигурные скобки представляют собой объект <br> &quot;&quot; -&gt; Двойные кавычки представляют собой строку. Они также используются для ключевых имен в JSON </blockquote> Понимание структуры данных, возвращаемых API, важно, поскольку оно влияет на то, как вы извлекаете нужные значения. Справа нажмите кнопку «Получить сообщение», чтобы загрузить JavaScript-код FreeCodeCamp Cat Photo API JSON в HTML. Первый и последний символы, которые вы видите в данных JSON, являются квадратными скобками <code>[ ]</code> . Это означает, что возвращаемые данные представляют собой массив. Второй символ в данных JSON - фигурная <code>{</code> скобка, которая начинает объект. Посмотрев внимательно, вы увидите, что есть три отдельных объекта. Данные JSON представляют собой массив из трех объектов, каждый из которых содержит информацию о фотографии кота. Вы узнали ранее, что объекты содержат пары «ключ-значение», разделенные запятыми. Например, в примере «Кошка» первый объект имеет <code>&quot;id&quot;:0</code> где «id» - это ключ, а 0 - его соответствующее значение. Аналогично, есть ключи для «imageLink», «altText» и «codeNames». У каждого объекта фотокамеры есть такие же клавиши, но с разными значениями. Еще одна интересная пара «ключ-значение» в первом объекте - <code>&quot;codeNames&quot;:[&quot;Juggernaut&quot;,&quot;Mrs. Wallace&quot;,&quot;ButterCup&quot;]</code> . Здесь «codeNames» - это ключ, а его значение представляет собой массив из трех строк. Возможно иметь массивы объектов, а также ключ с массивом в качестве значения. Помните, как обращаться к данным в массивах и объектах. Массивы используют скобку для доступа к определенному индексу элемента. Для доступа к значению данного свойства объекты используют либо скобку, либо точечную нотацию. Вот пример, который печатает «altText» первой фотографии кота - обратите внимание, что проанализированные данные JSON в редакторе сохраняются в переменной <code>json</code> : <blockquote> console.log (JSON [0] .altText); <br> // Отображение «Белый кот в зеленой шляпе в форме дыни на голове». </blockquote>
</section>

## Instructions
<section id='instructions'>
Для кошки с «id» равным 2, напечатайте на консоли второе значение в массиве <code>codeNames</code>. Чтобы получить доступ к значению, вы должны использовать скобки и точечную нотацию на объекте (который сохраняется в переменной <code>json</code>).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен использовать скобки и точечные обозначения для доступа к правильному имени кода, и напечатать "Loki" в консоль.
    testString: assert(code.match(/(?:json\[2\]\.codeNames\[1\]|json\[2\]\[('|")codeNames\1\]\[1\])/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      req=new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload=function(){
        json=JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
        // Add your code below this line


        // Add your code above this line
      };
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

```html
// solution required
```

</section>
