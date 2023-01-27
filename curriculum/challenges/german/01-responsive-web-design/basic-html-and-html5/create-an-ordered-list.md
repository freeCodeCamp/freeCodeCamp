---
id: bad87fee1348bd9aedf08828
title: Eine geordnete Liste erstellen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cQ3B8TM'
forumTopicId: 16824
dashedName: create-an-ordered-list
---

# --description--

HTML hat ein weiteres spezielles Element zum Erstellen von <dfn>geordneten Listen</dfn>, oder nummerierten Listen.

Geordnete Listen beginnen mit einem öffnenden `<ol>`-Element, gefolgt von einer beliebigen Anzahl von `<li>`-Elementen. Schließlich werden geordnete Listen mit dem `</ol>`-Tag geschlossen.

Zum Beispiel:

```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

würde eine nummerierte Liste mit `Garfield` und `Sylvester` erstellen.

# --instructions--

Erstelle ein geordnete Liste mit den Top 3 Dingen, die Katzen am meisten hassen.

# --hints--

Du solltest eine geordnete Liste für die `Top 3 things cats hate:` haben.

```js
assert(/Top 3 things cats hate:/i.test($('ol').prev().text()));
```

Du solltest eine ungeordnete Liste für `Dinge, die Katzen lieben:` haben.

```js
assert(/Things cats love:/i.test($('ul').prev().text()));
```

Du solltest nur ein `ul` Element haben.

```js
assert.equal($('ul').length, 1);
```

Du solltest nur ein `ol` Element haben.

```js
assert.equal($('ol').length, 1);
```

Du solltest drei `li` Elemente innerhalb deines `ul` Elements haben.

```js
assert.equal($('ul li').length, 3);
```

Du solltest drei `li` Elemente in deinem `ol` Element haben.

```js
assert.equal($('ol li').length, 3);
```

Dein `ul`-Element sollte ein schließendes Tag haben.

```js
assert(
  code.match(/<\/ul>/g) &&
    code.match(/<\/ul>/g).length === code.match(/<ul>/g).length
);
```

Dein `ol` Element sollte ein schließendes Tag haben.

```js
assert(
  code.match(/<\/ol>/g) &&
    code.match(/<\/ol>/g).length === code.match(/<ol>/g).length
);
```

Dein `li` Element sollte ein schließendes Tag haben.

```js
assert(
  code.match(/<\/li>/g) &&
    code.match(/<li>/g) &&
    code.match(/<\/li>/g).length === code.match(/<li>/g).length
);
```

Die `li`-Elemente in deiner ungeordneten Liste sollten nicht leer sein.

```js
$('ul li').each((i, val) =>
  assert(__helpers.removeWhiteSpace(val.textContent))
);
```

Die `li`-Elemente in deiner geordneten Liste sollten nicht leer sein.

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
