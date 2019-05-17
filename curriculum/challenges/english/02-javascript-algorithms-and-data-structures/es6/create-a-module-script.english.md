---
id: 5cddbfd622f1a59093ec611d
title: Create a Module Script
challengeType: 1
---

## Description
<section id='description'>
Javascript started with a small role to play on an otherwise mostly html internet. Today, it’s huge, and some websites are built almost entirely with javascript. In order to make javascript more modular, clean, and maintainable, ES6 introduced a way easily share code amongst javascript files. This involves exporting parts of a javascript file for use in one or more other files, and importing the parts you need to each file. In order to take advantage of this functionality, you need to create a script in your html file with a type of <code>module</code>. Here’s an example:

```html
<script type="module" src="filename.js"></script>
```

A script that uses this <code>module</code> type can now use the <code>import</code> and <code>export</code> features you will learn about in the upcoming challenges. 

</section>

## Instructions
<section id='instructions'>
Add a script to the html document of type <code>module</code> and give it the source file of <code>index.js</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> should not exist in code.
    testString: getUserInput => assert(!getUserInput('index').match(/var/g),'<code>var</code> should not exist in code.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```html
<html>
  // add your code below

  // add your code above
</html>
```

</div>
</section>

## Solution
<section id='solution'>

```html
<html>
  // add your code below

  // add your code above
</html>
```
</section>
