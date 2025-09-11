---
id: 68c3144fc395d681180cde15
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

It looks like there are still some issues with the use of headings on the page. If you look at the first `div` element, there are two `h4` elements used as subheadings. A better practice would be to use `h3` elements for these subheadings since they are a level below the `h2` element.

Change the two `h4` elements to `h3` elements.

# --hints--

Your `h4` element with the text of `Early Challenges` should be an `h3` element.

```js
const post1Subheading = document.querySelector("#post1 + p + h3");
assert.equal(post1Subheading?.tagName, "H3");
assert.equal(post1Subheading?.textContent, "Early Challenges");
```

Your `h4` element with the text of `Breakthroughs` should be an `h3` element.

```js
const post1SecondSubheading = document.querySelector("#post1 + p + h3 + p + h3");
assert.equal(post1SecondSubheading?.tagName, "H3");
assert.equal(post1SecondSubheading?.textContent, "Breakthroughs");
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
--fcc-editable-region--
  <div>
    <h2 id="post1">My Journey Learning to Code</h2>
    <p>I started learning to code a few months ago and it's been a wild ride!</p>
    
    <h4>Early Challenges</h4>
    <p>At first, syntax was really confusing.</p>
    
    <h4>Breakthroughs</h4>
    <p>Eventually things started to click.</p>
  </div>
--fcc-editable-region--
  <div>
    <h2 id="post2">Accessibility Matters</h2>
    <p>Today I learned that not everyone uses the web the same way I do.</p>

    <h5>Screen Readers</h5>
    <p>These tools help visually impaired users browse websites.</p>
  </div>

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
