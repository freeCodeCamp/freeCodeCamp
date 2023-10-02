---
id: 5dfb5ecbeacea3f48c6300b1
title: Step 21
challengeType: 0
dashedName: step-21
---

# --description--

Usa gli elementi list item (`li`) per creare punti in una lista. Ecco un esempio di elementi list item in una lista non ordinata:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

Dentro l'elemento `ul` annida tre elementi `li` per mostrare tre cose che piacciono ai gatti:

`cat nip` `laser pointers` `lasagna`

# --hints--

Dovresti avere tre elementi `li`. Ogni elemento `li` dovrebbe avere il proprio tag di apertura e chiusura.

```js
assert($('li').length === 3 && code.match(/<\/li\>/g).length === 3);
```

Dovresti avere tre elementi `li` con il testo `cat nip`, `laser pointers` e `lasagna` in qualsiasi ordine. Hai omesso del testo o hai un refuso.

```js
assert.deepStrictEqual(
  [...document.querySelectorAll('li')]
    .map((item) => item.innerText.toLowerCase())
    .sort((a, b) => a.localeCompare(b)),
  ['cat nip', 'lasagna', 'laser pointers']
);
```

I tre elementi `li` dovrebbero essere tra i tag di apertura e chiusura dell'elemento `ul`.

```js
assert(
  [...document.querySelectorAll('li')].filter(
    (item) => item.parentNode.nodeName === 'UL'
  ).length === 3
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
--fcc-editable-region--
        <ul>

        </ul>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

