---
id: 6143a83fcc32c26bcfae3efa
title: 步骤 18
challengeType: 0
dashedName: step-18
---

# --description--

在你的 `.text` 元素下方，创建一个新的 `section` 元素，并为其添加值为 `text text-with-images` 的 `class`。 在其中，创建一个 `article` 元素，其 `class` 为 `brief-history`，并创建一个 `aside` 元素，其 `class` 为 `image-wrapper`。

# --hints--

你应该创建一个新的 `section` 元素。

```js
assert(document.querySelectorAll('section')?.length === 3)
```

你的新 `section` 元素应该在你的 `.text` 元素之后。

```js
assert(document.querySelectorAll('section')?.[2]?.previousElementSibling?.className === 'text')
```

你的新 `section` 元素应该将 `class` 设置为 `text text-with-images`。

```js
assert(document.querySelectorAll('section')?.[2]?.className === 'text text-with-images')
```

你的新 `section` 元素应该有一个 `article` 元素。

```js
assert.exists(document.querySelector('.text-with-images article'));
```

你的新 `section` 元素应该有一个 `aside` 元素。

```js
assert.exists(document.querySelector('.text-with-images aside'));
```

`article` 元素应位于 `aside` 元素之前。

```js
assert(document.querySelector('.text-with-images article')?.nextElementSibling?.localName === 'aside');
```

你的 `article` 元素的 `class` 应为 `brief-history`。

```js
assert(document.querySelector('.text-with-images article')?.className === 'brief-history');
```

你的 `aside` 元素的 `class` 应为 `image-wrapper`。

```js
assert(document.querySelector('.text-with-images aside')?.className === 'image-wrapper');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Magazine</title>
    <link
      href="https://fonts.googleapis.com/css?family=Anton%7CBaskervville%7CRaleway&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <section class="heading">
        <header class="hero">
          <img
            src="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
            alt="freecodecamp logo"
            loading="lazy"
            class="hero-img"
            width="400"
          />
          <h1 class="hero-title">OUR NEW CURRICULUM</h1>
          <p class="hero-subtitle">
            Our efforts to restructure our curriculum with a more project-based
            focus
          </p>
        </header>
        <div class="author">
          <p class="author-name">
            By
            <a href="https://freecodecamp.org" target="_blank" rel="noreferrer"
              >freeCodeCamp</a
            >
          </p>
          <p class="publish-date">March 7, 2019</p>
        </div>
        <div class="social-icons">
          <a href="https://www.facebook.com/freecodecamp/">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/freecodecamp/">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/freecodecamp">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/school/free-code-camp/">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/freecodecamp">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </section>
      <section class="text">
        <p class="first-paragraph">
          Soon the freeCodeCamp curriculum will be 100% project-driven learning. Instead of a series of coding challenges, you'll learn through building projects - step by step. Before we get into the details, let me emphasize: we are not changing the certifications. All 6 certifications will still have the same 5 required projects. We are only changing the optional coding challenges.
        </p>
        <p>
          After years - years - of pondering these two problems and how to solve them, I slipped, hit my head on the sink, and when I came to I had a revelation! A vision! A picture in my head! A picture of this! This is what makes time travel possible: the flux capacitor!
        </p>
        <p>
          It wasn't as dramatic as Doc's revelation in Back to the Future. It
          just occurred to me while I was going for a run. The revelation: the entire curriculum should be a series of projects. Instead of individual coding challenges, we'll just have projects, each with their own seamless series of tests. Each test gives you just enough information to figure out how to get it to pass. (And you can view hints if that isn't enough.)
        </p>
        <blockquote>
          <hr />
          <p class="quote">
            The entire curriculum should be a series of projects
          </p>
          <hr />
        </blockquote>
        <p>
          No more walls of explanatory text. No more walls of tests. Just one
          test at a time, as you build up a working project. Over the course of passing thousands of tests, you build up projects and your own understanding of coding fundamentals. There is no transition between lessons and projects, because the lessons themselves are baked into projects. And there's plenty of repetition to help you retain everything because - hey - building projects in real life has plenty of repetition.
        </p>
        <p>
          The main design challenge is taking what is currently paragraphs of explanation and instructions and packing them into a single test description text. Each project will involve dozens of tests like this. People will be coding the entire time, rather than switching back and forth from "reading mode" to "coding mode".
        </p>
        <p>
          Instead of a series of coding challenges, people will be in their code editor passing one test after another, quickly building up a project. People will get into a real flow state, similar to what they experience when they build the required projects at the end of each certification. They'll get that sense of forward progress right from the beginning. And freeCodeCamp will be a much smoother experience.
        </p>
      </section>
--fcc-editable-region--

--fcc-editable-region--
    </main>
  </body>
</html>
```

```css

```
