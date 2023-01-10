---
id: 5cddbfd622f1a59093ec611d
title: Creare un Modulo
challengeType: 6
forumTopicId: 301198
dashedName: create-a-module-script
---

# --description--

JavaScript ha iniziato con un piccolo ruolo da giocare in un web fatto per lo più di HTML. Oggi è enorme, e alcuni siti web sono costruiti quasi interamente con JavaScript. Per rendere JavaScript più modulare, pulito e mantenibile; ES6 ha introdotto un modo per condividere facilmente il codice tra i file JavaScript. Ciò comporta l'esportazione di parti di un file per l'utilizzo in uno o più altri file, e l'importazione delle parti di cui hai bisogno, dove ne hai bisogno. Per sfruttare questa funzionalità, devi creare uno script nel tuo documento HTML con un `type` di `module`. Ecco un esempio:

```html
<script type="module" src="filename.js"></script>
```

Uno script che utilizza questo tipo `module` può ora utilizzare le funzionalità di `import` e `export` che conoscerai nelle prossime sfide.

# --instructions--

Aggiungi al documento HTML uno script di tipo `module` e dagli `index.js` come file sorgente

# --hints--

Dovresti creare un tag `script`.

```js
assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
```

Il tuo tag `script` dovrebbe avere l'attributo `type` con un valore di `module`.

```js
assert(
  code.match(
    /<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

Il tuo tag `script` dovrebbe avere una `src` impostata su `index.js`.

```js
assert(
  code.match(
    /<\s*script\s+[^s]*src\s*=\s*('|")index\.js\1[^>]*>\s*<\/\s*script\s*>/g
  )
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
  </body>
</html>
```

# --solutions--

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```
