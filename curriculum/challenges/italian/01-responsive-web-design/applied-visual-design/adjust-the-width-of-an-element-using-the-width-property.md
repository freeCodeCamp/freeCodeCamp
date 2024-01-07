---
id: 587d7791367417b2b2512ab4
title: Regolare la larghezza di un elemento usando la proprietà width
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVLPtN'
forumTopicId: 301039
dashedName: adjust-the-width-of-an-element-using-the-width-property
---

# --description--

In CSS è possibile specificare la larghezza di un elemento utilizzando la proprietà `width`. I valori possono essere forniti in unità di lunghezza relativa (come `em`), unità di lunghezza assoluta (come `px`), o come percentuale dell'elemento genitore (parent). Ecco un esempio che imposta la larghezza di un'immagine a 220px:

```css
img {
  width: 220px;
}
```

# --instructions--

Aggiungi una proprietà `width` all'intera card e impostala ad un valore assoluto di 245px. Usa la classe `fullCard` per selezionare l'elemento.

# --hints--

Il tuo codice dovrebbe portare la proprietà `width` della card a 245 pixel utilizzando il selettore di classe `fullCard`.

```js
const fullCard = code.match(/\.fullCard\s*{[\s\S]+?[^}]}/g);
assert(
  fullCard &&
    /width\s*:\s*245px\s*(;|})/gi.test(fullCard[0]) &&
    $('.fullCard').css('maxWidth') === 'none'
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {

    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
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
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
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
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
