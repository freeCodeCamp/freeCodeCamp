---
id: bd7158d8c442eddfaeb5bd13
title: Build a Random Quote Machine
challengeType: 14
forumTopicId: 301374
dashedName: build-a-random-quote-machine
---

# --description--
**Note:** **React 18 has known incompatibilities with the tests for this project (see [issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/45922))**

**Objective:** Build an app that is functionally similar to this: <a href="https://random-quote-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://random-quote-machine.freecodecamp.rocks/</a>.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

**User Story #1:** I can see a wrapper element with a corresponding `id="quote-box"`.

**User Story #2:** Within `#quote-box`, I can see an element with a corresponding `id="text"`.

**User Story #3:** Within `#quote-box`, I can see an element with a corresponding `id="author"`.

**User Story #4:** Within `#quote-box`, I can see a clickable element with a corresponding `id="new-quote"`.

**User Story #5:** Within `#quote-box`, I can see a clickable `a` element with a corresponding `id="tweet-quote"`.

**User Story #6:** On first load, my quote machine displays a random quote in the element with `id="text"`.

**User Story #7:** On first load, my quote machine displays the random quote's author in the element with `id="author"`.

**User Story #8:** When the `#new-quote` button is clicked, my quote machine should fetch a new quote and display it in the `#text` element.

**User Story #9:** My quote machine should fetch the new quote's author when the `#new-quote` button is clicked and display it in the `#author` element.

**User Story #10:** I can tweet the current quote by clicking on the `#tweet-quote` `a` element. This `a` element should include the `"twitter.com/intent/tweet"` path in its `href` attribute to tweet the current quote.

**User Story #11:** The `#quote-box` wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

You can build your project by <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">using this CodePen template</a> and clicking `Save` to create your own pen. Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Once you're done, submit the URL to your working project with all its tests passing.

**Note:** Twitter does not allow links to be loaded in an iframe. Try using the `target="_blank"` or `target="_top"` attribute on the `#tweet-quote` element if your tweet won't load. `target="_top"` will replace the current tab so make sure your work is saved.


# --hints--

I can see a wrapper element with a corresponding id="quote-box".

I can see a wrapper element with a corresponding id="quote-box".

```js
 assert.isNotNull(document.getElementById('quote-box'));
```

Within #quote-box, I can see an element with corresponding id="text".

```js
assert.isNotNull(document.getElementById('text'), '#text is not defined ');
assert.strictEqual(document.querySelectorAll('#quote-box #text').length, 1);
```

Within #quote-box, I can see an element with corresponding id="author".

```js
  assert.isNotNull(document.getElementById('author'), '#author is not defined ');
  assert.strictEqual(document.querySelectorAll('#quote-box #author').length, 1)
```

Within #quote-box, I can see a clickable element with corresponding id="new-quote"

```js
 assert.isNotNull(document.getElementById('new-quote'), '#new-quote is not defined ');
  assert.strictEqual(document.querySelectorAll('#quote-box #new-quote').length, 1, '#new-quote button is not a child of #quote-box ');
```

Within #quote-box, I can see a clickable <a> element with corresponding id="tweet-quote"

```js
 assert.isNotNull(document.getElementById('tweet-quote'));
  assert.strictEqual(document.getElementById('tweet-quote').nodeName, 'A', '#tweet-quote element is not an <a> element');
  assert.strictEqual(document.querySelectorAll('#quote-box #tweet-quote').length, 1, '#tweet-quote element is not a child of #quote-box ');
```

On first load, my quote machine displays a random quote in the element with id="text".

```js
 const text = document.getElementById('text');
  assert.isNotNull(text, '#text is not defined ');
  const textContentLength = text.innerText.length;
  assert.isAbove(textContentLength, 0, 'element with id="text" should contain a random quote');
  if (text) {
    assert(() => {
      return new Promise((resolve) => {
        const intervalId = setInterval(() => {
          if (text.innerText.length > 0) {
            console.log('Clearing interval ' + intervalId);
            clearInterval(intervalId);
            resolve();
          }
        }, 500);
      });
    });
  }
```

On first load, my quote machine displays the random quote's author in the element with id="author".

```js
  const author = document.getElementById('author');
  assert.isNotNull(author, '#author is not defined ');
  const authorContentLength = author.innerText.length;
  assert.isAbove(authorContentLength, 0, 'element with id="author" should contain an authors name');


  if (author) {
    assert(() => {
      return new Promise((resolve) => {
        const intervalId = setInterval(() => {
          if (author.innerText.length > 0) {
            console.log('Clearing interval ' + intervalId);
            clearInterval(intervalId);
            resolve();
          }
        }, 500);
      });
    });
  }
```

When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element."

```js
 let prevText;
  const newQuoteBtn = document.getElementById('new-quote');

  const text = document.getElementById('text');
  assert.isNotNull(text, '#text is not defined ');
  prevText = document.getElementById('text').innerText;
  newQuoteBtn.click();

  assert.isAbove(prevText.length, 0, 'element with id="text" should contain a random quote');

  if (prevText) {
    assert(() => {
      return new Promise((resolve) => {
        const intervalId = setInterval(() => {
          const newText = document.getElementById('text').innerText;
          if (newText !== prevText) {
            clearInterval(intervalId);
            resolve();
          } else {
            console.log('got here');
            newQuoteBtn.click();
          }
        }, 1000);
      });
    });
  }
```

My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

```js

 let prevAuth;
  const newQuoteBtn = document.getElementById('new-quote');

  const author = document.getElementById('author');
  assert.isNotNull(author, '#author is not defined ');
  prevAuth = document.getElementById('author').innerText;
  newQuoteBtn.click();

  assert.isAbove(prevAuth.length, 0, 'element with id="author" should contain an authors name');

  if (prevAuth) {
    assert(() => {
      return new Promise((resolve) => {
        const intervalId = setInterval(() => {
          const newAuth = document.getElementById('author').innerText;
          if (newAuth !== prevAuth) {
            clearInterval(intervalId);
            resolve();
          } else {
            console.log('got here');
            newQuoteBtn.click();
          }
        }, 1000);
      });
    });
  }
```

I can tweet the current quote by clicking on the #tweet-quote <a> element. This <a> element should include the "twitter.com/intent/tweet" path in it's href attribute to tweet the current quote.

```js
assert.isOk(document.getElementById('tweet-quote').hasAttribute('href'), '#tweet-quote <a> element must have an href attribute ');
  const href = document.getElementById('tweet-quote').href;
  assert.include(href.toLowerCase(), 'twitter.com/intent/tweet', 'The #tweet-quote element does not utilize the correct twitter intent ');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <title>Hello World</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel" src="./script.js"/>
  </body>
</html>
```

```css

```

```js
function MyApp() {
  return <h1>Hello, world!</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
```


# --solutions--

```js
// solution required
```
