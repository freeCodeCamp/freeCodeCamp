---
id: 587d781b367417b2b2512abc
title: Regolare il colore di sfondo del testo
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDqwA6'
forumTopicId: 301032
dashedName: adjust-the-background-color-property-of-text
---

# --description--

Invece di regolare lo sfondo generale o il colore del testo per rendere il primo piano facilmente leggibile, puoi aggiungere un `background-color` all'elemento che contiene il testo che vuoi enfatizzare. Questa sfida utilizza il formato `rgba()` invece dei codici esadecimali `hex` o il classico `rgb()`.

<blockquote>rgba sta per:<br> r = rosso<br> g = verde <br>b = blu <br>a = alfa/livello di opacità</blockquote>

I valori RGB possono variare da 0 a 255. Il valore alfa può variare da 1, che è rappresenta un colore completamente opaco, a 0, che invece è completamente trasparente. `rgba()` è ottimo da usare in questo caso, in quanto consente di regolare l'opacità. Ciò significa che non è necessario coprire completamente lo sfondo.

Per questa sfida utilizzerai `background-color: rgba(45, 45, 45, 0.1)`. Questo produce un colore grigio scuro che è quasi trasparente, per via del basso valore di opacità di 0.1.

# --instructions--

Per far risaltare ulteriormente il testo, aggiusta il `background-color` dell'elemento `h4` al valore `rgba()` indicato sopra.

Inoltre, sempre per il tag `h4`, rimuovi la proprietà `height` e aggiungi un `padding` di 10 px.

# --hints--

Il tuo codice dovrebbe aggiungere una proprietà `background-color` all'elemento `h4`, impostata su `rgba(45, 45, 45, 0.1)`.

```js
assert(
  /(background-color|background):rgba\(45,45,45,0?\.1\)(;?}|;)/gi.test(
    code.replace(/\s/g, '')
  )
);
```

Il tuo codice dovrebbe aggiungere una proprietà `padding` all'elemento `h4` e impostarla a 10 pixel.

```js
assert(
  $('h4').css('padding-top') == '10px' &&
    $('h4').css('padding-right') == '10px' &&
    $('h4').css('padding-bottom') == '10px' &&
    $('h4').css('padding-left') == '10px'
);
```

La proprietà `height` dell'elemento `h4` dovrebbe essere rimossa.

```js
assert(!($('h4').css('height') == '25px'));
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;


  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
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
<div class="fullCard">
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
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1);
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
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
<div class="fullCard">
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
