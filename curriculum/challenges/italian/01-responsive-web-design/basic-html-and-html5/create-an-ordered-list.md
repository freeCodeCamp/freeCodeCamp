---
id: bad87fee1348bd9aedf08828
title: Creare una lista ordinata
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cQ3B8TM'
forumTopicId: 16824
dashedName: create-an-ordered-list
---

# --description--

HTML ha un altro elemento speciale per creare <dfn>liste ordinate</dfn> o elenchi numerati.

Le liste ordinate iniziano con un elemento di apertura `<ol>` , seguito da un numero qualsiasi di elementi `<li>`. Infine, le liste ordinate vengono chiuse con il tag `</ol>`.

Ad esempio:

```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

creerebbe una lista numerata di `Garfield` e `Sylvester`.

# --instructions--

Crea una lista ordinata delle tre cose che i gatti odiano di più.

# --hints--

Dovresti avere una lista ordinata per `Top 3 things cats hate:`

```js
assert(/Top 3 things cats hate:/i.test($('ol').prev().text()));
```

Dovresti avere una lista non ordinata per `Things cats love:`

```js
assert(/Things cats love:/i.test($('ul').prev().text()));
```

Dovresti avere un solo elemento `ul`.

```js
assert.equal($('ul').length, 1);
```

Dovresti avere un solo elemento `ol`.

```js
assert.equal($('ol').length, 1);
```

Dovresti avere tre elementi `li` all'interno del tuo elemento `ul`.

```js
assert.equal($('ul li').length, 3);
```

Dovresti avere tre elementi `li` all'interno del tuo elemento `ol`.

```js
assert.equal($('ol li').length, 3);
```

Il tuo elemento `ul` dovrebbe avere un tag di chiusura.

```js
assert(
  code.match(/<\/ul>/g) &&
    code.match(/<\/ul>/g).length === code.match(/<ul>/g).length
);
```

Il tuo elemento `ol` dovrebbe avere un tag di chiusura.

```js
assert(
  code.match(/<\/ol>/g) &&
    code.match(/<\/ol>/g).length === code.match(/<ol>/g).length
);
```

Il tuo elemento `li` dovrebbe avere un tag di chiusura.

```js
assert(
  code.match(/<\/li>/g) &&
    code.match(/<li>/g) &&
    code.match(/<\/li>/g).length === code.match(/<li>/g).length
);
```

Gli elementi `li` nella tua lista non ordinata non dovrebbero essere vuoti.

```js
$('ul li').each((i, val) =>
  assert(__helpers.removeWhiteSpace(val.textContent))
);
```

Gli elementi `li` nella tua lista ordinata non dovrebbero essere vuoti.

```js
$('ol li').each((i, val) =>
  assert(!!__helpers.removeWhiteSpace(val.textContent))
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
    <li>hate 1</li>
    <li>hate 2</li>
    <li>hate 3</li>
  </ol>
</main>
```
