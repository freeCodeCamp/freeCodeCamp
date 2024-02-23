---
id: 587d78a8367417b2b2512ae3
title: Безперервна анімація елементів за допомогою властивості Infinite Animation Count
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDVfq'
forumTopicId: 301041
dashedName: animate-elements-continually-using-an-infinite-animation-count
---

# --description--

Попередні завдання стосувалися використання деяких властивостей анімації та правила `@keyframes`. Іншою властивістю анімації є `animation-iteration-count`, яка дозволяє вам контролювати, скільки разів буде повторюватися анімація. До прикладу:

```css
animation-iteration-count: 3;
```

У цьому випадку анімація зупиниться лише після 3-го запуску, але її можна зробити безперервною, якщо задати значення `infinite`.

# --instructions--

Щоб м'яч стрибав безперервно, змініть властивість `animation-iteration-count` на `infinite`.

# --hints--

Властивості `animation-iteration-count` має бути надано значення `infinite`.

```js
assert($('#ball').css('animation-iteration-count') == 'infinite');
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```
