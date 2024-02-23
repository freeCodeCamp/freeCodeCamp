---
id: 587d7dbf367417b2b2512bbb
title: Verwende mit @while einen Stil, bis eine Bedingung erfüllt ist
challengeType: 0
forumTopicId: 301454
dashedName: apply-a-style-until-a-condition-is-met-with-while
---

# --description--

Die `@while`-Direktive ist eine Option mit ähnlicher Funktionalität wie die `while`-Schleife in JavaScript. Sie erstellt CSS-Regeln, bis eine Bedingung erfüllt ist.

In der Aufgabe zu `@for` gab es ein Beispiel, um ein einfaches Rastersystem (Grid) zu erstellen. Das kann auch mit `@while` funktionieren.

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

Zuerst definierst du eine Variable `$x` und setzt sie auf 1. Benutze als nächstes die `@while`-Direktive um das Rastersystem zu erstellen *während (while)* `$x` weniger als 13 ist. Nachdem die CSS-Regel für `width` gesetzt wurde, wird `$x` um 1 erhöht, um eine Endlosschleife zu vermeiden.

# --instructions--

Verwende `@while`, um eine Reihe von Klassen mit verschiedenen `font-sizes` zu erstellen.

Es sollte 5 verschiedene Klassen geben, von `text-1` bis `text-5`. Dann setze `font-size` auf `15px` multipliziert mit der aktuellen Indexnummer. Achte darauf, eine Endlosschleife zu vermeiden!

# --hints--

Dein Code sollte die `@while`-Direktive verwenden.

```js
assert(code.match(/@while /g));
```

Dein Code sollte eine Indexvariable verwenden, die bei einem Index von 1 beginnt.

```js
assert(code.match(/\$.*:\s*?1;/gi));
```

Dein Code sollte die Zählervariable inkrementieren.

```js
assert(code.match(/\$(.*)\s*?:\s*\$\1\s*\+\s*1\s*;/gi));
```

Deine Klasse `.text-1` sollte eine `font-size` von `15px` besitzen.

```js
assert($('.text-1').css('font-size') == '15px');
```

Deine Klasse `.text-2` sollte eine `font-size` von `30px` besitzen.

```js
assert($('.text-2').css('font-size') == '30px');
```

Deine Klasse `.text-3` sollte eine `font-size` von `45px` besitzen.

```js
assert($('.text-3').css('font-size') == '45px');
```

Deine Klasse `.text-4` sollte eine `font-size` von `60px` besitzen.

```js
assert($('.text-4').css('font-size') == '60px');
```

Deine Klasse `.text-5` sollte eine `font-size` von `75px` besitzen.

```js
assert($('.text-5').css('font-size') == '75px');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

# --solutions--

```html
<style type='text/scss'>
  $x: 1;
  @while $x < 6 {
    .text-#{$x}{
      font-size: 15px * $x;
    }
    $x: $x + 1;
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
