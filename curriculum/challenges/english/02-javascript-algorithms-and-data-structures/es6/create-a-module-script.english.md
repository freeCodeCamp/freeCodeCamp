---
id: 5cddbfd622f1a59093ec611d
title: Create a Module Script
challengeType: 6
forumTopicId: 301198
---

## Description
<section id='description'>
JavaScript started with a small role to play on an otherwise mostly HTML web. Today, it’s huge, and some websites are built almost entirely with JavaScript. In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of <code>module</code>. Here’s an example:

```html
<script type="module" src="filename.js"></script>
```

A script that uses this <code>module</code> type can now use the <code>import</code> and <code>export</code> features you will learn about in the upcoming challenges. 
</section>

## Instructions
<section id='instructions'>
Add a script to the HTML document of type <code>module</code> and give it the source file of <code>index.js</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should create a <code>script</code> tag.
    testString: assert(code.match(/<\s*script[^>]*>\s*<\/\s*script\s*>/g));
  - text: Your <code>script</code> tag should be of type <code>module</code>.
    testString: assert(code.match(/<\s*script\s+[^t]*type\s*=\s*('|")module\1[^>]*>\s*<\/\s*script\s*>/g));
  - text: Your <code>script</code> tag should have a <code>src</code> of <code>index.js</code>.
    testString: assert(code.match(/<\s*script\s+[^s]*src\s*=\s*('|")index\.js\1[^>]*>\s*<\/\s*script\s*>/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<html>
  <body>
    <!-- Only change code below this line -->

    <!-- Only change code above this line -->
  </body>
</html>
```

</div>
</section>

## Solution
<section id='solution'>

```html
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
```

</section>
