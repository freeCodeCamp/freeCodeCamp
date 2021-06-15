---
id: 587d78a5367417b2b2512ad7
title: Use a CSS Linear Gradient to Create a Striped Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bmQh2'
forumTopicId: 301072
dashedName: use-a-css-linear-gradient-to-create-a-striped-element
---

# --description--

The `repeating-linear-gradient()` function is very similar to `linear-gradient()` with the major difference that it repeats the specified gradient pattern. `repeating-linear-gradient()` accepts a variety of values, but for simplicity, you'll work with an angle value and color stop values in this challenge.

The angle value is the direction of the gradient. Color stops are like width values that mark where a transition takes place, and are given with a percentage or a number of pixels.

In the example demonstrated in the code editor, the gradient starts with the color `yellow` at 0 pixels which blends into the second color `blue` at 40 pixels away from the start. Since the next color stop is also at 40 pixels, the gradient immediately changes to the third color `green`, which itself blends into the fourth color value `red` as that is 80 pixels away from the beginning of the gradient.

For this example, it helps to think about the color stops as pairs where every two colors blend together.

```css
0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px
```

If every two color stop values are the same color, the blending isn't noticeable because it's between the same color, followed by a hard transition to the next color, so you end up with stripes.

# --instructions--

Make stripes by changing the `repeating-linear-gradient()` to use a gradient angle of `45deg`, then set the first two color stops to `yellow`, and finally the second two color stops to `black`.

# --hints--

The angle of the `repeating-linear-gradient()` should be 45deg.

```js
assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
```

The angle of the `repeating-linear-gradient()` should no longer be 90deg

```js
assert(!code.match(/90deg/gi));
```

The color stop at 0 pixels should be `yellow`.

```js
assert(code.match(/yellow\s+?0(px)?/gi));
```

One color stop at 40 pixels should be `yellow`.

```js
assert(code.match(/yellow\s+?40px/gi));
```

The second color stop at 40 pixels should be `black`.

```js
assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
```

The last color stop at 80 pixels should be `black`.

```js
assert(code.match(/black\s+?80px/gi));
```

# --seed--

## --seed-contents--

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>
<div></div>
```
