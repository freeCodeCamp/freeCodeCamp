---
id: 587d7fae367417b2b2512be5
title: Convert JSON Data to HTML
challengeType: 6
forumTopicId: 16807
localeTitle: Преобразование данных JSON в HTML
---

## Description
<section id='description'>
Теперь, когда вы получаете данные из JSON API, вы можете отобразить его в HTML. Вы можете использовать метод <code>forEach</code> для циклического прохождения данных, поскольку объекты фотографии cat хранятся в массиве. По мере перехода к каждому элементу вы можете изменить элементы HTML. Сначала объявите html-переменную с <code>var html = &quot;&quot;;</code> , Затем прокрутите JSON, добавив HTML к переменной, которая обертывает имена ключей в <code>strong</code> тегах, а затем значение. Когда цикл закончен, вы его визуализируете. Вот код, который делает это: <blockquote> json.forEach (function (val) { <br> var keys = Object.keys (val); <br> html + = &quot;&lt;div class = &#39;cat&#39;&gt;&quot;; <br> keys.forEach (функция (ключ) { <br> html + = &quot;&lt;strong&gt;&quot; + ключ + &quot;&lt;/ strong&gt;:&quot; + val [key] + &quot;&lt;br&gt;&quot;; <br> }); <br> html + = &quot;&lt;/ div&gt; &lt;br&gt;&quot;; <br> }); </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте метод <code>forEach</code> для цикличного прохода по JSON и создайте HTML элементы для отображения информации.
Вот пример JSON

```json
[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
```

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен храниться информацию в переменной <code>html</code>
    testString: assert(code.match(/html\s+?(\+=|=\shtml\s\+)/g));
  - text: Ваш код должен использовать метод <code>forEach</code>для цикличного прохождения над данными JSON из API.
    testString: assert(code.match(/json\.forEach/g));
  - text: Ваш код должен обернуть данные в <code>strong</code> теги.
    testString: assert(code.match(/<strong>.+<\/strong>/g));

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
        var html = "";
        // Add your code below this line



        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML=html;
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
