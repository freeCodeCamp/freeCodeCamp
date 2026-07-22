---
id: 68eab45aceb7c00fd8de4fed
title: Step 11
challengeType: 0
dashedName: step-11
---

# --description--

Inside the second `section` element, nest an `h2` element with the text `Importance of Networking`.

Below this heading, add a block quotation element with a `cite` attribute with the value `https://www.freecodecamp.org/news/learn-to-code-book/`.

# --hints--

You should have an `h2` element nested inside the second section.

```js
assert.exists(document.querySelector('main > section:nth-of-type(2) > h2'));
```

Your `h2` element should have the text `Importance of Networking`.

```js
const h2El = document.querySelector('main > section:nth-of-type(2) > h2');
assert.equal(h2El?.innerText.trim(), 'Importance of Networking');
```

You should have a `blockquote` element nested inside the second section.

```js
assert.exists(document.querySelector('main > section:nth-of-type(2) > blockquote'));
```

Your `blockquote` element should be below your `h2` element.

```js
assert.exists(document.querySelector('main > section:nth-of-type(2) > h2 + blockquote'));
```

Your `blockquote` element should have a `cite` attribute.

```js
const blockquoteEl = document.querySelector('main > section:nth-of-type(2) > blockquote');
assert.exists(blockquoteEl?.getAttribute('cite'));
```

The `cite` attribute of your `blockquote` element should have the value `https://www.freecodecamp.org/news/learn-to-code-book/`.

```js
const blockquoteEl = document.querySelector('main > section:nth-of-type(2) > blockquote');
assert.equal(blockquoteEl?.getAttribute('cite'), 'https://www.freecodecamp.org/news/learn-to-code-book/');
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
        <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
          Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?
        </blockquote>
        <p>
          &mdash;Quincy Larson, <cite>How to Learn to Code and Get a Developer Job [Full Book]</cite>
        </p>
      </section>
      <section>
--fcc-editable-region--
        
--fcc-editable-region--
      </section>
      <section>

      </section>
    </main>
  </body>
</html>
```
