---
id: 587d7791367417b2b2512ab3
title: Creare equilibrio visivo usando la proprietà text-align
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3b4EAp'
forumTopicId: 301053
dashedName: create-visual-balance-using-the-text-align-property
---

# --description--

Questa sezione del curriculum si concentra sul Visual Design applicato. Il primo gruppo di sfide si basa sul layout delle card fornite, per mostrare una serie di principi fondamentali.

Il testo è spesso una buona parte del contenuto web. Il CSS ha diverse opzioni su come allinearlo con la proprietà `text-align`.

`text-align: justify;` spazia il testo in modo che ogni riga abbia la stessa lunghezza.

`text-align: center;` centra il testo

`text-align: right;` allinea il testo a destra

E `text-align: left;` (il predefinito) allinea il testo a sinistra.

# --instructions--

Allinea il testo del tag `h4`, quello che dice "Google", al centro. Giustifica quindi il tag paragrafo che contiene informazioni su come Google è stato fondato.

# --hints--

Il tuo codice dovrebbe utilizzare la proprietà text-align sul tag `h4` per impostarlo a `center`.

```js
assert($('h4').css('text-align') == 'center');
```

Il tuo codice dovrebbe utilizzare la proprietà text-align sul tag `p` per impostarlo su `justify`.

```js
assert($('p').css('text-align') == 'justify');
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

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
