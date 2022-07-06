---
id: 587d78a4367417b2b2512ad5
title: Regolare la tonalità di un colore
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
dashedName: adjust-the-tone-of-a-color
---

# --description--

L'opzione `hsl()` in CSS rende facile anche regolare la tonalità di un colore. Mescolando il bianco con una tonalità pura si crea una versione più delicata di quel colore, e aggiungendo del nero lo si scurisce. In alternativa, si può produrre una tonalità aggiungendo grigio o tinteggiando e ombreggiando. Ricorda che la 's' e la 'l' di `hsl()` stanno per saturazione e luminosità, rispettivamente. La percentuale di saturazione cambia la quantità di grigio e la percentuale di luminosità determina quanto bianco o nero ci sarà nel colore. Questo è utile quando hai una tonalità di base che ti piace, ma hai bisogno di diverse varianti di essa.

# --instructions--

Tutti gli elementi hanno un `background-color` predefinito `transparent`. Il nostro elemento `nav` sembra avere uno sfondo `cyan`, perché l'elemento dietro di esso ha un `background-color` impostato su `cyan`. Aggiungi un `background-color` all'elemento `nav` in modo che usi la stessa tonalità `cyan`, ma abbia `80%` di saturazione e `25%` di luminosità per cambiarne tono e ombra.

# --hints--

L'elemento `nav` dovrebbe avere un `background-color` del colore ciano regolato utilizzando la proprietà `hsl()`.

```js
// Computed style of hsl(180, 80%, 25%) results in rgb(13,115,115)
assert.equal(
  new __helpers.CSSHelp(document).getStyle('nav').getPropVal('background-color', true), 
  'rgb(13,115,115)'
)
```

# --seed--

## --seed-contents--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

# --solutions--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {
    background-color: hsl(180, 80%, 25%);
  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```
