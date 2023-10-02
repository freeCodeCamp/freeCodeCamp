---
id: 5a9036ee38fddaf9a66b5d37
title: Як швидше додавати розриви за допомогою властивості grid-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 301118
dashedName: add-gaps-faster-with-grid-gap
---

# --description--

`grid-gap` - це скорочена властивість для `grid-row-gap` і `grid-column-gap` з попередніх двох завдань, яка зручніша у використанні. Якщо `grid-gap` має одне значення, то він створить розрив між усіма рядками і стовпцями. Однак, якщо є два значення, він використовуватиме перше для встановлення розриву між рядками, а друге значення - для стовпців.

# --instructions--

Скористайтесь властивістю `grid-gap` щоб створити розрив `10px` між рядками і розрив `20px` між колонками.

# --hints--

Клас `container` повинен містити властивість `grid-gap`, яка утворить розрив `10px` між рядками і розрив `20px` між стовпцями.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* Only change code below this line */


    /* Only change code above this line */
  }
</style>
<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-gap: 10px 20px;}</style>
```
