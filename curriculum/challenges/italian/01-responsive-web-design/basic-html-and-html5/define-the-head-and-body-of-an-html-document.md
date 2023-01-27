---
id: 587d78aa367417b2b2512aec
title: Definire l'head e il body di un documento HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra9bfP'
forumTopicId: 301096
dashedName: define-the-head-and-body-of-an-html-document
---

# --description--

Puoi aggiungere un altro livello di organizzazione nel tuo documento HTML all'interno dei tag `html` con gli elementi `head` e `body`. Qualsiasi markup con informazioni sulla tua pagina dovrebbe essere inserito nel tag `head`. Qualsiasi markup con il contenuto della pagina (quello che viene visualizzato dall'utente) dovrebbe invece andare nel tag `body`.

Gli elementi contenenti metadati, come `link`, `meta`, `title`, e `style`, normalmente vanno all'interno dell'elemento `head`.

Ecco un esempio del layout di una pagina:

```html
<!DOCTYPE html>
<html>
  <head>
   <meta charset="utf-8">
   <title>Example title</title>
  </head>
  <body>
    <div>
    </div>
  </body>
</html>
```

# --instructions--

Modifica il markup in modo che ci siano una `head` e un `body`. L'elemento `head` dovrebbe includere solo il `title`, e l'elemento `body` dovrebbe includere solo `h1` e `p`.

# --hints--

Ci dovrebbe essere un solo elemento `head` nella pagina.

```js
const headElems = code.replace(/\n/g, '').match(/\<head\s*>.*?\<\/head\s*>/g);
assert(headElems && headElems.length === 1);
```

Ci dovrebbe essere solo un elemento `body` nella pagina.

```js
const bodyElems = code.replace(/\n/g, '').match(/<body\s*>.*?<\/body\s*>/g);
assert(bodyElems && bodyElems.length === 1);
```

L'elemento `head` dovrebbe essere un figlio dell'elemento `html`.

```js
const htmlChildren = code
  .replace(/\n/g, '')
  .match(/<html\s*>(?<children>.*)<\/html\s*>/);
let foundHead;
if (htmlChildren) {
  const { children } = htmlChildren.groups;

  foundHead = children.match(/<head\s*>.*<\/head\s*>/);
}
assert(foundHead);
```

L'elemento `body` dovrebbe essere un figlio dell'elemento `html`.

```js
const htmlChildren = code
  .replace(/\n/g, '')
  .match(/<html\s*>(?<children>.*?)<\/html\s*>/);
let foundBody;
if (htmlChildren) {
  const { children } = htmlChildren.groups;
  foundBody = children.match(/<body\s*>.*<\/body\s*>/);
}
assert(foundBody);
```

L'elemento `head` dovrebbe racchiudere l'elemento `title`.

```js
const headChildren = code
  .replace(/\n/g, '')
  .match(/<head\s*>(?<children>.*?)<\/head\s*>/);
let foundTitle;
if (headChildren) {
  const { children } = headChildren.groups;
  foundTitle = children.match(/<title\s*>.*?<\/title\s*>/);
}
assert(foundTitle);
```

L'elemento `body` dovrebbe racchiudere entrambi gli elementi `h1` e `p`.

```js
const bodyChildren = code
  .replace(/\n/g, '')
  .match(/<body\s*>(?<children>.*?)<\/body\s*>/);
let foundElems;
if (bodyChildren) {
  const { children } = bodyChildren.groups;
  const h1s = children.match(/<h1\s*>.*<\/h1\s*>/g);
  const ps = children.match(/<p\s*>.*<\/p\s*>/g);
  const numH1s = h1s ? h1s.length : 0;
  const numPs = ps ? ps.length : 0;
  foundElems = numH1s === 1 && numPs === 1;
}
assert(foundElems);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

</html>
```

# --solutions--

```html
<!DOCTYPE html>
<html>
 <head>
  <title>The best page ever</title>
 </head>
 <body>
  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
 </body>
</html>
```
