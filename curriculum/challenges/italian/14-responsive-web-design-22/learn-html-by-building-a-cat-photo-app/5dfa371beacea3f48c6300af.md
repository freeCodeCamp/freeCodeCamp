---
id: 5dfa371beacea3f48c6300af
title: Step 19
challengeType: 0
dashedName: step-19
---

# --description--

L'aggiunta alla pagina un elemento d'intestazione di rango inferiore, denota l'inizio una nuova sottosezione.

Dopo l'ultimo elemento `h2` del secondo elemento `section`, aggiungi un elemento `h3` con il testo:

`Things cats love:`

# --hints--

Il secondo elemento `section` è mancante o non ha entrambi i tag di apertura e di chiusura.

```js
assert(
  document.querySelectorAll('main > section')[1] &&
    code.match(/\<\/section>/g).length == 2
);
```

Ci dovrebbe essere un elemento `h3` proprio sopra il tag di chiusura del secondo elemento `section`.

```js
assert(
  document.querySelectorAll('main > section')[1].lastElementChild.nodeName ===
    'H3'
);
```

L'elemento `h3` al di sopra del tag di chiusura dell'elemento `section` dovrebbe contenere il testo `Things cats love:`. Assicurati di includere i due punti alla fine del testo.

```js
assert(
  document
    .querySelectorAll('main > section')[1]
    .lastElementChild.innerText.toLowerCase()
    .replace(/\s+/g, ' ') === 'things cats love:'
);
```

Ci dovrebbe essere un elemento `h2` con il testo `Cat Lists` sopra l'ultimo elemento `h3` che è annidato nell'ultimo elemento `section`. Potresti aver accidentalmente eliminato l'elemento `h2`.

```js
const secondSectionLastElemNode = document.querySelectorAll('main > section')[1]
  .lastElementChild;
assert(
  secondSectionLastElemNode.nodeName === 'H3' &&
    secondSectionLastElemNode.previousElementSibling.innerText
      .toLowerCase()
      .replace(/\s+/g, ' ') === 'cat lists'
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
--fcc-editable-region--
      <section>
        <h2>Cat Lists</h2>

      </section>
--fcc-editable-region--
    </main>
  </body>
</html>
```

