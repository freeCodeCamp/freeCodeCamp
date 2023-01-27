---
id: 587d781c367417b2b2512ac3
title: Set the font-weight for Multiple Heading Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVWRHq'
forumTopicId: 301069
dashedName: set-the-font-weight-for-multiple-heading-elements
---

# --description--

You set the `font-size` of each heading tag in the last challenge, here you'll adjust the `font-weight`.

The `font-weight` property sets how thick or thin characters are in a section of text.

# --instructions--

<ul><li>Set the <code>font-weight</code> of the <code>h1</code> tag to 800.</li><li>Set the <code>font-weight</code> of the <code>h2</code> tag to 600.</li><li>Set the <code>font-weight</code> of the <code>h3</code> tag to 500.</li><li>Set the <code>font-weight</code> of the <code>h4</code> tag to 400.</li><li>Set the <code>font-weight</code> of the <code>h5</code> tag to 300.</li><li>Set the <code>font-weight</code> of the <code>h6</code> tag to 200.</li></ul>

# --hints--

Your code should set the `font-weight` property for the `h1` tag to 800.

```js
assert($('h1').css('font-weight') == '800');
```

Your code should set the `font-weight` property for the `h2` tag to 600.

```js
assert($('h2').css('font-weight') == '600');
```

Your code should set the `font-weight` property for the `h3` tag to 500.

```js
assert($('h3').css('font-weight') == '500');
```

Your code should set the `font-weight` property for the `h4` tag to 400.

```js
assert($('h4').css('font-weight') == '400');
```

Your code should set the `font-weight` property for the `h5` tag to 300.

```js
assert($('h5').css('font-weight') == '300');
```

Your code should set the `font-weight` property for the `h6` tag to 200.

```js
assert($('h6').css('font-weight') == '200');
```

# --seed--

## --seed-contents--

```html
<style>
  h1 {
    font-size: 68px;

  }
  h2 {
    font-size: 52px;

  }
  h3 {
    font-size: 40px;

  }
  h4 {
    font-size: 32px;

  }
  h5 {
    font-size: 21px;

  }
  h6 {
    font-size: 14px;

  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```

# --solutions--

```html
<style>
  h1 {
    font-size: 68px;
    font-weight: 800;
  }
  h2 {
    font-size: 52px;
    font-weight: 600;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
  }
  h4 {
    font-size: 32px;
    font-weight: 400;
  }
  h5 {
    font-size: 21px;
    font-weight: 300;
  }
  h6 {
    font-size: 14px;
    font-weight: 200;
  }
</style>
<h1>This is h1 text</h1>
<h2>This is h2 text</h2>
<h3>This is h3 text</h3>
<h4>This is h4 text</h4>
<h5>This is h5 text</h5>
<h6>This is h6 text</h6>
```
