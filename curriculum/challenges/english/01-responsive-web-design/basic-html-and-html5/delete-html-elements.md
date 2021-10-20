---
id: bad87fed1348bd9aedf08833
title: Delete HTML Elements
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ckK73C9'
forumTopicId: 17559
dashedName: delete-html-elements
---

# --description--

Our phone doesn't have much vertical space.

Let's remove the unnecessary elements so we can start building our CatPhotoApp.

# --instructions--

Delete your `h1` element so we can simplify our view.

# --hints--

Your `h1` element should be deleted.

```js
assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi));
```

Your `h2` element should be on the page.

```js
assert(code.match(/<h2>[\w\W]*<\/h2>/gi));
```

Your `p` element should be on the page.

```js
assert(code.match(/<p>[\w\W]*<\/p>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2><p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```
