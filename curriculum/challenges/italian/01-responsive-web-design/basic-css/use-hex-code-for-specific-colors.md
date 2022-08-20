---
id: bad87fee1348bd9aedf08726
title: Usare il codice esadecimale per colori specifici
challengeType: 0
videoUrl: 'https://scrimba.com/c/c8W9mHM'
forumTopicId: 18350
dashedName: use-hex-code-for-specific-colors
---

# --description--

Lo sapevi che ci sono altri modi per rappresentare i colori in CSS? Uno di questi modi è chiamato codice esadecimale, o codice hex per brevità.

Di solito usiamo <dfn>i numeri decimali</dfn> (o numeri in base 10), che usano i simboli da 0 a 9 per ogni cifra. <dfn>Gli esadecimali</dfn> (o <dfn>hex</dfn>) sono numeri in base 16. Ciò significa che utilizzano sedici simboli distinti. Come per i i decimali, i simboli 0-9 rappresentano i valori da zero a nove. I successivi simboli A,B,C,D,E,F rappresentano i valori da dieci a quindici. Complessivamente, una cifra esadecimale può andare da 0 a F, dandoci 16 valori totali possibili. Qui puoi trovare ulteriori informazioni sul <a href="https://it.wikipedia.org/wiki/Sistema_numerico_esadecimale" target="_blank" rel="noopener noreferrer nofollow">sistema numerico esadecimale</a>.

In CSS, possiamo usare 6 cifre esadecimali per rappresentare i colori, due ciascuna per le componenti rossa (R), verde (G) e blu (B). Ad esempio, `#000000` è nero ed è anche il valore più basso possibile. Qui puoi trovare più informazioni sul <a href="https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/#whatisthergbcolormodel" target="_blank" rel="noopener noreferrer nofollow">sistema di colori RGB</a>.

```css
body {
  color: #000000;
}
```

# --instructions--

Sostituisci la parola `black` nel colore di sfondo dell'elemento `body` con la sua rappresentazione esadecimale, `#000000`.

# --hints--

Il tuo elemento `body` dovrebbe avere il `background-color` nero.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

L'hex code per il colore nero dovrebbe essere utilizzato al posto della parola `black`.

```js
assert(
  code.match(
    /body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: #000000;
  }
</style>
```
