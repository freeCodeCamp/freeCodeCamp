---
id: bad87fee1348bd9aedf08801
title: Inform with the Paragraph Element
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ceZ7DtN'
forumTopicId: 18202
---

## Description

<section id='description'>

`p` elements are the preferred element for paragraph text on websites. `p` is short for "paragraph".

You can create a paragraph element like this:

`<p>I'm a p tag!</p>`

</section>

## Instructions

<section id='instructions'>

Create a `p` element below your `h2` element, and give it the text "Hello Paragraph".

**Note:** As a convention, all HTML tags are written in lowercase, for example `<p></p>` and not `<P></P>`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: Your code should have a valid <code>p</code> element.
    testString: assert(($("p").length > 0));
  - text: Your <code>p</code> element should have the text <code>Hello Paragraph</code>.
    testString: assert.isTrue((/hello(\s)+paragraph/gi).test($("p").text()));
  - text: Your <code>p</code> element should have a closing tag.
    testString: assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length);

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

</div>

</section>

## Solution

<section id='solution'>

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```

</section>
