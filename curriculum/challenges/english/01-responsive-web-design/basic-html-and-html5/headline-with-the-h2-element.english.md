---
id: bad87fee1348bd9aedf0887a
title: Headline with the h2 Element
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
---

## Description
<section id='description'>
Over the next few lessons, we'll build an HTML5 cat photo web app piece-by-piece.
The <code>h2</code> element you will be adding in this step will add a level two heading to the web page.
This element tells the browser about the structure of your website. <code>h1</code> elements are often used for main headings, while <code>h2</code> elements are generally used for subheadings. There are also <code>h3</code>, <code>h4</code>, <code>h5</code> and <code>h6</code> elements to indicate different levels of subheadings.
</section>

## Instructions
<section id='instructions'>
Add an <code>h2</code> tag that says "CatPhotoApp" to create a second HTML element below your "Hello World" <code>h1</code> element.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should create an <code>h2</code> element.
    testString: assert(($("h2").length > 0));
  - text: Your <code>h2</code> element should have a closing tag.
    testString: assert(code.match(/<\/h2>/g) && code.match(/<\/h2>/g).length === code.match(/<h2>/g).length);
  - text: Your <code>h2</code> element should have the text <code>CatPhotoApp</code>.
    testString: assert.isTrue((/cat(\s)?photo(\s)?app/gi).test($("h2").text()));
  - text: Your <code>h1</code> element should have the text <code>Hello World</code>.
    testString: assert.isTrue((/hello(\s)+world/gi).test($("h1").text()));
  - text: Your <code>h1</code> element should be before your <code>h2</code> element.
    testString: assert(code.match(/<h1>\s*?.*?\s*?<\/h1>\s*<h2>\s*?.*?\s*?<\/h2>/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>
```

</div>



</section>

## Solution

<section id='solution'>

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

</section>  


