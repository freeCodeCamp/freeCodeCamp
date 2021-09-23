---
id: bad87fee1348bd9aedf08829
title: Creare un campo di testo
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c2EVnf6'
forumTopicId: 16823
dashedName: create-a-text-field
---

# --description--

Creiamo ora un modulo (form) web.

Gli elementi `input` sono un modo conveniente per ottenere input dal tuo utente.

Puoi creare un input di testo come questo:

```html
<input type="text">
```

Nota che gli elementi `input` si auto-completano.

# --instructions--

Crea un elemento `input` di tipo `text` sotto le tue liste.

# --hints--

La tua app dovrebbe avere un elemento `input` di tipo `text`.

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
  <form>
    <input type="text">
  </form>
</main>
```
