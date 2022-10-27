---
id: bad87fee1348bd9aedf08802
title: HTML-Kommentare aufheben
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
dashedName: uncomment-html
---

# --description--

Das Kommentieren ist eine Möglichkeit, Kommentare für andere Entwickler innerhalb deines Codes zu hinterlassen, ohne die resultierende Ausgabe, die dem Endbenutzer angezeigt wird, zu beeinflussen.

Kommentieren ist auch eine bequeme Möglichkeit, Code inaktiv zu machen, ohne ihn vollständig löschen zu müssen.

Kommentare in HTML beginnen mit `<!--` und enden mit einem `-->`

# --instructions--

Entfernen die Kommentierung der Elemente `h1`, `h2` und `p`.

# --hints--

Dein `h1`-Element sollte auf der Seite sichtbar sein, indem du die Kommentierung aufhebst.

```js
assert($('h1').length > 0);
```

Dein `h2`-Element sollte auf der Seite sichtbar sein, indem du die Kommentierung aufhebst.

```js
assert($('h2').length > 0);
```

Dein `p`-Element sollte auf der Seite sichtbar sein, indem du die Kommentierung aufhebst.

```js
assert($('p').length > 0);
```

Auf der Seite sollten keine schließenden Kommentar-Tags sichtbar sein (d. h. `-->`).

```js
assert(!$('*:contains("-->")')[1]);
```

# --seed--

## --seed-contents--

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

# --solutions--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```
