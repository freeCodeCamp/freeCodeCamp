---
id: 587d7dbe367417b2b2512bb9
title: Verwende @for, um eine Sass-Schleife zu erstellen
challengeType: 0
forumTopicId: 301462
dashedName: use-for-to-create-a-sass-loop
---

# --description--

Die `@for`-Direktive fügt Stile in einer Schleife hinzu, ganz ähnlich wie eine `for`-Schleife in JavaScript.

`@for` wird auf zwei Arten verwendet: "start through end" oder "start to end". Der Hauptunterschied ist, dass "start **to** end" *die Endnummer als Teil der Zählung ausschließt* und "start **trough** end" *die Endnummer als Teil der Zählung einschließt*.

Hier ist ein Beispiel für "start **through** end":

```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

Der Teil `#{$i}` ist die Syntax, um eine Variable (`i`) mit Text zu einem String zu kombinieren. Wenn die Sass-Datei in CSS umgewandelt wird, sieht sie so aus:

```scss
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```

Dies ist eine leistungsstarke Methode, um ein Rasterlayout (Grid) zu erstellen. Jetzt hast du zwölf Optionen für Spaltenbreiten als CSS-Klassen zur Verfügung.

# --instructions--

Schreibe eine `@for`-Direktive, die eine Variable `$j` aufnimmt, die von 1 **bis (to)** 6 geht.

Es sollten 5 Klassen mit den Namen `.text-1` bis `.text-5` erstellt werden, wobei jede eine Schriftgröße (`font-size`) von 15px multipliziert mit dem Index hat.

# --hints--

Dein Code sollte die `@for`-Direktive verwenden.

```js
assert(code.match(/@for /g));
```

Deine Klasse `.text-1` sollte eine Schriftgröße (`font-size`) `von 15px haben.</p>

<pre><code class="js">assert($('.text-1').css('font-size') == '15px');
`</pre>

Deine Klasse `.text-2` sollte eine Schriftgröße (`font-size`) `von 30px haben.</p>

<pre><code class="js">assert($('.text-2').css('font-size') == '30px');
`</pre>

Deine Klasse `.text-3` sollte eine Schriftgröße (`font-size`) `von 45px haben.</p>

<pre><code class="js">assert($('.text-3').css('font-size') == '45px');
`</pre>

Deine Klasse `.text-4` sollte eine Schriftgröße (`font-size`) `von 60px haben.</p>

<pre><code class="js">assert($('.text-4').css('font-size') == '60px');
`</pre>

Deine Klasse `.text-5` sollte eine Schriftgröße (`font-size`) `von 75px haben.</p>

<pre><code class="js">assert($('.text-5').css('font-size') == '75px');
`</pre>

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

@for $i from 1 through 5 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

---

```html
<style type='text/scss'>

@for $i from 1 to 6 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
