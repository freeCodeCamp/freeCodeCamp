---
id: 587d781b367417b2b2512abe
title: Aggiungere un effetto ombra ad un elemento in stile Card
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZdUd'
forumTopicId: 301031
dashedName: add-a-box-shadow-to-a-card-like-element
---

# --description--

La proprietà `box-shadow` applica una o più ombre ad un elemento.

La proprietà `box-shadow` prende i seguenti valori, in ordine:

<ul>
  <li><code>offset-x</code> (quanto l'ombra si sposta orizzontalmente dall'elemento)</li>
  <li><code>offset-y</code> (quanto l'ombra si sposta verticalmente dall'elemento)</li>
  <li><code>blur-radius</code></li>
  <li><code>spread-radius</code></li>
  <li><code>color</code></li>
</ul>

I valori `blur-radius` e `spread-radius` sono opzionali.

È possibile creare più ombre usando le virgole per separare le proprietà di ogni elemento `box-shadow`.

Ecco un esempio di CSS per creare ombre multiple con un po' di sfocatura, per lo più di colore nero e quasi trasparente:

```css
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
```

# --instructions--

L'elemento adesso ha un id di `thumbnail`. Tramite questo selettore, utilizza i valori CSS nell'esempio sopra per posizionare una `box-shadow` sulla card.

# --hints--

Il tuo codice dovrebbe aggiungere una proprietà `box-shadow` per l'id `thumbnail`.

```js
assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g));
```

Dovresti usare il CSS nell'esempio per assegnare il valore di `box-shadow`.

```js
assert(
  code.match(
    /box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\)\s*?,\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi
  )
);
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
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
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
