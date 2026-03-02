---
id: 68c31763232a4582366eb6fd
title: Step 3
challengeType: 0
dashedName: step-3
---

# --description--

In the second post section, there is an `h5` element being used. It would be more appropriate to use an `h3` element here. 

Change the `h5` element to an `h3` element.

# --hints--

You should change the `h5` element to an `h3` element.

```js
const secondPostSubheading = document.querySelector("#post2 + p + h3");
assert.equal(secondPostSubheading?.tagName, "H3");
assert.equal(secondPostSubheading?.textContent, "Screen Readers");
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

  <h2>Navigation</h2>
  <ul>
    <li><a href="#post1">My Journey</a></li>
    <li><a href="#post2">Accessibility</a></li>
    <li><a href="#post3">Next Steps</a></li>
  </ul>

  <div>
    <h2 id="post1">My Journey Learning to Code</h2>
    <p>I started learning to code a few months ago and it's been a wild ride!</p>
    
    <h3>Early Challenges</h3>
    <p>At first, syntax was really confusing.</p>
    
    <h3>Breakthroughs</h3>
    <p>Eventually things started to click.</p>
  </div>
--fcc-editable-region--
  <div>
    <h2 id="post2">Accessibility Matters</h2>
    <p>Today I learned that not everyone uses the web the same way I do.</p>

    <h5>Screen Readers</h5>
    <p>These tools help visually impaired users browse websites.</p>
  </div>
--fcc-editable-region--
  <div>
    <h2 id="post3">What's Next?</h2>
    <p>I'm excited to dive into JavaScript and build interactive features!</p>

    <h3>Coming soon: My first JavaScript project!</h3>
    <p>Stay tuned for some exciting interactive blog features.</p>
  </div>
  <h3>Contact Me</h3>
  <p>Email me at camperbot@blog.io</p>
</body>
</html>
```
