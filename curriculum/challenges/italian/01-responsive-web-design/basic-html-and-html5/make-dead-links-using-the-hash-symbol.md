---
id: bad87fee1348bd9aedf08817
title: Creare collegamenti a vuoto utilizzando il simbolo hash
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMdkytL'
forumTopicId: 18230
dashedName: make-dead-links-using-the-hash-symbol
---

# --description--

A volte dovrai aggiungere degli elementi `a` al tuo sito web senza sapere a priori a cosa si collegheranno.

Questo è utile anche quando stai cambiando il comportamento di un link utilizzando `JavaScript`, che vedremo in seguito.

# --instructions--

Il valore corrente dell'attributo `href` è un link che punta a "`https://www.freecatphotoapp.com`". Sostituisci l'attributo `href` con un `#`, noto anche come simbolo hash, per creare un link vuoto.

Per esempio: `href="#"`

# --hints--

Il tuo elemento `a` dovrebbe essere un link vuoto con il valore dell'attributo `href` impostato a "#".

```js
assert($('a').attr('href') === '#');
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
