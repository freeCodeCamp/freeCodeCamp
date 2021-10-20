---
id: 587d781c367417b2b2512ac0
title: Usare la proprietà text-transform per rendere il testo maiuscolo
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZQSP'
forumTopicId: 301081
dashedName: use-the-text-transform-property-to-make-text-uppercase
---

# --description--

La proprietà `text-transform` è usata in CSS per cambiare l'aspetto del testo. È un modo conveniente per assicurarsi che il testo su una pagina web appaia coerentemente, senza dover cambiare il contenuto di testo degli elementi HTML stessi.

La seguente tabella mostra come i diversi valori `text-transform`cambiano il testo di esempio "Transform me".

<table class='table table-striped'><thead><tr><th>Valore</th><th>Risultato</th></tr></thead><tbody><tr><td><code>lowercase</code></td><td>"transform me"</td></tr><tr><td><code>uppercase</code></td><td>"TRANSFORM ME"</td></tr><tr><td><code>capitalize</code></td><td>"Transform Me"</td></tr><tr><td><code>initial</code></td><td>Usa il valore predefinito</td></tr><tr><td><code>inherit</code></td><td>Usa il valore <code>text-transform</code> dell'elemento genitore</td></tr><tr><td><code>none</code></td><td><strong>Default:</strong> Usa il testo originale</td></tr></tbody></table>

# --instructions--

Trasforma il testo della proprietà `h4` in maiuscolo usando la proprietà `text-transform`.

# --hints--

Il testo `h4` dovrebbe essere `uppercase` (maiuscolo).

```js
assert($('h4').css('text-transform') === 'uppercase');
```

Il testo originale dell'h4 non dovrebbe essere modificato.

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
