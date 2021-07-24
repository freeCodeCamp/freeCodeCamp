---
id: 587d78b1367417b2b2512b09
title: Rendere un'immagine responsiva
challengeType: 0
forumTopicId: 301140
dashedName: make-an-image-responsive
---

# --description--

Rendere le immagini responsive con CSS è in realtà molto semplice. È sufficiente aggiungere queste proprietà a un'immagine:

```css
img {
  max-width: 100%;
  height: auto;
}
```

La `max-width` di `100%` assicurerà che l'immagine non sia mai più larga del contenitore in cui si trova, e l'`height` impostata a `auto` farà in modo che l'immagine mantenga le sue proporzioni originali.

# --instructions--

Aggiungi le regole di stile alla classe `responsive-img` per renderla responsiva. Non dovrebbe mai essere più grande del suo contenitore (in questo caso la finestra di anteprima) e dovrebbe mantenere il suo rapporto di aspetto originale. Dopo aver aggiunto il codice, ridimensiona l'anteprima per vedere come si comportano le immagini.

# --hints--

La tua classe `responsive-img` dovrebbe avere una `max-width` impostata a `100%`.

```js
assert(getComputedStyle($('.responsive-img')[0]).maxWidth === '100%');
```

La tua classe `responsive-img` dovrebbe avere una `height` impostata su `auto`.

```js
assert(code.match(/height:\s*?auto;/g));
```

# --seed--

## --seed-contents--

```html
<style>
.responsive-img {


}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

# --solutions--

```html
<style>
.responsive-img {
  max-width: 100%;
  height: auto;
}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```
