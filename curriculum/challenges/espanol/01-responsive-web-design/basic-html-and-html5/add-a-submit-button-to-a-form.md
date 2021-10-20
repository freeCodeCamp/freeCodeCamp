---
id: bad87fee1348bd9aedd08830
title: Agrega un botón de envío a un formulario
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
dashedName: add-a-submit-button-to-a-form
---

# --description--

Agreguemos un botón `submit` a tu formulario. Al hacer clic en este botón se enviarán los datos de tu formulario a la URL especificada con el atributo `action` de tu formulario.

Aquí hay un ejemplo de botón de envío:

```html
<button type="submit">this button submits the form</button>
```

# --instructions--

Agrega un botón del tipo `submit` como último elemento de tu formulario `form`, y usa `Submit` como su texto.

# --hints--

Tu formulario `form` debe tener un botón `button` dentro de él.

```js
assert($('form').children('button').length > 0);
```

Tu botón de envío debe tener el atributo `type` establecido como `submit`.

```js
assert($('button').attr('type') === 'submit');
```

Tu botón de envío solo debe contener el texto `Submit`.

```js
assert(
  $('button')
    .text()
    .match(/^\s*submit\s*$/gi)
);
```

Tu elemento `button` debe tener una etiqueta de cierre.

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
