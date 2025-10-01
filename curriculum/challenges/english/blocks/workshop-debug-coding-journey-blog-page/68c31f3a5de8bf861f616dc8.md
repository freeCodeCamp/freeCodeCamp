---
id: 68c31f3a5de8bf861f616dc8
title: Step 8
challengeType: 0
dashedName: step-8
---

# --description--

Right now the `footer` section has an `h3` heading. But it should be an `h2` heading to maintain a proper heading hierarchy. 

Change the `h3` to an `h2`.

# --hints--

Your `footer` element should contain an `h2` element instead of an `h3` element.

```js
const heading = document.querySelector("footer h2");
assert.isNotNull(heading);
assert.strictEqual(heading?.textContent, "Contact Me");
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
  <footer>
    <h3>Contact Me</h3>
    <p>Email me at camperbot@blog.io</p>
  </footer>
--fcc-editable-region--
</body>
</html>
```
