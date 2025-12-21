---
id: 68c31c946d73bf84b108c6fc
title: Step 6
challengeType: 0
dashedName: step-6
---

# --description--

Since the entire section containing the blog posts represents the main content of the page, it should be wrapped in a `main` element. This helps screen readers and other assistive technologies understand the structure of the page better.

# --hints--

You should have a `main` element.

```js
const mainElement = document.querySelector("main");
assert.isNotNull(mainElement);
```

Your `main` element should contain all three `article` elements.

```js
const articles = document.querySelectorAll("main article");
assert.lengthOf(articles, 3);
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
--fcc-editable-region--
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
--fcc-editable-region--
  <h3>Contact Me</h3>
  <p>Email me at camperbot@blog.io</p>
</body>
</html>
```
