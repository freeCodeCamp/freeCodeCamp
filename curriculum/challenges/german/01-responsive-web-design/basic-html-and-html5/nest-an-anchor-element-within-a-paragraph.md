---
id: bad87fee1348bd9aede08817
title: Ein Ankerelement innerhalb eines Absatzes einbetten
challengeType: 0
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

Du kannst Links innerhalb anderer Textelemente einfügen.

```html
<p>
  Here's a <a target="_blank" href="https://www.freecodecamp.org"> link to www.freecodecamp.org</a> for you to follow.
</p>
```

Lasst uns es an einem Beispiel erklären. Normaler Text wird in das `p`-Element eingeschlossen:

```html
<p> Here's a ... for you to follow. </p>
```

Als nächstes folgt das *Anker*-Element `<a>` (das einen schließenden Tag `</a>` benötigt):

```html
<a> ... </a>
```

`target` ist ein Anker-Tag-Attribut, das angibt, wo der Link geöffnet werden soll. Der Wert `_blank` legt fest, dass der Link in einem neuen Tab geöffnet wird. Das `href` ist ein Anker-Tag-Attribut, das die URL-Adresse des Links enthält:

```html
<a href="https://www.freecodecamp.org" target="_blank"> ... </a>
```

Der Text, `link to www.freecodecamp.org`, innerhalb des `a`-Elements wird <dfn>Ankertext</dfn> genannt und zeigt den Link zum Anklicken an:

```html
<a href=" ... " target="...">link to freecodecamp.org</a>
```

Die endgültige Ausgabe des Beispiels wird so aussehen:

Hier ist ein <a href="https://www.freecodecamp.org" target="_blank">Link zu www.freecodecamp.org</a>, dem du folgen kannst.

# --instructions--

Bette das vorhandene `a`-Element in ein neues `p`-Element ein. Erstellen Sie kein neuen Anker-Tag. Der neue Absatz sollte den Text `View more cat photos` enthalten, wobei `cat photos` ein Link ist und der Rest einfacher Text ist.

# --hints--

Du solltest nur ein `a`-Element haben.

```js
assert(
  $('a').length  === 1 
);
```

Das `a`-Element sollte auf "`https://www.freecatphotoapp.com`" verweisen.

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').length  === 1 
);
```

Dein `a`-Element sollte den Ankertext von `cat photos` besitzen.

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi)
);
```

Du solltest ein neues `p`-Element erstellen. Es sollten insgesamt mindestens 3 `p`-Tags in deinem HTML-Code vorkommen.

```js
assert($('p') && $('p').length > 2);
```

Dein `a`-Element sollte innerhalb deines neuen `p`-Elements eingebettet sein.

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').parent().is('p')
);
```

Dein `p`-Element sollte den Text `View more` enthalten (mit einem Leerzeichen dahinter).

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\smore\s/gi)
);
```

Dein `a`-Element sollte <em>nicht</em> den Text `View more` enthalten.

```js
assert(
  !$('a')
    .text()
    .match(/View\smore/gi)
);
```

Jedes deiner `p`-Elemente sollte einen schließenden Tag haben.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<p/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

Jedes deiner `a`-Elemente sollte einen schließenden Tag haben.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>View more <a target="_blank" href="https://www.freecatphotoapp.com">cat photos</a></p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
