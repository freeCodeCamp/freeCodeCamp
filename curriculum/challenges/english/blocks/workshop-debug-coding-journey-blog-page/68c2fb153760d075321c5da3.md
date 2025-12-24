---
id: 68c2fb153760d075321c5da3
title: Step 1
challengeType: 0
dashedName: step-1
demoType: onLoad
---

# --description--

Camperbot has created a coding journey blog page, but it looks like the page has some accessibility issues and bad practices. Your job in this workshop, is to fix these issues for Camperbot.

The first set of errors has to deal with the use of headings. In a prior lesson, you learned that it is best practice to only use one `h1` per page. But it looks like Camperbot is a using a few `h1`s. 

Leave the `<h1>Welcome to Camperbot's Blog</h1>` alone and change the other `h1` elements to `h2` elements.

# --hints--

You should not alter the `<h1>Welcome to Camperbot's Blog</h1>`.

```js
const heading = document.querySelectorAll("h1")[0];
assert.equal(heading?.textContent, "Welcome to Camperbot's Blog");
```

You should change the `h1` element with the text of `My Journey Learning to Code` to an `h2` element.

```js
const firstPost = document.getElementById("post1");
assert.equal(firstPost?.tagName, "H2");
assert.equal(firstPost?.textContent, "My Journey Learning to Code");
```

You should change the `h1` element with the text of `Accessibility Matters` to an `h2` element.

```js
const secondPost = document.getElementById("post2");
assert.equal(secondPost?.tagName, "H2");
assert.equal(secondPost?.textContent, "Accessibility Matters");
```

You should change the `h1` element with the text of `What's Next?` to an `h2` element.

```js
const thirdPost = document.getElementById("post3");
assert.equal(thirdPost?.tagName, "H2");
assert.equal(thirdPost?.textContent, "What's Next?");
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
    <h1 id="post1">My Journey Learning to Code</h1>
    <p>I started learning to code a few months ago and it's been a wild ride!</p>
    
    <h4>Early Challenges</h4>
    <p>At first, syntax was really confusing.</p>
    
    <h4>Breakthroughs</h4>
    <p>Eventually things started to click.</p>
  </div>

  <div>
    <h1 id="post2">Accessibility Matters</h1>
    <p>Today I learned that not everyone uses the web the same way I do.</p>

    <h5>Screen Readers</h5>
    <p>These tools help visually impaired users browse websites.</p>
  </div>

  <div>
    <h1 id="post3">What's Next?</h1>
    <p>I'm excited to dive into JavaScript and build interactive features!</p>

    <h3>Coming soon: My first JavaScript project!</h3>
    <p>Stay tuned for some exciting interactive blog features.</p>
  </div>
--fcc-editable-region--
  <h3>Contact Me</h3>
  <p>Email me at camperbot@blog.io</p>
</body>
</html>
```
