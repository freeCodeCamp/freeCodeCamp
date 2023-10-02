---
id: 587d78a7367417b2b2512ae2
title: Створити візуальний напрямок прибравши елемент зліва направо
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
dashedName: create-visual-direction-by-fading-an-element-from-left-to-right
---

# --description--

Для цього завдання ви зміните `opacity` анімованого елемента, тому він поступово зникає, коли досягає правої частини екрану.

У відображеній анімації, округлий елемент з фоновим градієнтом рухається праворуч до позначки 50% анімації, як правило `@keyframes`.

# --instructions--

Виділіть елемент з ідентифікатором `ball` і додайте властивість `opacity` у значення 0.1 `50%`, тому цей елемент зникає, так як рухається праворуч.

# --hints--

Правило `keyframes` для затухання повинне встановити властивість `opacity` на 0.1 на 50%.

```js
assert(
  code.match(
    /@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

    }
  }

</style>

<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
</style>
<div id="ball"></div>
```
