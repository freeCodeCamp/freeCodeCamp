---
id: 671144cdcc01d73f7dd79dc9
title: Step 16
challengeType: 0
dashedName: step-16
---

# --description--

Now that you have added the link you can remove the comment.

# --hints--

There should not be any comment in your code.

```js
assert.notMatch(code, /<!--/);
assert.notMatch(code, /-->/);
```

The text `TODO: Add link to cat photos` should not be present anymore.

```js
assert.notMatch(code, /TODO:?/i)
assert.notMatch(code, /Add\s*link\s*to\s*cat\s*photos/i)
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
--fcc-editable-region--
      <!-- TODO: Add link to cat photos -->
      <p>Everyone loves <a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg">cute cats</a> online!</p>
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```
