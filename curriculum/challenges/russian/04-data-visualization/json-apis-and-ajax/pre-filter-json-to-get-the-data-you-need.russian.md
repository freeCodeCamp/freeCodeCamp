---
id: 587d7fae367417b2b2512be7
title: Pre-filter JSON to Get the Data You Need
challengeType: 6
forumTopicId: 18257
localeTitle: Предварительный фильтр JSON для получения необходимых данных
---

## Description
<section id='description'>
Если вы не хотите отображать каждую фотографию кота, которую вы получаете из FreeCodeCamp Cat Photo API, вы можете предварительно фильтровать JSON перед ее прокруткой. Учитывая , что данные JSON хранится в массиве, вы можете использовать <code>filter</code> метод , чтобы отфильтровать кошку, ключ «Идентификатор» имеет значение 1. Вот код , чтобы сделать это: <blockquote> json = json.filter (функция (val) { <br> return (val.id! == 1); <br> }); </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте код, чтобы <code>filter</code> данные json, чтобы удалить кошку с «id» значением 1.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>filter</code> method.
    testString: assert(code.match(/json\.filter/g));

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
         json.forEach(function(val) {
           html += "<div class = 'cat'>"

           html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

           html += "</div>"
         });
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
