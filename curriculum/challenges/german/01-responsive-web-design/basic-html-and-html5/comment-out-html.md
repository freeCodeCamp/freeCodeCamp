---
id: bad87fee1348bd9aedf08804
title: HTML auskommentieren
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cGyGbca'
forumTopicId: 16782
dashedName: comment-out-html
---

# --description--

Denke daran, dass du, um einen Kommentar zu beginnen, `<!--` und um einen Kommentar zu beenden, `-->` verwenden musst

Hier musst du den Kommentar beenden, bevor dein `h2`-Element beginnt.

# --instructions--

Kommentiere dein `h1`-Element und dein `p`-Element aus, aber nicht dein `h2`-Element.

# --hints--

Dein `h1`-Element sollte auskommentiert werden, damit es auf der Seite nicht sichtbar ist.

```js
assert($('h1').length === 0);
```

Dein `h2`-Element sollte nicht auskommentiert werden, damit es auf der Seite sichtbar ist.

```js
assert($('h2').length > 0);
```

Dein `p`-Element sollte auskommentiert werden, damit es auf der Seite nicht sichtbar ist.

```js
assert($('p').length === 0);
```

Jeder deiner Kommentare sollte mit `-->` abgeschlossen werden.

```js
assert(code.match(/[^fc]-->/g).length > 1);
```

Du solltest die Reihenfolge des `h1`, `h2`, oder `p` Elements in deinem Code nicht ändern.

```js
assert(
  code.match(/<([a-z0-9]){1,2}>/g)[0] === '<h1>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[1] === '<h2>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[2] === '<p>'
);
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
<!--<h1>Hello World</h1>-->
<h2>CatPhotoApp</h2> 
<!--<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p> -->
```
