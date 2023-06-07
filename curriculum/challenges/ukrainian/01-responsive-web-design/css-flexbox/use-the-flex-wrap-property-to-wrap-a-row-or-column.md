---
id: 587d78ad367417b2b2512afa
title: Використовуйте flex-wrap Property для обгортання рядка чи стовпця
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
dashedName: use-the-flex-wrap-property-to-wrap-a-row-or-column
---

# --description--

CSS flexbox має можливість розділяти flex контейнер на декілька рядків (або стовпців). За замовчуванням, флекс-контейнер поміщає всі флекс-елементи разом. Приміром, рядок буде на одній лінії.

Однак, використовуючи `flex-wrap` властивість вказує CSS загорнути предмети. Це означає, що додаткові елементи будуть переміщуватися в новий рядок або стовпчик. Точка зупинки, де знаходиться зациклення, залежить від розміру предметів та розміру контейнера.

CSS також має варіанти напрямку обгортки:

<ul><li><code>nowrap</code>: це налаштування за замовчуванням, та не обгортає елементи.</li><li><code>wrap</code>: обгортає елементи в декілька рядів згори донизу, якщо вони знаходяться в рядках, і зліва направо, якщо вони знаходяться в стовпцях.</li><li><code>wrap-reverse</code>: огортає елементи в декілька рядків від нижнього до верхнього, якщо вони знаходяться в рядках, і справа наліво, якщо вони знаходяться в стовпцях.</li></ul>

# --instructions--

У поточному макеті занадто багато скриньок для одного рядка. Додайте CSS властивість `flex-wrap` в елемент `#box-container` і надайте йому значення `wrap`.

# --hints--

Елемент `#box-container` повинен мати властивість `flex-wrap`, налаштовану до значення `wrap`.

```js
assert($('#box-container').css('flex-wrap') == 'wrap');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```
