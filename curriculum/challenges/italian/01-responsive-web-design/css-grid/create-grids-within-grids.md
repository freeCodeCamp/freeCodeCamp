---
id: 5a94fe8569fb03452672e464
title: Creare griglie all'interno di griglie
challengeType: 0
forumTopicId: 301128
dashedName: create-grids-within-grids
---

# --description--

Trasformare un elemento in una griglia influisce solo sul comportamento dei suoi discendenti diretti. Quindi, trasformando un discendente diretto in una griglia, avrai una griglia all'interno di un'altra griglia.

Ad esempio, impostando le proprietà `display` e `grid-template-columns` dell'elemento di classe `item3`, creerai una griglia all'interno della tua griglia.

# --instructions--

Trasforma l'elemento di classe `item3` in una griglia con due colonne di larghezza `auto` e `1fr`, utilizzando `display` e `grid-template-columns`.

# --hints--

La classe `item3` dovrebbe avere una proprietà `grid-template-columns` con `auto` e `1fr` come valori.

```js
assert(
  code.match(
    /.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi
  )
);
```

La classe `item3` dovrebbe avere una proprietà `display` con il valore `grid`.

```js
assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>
```

# --solutions--

```html
<style>.item3 {grid-template-columns: auto 1fr; display: grid;}</style>
```
