---
id: bad87fee1348bd8aedf06756
title: Override Class Declarations by Styling ID Attributes
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpDhB'
forumTopicId: 18251
dashedName: override-class-declarations-by-styling-id-attributes
---

# --description--

We just proved that browsers read CSS from top to bottom in order of their declaration. That means that, in the event of a conflict, the browser will use whichever CSS declaration came last. Notice that if we even had put `blue-text` before `pink-text` in our `h1` element's classes, it would still look at the declaration order and not the order of their use!

But we're not done yet. There are other ways that you can override CSS. Do you remember id attributes?

Let's override your `pink-text` and `blue-text` classes, and make your `h1` element orange, by giving the `h1` element an id and then styling that id.

# --instructions--

Give your `h1` element the `id` attribute of `orange-text`. Remember, id styles look like this:

```html
<h1 id="orange-text">
```

Leave the `blue-text` and `pink-text` classes on your `h1` element.

Create a CSS declaration for your `orange-text` id in your `style` element. Here's an example of what this looks like:

```css
#brown-text {
  color: brown;
}
```

**Note:** It doesn't matter whether you declare this CSS above or below `pink-text` class, since the `id` attribute will always take precedence.

# --hints--

Your `h1` element should have the class `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Your `h1` element should have the class `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Your `h1` element should have the id of `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

There should be only one `h1` element.

```js
assert($('h1').length === 1);
```

Your `orange-text` id should have a CSS declaration.

```js
assert(code.match(/#orange-text\s*{/gi));
```

Your `h1` should not have any `style` attributes.

```js
assert(!code.match(/<h1.*style.*>/gi));
```

Your `h1` element should be orange.

```js
assert($('h1').css('color') === 'rgb(255, 165, 0)');
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
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
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
  #orange-text {
    color: orange;
  }  
</style>
<h1 id="orange-text"  class="pink-text blue-text">Hello World!</h1>
```
