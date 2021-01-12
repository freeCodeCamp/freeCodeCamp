---
id: bad87fee1348bd9aedf08721
title: Use Hex Code to Mix Colors
challengeType: 0
videoUrl: 'https://scrimba.com/c/cK89PhP'
forumTopicId: 18359
dashedName: use-hex-code-to-mix-colors
---

# --description--

To review, hex codes use 6 hexadecimal digits to represent colors, two each for red (R), green (G), and blue (B) components.

From these three pure colors (red, green, and blue), we can vary the amounts of each to create over 16 million other colors!

For example, orange is pure red, mixed with some green, and no blue. In hex code, this translates to being `#FFA500`.

The digit `0` is the lowest number in hex code, and represents a complete absence of color.

The digit `F` is the highest number in hex code, and represents the maximum possible brightness.

# --instructions--

Replace the color words in our `style` element with their correct hex codes.

<table class='table table-striped'><tbody><tr><th>Color</th><th>Hex Code</th></tr><tr><td>Dodger Blue</td><td><code>#1E90FF</code></td></tr><tr><td>Green</td><td><code>#00FF00</code></td></tr><tr><td>Orange</td><td><code>#FFA500</code></td></tr><tr><td>Red</td><td><code>#FF0000</code></td></tr></tbody></table>

# --hints--

Your `h1` element with the text `I am red!` should be given the `color` red.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

The `hex code` for the color red should be used instead of the word `red`.

```js
assert(code.match(/\.red-text\s*?{\s*?color:\s*?(#FF0000|#F00)\s*?;\s*?}/gi));
```

Your `h1` element with the text `I am green!` should be given the `color` green.

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

The `hex code` for the color green should be used instead of the word `green`.

```js
assert(code.match(/\.green-text\s*?{\s*?color:\s*?(#00FF00|#0F0)\s*?;\s*?}/gi));
```

Your `h1` element with the text `I am dodger blue!` should be given the `color` dodger blue.

```js
assert($('.dodger-blue-text').css('color') === 'rgb(30, 144, 255)');
```

The `hex code` for the color dodger blue should be used instead of the word `dodgerblue`.

```js
assert(code.match(/\.dodger-blue-text\s*?{\s*?color:\s*?#1E90FF\s*?;\s*?}/gi));
```

Your `h1` element with the text `I am orange!` should be given the `color` orange.

```js
assert($('.orange-text').css('color') === 'rgb(255, 165, 0)');
```

The `hex code` for the color orange should be used instead of the word `orange`.

```js
assert(code.match(/\.orange-text\s*?{\s*?color:\s*?#FFA500\s*?;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #1E90FF;
  }
  .orange-text {
    color: #FFA500;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```
