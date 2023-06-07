---
id: bad87fee1348bd9aedf08736
title: Style das HTML Body Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
dashedName: style-the-html-body-element
---

# --description--

Nun lass uns einen neuen Start wagen und sprechen wir mal über CSS-Vererbung.

Jede HTML-Seite hat ein `body`-Element.

# --instructions--

Wir können beweisen, dass das `body`-Element hier existiert, indem wir ihm eine `background-color` von schwarz geben.

Wir können dies tun, indem wir das Folgende zu unserem `style`-Element hinzufügen:

```css
body {
  background-color: black;
}
```

# --hints--

Dein `body`-Element sollte eine `background-color` mit dem Wert schwarz haben.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Deine CSS-Regel sollte ordentlich formatiert sein, sowohl mit einer öffnenden als auch einer schließenden geschwungenen Klammer.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

Deine CSS-Eigenschaft sollte mit einem Semikolon enden.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>
```

# --solutions--

```html
<style>
body {
  background-color: black;
}
</style>
```
