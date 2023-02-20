---
id: 5dfa30b9eacea3f48c6300ad
title: Step 15
challengeType: 0
dashedName: step-15
---

# --description--

Nei passaggi precedenti hai usato un elemento di ancoraggio per trasformare il testo in un link. Anche altri tipi di contenuto possono essere trasformati in un link racchiudendoli in tag di ancoraggio.

Trasforma l'immagine in un link circondandola con i tag necessari. Usa `https://freecatphotoapp.com` come valore dell'attributo dell'elemento di ancoraggio `href`.

# --hints--

Dovresti avere un elemento `img` con un valore `src` di `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`. Potresti averlo eliminato accidentalmente.

```js
assert(
  document.querySelector('img') &&
    document.querySelector('img').getAttribute('src') ===
      'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
);
```

L'elemento di ancoraggio (`a`) dovrebbe avere un tag di apertura. I tag di apertura hanno questa sintassi: `<elementName>`.

```js
assert(document.querySelectorAll('a').length >= 2);
```

Dovresti aggiungere un solo tag di apertura di ancoraggio (`a`). Rimuovi quelli di troppo.

```js
assert(document.querySelectorAll('a').length === 2);
```

L'elemento di ancoraggio (`a`) dovrebbe avere un tag di chiusura. I tag di chiusura hanno un carattere `/` subito dopo il carattere `<`.

```js
assert(code.match(/<\/a>/g).length >= 2);
```

Dovresti aggiungere un solo tag di chiusura di ancoraggio (`a`). Rimuovi quelli di troppo.

```js
assert(code.match(/<\/a>/g).length === 2);
```

L'elemento di ancoraggio (`a`) non ha un attributo `href`. Verifica che ci sia uno spazio dopo il nome del tag di apertura e/o che ci siano spazi prima di tutti i nomi degli attributi.

```js
assert(document.querySelector('a').hasAttribute('href'));
```

L'elemento di ancoraggio (`a`) dovrebbe contenere il link `https://freecatphotoapp.com`. Hai omesso l'URL o hai un refuso.

```js
assert(
  document.querySelectorAll('a')[1].getAttribute('href') ===
    'https://freecatphotoapp.com'
);
```

L'elemento `img` dovrebbe essere annidato all'interno dell'elemento di ancoraggio (`a`). L'intero elemento `img` dovrebbe essere all'interno dei tag di apertura e chiusura dell'elemento di ancoraggio (`a`).

```js
assert(document.querySelector('img').parentNode.nodeName === 'A');
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
--fcc-editable-region--
    </main>
  </body>
</html>
```

