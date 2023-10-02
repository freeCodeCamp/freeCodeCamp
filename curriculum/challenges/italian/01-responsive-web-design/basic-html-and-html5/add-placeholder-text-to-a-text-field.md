---
id: bad87fee1348bd9aedf08830
title: Aggiungere un testo segnaposto a un campo di testo
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cKdJDhg'
forumTopicId: 16647
dashedName: add-placeholder-text-to-a-text-field
---

# --description--

Il testo segnaposto è quello che viene visualizzato nell'elemento `input` prima che l'utente abbia inserito qualcosa.

Puoi creare il testo segnaposto in questo modo:

```html
<input type="text" placeholder="this is placeholder text">
```

**Nota:** Ricorda che gli elementi `input` non hanno bisogno di un tag di chiusura.

# --instructions--

Imposta il valore del `placeholder` (segnaposto) per il tuo `input` di testo su "cat photo URL".

# --hints--

Dovresti aggiungere un attributo `placeholder` all'elemento `input` di testo esistente.

```js
assert($('input[placeholder]').length > 0);
```

Dovresti impostare il valore del tuo attributo `placeholder` su `cat photo URL`.

```js
assert(
  $('input') &&
    $('input').attr('placeholder') &&
    $('input')
      .attr('placeholder')
      .match(/cat\s+photo\s+URL/gi)
);
```

L'elemento `input` finito non dovrebbe avere un tag di chiusura.

```js
assert(!code.match(/<input.*\/?>.*<\/input>/gi));
```

L'elemento `input` finito dovrebbe avere una sintassi valida.

```js
assert($('input[type=text]').length > 0);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text">
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text" placeholder="cat photo URL">
</main>
```
