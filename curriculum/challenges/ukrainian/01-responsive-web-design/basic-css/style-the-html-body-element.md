---
id: bad87fee1348bd9aedf08736
title: Стилізуйте елемент HTML body
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
dashedName: style-the-html-body-element
---

# --description--

Тепер давайте розпочнемо знову і поговоримо про наслідування CSS.

Кожна сторінка HTML містить елемент `body`.

# --instructions--

Можна довести існування елемента `body` тут, надавши йому чорний фоновий колір `background-color`.

Це можна зробити, додавши наступне до нашого елемента `style`:

```css
body {
  background-color: black;
}
```

# --hints--

Елемент `body` повинен мати чорний фоновий колір `background-color`.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Правило CSS має бути належним чином відформатовано; з фігурними дужками, що його відкривають і закривають.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

Правило CSS має закінчуватися крапкою з комою.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>
```

# --solutions--

```html
<style>
body {
  background-color: black;
}
</style>
```
