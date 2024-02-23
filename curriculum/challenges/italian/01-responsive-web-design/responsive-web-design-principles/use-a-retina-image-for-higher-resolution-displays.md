---
id: 587d78b1367417b2b2512b0a
title: Usare un'immagine retina per display con risoluzione superiore
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cVZ4Rfp'
forumTopicId: 301142
dashedName: use-a-retina-image-for-higher-resolution-displays
---

# --description--

Con l'aumento dei dispositivi connessi a Internet, le loro dimensioni e specifiche variano, e i display che usano potrebbero essere diversi esternamente e internamente. La densità dei pixel è un aspetto che potrebbe essere diverso su un dispositivo rispetto agli altri e questa densità è conosciuta come Pixel Per Inch(PPI) o Dots Per Inch(DPI). Il display più famoso è quello noto come "Retina Display" sugli ultimi notebook Apple MacBook Pro e recentemente computer iMac. A causa della differenza di densità di pixel tra un display "Retina" e "Non-Retina", alcune immagini che non sono state fatte con un display ad alta risoluzione in mente potrebbero sembrare "pixelate" quando renderizzate su un display ad alta risoluzione.

Il modo più semplice per far apparire correttamente le immagini sui display ad alta risoluzione, come il "retina display" dei MacBook Pro è quello di definire i loro valori di `width` e `height` come la metà della dimensione del file originale. Ecco un esempio di un'immagine che usa solo la metà dell'altezza e della larghezza originali:

```html
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

# --instructions--

Imposta `width` e `height` del tag `img` a metà dei loro valori originali. In questo caso, sia l'`height` che la `width` originali sono `200px`.

# --hints--

Il tuo tag `img` dovrebbe avere una `width` di 100 pixel.

```js
assert(document.querySelector('img').width === 100);
```

Il tuo tag `img` dovrebbe avere una `height` di 100 pixel.

```js
assert(document.querySelector('img').height === 100);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```

# --solutions--

```html
<style>
  img { 
    height: 100px; 
    width: 100px; 
  }
</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```
