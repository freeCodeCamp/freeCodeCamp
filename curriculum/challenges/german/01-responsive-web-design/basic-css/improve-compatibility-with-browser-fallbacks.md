---
id: 5b7d72c338cd7e35b63f3e14
title: Verbessere die Kompatibilität mit Browser-Fallbacks
challengeType: 0
videoUrl: ''
forumTopicId: 301087
dashedName: improve-compatibility-with-browser-fallbacks
---

# --description--

Wenn du mit CSS arbeitest, wirst du wahrscheinlich irgendwann Browser-Kompatibilitätsprobleme erleben. Aus diesem Grund ist es wichtig, Browser-Fallbacks bereitzustellen, um möglichen Problemen zu vorzubeugen.

Wenn dein Browser das CSS einer Webseite parst, ignoriert er alle Eigenschaft, die er nicht erkennt oder unterstützt. Verwendest du beispielsweise eine CSS-Variable, um auf einer Seite eine Hintergrundfarbe festzulegen, dann ignoriert sie der Internet Explorer, da er keine CSS-Variablen unterstützt. In diesem Fall verwendet der Browser den nächsten definierten Wert, den er für diese Eigenschaft kennt. Wenn er keinen anderen Wert für diese Information finden kann, wird er auf den Standardwert zurückgesetzt, der normalerweise nicht ideal ist.

Das heißt, wenn du einen Browser-Fallback bereithalten möchtest, brauchst du lediglich einen besser unterstützen Wert davor zu deklarieren. Auf diese Weise kann ein älterer Browser auf etwas zurückgreifen, während ein neuerer Browser einfach jede spätere Deklaration in der Kaskade interpretiert.

# --instructions--

Es sieht so aus, als würde eine Variable verwendet werden, um die Hintergrundfarbe der Klasse `.red-box` festzulegen. Lass uns unsere Browser-Kompatibilität verbessern, indem wir eine weitere `background`-Eigenschaft direkt vor der bestehenden Deklaration hinzufügen und ihren Wert auf `red` setzen.

# --hints--

Deine `.red-box`-Regel sollte einen Fallback mit einem `background` von `red` direkt vor der bestehenden `background`-Deklaration einhalten.

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

# --solutions--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```
