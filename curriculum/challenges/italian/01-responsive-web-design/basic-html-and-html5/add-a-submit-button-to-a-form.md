---
id: bad87fee1348bd9aedd08830
title: Aggiungere un pulsante di invio a un modulo
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
dashedName: add-a-submit-button-to-a-form
---

# --description--

Aggiungiamo un pulsante `submit` al tuo modulo. Facendo clic su questo pulsante invierai i dati dal tuo modulo all'URL specificato con l'attributo `action`.

Ecco un esempio di pulsante di invio:

```html
<button type="submit">this button submits the form</button>
```

# --instructions--

Aggiungi un pulsante come ultimo elemento del tuo elemento `form`, con type `submit` e testo `Submit`.

# --hints--

Il tuo `form` dovrebbe contenere un `button`.

```js
assert($('form').children('button').length > 0);
```

Il tuo pulsante di invio dovrebbe avere l'attributo `type` settato a `submit`.

```js
assert($('button').attr('type') === 'submit');
```

Il tuo pulsante di invio dovrebbe avere solo il testo `Submit`.

```js
assert(
  $('button')
    .text()
    .match(/^\s*submit\s*$/gi)
);
```

Il tuo elemento `button` dovrebbe avere un tag di chiusura.

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
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
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
  </form>
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
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```
