---
id: bad87fee1348bd9aedf08804
title: Comment out HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cGyGbca'
forumTopicId: 16782
dashedName: comment-out-html
---

# --description--

Remember that in order to start a comment, you need to use `<!--` and to end a comment, you need to use `-->`

Here you'll need to end the comment before your `h2` element begins.

# --instructions--

Comment out your `h1` element and your `p` element, but not your `h2` element.

# --hints--

Your `h1` element should be commented out so that it is not visible on the page.

```js
assert($('h1').length === 0);
```

Your `h2` element should not be commented out so that it is visible on the page.

```js
assert($('h2').length > 0);
```

Your `p` element should be commented out so that it is not visible on the page.

```js
assert($('p').length === 0);
```

Each of your comments should be closed with `-->`.

```js
assert(code.match(/[^fc]-->/g).length > 1);
```

You should not change the order of the `h1` `h2` or `p` in the code.

```js
assert(
  code.match(/<([a-z0-9]){1,2}>/g)[0] === '<h1>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[1] === '<h2>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[2] === '<p>'
);
```

# --seed--

## --seed-contents--

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

# --solutions--

```html
<!--<h1>Hello World</h1>-->
<h2>CatPhotoApp</h2> 
<!--<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p> -->
```
