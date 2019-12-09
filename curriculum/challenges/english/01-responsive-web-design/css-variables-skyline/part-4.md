---
id: 5d822fd413a79914d39e98cc
title: Part 4
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Nest opening and closing `title` and `style` tags in the head area and give your project a title of `freeCodeCamp Skyline Project`. Any styles you are asked to add during this project should go in this style area.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: assert(code.match(/<head\s*>\s*(<style\s*>\s*<\/style\s*>\s*<title\s*>freeCodeCamp Skyline Project<\/title\s*>|<title\s*>freeCodeCamp Skyline Project<\/title\s*>\s*<style\s*>\s*<\/style>)\s*<\/head\s*>/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<!DOCTYPE html>
<html>    
  <head>
    
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
    <style></style>
  </head>

  <body>
  </body>
</html>
```

</section>
