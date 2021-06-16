---
id: bad87fee1348bd9aedf04756
title: Override Styles in Subsequent CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDQug'
forumTopicId: 18253
dashedName: override-styles-in-subsequent-css
---

# --description--

Our `pink-text` class overrode our `body` element's CSS declaration!

We just proved that our classes will override the `body` element's CSS. So the next logical question is, what can we do to override our `pink-text` class?

# --instructions--

Create an additional CSS class called `blue-text` that gives an element the color blue. Make sure it's below your `pink-text` class declaration.

Apply the `blue-text` class to your `h1` element in addition to your `pink-text` class, and let's see which one wins.

Applying multiple class attributes to a HTML element is done with a space between them like this:

```html
class="class1 class2"
```

**Note:** It doesn't matter which order the classes are listed in the HTML element.

However, the order of the `class` declarations in the `<style>` section is what is important. The second declaration will always take precedence over the first. Because `.blue-text` is declared second, it overrides the attributes of `.pink-text`

# --hints--

Your `h1` element should have the class `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Your `h1` element should have the class `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Both `blue-text` and `pink-text` should belong to the same `h1` element.

```js
assert($('.pink-text').hasClass('blue-text'));
```

Your `h1` element should be blue.

```js
assert($('h1').css('color') === 'rgb(0, 0, 255)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }

  .blue-text {
    color: blue;
  }  
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```
