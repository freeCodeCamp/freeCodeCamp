---
id: 587d78a4367417b2b2512ad4
title: Adjust the Hue of a Color
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp38TZ'
forumTopicId: 301036
dashedName: adjust-the-hue-of-a-color
---

# --description--

Colors have several characteristics including hue, saturation, and lightness. CSS3 introduced the `hsl()` property as an alternative way to pick a color by directly stating these characteristics.

**Hue** is what people generally think of as 'color'. If you picture a spectrum of colors starting with red on the left, moving through green in the middle, and blue on right, the hue is where a color fits along this line. In `hsl()`, hue uses a color wheel concept instead of the spectrum, where the angle of the color on the circle is given as a value between 0 and 360.

**Saturation** is the amount of gray in a color. A fully saturated color has no gray in it, and a minimally saturated color is almost completely gray. This is given as a percentage with 100% being fully saturated.

**Lightness** is the amount of white or black in a color. A percentage is given ranging from 0% (black) to 100% (white), where 50% is the normal color.

Here are a few examples of using `hsl()` with fully-saturated, normal lightness colors:

<table class='table table-striped'><thead><tr><th>Color</th><th>HSL</th></tr></thead><tbody><tr><td>red</td><td>hsl(0, 100%, 50%)</td></tr><tr><td>yellow</td><td>hsl(60, 100%, 50%)</td></tr><tr><td>green</td><td>hsl(120, 100%, 50%)</td></tr><tr><td>cyan</td><td>hsl(180, 100%, 50%)</td></tr><tr><td>blue</td><td>hsl(240, 100%, 50%)</td></tr><tr><td>magenta</td><td>hsl(300, 100%, 50%)</td></tr></tbody></table>

# --instructions--

Change the `background-color` of each `div` element based on the class names (`green`, `cyan`, or `blue`) using `hsl()`. All three should have full saturation and normal lightness.

# --hints--

Your code should use the `hsl()` property to declare the color `green`.

```js
assert(code.match(/\.green\s*?{\s*?background-color:\s*?hsl/gi));
```

Your code should use the `hsl()` property to declare the color `cyan`.

```js
assert(code.match(/\.cyan\s*?{\s*?background-color:\s*?hsl/gi));
```

Your code should use the `hsl()` property to declare the color `blue`.

```js
assert(code.match(/\.blue\s*?{\s*?background-color:\s*?hsl/gi));
```

The `div` element with class `green` should have a `background-color` of green.

```js
assert($('.green').css('background-color') == 'rgb(0, 255, 0)');
```

The `div` element with class `cyan` should have a `background-color` of cyan.

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

The `div` element with class `blue` should have a `background-color` of blue.

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .blue {
    background-color: #000000;
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: hsl(120, 100%, 50%);
  }

  .cyan {
    background-color:   hsl(180, 100%, 50%);
  }

  .blue {
    background-color: hsl(240, 100%, 50%);
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```
