---
id: bad87fee1348bd9aede08830
title: Erstellen eines Formularelements
challengeType: 0
forumTopicId: 16817
dashedName: create-a-form-element
---

# --description--

Du kannst Webformulare erstellen, die tatsächlich Daten an einen Server übermitteln, indem du nichts weiter als reines HTML verwendest. Dies kannst du erreichen, indem du ein `action`-Attribut in deinem `form`-Element platzierst.

Zum Beispiel:

```html
<form action="url-where-you-want-to-submit-form-data">
  <input>
</form>
```

# --instructions--

Bette das bestehende `input`-Element in ein `form`-Element ein und weise dem `action`-Attribut des `form`-Elements `"https://www.freecatphotoapp.com/submit-cat-photo"` zu.

# --hints--

Das vorhandene `input`-Element sollte in ein `form`-Element eingebettet werden.

```js
const inputElem = document.querySelector('form input');
assert(
  inputElem.getAttribute('type') === 'text' &&
    inputElem.getAttribute('placeholder') === 'cat photo URL'
);
```

Dein `form`-Element sollte ein `action`-Attribut besitzen, das auf `https://www.freecatphotoapp.com/submit-cat-photo` gesetzt ist.

```js
const action = $('form').attr('action');
assert(action.match(/^https:\/\/(www\.)?freecatphotoapp\.com\/submit-cat-photo$/i))
```

Dein `form`-Element sollte korrekte öffnende und schließende Tags haben.

```js
assert(
  code.match(/<\/form>/g) &&
    code.match(/<form [^<]*>/g) &&
    code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length
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
  <input type="text" placeholder="cat photo URL">
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
  </form>
</main>
```
