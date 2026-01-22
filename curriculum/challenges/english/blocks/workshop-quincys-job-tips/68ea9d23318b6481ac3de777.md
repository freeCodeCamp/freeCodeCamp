---
id: 68ea9d23318b6481ac3de777
title: Step 8
challengeType: 0
dashedName: step-8
---

# --description--

Exactly like the inline quotation element, you can also add a `cite` attribute to a block quotation element.

Here is an example of a block quotation element with a `cite` attribute:

```html
<blockquote cite="https://www.freecodecamp.org/news/is-college-worth-it/">
  The first thing you should consider about education is this is an economic decision.
</blockquote>
```

Now, add a `cite` attribute to the block quotation element with the URL `https://www.freecodecamp.org/news/learn-to-code-book/`.

# --hints--

Your `blockquote` element should have a `cite` attribute.

```js
const firstBlockquoteEl = document.querySelector('section:first-of-type > h2 + blockquote');
assert.exists(firstBlockquoteEl?.getAttribute('cite'));
```

The `cite` attribute should have the value `https://www.freecodecamp.org/news/learn-to-code-book/`.

```js
const firstBlockquoteEl = document.querySelector('section:first-of-type > h2 + blockquote');
assert.equal(firstBlockquoteEl?.getAttribute('cite'), 'https://www.freecodecamp.org/news/learn-to-code-book/');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quincy's Tips for Getting a Developer Job</title>
  </head>
  <body>
    <h1>Quincy's Tips for Getting a Developer Job</h1>
    <p>
      Learning to code is hard, but as Quincy Larson says,
      <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">You can become a developer.</q>
    </p>

    <main>
      <section>
        <h2>Envisioning Success</h2>
      --fcc-editable-region--
        <blockquote>
      --fcc-editable-region--
          Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?
        </blockquote>
      </section>
      <section>

      </section>
      <section>

      </section>
    </main>
  </body>
</html>
```
