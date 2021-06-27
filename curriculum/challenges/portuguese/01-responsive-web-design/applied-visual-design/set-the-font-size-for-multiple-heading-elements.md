---
id: 587d781c367417b2b2512ac2
title: Set the font-size for Multiple Heading Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpQNT3'
forumTopicId: 301067
dashedName: set-the-font-size-for-multiple-heading-elements
---

# --description--

The `font-size` property is used to specify how large the text is in a given element. This rule can be used for multiple elements to create visual consistency of text on a page. In this challenge, you'll set the values for all `h1` through `h6` tags to balance the heading sizes.

# --instructions--

  <p>In the <code>style</code> tags, set the <code>font-size</code> of the:</p>

  <ul>
    <li><code>h1</code> tag to 68px.</li>
    <li><code>h2</code> tag to 52px.</li>
    <li><code>h3</code> tag to 40px.</li>
    <li><code>h4</code> tag to 32px.</li>
    <li><code>h5</code> tag to 21px.</li>
    <li><code>h6</code> tag to 14px.</li>
  </ul>

# --hints--

Your code should set the `font-size` property for the `h1` tag to 68 pixels.

```js
assert($('h1').css('font-size') == '68px');
```

Your code should set the `font-size` property for the `h2` tag to 52 pixels.

```js
assert($('h2').css('font-size') == '52px');
```

Your code should set the `font-size` property for the `h3` tag to 40 pixels.

```js
assert($('h3').css('font-size') == '40px');
```

Your code should set the `font-size` property for the `h4` tag to 32 pixels.

```js
assert($('h4').css('font-size') == '32px');
```

Your code should set the `font-size` property for the `h5` tag to 21 pixels.

```js
assert($('h5').css('font-size') == '21px');
```

Your code should set the `font-size` property for the `h6` tag to 14 pixels.

```js
const regex = /h6\s*\{\s*font-size\s*:\s*14px\s*(;\s*\}|\})/i;
assert.strictEqual(true, regex.test(code));
```

# --seed--

## --seed-contents--

```html
<style>






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
