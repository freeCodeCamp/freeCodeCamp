---
id: bad87fee1348bd9aedf08726
title: Використовуйте шістнадцятковий код для конкретних кольорів
challengeType: 0
videoUrl: 'https://scrimba.com/c/c8W9mHM'
forumTopicId: 18350
dashedName: use-hex-code-for-specific-colors
---

# --description--

Чи Ви знали, що існують інші способи для представлення кольорів у CSS? Один із цих способів називається шістнадцятковим кодом або hex кодом, якщо коротко.

Зазвичай ми використовуємо <dfn>десяткові знаки</dfn>, або основні 10 чисел, які використовують цифри від 0 до 9 для кожної цифри. <dfn>Шістнадцяткові схеми</dfn> (або <dfn>hex</dfn>) є основою 16 чисел. Це означає, що він використовує шістнадцять різних символів. Для прикладу, десяткові знаки 0-9 позначають значення від 0 до 9. Тоді A,B,C,D,E,F представляють значення від десяти до п'ятнадцяти. У цілому, від 0 до F може позначати цифру у шістнадцятковому виразі, надаючи нам 16 можливих значень. Ви можете знайти більше інформації про <a href="https://www.freecodecamp.org/news/hexadecimal-number-system/" target="_blank" rel="noopener noreferrer nofollow">шістнадцяткові числа тут</a>.

В CSS ми можемо використати 6 шістнадцяткових цифр для відображення кольорів, по дві для червоного (R), зеленого (G) та синього (B) компонентів. Приміром, `#000000` є чорним і також є найменшим можливим значенням. Ви можете знайти більше інформації про <a href="https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/#whatisthergbcolormodel" target="_blank" rel="noopener noreferrer nofollow">систему кольорів RGB тут</a>.

```css
body {
  color: #000000;
}
```

# --instructions--

Замініть слово `black` в нашому `body` фоновий колір елемента його шістнадцятковим кодом, `#000000`.

# --hints--

Елемент `body` повинен мати чорний `background-color`.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Замість слова `black` потрібно використати шістнадцятковий код для чорного кольору.

```js
assert(
  code.match(
    /body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: #000000;
  }
</style>
```
