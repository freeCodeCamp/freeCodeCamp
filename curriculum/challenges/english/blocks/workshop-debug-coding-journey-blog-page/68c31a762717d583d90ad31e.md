---
id: 68c31a762717d583d90ad31e
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

In the blog page, there are a total of three blog posts wrapped inside generic `div` elements. But it would be better to use semantic elements to wrap each post. 

Change each `div` element that wraps each blog post to an `article` element.

# --hints--

Your first `div` element for the first post should be changed to an `article` element.

```js
const firstPost = document.querySelector("nav + article");
assert.isNotNull(firstPost);
```

Your second `div` element for the second post should be changed to an `article` element.

```js
const secondPost = document.querySelector("article + article");
assert.isNotNull(secondPost);
```

Your third `div` element for the third post should be changed to an `article` element.

```js
const thirdPost = document.querySelector("article + article + article");
assert.isNotNull(thirdPost);
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
--fcc-editable-region--
  <h3>Contact Me</h3>
  <p>Email me at camperbot@blog.io</p>
</body>
</html>
```
