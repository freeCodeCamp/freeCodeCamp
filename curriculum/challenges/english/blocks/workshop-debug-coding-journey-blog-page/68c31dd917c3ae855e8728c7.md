---
id: 68c31dd917c3ae855e8728c7
title: Step 7
challengeType: 0
dashedName: step-7
---

# --description--

For the last part of the workshop, there are a few changes needed for the contact section at the bottom.

The first change would be to wrap the contact section inside of a `footer` element. This will help screen readers identify this section as the footer of the page.

# --hints--

Your page should have a `footer` element.

```js
const footerElement = document.querySelector("footer");
assert.isNotNull(footerElement);
```

Your `footer` element should contain an `h3` element with the text `Contact Me`.

```js
const h3Element = document.querySelector("footer h3");
assert.isNotNull(h3Element);
assert.strictEqual(h3Element?.textContent, "Contact Me");
```

Your `footer` element should contain a `p` element with the text `Email me at camperbot@blog.io`.

```js
const pElement = document.querySelector("footer p");
assert.isNotNull(pElement);
assert.strictEqual(pElement?.textContent, "Email me at camperbot@blog.io");
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Camperbot's Blog</title>
</head>
<body>
  <h1>Welcome to Camperbot's Blog</h1>

  <nav>
    <h2>Navigation</h2>
    <ul>
      <li><a href="#post1">My Journey</a></li>
      <li><a href="#post2">Accessibility</a></li>
      <li><a href="#post3">Next Steps</a></li>
    </ul>
  </nav>

  <main>
    <article>
      <h2 id="post1">My Journey Learning to Code</h2>
      <p>I started learning to code a few months ago and it's been a wild ride!</p>
      
      <h3>Early Challenges</h3>
      <p>At first, syntax was really confusing.</p>
      
      <h3>Breakthroughs</h3>
      <p>Eventually things started to click.</p>
    </article>

    <article>
      <h2 id="post2">Accessibility Matters</h2>
      <p>Today I learned that not everyone uses the web the same way I do.</p>

      <h3>Screen Readers</h3>
      <p>These tools help visually impaired users browse websites.</p>
    </article>

    <article>
      <h2 id="post3">What's Next?</h2>
      <p>I'm excited to dive into JavaScript and build interactive features!</p>

      <h3>Coming soon: My first JavaScript project!</h3>
      <p>Stay tuned for some exciting interactive blog features.</p>
    </article>
  </main>
--fcc-editable-region--
  <h3>Contact Me</h3>
  <p>Email me at camperbot@blog.io</p>
--fcc-editable-region--
</body>
</html>
```
