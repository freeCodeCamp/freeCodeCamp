---
id: 587d7789367417b2b2512aa4
title: Як покращити доступність аудіоконтенту за допомогою елементу audio
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVkcZ'
forumTopicId: 301014
dashedName: improve-accessibility-of-audio-content-with-the-audio-element
---

# --description--

Елемент HTML5 `audio` має семантичне значення в розмітці, якщо він огортає звуковий чи аудіо-потоковий контент. Аудіоконтент також потребує текстової альтернативи, щоб до нього мали доступ люди з глухотою чи вадами слуху. Її можна створити, розмістивши текст поряд з елементом або ж за допомогою посилання на субтитри.

Теґ `audio` підтримує атрибут `controls`. Він відображає елементи браузера за замовчуванням: відтворення, паузу та інші; а також підтримує функціональність клавіатури. Це логічний (булевий) атрибут, тобто такий, що не потребує значення, його присутність на тезі вмикає налаштування.

Наприклад:

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg">
  <source src="audio/meow.ogg" type="audio/ogg">
</audio>
```

**Примітка:** Мультимедійний контент зазвичай має як візуальні, так і аудіальні компоненти. Він потребує синхронізованих субтитрів і розшифровки, щоб користувачі з вадами зору та/або слуху мали до нього доступ. Загалом, веб-розробник не є відповідальним за створення субтитрів чи розшифровки, але повинен вміти їх додавати.

# --instructions--

Давайте відпочинемо від Camper Cat та зустрінемося з його приятелем Зерсіаксом (@zersiax), чемпіоном з доступності та користувачем програми для читання з екрану. To hear a clip of his screen reader in action, add an `audio` element after the `p` element. Додайте атрибут `controls`. Then place a `source` element inside the `audio` tags with the `src` attribute set to `https://s3.amazonaws.com/freecodecamp/screen-reader.mp3` and `type` attribute set to `"audio/mpeg"`.

**Примітка:** Запис може здатися занадто швидким і малозрозумілим, але це звичайна швидкість для користувачів зчитувачів з екрану.

# --hints--

Ваш код повинен містити один теґ `audio`.

```js
assert($('audio').length === 1);
```

Елемент `audio` повинен мати кінцевий тег.

```js
assert(
  code.match(/<\/audio>/g).length === 1 &&
    code.match(/<audio.*>[\s\S]*<\/audio>/g)
);
```

Теґ `audio` повинен містити атрибут `controls`.

```js
assert($('audio').attr('controls'));
```

Ваш код повинен містити один теґ `source`.

```js
assert($('source').length === 1);
```

Теґ `source` повинен знаходитися всередині теґів `audio`.

```js
assert($('audio').children('source').length === 1);
```

Значення атрибута `src` на тезі `source` має повністю збігатися з посиланням в поясненнях.

```js
assert(
  $('source').attr('src') ===
    'https://s3.amazonaws.com/freecodecamp/screen-reader.mp3'
);
```

Ваш код повинен містити атрибут `type` на тезі `source` зі значенням audio/mpeg.

```js
assert($('source').attr('type') === 'audio/mpeg');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>



  </main>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>
    <audio controls>
      <source src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg"/>
    </audio>
  </main>
</body>
```
