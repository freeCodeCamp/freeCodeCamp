---
id: 587d781b367417b2b2512abb
title: Creare una linea orizzontale usando l'elemento hr
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3bR8t7'
forumTopicId: 301049
dashedName: create-a-horizontal-line-using-the-hr-element
---

# --description--

È possibile utilizzare il tag `hr` per aggiungere una linea orizzontale che attraversi la larghezza del suo elemento contenitore. Questo può essere usato per definire un cambio di argomento o per separare visivamente gruppi di contenuti.

# --instructions--

Aggiungi un tag `hr` sotto il tag `h4` che contiene il titolo della card.

**Nota:** In HTML, `hr` è un tag a chiusura automatica, e quindi non ha bisogno di un tag di chiusura separato.

# --hints--

Il tuo codice dovrebbe aggiungere un tag `hr` al markup.

```js
assert($('hr').length == 1);
```

Il tag `hr` dovrebbe stare tra il titolo e il paragrafo.

```js
assert(code.match(/<\/h4>\s*?<hr(>|\s*?\/>)\s*?<p>/gi));
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
      <h4><s>Google</s>Alphabet</h4>

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
      <h4><s>Google</s>Alphabet</h4>
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
