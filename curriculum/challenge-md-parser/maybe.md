---
id: bd7123c8c441eddfaeb5bdef
title: Say Hello to HTML Elements
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cE8Gpt2
---

## Description
<section id='description'>

Welcome to freeCodeCamp's HTML coding challenges. These will walk you through web development step-by-step.

Lorem Ipsum with `some code`

> Some text in a blockquote

> Some text in a blockquote, with `code`

```html
<p>We aim to preserve this</p>
```
</section>

## Instructions
<section id='instructions'>

To pass the test on this challenge, change your `h1` element's text to say "Hello World".

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h1</code> element should have the text "Hello World".
    testString: assert.isTrue((/hello(\s)+world/gi).test($('h1').text()), 'Your <code>h1</code> element should have the text "Hello World".');
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testFunction(arg) {
  return arg;
}

testFunction('hello');
```

</div>

### Before Test
<div id='js-setup'>

```js
console.log('before the test');
```

</div>

### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>
</section>

## Solution
<section id='solution'>

```js
function testFunction(arg) {
  return arg;
}

testFunction('hello');
```
</section>