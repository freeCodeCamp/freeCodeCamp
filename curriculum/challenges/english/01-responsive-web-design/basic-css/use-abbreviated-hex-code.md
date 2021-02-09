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

<table class='table table-striped'><tbody><tr><th>Color</th><th>Short Hex Code</th></tr><tr><td>Cyan</td><td><code>#0FF</code></td></tr><tr><td>Green</td><td><code>#0F0</code></td></tr><tr><td>Red</td><td><code>#F00</code></td></tr><tr><td>Fuchsia</td><td><code>#F0F</code></td></tr></tbody></table>

# --hints--

Your `h1` element with the text `I am red!` should be given the `color` red.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

The abbreviated `hex code` for the color red should be used instead of the hex code `#FF0000`.

```js
assert(code.match(/\.red-text\s*?{\s*?color:\s*?#F00\s*?;\s*?}/gi));
```

Your `h1` element with the text `I am green!` should be given the `color` green.

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

The abbreviated `hex code` for the color green should be used instead of the hex code `#00FF00`.

```js
assert(code.match(/\.green-text\s*?{\s*?color:\s*?#0F0\s*?;\s*?}/gi));
```

Your `h1` element with the text `I am cyan!` should be given the `color` cyan.

```js
assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');
```

The abbreviated `hex code` for the color cyan should be used instead of the hex code `#00FFFF`.

```js
assert(code.match(/\.cyan-text\s*?{\s*?color:\s*?#0FF\s*?;\s*?}/gi));
```

Your `h1` element with the text `I am fuchsia!` should be given the `color` fuchsia.

```js
assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');
```

The abbreviated `hex code` for the color fuchsia should be used instead of the hex code `#FF00FF`.

```js
assert(code.match(/\.fuchsia-text\s*?{\s*?color:\s*?#F0F\s*?;\s*?}/gi));
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
