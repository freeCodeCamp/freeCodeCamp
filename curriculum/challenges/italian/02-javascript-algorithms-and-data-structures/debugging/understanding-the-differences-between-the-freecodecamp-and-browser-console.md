---
id: 587d7b83367417b2b2512b37
title: Comprendere le differenze tra la console di freeCodeCamp e quella del Browser
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

Potresti aver notato che alcune sfide di freeCodeCamp includono la propria console. Questa console si comporta in modo leggermente diverso rispetto alla console del browser.

Ci sono molti metodi che possono essere usati con `console` per scrivere messaggi sulla console. Alcuni di questi sono `log`, `warn`, e `clear`. Sulla console freeCodeCamp verranno scritti solo messaggi log `log`, mentre sulla console del browser tutti i messaggi. Quando fai modifiche al tuo codice, questo eseguirà automaticamente e mostrerà i log sulla console. La console di freeCodeCamp viene svuotata ogni volta che il tuo codice esegue.

# --instructions--

Per prima cosa, apri la console del tuo browser affinché tu possa vedere il log. Per farlo, puoi cliccare con il taso destro la barra di navigazione di freeCodeCamp in cima alla pagina e cliccare `inspect` (o "Ispeziona") nella maggior parte dei browser. Quindi trova la scheda `console` nella finestra che si apre.

Dopo questo, usa `console.log` per scrivere il valore della variabile `output` nella console. Guarda le due console per vedere il log. Infine, usa `console.clear` dopo il tuo log per pulire la console del browser. Vedi la differenza nelle due console.

# --hints--

Dovresti usare `console.log()` per visualizzare la variabile `output`.

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

Dovresti usare `console.clear()` per cancellare la console del browser.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

Dovresti pulire la console con `console.clear` dopo il tuo log.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console\.log\(output\)[\s\S]*console.clear\(\)/)
);
```

# --seed--

## --seed-contents--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

```

# --solutions--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();
```
