---
id: 5b7d72c338cd7e35b63f3e14
title: Migliorare la compatibilità con i fallback del browser
challengeType: 0
videoUrl: ''
forumTopicId: 301087
dashedName: improve-compatibility-with-browser-fallbacks
---

# --description--

Quando si lavora con CSS è probabile che prima o poi si incontrino problemi di compatibilità del browser. Ecco perché è importante fornire fallback del browser per evitare potenziali problemi.

Quando il tuo browser analizza il CSS di una pagina web, ignora qualsiasi proprietà che non riconosce o supporta. Ad esempio, se si utilizza una variabile CSS per assegnare un colore di sfondo ad un sito, Internet Explorer ignorerà il colore di sfondo perché non supporta le variabili CSS. In questo caso, il browser userà qualsiasi valore abbia per quella proprietà. Se non riesce a trovare alcun altro valore impostato per quella proprietà, tornerà al valore predefinito, che in genere non è l'ideale.

Ciò significa che se si desidera fornire un fallback del browser, è sufficiente fornire un altro valore più ampiamente supportato immediatamente prima della dichiarazione. In questo modo un browser più vecchio avrà qualcosa su cui ripiegare, mentre un browser più recente interpreterà semplicemente qualsiasi dichiarazione arriverà più tardi nella cascata.

# --instructions--

Sembra che venga utilizzata una variabile per impostare il colore di sfondo della classe `.red-box`. Miglioriamo la compatibilità del nostro browser aggiungendo un'altra dichiarazione `background` subito prima della dichiarazione esistente e impostiamo il suo valore su `red`.

# --hints--

La tua regola `.red-box` dovrebbe includere un fallback con il `background` impostato su `red` immediatamente prima della dichiarazione `background` esistente.

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

# --solutions--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```
