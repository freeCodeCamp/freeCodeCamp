---
id: 5a94fe2669fb03452672e45e
title: Usar grid-area sem criar um modelo de áreas
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
forumTopicId: 301135
dashedName: use-grid-area-without-creating-an-areas-template
---

# --description--

A propriedade `grid-area` que você aprendeu no último desafio pode ser usada de outra maneira. Se o seu grid não possuir um modelo de áreas para fazer referência, você pode rapidamente definir uma área para um item assim:

```css
item1 { grid-area: 1/1/2/4; }
```

Esta abordagem usa os números de linha que você aprendeu anteriormente para definir onde ficará a área deste item. Os números no exemplo acima podem ser lidos assim:

```css
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

Portanto, o item no exemplo permanecerá entre as linhas 1 e 2 e entre as colunas 1 e 4.

# --instructions--

Usando a propriedade `grid-area`, coloque o elemento com a classe `item5` entre a terceira e a quarta linha e entre a primeira e a quarta coluna.

# --hints--

O elemento de classe `item5` deve ter a propriedade `grid-area` definida para ocupar toda a área entre a terceira e a quarta linha e a primeira e a quarta coluna.

```js
assert(
  code.match(
    /.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi
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

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

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
<style>.item5 {grid-area: 3/1/4/4;}</style>
```
