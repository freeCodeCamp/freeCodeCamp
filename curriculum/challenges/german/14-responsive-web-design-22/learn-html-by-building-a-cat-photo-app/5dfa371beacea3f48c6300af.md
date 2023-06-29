---
id: 5dfa371beacea3f48c6300af
title: Schritt 19
challengeType: 0
dashedName: step-19
---

# --description--

Wenn du ein untergeordnetes Überschriftenelement zur Seite hinzufügst, wird angedeutet, dass du einen neuen Unterabschnitt beginnst.

After the last `h2` element of the second `section` element, add an `h3` element with this text:

`Things cats love:`

# --hints--

Das zweite `section`-Element scheint zu fehlen oder es hat kein öffnendes und schließendes Tag.

```js
assert(
  document.querySelectorAll('main > section')[1] &&
    code.match(/\<\/section>/g).length == 2
);
```

Es sollte ein `h3`-Element direkt über dem schließenden Tag des zweiten `section`-Elements geben.

```js
assert(
  document.querySelectorAll('main > section')[1].lastElementChild.nodeName ===
    'H3'
);
```

Das `h3`-Element genau über dem schließenden Tags des zweiten `section`-Elements sollte den Text `Things cats love:` haben. Stelle sicher, dass der Doppelpunkt am Ende des Textes eingefügt wurde.

```js
assert(
  document
    .querySelectorAll('main > section')[1]
    .lastElementChild.innerText.toLowerCase()
    .replace(/\s+/g, ' ') === 'things cats love:'
);
```

Es sollte ein `h2`-Element mit dem Text `Cat Lists` oberhalb des letzten `h3`-Elements geben, das im letzten `section`-Element eingebettet wurde. Möglicherweise hast du versehentlich das `h2`-Element gelöscht.

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

