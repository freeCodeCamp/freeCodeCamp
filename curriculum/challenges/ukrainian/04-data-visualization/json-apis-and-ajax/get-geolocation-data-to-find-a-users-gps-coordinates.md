---
id: 587d7faf367417b2b2512be8
title: Отримайте дані геолокації, щоб знайти GPS координати користувача
challengeType: 6
forumTopicId: 18188
dashedName: get-geolocation-data-to-find-a-users-gps-coordinates
---

# --description--

Інша класна дія, яку ви можете зробити, — отримати доступ до поточного місцезнаходження користувача. Кожен браузер має вбудований навігатор, який може надати цю інформацію.

Навігатор надасть доступ до довготи та широти користувача.

Вам надійде запит на дозвіл або блокування доступу сайту до поточного місцезнаходження. Завдання можна завершити будь-яким способом, якщо код буде правильним.

Якщо ви надасте доступ, то текст в отриманому телефоні зміниться на вашу широту та довготу.

Ось приклад такого коду:

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

Спочатку він перевіряє, чи існує об’єкт `navigator.geolocation`. Якщо так, то до нього викликається метод `getCurrentPosition`, який ініціює асинхронний запит на місцезнаходження користувача. Якщо запит успішний, то в методі спрацьовує функція зворотного виклику. Ця функція отримує доступ до значень довготи та широти об’єкта `position` за допомогою точкової нотації та оновлює HTML.

# --instructions--

Додайте код з прикладу всередину тегів `script`, щоб дізнатись поточне місцезнаходження користувача та вставити його в HTML.

# --hints--

Код має використати `navigator.geolocation`, щоб отримати доступ до поточного місцезнаходження користувача.

```js
assert(code.match(/navigator\.geolocation\.getCurrentPosition/g));
```

Код має використати `position.coords.latitude`, щоб показати широту місцезнаходження користувача.

```js
assert(code.match(/position\.coords\.latitude/g));
```

Код має використати `position.coords.longitude`, щоб показати довготу місцезнаходження користувача.

```js
assert(code.match(/position\.coords\.longitude/g));
```

Покажіть місцезнаходження користувача в межах елемента `div` з `id="data"`.

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
