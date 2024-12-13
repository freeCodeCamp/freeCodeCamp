---
id: bad87fee1348bd9aedf08719
title: Use Abbreviated Hex Code
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpKAm'
forumTopicId: 18338
dashedName: use-abbreviated-hex-code
---

# --description--

Many people feel overwhelmed by the possibilities of more than 16 million colors. And it's difficult to remember hex code. Fortunately, you can shorten it.

For example, red's hex code `#FF0000` can be shortened to `#F00`. This shortened form gives one digit for red, one digit for green, and one digit for blue.

This reduces the total number of possible colors to around 4,000. But browsers will interpret `#FF0000` and `#F00` as exactly the same color.

# --instructions--

Go ahead, try using the abbreviated hex codes to color the correct elements.

<table><tbody><tr><th>Color</th><th>Short Hex Code</th></tr><tr><td>Cyan</td><td><code>#0FF</code></td></tr><tr><td>Green</td><td><code>#0F0</code></td></tr><tr><td>Red</td><td><code>#F00</code></td></tr><tr><td>Fuchsia</td><td><code>#F0F</code></td></tr></tbody></table>

# --hints--

Your `h1` element with the text `I am red!` should be given the `color` red.

```js
const redText = document.querySelector('.red-text');
const color = window.getComputedStyle(redText)['color']; 
assert.strictEqual(color, 'rgb(255, 0, 0)');
```

The abbreviated hex code for the color red should be used instead of the hex code `#FF0000`.

```js
assert.match(code,/\.red-text\s*?{\s*?color\s*:\s*?#F00\s*?;?\s*?}/gi);
```

Your `h1` element with the text `I am green!` should be given the `color` green.

```js
const greenText = document.querySelector('.green-text');
const color = window.getComputedStyle(greenText)['color']; 
assert.strictEqual(color, 'rgb(0, 255, 0)');
```

The abbreviated hex code for the color green should be used instead of the hex code `#00FF00`.

```js
assert.match(__helpers.removeCssComments(code), /\.green-text\s*?{\s*?color\s*:\s*?#0F0\s*?;?\s*?}/gi);
```

Your `h1` element with the text `I am cyan!` should be given the `color` cyan.

```js
const cyanText = document.querySelector('.cyan-text');
const color = window.getComputedStyle(cyanText)['color']; 
assert.strictEqual(color, 'rgb(0, 255, 255)');
```

The abbreviated hex code for the color cyan should be used instead of the hex code `#00FFFF`.

```js
assert.match(__helpers.removeCssComments(code), /\.cyan-text\s*?{\s*?color\s*:\s*?#0FF\s*?;?\s*?}/gi);
```

Your `h1` element with the text `I am fuchsia!` should be given the `color` fuchsia.

```js
const fuchsiaText = document.querySelector('.fuchsia-text');
const color = window.getComputedStyle(fuchsiaText)['color']; 
assert.strictEqual(color,'rgb(255, 0, 255)');
```

The abbreviated hex code for the color fuchsia should be used instead of the hex code `#FF00FF`.

```js
assert.match(__helpers.removeCssComments(code), /\.fuchsia-text\s*?{\s*?color\s*:\s*?#F0F\s*?;?\s*?}/gi);
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
