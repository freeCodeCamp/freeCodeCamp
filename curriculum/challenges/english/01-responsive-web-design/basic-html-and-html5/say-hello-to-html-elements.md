---
id: bd7123c8c441eddfaeb5bdef
title: Say Hello to HTML Elements
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2'
forumTopicId: 18276
dashedName: say-hello-to-html-elements
---

# --description--

Welcome to freeCodeCamp's HTML coding challenges. These will walk you through web development step-by-step.

First, you'll start by building a simple web page using HTML. You can edit code in your code editor, which is embedded into this web page.

Do you see the code in your code editor that says `<h1>Hello</h1>`? That's an HTML element.

Most HTML elements have an opening tag and a closing tag.

Opening tags look like this:

```html
<h1>
```

Closing tags look like this:

```html
</h1>
```

The only difference between opening and closing tags is the forward slash after the opening bracket of a closing tag.

Each challenge has tests you can run at any time by clicking the "Run tests" button. When you pass all tests, you'll be prompted to submit your solution and go to the next coding challenge.

# --instructions--

To pass the test on this challenge, change your `h1` element's text to say `Hello World`.

# --hints--

Your `h1` element should have the text `Hello World`.

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
```
