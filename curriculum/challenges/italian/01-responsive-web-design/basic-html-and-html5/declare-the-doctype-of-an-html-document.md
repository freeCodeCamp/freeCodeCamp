---
id: 587d78aa367417b2b2512aed
title: Dichiarare il Doctype di un documento HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra98AJ'
forumTopicId: 301095
dashedName: declare-the-doctype-of-an-html-document
---

# --description--

Le sfide finora hanno riguardato specifici elementi HTML e i loro utilizzi. Tuttavia, ci sono alcuni elementi che danno struttura generale alla tua pagina, e dovrebbero essere inclusi in ogni documento HTML.

Nella parte superiore del documento, è necessario dire al browser quale versione di HTML la tua pagina sta utilizzando. L'HTML è un linguaggio in evoluzione e viene aggiornato regolarmente. La maggior parte dei browser più importanti supportano le ultime specifiche, che è HTML5. Tuttavia, le pagine web più vecchie potrebbero utilizzare versioni precedenti del linguaggio.

Darai al browser queste informazioni aggiungendo un tag `<!DOCTYPE ...>` nella prima riga, dove la parte `...` è la versione di HTML. Per HTML5, si utilizza `<!DOCTYPE html>`.

Il `!` e il `DOCTYPE` maiuscolo sono importanti, specialmente per i browser più vecchi. L'`html` non fa differenza tra maiuscole e minuscole.

Successivamente, il resto del tuo codice HTML deve essere inserito nei tag `html`. Il tag di apertura `<html>` va direttamente al di sotto della riga `<!DOCTYPE html>`, e quello di chiusura `</html>` va alla fine della pagina.

Ecco un esempio della struttura della pagina. Il tuo codice HTML dovrebbe andare nello spazio tra i due tag `html`.

```html
<!DOCTYPE html>
<html>

</html>
```

# --instructions--

Aggiungi un tag `DOCTYPE` per HTML5 nella parte superiore del documento HTML vuoto nell'editor del codice. Sotto di esso, aggiungi i tag di apertura e chiusura `html`, che racchiudono un elemento `h1`. L'intestazione può includere qualsiasi testo.

# --hints--

Il tuo codice dovrebbe includere un tag `<!DOCTYPE html>`.

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

Dovrebbe esserci un elemento `html`.

```js
assert($('html').length == 1);
```

I tag `html` dovrebbero avvolgere un elemento `h1`.

```js
assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>
```
