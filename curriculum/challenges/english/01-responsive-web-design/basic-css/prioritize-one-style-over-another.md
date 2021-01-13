---
id: bad87fee1348bd9aedf08756
title: Prioritize One Style Over Another
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ8wnHv'
forumTopicId: 18258
dashedName: prioritize-one-style-over-another
---

# --description--

Sometimes your HTML elements will receive multiple styles that conflict with one another.

For example, your `h1` element can't be both green and pink at the same time.

Let's see what happens when we create a class that makes text pink, then apply it to an element. Will our class *override* the `body` element's `color: green;` CSS property?

# --instructions--

Create a CSS class called `pink-text` that gives an element the color pink.

Give your `h1` element the class of `pink-text`.

# --hints--

Your `h1` element should have the class `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Your `<style>` should have a `pink-text` CSS class that changes the `color`.

```js
assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;\s*\}/g));
```

Your `h1` element should be pink.

```js
assert($('h1').css('color') === 'rgb(255, 192, 203)');
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
</style>
<h1>Hello World!</h1>
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
</style>
<h1 class="pink-text">Hello World!</h1>
```
