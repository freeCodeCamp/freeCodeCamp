---
id: 68c318d9c3b3f382f93d1fd1
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

Below the main title of the page, there is a navigation section that contains links to each blog post. 

This section should be wrapped in a `nav` element to indicate its purpose as a navigation landmark.

# --hints--

Your page should have a `nav` element.

```js
const navElement = document.querySelector("nav");
assert.isNotNull(navElement);
```

Your `<h2>Navigation</h2>` should be inside the `nav` element.

```js
const h2Element = document.querySelector("nav h2");
assert.isNotNull(h2Element);
assert.strictEqual(h2Element?.textContent, "Navigation");
```

Your `ul` element should be inside the `nav` element.

```js
const ulElement = document.querySelector("nav ul");
assert.isNotNull(ulElement);
```

Your `li` elements should be inside the `ul` element.

```js
const liElements = document.querySelectorAll("nav ul li");
assert.isAtLeast(liElements.length, 3);
```

You should not add any additional `ul`, `li` or `h2` elements.

```js
const liElements = document.querySelectorAll("nav ul li");
assert.lengthOf(liElements, 3);

const ulElements = document.querySelectorAll("ul");
assert.lengthOf(ulElements, 1);

const h2Elements = document.querySelectorAll("h2");
assert.lengthOf(h2Elements , 4);
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
--fcc-editable-region--
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
    
    <h3>Early Challenges</h3>
    <p>At first, syntax was really confusing.</p>
    
    <h3>Breakthroughs</h3>
    <p>Eventually things started to click.</p>
  </div>

  <div>
    <h2 id="post2">Accessibility Matters</h2>
    <p>Today I learned that not everyone uses the web the same way I do.</p>

    <h3>Screen Readers</h3>
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
