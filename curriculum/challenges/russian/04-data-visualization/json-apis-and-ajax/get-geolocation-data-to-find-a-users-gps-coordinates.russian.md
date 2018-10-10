---
id: 587d7faf367417b2b2512be8
title: Get Geolocation Data to Find A User's GPS Coordinates
challengeType: 6
videoUrl: ''
localeTitle: 'Получите данные геолокации, чтобы найти GPS-координаты пользователя'
---

## Description
<section id="description"> Еще одна интересная вещь, которую вы можете сделать, - это доступ к текущему местоположению вашего пользователя. Каждый браузер имеет встроенный навигатор, который может предоставить вам эту информацию. Навигатор получит текущую долготу и широту пользователя. Вы увидите приглашение разрешить или заблокировать этот сайт, зная ваше текущее местоположение. Задача может быть завершена в любом случае, если код верен. Выбрав allow, вы увидите, что текст на выходном телефоне изменится на широту и долготу. Вот код, который делает это: <blockquote> if (navigator.geolocation) { <br> navigator.geolocation.getCurrentPosition (функция (позиция) { <br> document.getElementById (&#39;data&#39;). innerHTML = &quot;широта:&quot; + position.coords.latitude + &quot;&lt;br&gt; долгота:&quot; + position.coords.longitude; <br> }); <br> } </blockquote> Во-первых, он проверяет <code>navigator.geolocation</code> объекта <code>navigator.geolocation</code> . Если это так, <code>getCurrentPosition</code> метод <code>getCurrentPosition</code> для этого объекта, который инициирует асинхронный запрос для позиции пользователя. Если запрос выполнен успешно, выполняется функция обратного вызова в методе. Эта функция осуществляет доступ к значениям объекта <code>position</code> для широты и долготы с использованием точечной нотации и обновляет HTML. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/navigator\.geolocation\.getCurrentPosition/g), "Your code should use <code>navigator.geolocation</code> to access the user&#39;s current location.");'
  - text: ''
    testString: 'assert(code.match(/position\.coords\.latitude/g), "Your code should use <code>position.coords.latitude</code> to display the user&#39;s latitudinal location.");'
  - text: ''
    testString: 'assert(code.match(/position\.coords\.longitude/g), "Your code should use <code>position.coords.longitude</code> to display the user&#39;s longitudinal location.");'
  - text: ''
    testString: 'assert(code.match(/document\.getElementById\(\s*?("|")data\1\s*?\)\.innerHTML/g), "You should display the user&#39;s position within the <code>data</code> div element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  // Add your code below this line


  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
