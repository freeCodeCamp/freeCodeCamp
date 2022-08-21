---
id: 587d7791367417b2b2512ab3
title: Mithilfe der text-align-Eigenschaft visuelles Gleichgewicht schaffen
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3b4EAp'
forumTopicId: 301053
dashedName: create-visual-balance-using-the-text-align-property
---

# --description--

Dieser Abschnitt des Lehrplans konzentriert sich auf angewandtes visuelles Design. Die erste Aufgabengruppe baut auf dem gegebenen Kartenlayout auf, um eine Reihe von Grundprinzipien darzustellen.

Ein großer Anteil von Webinhalten besteht aus Text. CSS bietet mehrere Optionen, um sie mit der Eigenschaft `text-align` auszurichten.

`text-align: justify;` gibt jeder Zeile im Text die gleiche Breite.

`text-align: center;` zentriert den Text,

`text-align: right;` richtet den Text rechts aus

und `text-align: left;` (der Standardwert) richtet den Text links aus.

# --instructions--

Zentriere den Text des `h4`-Tags mit dem Inhalt "Google". Richte das Paragrafen-Tag mit den Informationen über die Googles Gründungsgeschichte im Blocksatz (justify) aus.

# --hints--

Dein Code sollte die text-align-Eigenschaft auf dem `h4`-Tag verwenden und sie auf `center` setzen.

```js
assert($('h4').css('text-align') == 'center');
```

Dein Code sollte die text-align-Eigenschaft auf dem `p`-Tag verwenden und sie auf `justify` setzen.

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
