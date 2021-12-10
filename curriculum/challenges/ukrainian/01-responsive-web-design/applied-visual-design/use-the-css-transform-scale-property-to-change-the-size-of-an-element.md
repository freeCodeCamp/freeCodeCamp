---
id: 587d78a5367417b2b2512ad9
title: Використання властивості трансформування CSS scale для зміни розміру елемента
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZVSg'
forumTopicId: 301076
dashedName: use-the-css-transform-scale-property-to-change-the-size-of-an-element
---

# --description--

Щоб змінити масштаб елемента, CSS має властивість `transform` разом з функцією `scale()`. Приклад наступного коду подвоює розмір всіх елементів абзацу на сторінці:

```css
p {
  transform: scale(2);
}
```

# --instructions--

Збільште розмір елемента з ідентифікатором `ball2` в 1,5 рази від його початкового розміру.

# --hints--

Властивість `transform` для `#ball2` має бути збільшено в 1.5 рази від початкового розміру.

```js
assert(
  code.match(
    /#ball2\s*?{\s*?left:\s*?65%;\s*?transform:\s*?scale\(1\.5\);\s*?}|#ball2\s*?{\s*?transform:\s*?scale\(1\.5\);\s*?left:\s*?65%;\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;

  }


</style>

<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>
```

# --solutions--

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;
    transform: scale(1.5);
  }
</style>
<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>
```
