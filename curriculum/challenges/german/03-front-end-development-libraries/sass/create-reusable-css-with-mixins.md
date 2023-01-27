---
id: 587d7dbd367417b2b2512bb6
title: Erstelle wiederverwendbare CSS mit Mixins
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

In Sass ist ein <dfn>Mixin</dfn> eine Gruppe von CSS-Deklarationen, die im gesamten Stylesheet wiederverwendet werden können.

Neuere CSS-Funktionen brauchen Zeit, bis sie vollständig übernommen werden und in allen Browsern einsatzbereit sind. Wenn neue Funktionen zu den Browsern hinzugefügt werden, benötigen CSS-Regeln, die diese nutzen, möglicherweise Herstellerpräfixe. Schau dir `box-shadow` an:

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

Es ist eine Menge Tipparbeit, diese Regel für alle Elemente, die einen `box-shadow` haben, neu zu schreiben oder jeden Wert zu ändern, um verschiedene Effekte zu testen. Mixins sind wie Funktionen für CSS. Hier erfährst du, wie du eines schreiben kannst:

```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

Die Definition beginnt mit `@mixin`, gefolgt von einem eigenen Namen. Die Parameter (`$x`, `$y`, `$blur` und `$c` im obigen Beispiel) sind optional. Jedes Mal, wenn eine `box-shadow`-Regel benötigt wird, reicht jetzt eine einzige Zeile, die das Mixin aufruft, um alle Präfixe der Hersteller zu ersetzen. Ein Mixin wird mit der `@include` Direktive aufgerufen:

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

# --instructions--

Schreibe ein Mixin für `border-radius` und gib ihm einen Parameter `$radius`. Es sollte alle Anbieter-Präfixe aus dem Beispiel verwenden. Dann benutze das Mixin `border-radius`, um dem Element `#awesome` einen border-radius von `15px` zu geben.

# --hints--

Dein Code sollte ein Mixin namens `border-radius` deklarieren, das einen Parameter mit dem Namen `$radius` hat.

```js
assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi));
```

Dein Code sollte das Präfix `-webkit-border-radius` enthalten, das den Parameter `$radius` verwendet.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-webkit-border-radius:\$radius;/gi)
);
```

Dein Code sollte das Präfix `-moz-border-radius` enthalten, das den Parameter `$radius` verwendet.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-moz-border-radius:\$radius;/gi)
);
```

Dein Code sollte das Präfix `-ms-border-radius` enthalten, das den Parameter `$radius` verwendet.

```js
assert(__helpers.removeWhiteSpace(code).match(/-ms-border-radius:\$radius;/gi));
```

Dein Code sollte die allgemeine `border-radius`-Regel enthalten, die den `$radius` Parameter verwendet.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/border-radius:\$radius;/gi).length ==
    4
);
```

Dein Code sollte das `border-radius mixin` mit dem Schlüsselwort `@include` aufrufen und es auf `15px` setzen.

```js
assert(code.match(/@include\s+?border-radius\(\s*?15px\s*?\)\s*;/gi));
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;

  }
</style>

<div id="awesome"></div>
```

# --solutions--

```html
<style type='text/scss'>
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
```
