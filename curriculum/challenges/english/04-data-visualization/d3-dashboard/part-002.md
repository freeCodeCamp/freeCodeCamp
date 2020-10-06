---
id: 5d8a4cfbe6b6180ed9a1c9df
title: Part 2
challengeType: 0
---

## Description
<section id='description'>

Next, add opening and closing `html`, `head` and `body` tags below the doctype. Be sure to nest them properly.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: assert(/<!DOCTYPE\s+html\s*>\s*<html\s*>\s*<head\s*>\s*<\/head\s*>\s*<body\s*>\s*<\/body\s*>\s*<\/html\s*>/gi.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<!DOCTYPE html>
```

</div>
</section>


## Solution
<section id='solution'>

```html
<!DOCTYPE html>
<html>
  <head>
  </head>

  <body>
  </body>
</html>
```

</section>
