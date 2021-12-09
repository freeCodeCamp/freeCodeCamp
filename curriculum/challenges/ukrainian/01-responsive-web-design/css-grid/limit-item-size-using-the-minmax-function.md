---
id: 5a94fe4469fb03452672e460
title: Обмежити розмір предмета, використовуючи мінімальну функцію
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cD97RTv'
forumTopicId: 301131
dashedName: limit-item-size-using-the-minmax-function
---

# --description--

Існує ще одна вбудована функція для використання з `grid-template-columns` and `grid-template-rows` під назвою `minmax`. Вона використовується для обмеження розміру предметів, коли змінюється розмір сітки контейнера. Для цього необхідно визначити допустимий діапазон розміру вашого об'єкта. Наприклад:

```css
grid-template-columns: 100px minmax(50px, 200px);
```

У наведеному вище коді `grid-template-columns` встановлений для створення двох колонок; перша колонка шириною 100 пікселів та друга - із мінімальною шириною 50 пікселів та максимальною шириною 200 пікселів.

# --instructions--

Використовуючи функцію `minmax`, замініть `1fr` у функції `repeat` на розмір колонки із мінімальною шириною `90px` і максимальною шириною `1fr`, та змініть розмір панелі попереднього перегляду, щоб побачити результат.

# --hints--

Клас `container` повинен мати властивість `grid-template-columns`, яка повинна повторювати 3 колонки із мінімальною шириною `90px` та максимальною шириною `1fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, 1fr);

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
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat(3, minmax(90px, 1fr));}</style>
```
