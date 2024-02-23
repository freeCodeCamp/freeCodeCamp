---
id: 587d78a8367417b2b2512ae5
title: Анімаційні елементи у змінних ставках
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ89WA4'
forumTopicId: 301040
dashedName: animate-elements-at-variable-rates
---

# --description--

Існує безліч способів зміни частоти анімації аналогічно анімованих елементів. Поки що цього було досягнуто шляхом застосування властивості `animation-iteration-count` і встановлення правил `@keyframes`.

До прикладу, анімація справа складається з двох зірок, розмір і прозорість кожної з яких у правилі `@keyframes` зменшується до позначки 20%, що створює ефект миготіння. Ви можете змінити правило `@keyframes` для одного з елементів, щоб зірки миготіли з різною швидкістю.

# --instructions--

Змініть частоту кадрів анімації елементу класу `star-1`, змінивши значення його `@keyframes` правила на 50%.

# --hints--

Правило `@keyframes` для класу `star-1` повинно становити 50%.

```js
assert(code.match(/twinkle-1\s*?{\s*?50%/g));
```

# --seed--

## --seed-contents--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-name: twinkle-1;
    animation-duration: 1s;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-name: twinkle-2;
    animation-duration: 1s;
  }

  @keyframes twinkle-1 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  @keyframes twinkle-2 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
```

# --solutions--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-name: twinkle-1;
    animation-duration: 1s;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-name: twinkle-2;
    animation-duration: 1s;
  }

  @keyframes twinkle-1 {
    50% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  @keyframes twinkle-2 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>
<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
```
