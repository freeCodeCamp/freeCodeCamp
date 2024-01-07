---
id: 5a94fe6269fb03452672e462
title: Створіть гнучкі макети, використовуючи автоматичний підбір
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c3dPph8'
forumTopicId: 301127
dashedName: create-flexible-layouts-using-auto-fit
---

# --description--

`auto-fit` функціонує майже ідентично з `auto-fill`. Єдина відмінність полягає в тому, що коли розмір контейнера перевищує розмір усіх поєднаних об'єктів `auto-fill` продовжує додавати пусті рядки та колонки та відсуває об'єкти на бік, в той час як `auto-fit` стискає ці порожні рядки та колонки та розтягує ваші об'єкти до розмірів контейнера.

**Примітка:** якщо ваш контейнер не може вмістити усі ваші об'єкти в один рядок, він перемістить їх до нового рядка.

# --instructions--

У першій сітці, використовуйте `auto-fit` з `repeat` для заповнення сітки колонками, які мають мінімальну ширину `60px` і максимальну `1fr`. Тоді змініть розмір попереднього перегляду, щоб побачити цю зміну.

# --hints--

Клас `container2` повинен містити властивість `grid-template-columns` з `repeat` та `auto-fit` яка заповнить сітку колонками із мінімальною шириною `60px` та максимальною `1fr`.

```js
assert(
  code.match(
    /.container2\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));} .container2 {grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));}</style>
```
