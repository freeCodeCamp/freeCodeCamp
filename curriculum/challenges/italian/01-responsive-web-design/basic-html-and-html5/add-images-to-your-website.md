---
id: bad87fee1348bd9aedf08812
title: Aggiungere immagini al tuo sito web
challengeType: 0
forumTopicId: 16640
dashedName: add-images-to-your-website
---

# --description--

Puoi aggiungere immagini al tuo sito web utilizzando l'elemento `img` e facendolo puntare all'URL di un'immagine specifica usando l'attributo `src`.

Un esempio di questo è:

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg">
```

Nota che gli elementi `img` si auto-completano.

Tutti gli elementi `img` **devono** avere un attributo `alt`. Il testo all'interno dell' attributo `alt` viene utilizzato dagli screen reader per migliorare l'accessibilità e viene anche visualizzato nel caso di problemi di caricamento dell'immagine.

**Nota:** Se l'immagine è puramente decorativa, utilizzare un attributo `alt` vuoto è la pratica migliore.

Idealmente l'attributo `alt` non dovrebbe contenere caratteri speciali a meno che non sia necessario.

Aggiungiamo un attributo `alt` al nostro esempio `img` precedente:

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg" alt="freeCodeCamp logo">
```

# --instructions--

Cerchiamo di aggiungere un'immagine al nostro sito web:

All'interno dell'elemento `main` esistente, inserisci un elemento `img` prima degli elementi `p` esistenti.

Ora imposta l'attributo `src` in modo che punti all'url `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`

Infine, non dimenticare di dare al tuo elemento `img` un attributo `alt` con il relativo testo.

# --hints--

La tua pagina dovrebbe avere un elemento immagine.

```js
assert($('img').length);
```

La tua immagine dovrebbe avere un attributo `src` che punta all'immagine del gattino.

```js
assert(/^https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/relaxing-cat\.jpg$/i.test($('img').attr('src')));
```

L'elemento `alt` della tua immagine non dovrebbe essere vuoto.

```js
assert(
  $('img').attr('alt') &&
    $('img').attr('alt').length &&
    /<(?:img|IMG)\S*alt=(['"])(?!\1|>)\S+\1\S*\/?>/.test(
      __helpers.removeWhiteSpace(code)
    )
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>


  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
