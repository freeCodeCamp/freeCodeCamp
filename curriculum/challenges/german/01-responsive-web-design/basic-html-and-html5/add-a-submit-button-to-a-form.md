---
id: bad87fee1348bd9aedd08830
title: Füge einen Absenden-Button (Submit) zu einem Formular hinzu
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
dashedName: add-a-submit-button-to-a-form
---

# --description--

Lass uns einen `submit` Button zum Formular hinzufügen. Wenn du auf diesen Button klickst, werden die Daten deines Formulars an die URL gesendet, die du mit dem `action`-Attribut deines Formulars festgelegt hast.

Hier ist ein Beispiel für einen Absenden-Button:

```html
<button type="submit">this button submits the form</button>
```

# --instructions--

Füge einen Button als letztes Element deines `form`-Elements mit dem Typ `submit` und `Submit` als dessen Text hinzu.

# --hints--

Dein Formular `form` sollte einen `button` enthalten.

```js
assert($('form').children('button').length > 0);
```

Dein Absenden-Button sollte ein Attribut `type` haben, das auf `submit` gesetzt ist.

```js
assert($('button').attr('type') === 'submit');
```

Dein Absenden-Button sollte nur den Text `Submit` haben.

```js
assert(
  $('button')
    .text()
    .match(/^\s*submit\s*$/gi)
);
```

Dein `button`-Element sollte einen schließenden Tag besitzen.

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
