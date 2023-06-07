---
id: 587d7fae367417b2b2512be4
title: Доступ до даних JSON із API
challengeType: 6
forumTopicId: 301499
dashedName: access-the-json-data-from-an-api
---

# --description--

У попередньому завданні ви дізнались як отримати дані JSON з freeCodeCamp Cat Photo API.

Тепер зверніть увагу на отримані дані, щоб краще зрозуміти формат JSON. Згадайте деякі позначення в JavaScript:

<blockquote>[ ] -> Квадрантні дужки позначають масив.<br>{ } -> Фігурні дужки позначають об'єкт.<br>" " -> Подвійні лапки позначають рядок. Їх також використовують для назв ключів в JSON.</blockquote>

Розуміти структуру даних з API важливо, адже це впливає на спосіб отримання бажаних значень.

Справа натисніть кнопку `Get Message`, щоб перетворити формат freeCodeCamp Cat Photo API JSON у HTML.

Першим та останнім символом у даних формату JSON ставляться квадратні дужки `[ ]`. Це означає, що отримані дані - масив. Фігурна дужка `{` у даних JSON стоїть другою та починає опис об'єкта. Зверніть увагу, що тут три окремі об'єкти. Дані JSON - це масив з трьох об'єктів, кожен із яких містить інформацію про фото котів.

Ви вже вивчили, що об'єкти мають пари "ключ-значення", розділені комами. Наприклад, перший об'єкт Cat Photo`"id":0` має ключ `id` та відповідне значення `0`. Аналогічні ключі використовують для `imageLink`, `altText` та `codeNames`. Кожне фото - об'єкт з однаковими ключами, але з різними значеннями.

Інша цікава пара '"ключ-значення" в першому об'єкті - це `"codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]`. `codeNames` - це ключ, значення якого - масив із трьох рядків. Можна мати не лише масив об'єктів, а й ключ з масивом як значення.

Пам'ятайте як отримувати доступ до даних у масивах та об'єктах. Для доступу до певного індексу елемента масиви використовують дужкову нотацію. Об'єкти використовують дужку або крапкову нотацію, щоб отримати доступ до змінних властивостей. Ось приклад, що показує властивість `altText` першого фото кота. Зверніть увагу, що аналізовані дані JSON в редакторі зберігаються змінною з назвою `json`:

```js
console.log(json[0].altText);
```

Консоль буде відображати рядок `A біла кішка в зеленому шоломі у формі дині на голові. `.

# --instructions--

Вивести на консоль друге значення в масиві `codeNames` для кішки з `id` 2. Щоб отримати доступ до масиву, використайте дужкову та крапкову нотацію об'єкта (що зберігається у змінній `json`).

# --hints--

У коді має бути використана дужкова та крапкова нотація для правильного імені та виведення `Loki` на консоль.

```js
assert(
  code.match(
    /console\s*\.\s*log\s*\(\s*json\s*\[2\]\s*(\.\s*codeNames|\[\s*('|`|")codeNames\2\s*\])\s*\[\s*1\s*\]\s*\)/g
  )
);
```

# --seed--

## --seed-contents--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
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
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>
```

# --solutions--

```html
<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line
        console.log(json[2].codeNames[1]);
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
