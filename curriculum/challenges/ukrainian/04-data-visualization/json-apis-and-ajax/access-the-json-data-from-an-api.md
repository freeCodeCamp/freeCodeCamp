---
id: 587d7fae367417b2b2512be4
title: Отримайте доступ до даних JSON з API
challengeType: 6
forumTopicId: 301499
dashedName: access-the-json-data-from-an-api
---

# --description--

У попередньому завданні ви дізнались, як отримати дані JSON з API freeCodeCamp Cat Photo.

Тепер зверніть увагу на отримані дані, щоб краще зрозуміти формат JSON. Згадайте деякі позначення в JavaScript:

<blockquote>[ ] -> Квадрантні дужки позначають масив.<br>{ } -> Фігурні дужки позначають об’єкт.<br>" " -> Подвійні лапки позначають рядок. Їх також використовують для назв ключів в JSON.</blockquote>

Важливо розуміти структуру даних, які повертає API, оскільки це впливає на те, як ви отримуєте потрібні значення.

Натисніть кнопку `Get Message` справа, щоб отримати JSON API freeCodeCamp Cat Photo в HTML.

Першим та останнім символом у даних JSON є квадратні дужки `[ ]`. Це означає, що отримані дані є масивом. Другим символом в даних JSON є фігурна дужка `{`, яка починає об’єкт. Зверніть увагу, що тут три окремі об’єкти. Дані JSON — це масив з трьох об’єктів, кожен з яких містить інформацію про фото котів.

Раніше ви дізнались, що об’єкти мають пари «ключ-значення», розділені комами. На прикладі фото кота: перший об’єкт має `"id":0`, де `id` є ключем, а `0` — його відповідним значенням. Аналогічні ключі використовують для `imageLink`, `altText` та `codeNames`. Кожне фото — це об’єкт з однаковими ключами, але різними значеннями.

Інша цікава пара «ключ-значення» в першому об’єкті — це `"codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]`. `codeNames` є ключем, а його значення — масив з трьох рядків. Можна мати не лише масив об’єктів, а й ключ зі значенням масиву.

Пригадайте, як отримати доступ до даних у масивах та об’єктах. Масиви використовують дужкову нотацію, щоб отримати доступ до певного індексу елемента. Об’єкти використовують дужкову або точкову нотацію, щоб отримати доступ до значення наданої властивості. Ось приклад, який друкує властивість `altText` першого фото кота (зверніть увагу, що аналізовані дані JSON з редактора збережені у змінній `json`):

```js
console.log(json[0].altText);
```

Консоль покаже рядок `A white cat wearing a green helmet shaped melon on its head.`.

# --instructions--

Виведіть на консоль друге значення в масиві `codeNames` для кота з `id` зі значенням 2. Використайте дужкову та точкову нотацію до об’єкта (який збережений у змінній `json`), щоб отримати доступ до значення.

# --hints--

Код має використати дужкову та точкову нотації, щоб отримати доступ до імені та надрукувати `Loki` на консолі.

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
