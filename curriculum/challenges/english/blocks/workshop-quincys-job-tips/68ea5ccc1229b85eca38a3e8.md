---
id: 68ea5ccc1229b85eca38a3e8
title: Step 6
challengeType: 0
dashedName: step-6
---

# --description--

Inside the first `section` element, add an `h2` element with the text `Envisioning Success`.

# --hints--

Inside the first `section` element, you should have an `h2` element.

```js
assert.exists(document.querySelector('section:first-of-type > h2'));
```

Your `h2` should have the text `Envisioning Success`.

```js
const firstH2El = document.querySelector('section:first-of-type > h2');
assert.equal(firstH2El?.innerText.trim(), `Envisioning Success`);
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
      --fcc-editable-region--
        
      --fcc-editable-region--
      </section>
      <section>

      </section>
      <section>

      </section>
    </main>
  </body>
</html>
```
