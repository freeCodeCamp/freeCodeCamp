---
id: 68c3215e6826ca00a2d892fc
title: Step 9
challengeType: 0
dashedName: step-9
---

# --description--

The last change will be to the email text inside of the footer. In earlier lessons and workshops, you learned how to work with the `mailto` link like this:

```html
<p>Email me at <a href="mailto:janedoe@email.com">janedoe@email.com</a></p>
```

Start by wrapping the `camperbot@blog.io` email address inside of an anchor element. Then, add the `href` attribute to the anchor element and set it equal to `mailto:camperbot@blog.io`.

With that last change, you have successfully resolved all of the issues in the blog page!

# --hints--

Your `camperbot@blog.io` email address should be wrapped inside of an anchor element.

```js
const anchor = document.querySelector("footer a");
assert.isNotNull(anchor);
assert.strictEqual(anchor?.textContent, "camperbot@blog.io");
```

Your anchor element should have an `href` attribute with a value of `mailto:camperbot@blog.io`.

```js
const anchor = document.querySelector("footer a");
assert.strictEqual(anchor?.getAttribute("href"), "mailto:camperbot@blog.io");
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
  <footer>
    <h2>Contact Me</h2>
    --fcc-editable-region--
    <p>Email me at camperbot@blog.io</p>
    --fcc-editable-region--
  </footer>
</body>
</html>
```

# --solutions--

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

  <footer>
    <h2>Contact Me</h2>
    <p>Email me at <a href="mailto:camperbot@blog.io">camperbot@blog.io</a></p>
  </footer>
</body>
</html>
```
