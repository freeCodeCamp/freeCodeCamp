---
id: 587d7faf367417b2b2512be8
title: Отримання даних геолокації для знаходження GPS-координат користувача
challengeType: 6
forumTopicId: 18188
dashedName: get-geolocation-data-to-find-a-users-gps-coordinates
---

# --description--

Інша зручна річ - доступ до поточної локації користувача. У кожен браузер вбудовано навігацію, яка надасть цю інформацію.

Навігація надає доступ до актуальної широти та довготи користувача.

Вам надійде запит на дозвіл або блокування доступу сайту до вашої локації. Завдання можна завершити будь-яким способом, якщо код буде правильним.

Якщо ви надасте доступ, побачите текст на телефоні виводу для зміни широти та довготи.

Ось такий код:

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

Спочатку перевіряється чи існує об'єкт `navigator.geolocation`. Якщо так, то для об'єкта методом `getCurrentPosition` буде асинхронно надіслано запит на локацію користувача. Якщо запит успішний, функція зворотного виклику під час роботи методу спрацює. Ця функція передає значення `position` об'єкта для широти і довготи за допомогою крапкової нотації і оновлює HTML.

# --instructions--

Додайте приклад коду у теґи `script`, щоб дізнатись поточне розташування користувача і вставити його у HTML.

# --hints--

Щоб дізнатись поточне місце розташування користувача, використайте `navigator.geolocation`.

```js
assert(code.match(/navigator\.geolocation\.getCurrentPosition/g));
```

Щоб відобразити координату широти місця знаходження користувача, використайте `position.coords.latitude`.

```js
assert(code.match(/position\.coords\.latitude/g));
```

Щоб відобразити координату довготи місця знаходження користувача, використайте `position.coords.longitude`.

```js
assert(code.match(/position\.coords\.longitude/g));
```

Положення користувача покажіть елементом `id="data"` всередині `div`.

```js
assert(
  code.match(/document\.getElementById\(\s*?('|")data\1\s*?\)\.innerHTML/g)
);
```

# --seed--

## --seed-contents--

```html
<script>
  // Add your code below this line


  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>
```

# --solutions--

```html
<script>
  // Add your code below this line
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById('data').innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
  }
  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>

</section>
```
