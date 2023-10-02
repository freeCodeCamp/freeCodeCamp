---
id: 587d78a5367417b2b2512ada
title: Використання властивості трансформування CSS scale для розміщення елементу в Hover
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLPJuM'
forumTopicId: 301077
dashedName: use-the-css-transform-scale-property-to-scale-an-element-on-hover
---

# --description--

Властивість `transform` має різні функції, що дозволяють масштабувати, рухати, обертати, нахиляти, і т. д., ваші елементи. При використанні з псевдокласами, такими як `:hover`, який визначає певний стан елемента, властивість `transform` може легко додати інтерактивність до ваших елементів.

Ось приклад масштабування елементів абзацу до 2,1 разів від початкового розміру, коли користувач наводить на нього:

```css
p:hover {
  transform: scale(2.1);
}
```

**Примітка:** Застосовуючи transform на `div` елемент, він також вплине на будь-які дочірні елементи, що містяться у div.

# --instructions--

Додайте правило CSS до `hover` стану `div` та використайте властивість `transform` щоб масштабувати елемент `div` до 1,1 рази від початкового розміру, коли користувач наводить на нього.

# --hints--

Розмір елемента `div` має масштабуватись в 1,1 рази, коли користувач наводить на нього.

```js
assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }



</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }
  div:hover {
    transform: scale(1.1);
  }
</style>
<div></div>
```
