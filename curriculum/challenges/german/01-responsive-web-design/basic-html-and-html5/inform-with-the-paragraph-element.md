---
id: bad87fee1348bd9aedf08801
title: Mit dem Absatzelement informieren
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ceZ7DtN'
forumTopicId: 18202
dashedName: inform-with-the-paragraph-element
---

# --description--

Das `p` Element ist das bevorzugte Element für den Absatztext auf Websites. `p` ist die Abkürzung für "paragraph" (engl.).

Du kannst ein Absatzelement wie folgt erstellen:

```html
<p>I'm a p tag!</p>
```

# --instructions--

Erstelle ein `p`-Element unterhalb deines `h2`-Elements, und gib ihm den Text `Hello Paragraph`.

**Hinweis:** Als Konvention werden alle HTML-Tags in Kleinbuchstaben geschrieben, zum Beispiel `<p></p>` und nicht `<P></P>`.

# --hints--

Dein Code sollte ein gültiges `p`-Element haben.

```js
assert($('p').length > 0);
```

Dein `p`-Element sollte den Text `Hello Paragraph` haben.

```js
assert.isTrue(/hello(\s)+paragraph/gi.test($('p').text()));
```

Dein `p`-Element sollte ein schließendes Tag haben.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```
