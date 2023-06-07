---
id: 587d7fa5367417b2b2512bbd
title: Einen Satz CSS-Stile auf ein anderes Element erweitern
challengeType: 0
forumTopicId: 301456
dashedName: extend-one-set-of-css-styles-to-another-element
---

# --description--

Sass hat eine Funktion namens `extend`, die es einfach macht, die CSS-Regeln von einem Element zu übernehmen und in einem anderen darauf aufzubauen.

Der folgende Block von CSS-Regeln stylt zum Beispiel eine `.panel`-Klasse. Es hat eine `background-color`, `height` und `border`.

```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

Jetzt willst du ein weiteres Panel namens `.big-panel`. Es hat die gleichen Basiseigenschaften wie `.panel`, braucht aber zusätzlich eine `width` und `font-size`. Es ist möglich, die ursprünglichen CSS-Regeln aus `.panel` zu kopieren und einzufügen, aber der Code wiederholt sich, wenn du mehr Arten von Panels hinzufügst. Die `extend`-Direktive ist eine einfache Möglichkeit, die Regeln, die für ein Element geschrieben wurden, wiederzuverwenden und dann weitere für ein anderes hinzuzufügen:

```scss
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

Das `.big-panel` hat die gleichen Eigenschaften wie `.panel` zusätzlich zu den neuen Stilen.

# --instructions--

Erstelle eine Klasse `.info-important`, die `.info` erweitert und außerdem eine `background-color` hat, die auf Magenta gesetzt ist.

# --hints--

Deine Klasse `info-important` sollte eine `background-color` haben, die auf `magenta` gesetzt ist.

```js
assert(
  code.match(
    /\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi
  )
);
```

Deine Klasse `info-important` sollte `@extend` verwenden, um das Styling von der Klasse `info` zu erben.

```js
assert(
  code.match(/\.info-important\s*?{[\s\S]*@extend\s*?.info\s*?;[\s\S]*/gi)
);
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }




</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important{
    @extend .info;
    background-color: magenta;
  }



</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```
