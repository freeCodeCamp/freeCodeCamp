---
id: 587d781c367417b2b2512ac0
title: Usa la propiedad text-transform para hacer el texto mayúsculas
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZQSP'
forumTopicId: 301081
dashedName: use-the-text-transform-property-to-make-text-uppercase
---

# --description--

La propiedad `text-transform` en CSS se utiliza para cambiar la apariencia del texto. Es una forma conveniente de asegurarse de que el texto en una página web aparezca de manera consistente, sin tener que cambiar el contenido del texto de los elementos HTML reales.

La siguiente tabla muestra como los diferentes valores de `text-transform` cambian el texto de ejemplo "Transformame".

<table class='table table-striped'><thead><tr><th>Valor</th><th>Resultado</th></tr></thead><tbody><tr><td><code>lowercase</code></td><td>"Transformame"</td></tr><tr><td><code>uppercase</code></td><td>"TRANSFORMAME"</td></tr><tr><td><code>capitalize</code></td><td>"Transformame"</td></tr><tr><td><code>initial</code></td><td>Usa el valor predeterminado</td></tr><tr><td><code>inherit</code></td><td>Utiliza el valor <code>text-transform</code> del elemento principal</td></tr><tr><td><code>none</code></td><td><strong>Predeterminado:</strong> Usa el texto original</td></tr></tbody></table>

# --instructions--

Transforma el texto de `h4` en mayúsculas usando la propiedad `text-transform`.

# --hints--

El texto `h4` debe ser `uppercase`.

```js
assert($('h4').css('text-transform') === 'uppercase');
```

El texto original del h4 no debe cambiarse.

```js
assert($('h4').text() !== $('h4').text().toUpperCase());
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;

  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
    opacity: 0.7;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
    text-transform: uppercase;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
    opacity: 0.7;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
