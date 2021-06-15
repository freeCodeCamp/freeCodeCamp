---
id: 587d78b1367417b2b2512b0c
title: Rendere i caratteri responsivi
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/crzN7T8'
forumTopicId: 301141
dashedName: make-typography-responsive
---

# --description--

Invece di utilizzare `em` o `px` per dimensionare il testo, è possibile utilizzare le unità di visualizzazione responsive per i caratteri. Le unità viewport, come le percentuali, sono unità relative, ma sono basate su elementi diversi. Le unità viewport sono relative alle dimensioni (larghezza o altezza) di un dispositivo, e le percentuali sono relative alla dimensione dell'elemento contenitore genitore.

Le quattro diverse unità viewport sono:

<ul><li><code>vw</code> (larghezza della viewport): <code>10vw</code> sarebbe il 10% della larghezza della viewport.</li><li><code>vh</code> (altezza della viewport): <code>3vh</code> sarebbe il 3% dell'altezza della viewport.</li><li><code>vmin</code> (minimo): <code>70vmin</code> sarebbe il 70% della dimensione più piccola della viewport (altezza o larghezza).</li><li><code>vmax</code> (viewport maximum): <code>100vmax</code> sarebbe 100% della dimensione maggiore della viewport (altezza o larghezza).</li></ul>

Ecco un esempio che imposta un tag `body` al 30% della larghezza della viewport.

```css
body { width: 30vw; }
```

# --instructions--

Imposta la `width` del tag `h2` all'80% della larghezza della viewport e la `width` del paragrafo come 75% della dimensione più piccola della viewport.

# --hints--

Il tuo tag `h2` dovrebbe avere una `width` di 80vw.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g)
);
```

Il tuo tag `p` dovrebbe avere una `width` di 75vmin.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  h2 {
      width: 80vw;
  }
  p {
      width: 75vmin;
  }
</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
