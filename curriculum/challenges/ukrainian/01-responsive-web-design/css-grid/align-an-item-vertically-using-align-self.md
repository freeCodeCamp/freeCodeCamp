---
id: 5a90375238fddaf9a66b5d3b
title: Вирівняти елемент вертикально за допомогою властивості align-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cmzd4fz'
forumTopicId: 301123
dashedName: align-an-item-vertically-using-align-self
---

# --description--

Ви можете вирівняти елемент як горизонтально, так і вертикально. Щоб зробити це, застосуйте властивість `align-self` на елемент. Ця властивість приймає всі ті ж значення, що і `justify-self` з попереднього завдання.

# --instructions--

Вирівняйте елемент класу `item3` вертикально в `end`.

# --hints--

Клас `item3` повинен містити властивість `align-self` зі значенням `end`.

```js
assert(code.match(/.item3\s*?{[\s\S]*align-self\s*?:\s*?end\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}

  .item3 {
    background: PaleTurquoise;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
<style>.item3 {align-self: end;}</style>
```
