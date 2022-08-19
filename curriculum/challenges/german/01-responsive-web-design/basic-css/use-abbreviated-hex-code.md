---
id: bad87fee1348bd9aedf08719
title: Gekürzten Hex-Code verwenden
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpKAm'
forumTopicId: 18338
dashedName: use-abbreviated-hex-code
---

# --description--

Viele Menschen fühlen sich von den Möglichkeiten der mehr als 16 Millionen Farben überwältigt. Zudem ist es schwierig, sich den Hex-Code zu merken. Zum Glück kannst du sie kürzen.

Zum Beispiel kann der Hex-Code von Rot `#FF0000` zu `#F00` verkürzt werden. Diese verkürzte Form ergibt eine Ziffer für Rot, eine Ziffer für Grün und eine Ziffer für Blau.

Dadurch reduziert sich die Gesamtzahl der möglichen Farben auf etwa 4.000. Die Browser interpretieren jedoch `#FF0000` und `#F00` als genau dieselbe Farbe.

# --instructions--

Versuche, mithilfe der gekürzten Hex-Codes die richtigen Elemente einzufärben.

<table class='table table-striped'><tbody><tr><th>Farbe</th><th>gekürzter Hex-Code</th></tr><tr><td>Cyan</td><td><code>#0FF</code></td></tr><tr><td>Grün</td><td><code>#0F0</code></td></tr><tr><td>Rot</td><td><code>#F00</code></td></tr><tr><td>Fuchsia</td><td><code>#F0F</code></td></tr></tbody></table>

# --hints--

Dein `h1`-Element mit dem Text `I am red!` sollte die `color` Rot erhalten.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

Der gekürzte Hex-Code für die Farbe Rot sollte anstelle des Hex-Codes `#FF0000` verwendet werden.

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?#F00\s*?;?\s*?}/gi));
```

Dein `h1`-Element mit dem Text `I am green!` sollte die `color` Grün erhalten.

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

Der gekürzte Hex-Code für die Farbe Grün sollte anstelle des Hex-Codes `#00FF00` verwendet werden.

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?#0F0\s*?;?\s*?}/gi));
```

Dein `h1`-Element mit dem Text `I am cyan!` sollte die `color` Cyan erhalten.

```js
assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');
```

Der gekürzte Hex-Code für die Farbe Cyan sollte anstelle des Hex-Codes `#00FFFF` verwendet werden.

```js
assert(code.match(/\.cyan-text\s*?{\s*?color\s*:\s*?#0FF\s*?;?\s*?}/gi));
```

Dein `h1`-Element mit dem Text `I am fuchsia!` sollte die Farbe `color` Fuchsia erhalten.

```js
assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');
```

Der gekürzte Hex-Code für die Farbe Fuchsia sollte anstelle des Hex-Codes `#FF00FF` verwendet werden.

```js
assert(code.match(/\.fuchsia-text\s*?{\s*?color\s*:\s*?#F0F\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```
