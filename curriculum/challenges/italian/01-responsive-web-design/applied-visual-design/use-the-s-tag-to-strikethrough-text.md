---
id: 587d781b367417b2b2512aba
title: Usare il tag s per barrare il testo
challengeType: 0
videoUrl: ''
forumTopicId: 301079
dashedName: use-the-s-tag-to-strikethrough-text
---

# --description--

Per barrare il testo, ovvero tracciare una linea orizzontale che tagli i caratteri, è possibile utilizzare il tag `s`. Esso indica che una sezione di testo non è più valida. Con il tag `s`, il browser applica il CSS di `text-decoration: line-through;` all'elemento.

# --instructions--

Avvolgi le tag `s` attorno a `Google` dentro le tag `h4` e poi aggiungi la parola `Alphabet` affianco senza la formattazione barrata.

# --hints--

Il tuo codice dovrebbe aggiungere un tag `s` al markup.

```js
assert($('s').length == 1);
```

Un tag `s` dovrebbe avvolgere il testo `Google` nel tag `h4`. Esso non dovrebbe contenere la parola `Alphabet`.

```js
assert(
  $('h4 > s')
    .text()
    .match(/Google/gi) &&
    !$('h4 > s')
      .text()
      .match(/Alphabet/gi)
);
```

Dovresti includere la parola `Alphabet` nel tag `h4`, senza formattazione barrata.

```js
assert(
  $('h4')
    .html()
    .match(/Alphabet/gi)
);
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
      <h4>Google</h4>
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
      <h4><s>Google</s> Alphabet</h4>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
