---
id: 5a9036ee38fddaf9a66b5d35
title: Create a Column Gap Using grid-column-gap
challengeType: 0
videoUrl: ''
localeTitle: Создание разрыва столбца Использование разрыва сетки-столбца
---

## Description
<section id="description"> До сих пор в сетках, которые вы создали, столбцы были тесно связаны друг с другом. Иногда вам нужен промежуток между колоннами. Чтобы добавить промежуток между столбцами, используйте свойство <code>grid-column-gap</code> следующим образом: <blockquote> сетка-столбик-зазор: 10 пикселей; </blockquote> Это создает 10px пустого пространства между всеми нашими столбцами. </section>

## Instructions
<section id="instructions"> Дайте столбцам в сетке пробел <code>20px</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: класс <code>container</code> должен иметь свойство <code>grid-column-gap</code> которое имеет значение <code>20px</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-column-gap</code> property that has the value of <code>20px</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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
    /* add your code below this line */


    /* add your code above this line */
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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
