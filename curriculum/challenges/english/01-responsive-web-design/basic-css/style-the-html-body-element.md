---
id: bad87fee1348bd9aedf08736
title: Style the HTML Body Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
dashedName: style-the-html-body-element
---

# --description--

Now let's start fresh and talk about CSS inheritance.

Every HTML page has a `body` element.

# --instructions--

We can prove that the `body` element exists here by giving it a `background-color` of black.

We can do this by adding the following to our `style` element:

```css
body {
  background-color: black;
}
```

# --hints--

Your `body` element should have the `background-color` of black.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Your CSS rule should be properly formatted with both opening and closing curly brackets.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

Your CSS rule should end with a semicolon.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>
```

# --solutions--

```html
<style>
body {
  background-color: black;
}
</style>
```
