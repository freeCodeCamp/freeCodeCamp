---
id: 5d822fd413a79914d39e98cd
title: Part 5
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

In CSS, you can target everything with an asterisk. Add a border to everything by using the `*` selector in your style area and giving it a `border` of `1px solid black`. This is a trick I like to use to help visualize where elements are and their size. You will remove this later.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: assert(code.match(/<style\s*>\s*\*\s*{\s*border\s*:\s*1px\s+solid\s+black\s*;?\s*}\s*<\/style\s*>/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<!DOCTYPE html>
<html>    
  <head>
    <title>freeCodeCamp Skyline Project</title>
    <style></style>
  </head>

  <body>
  </body>
</html>
```

</div>
</section>


## Solution
<section id='solution'>

```html
<!DOCTYPE html>
<html>    
  <head>
    <title>freeCodeCamp Skyline Project</title>
    <style>
      * {
        border: 1px solid black;
      }
    </style>
  </head>

  <body>
  </body>
</html>
```

</section>
