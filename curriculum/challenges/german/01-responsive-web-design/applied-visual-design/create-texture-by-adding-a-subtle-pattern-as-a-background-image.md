---
id: 587d78a5367417b2b2512ad8
title: Durch Hinzufügen eines subtilen Hintergrundmusters eine Textur erstellen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQdwJC8'
forumTopicId: 301052
dashedName: create-texture-by-adding-a-subtle-pattern-as-a-background-image
---

# --description--

Man kann einen Hintergrund interessanter und ansehnlicher machen, indem man ihm ein subtiles Muster hinzufügt und damit eine Textur erzeugt. Der Schlüssel liegt natürlich in der Balance, damit er nicht zu prominent wird und vom Vordergrund ablenkt. Die Eigenschaft `background` unterstützt die Funktion `url()`, um ein Bild mit der gewünschten Textur oder einem Muster zu verlinken. Der Pfad des Links wird innerhalb der Klammern unter Anführungszeichen gesetzt.

# --instructions--

Lege unter Verwendung der URL `https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png` den `background` der gesamten Seite mit dem `body`-Selektor fest.

# --hints--

Dein `body`-Element sollte eine `background`-Eigenschaft auf eine `url()` mit dem angegebenen Link setzen.

```js
assert(
  code.match(
    /background(-image)?:\s*?url\(\s*("|'|)https:\/\/cdn-media-1\.freecodecamp\.org\/imgr\/MJAkxbh\.png\2\s*\)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {

  }
</style>
```

# --solutions--

```html
<style>
  body {
    background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");
  }
</style>
```
