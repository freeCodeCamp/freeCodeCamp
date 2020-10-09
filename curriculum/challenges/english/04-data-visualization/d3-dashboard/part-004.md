---
id: 5d8a4cfbe6b6180ed9a1c9e1
title: Part 4
challengeType: 0
---

## Description
<section id='description'>

Below the title, link to your external stylesheet by adding a `link` element with a `rel` attribute of `stylesheet` and an `href` attribute of `./dashboard.css`. Remember that link elements do not need a closing tag. You will be adding some styles to this file shortly.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const link = code.match(/<link\s+[\s\S]+?[^>]>/gi)[0]; assert(/rel\s*=\s*('|")\s*stylesheet\s*\1/gi.test(link) && /href\s*=\s*('|")\s*(.\/)?dashboard\.css\s*\1/gi.test(link));

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>

    
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
    <title>D3 Dashboard</title>
    <link rel="stylesheet" href="./dashboard.css">
  </head>

  <body>
  </body>
</html>
```

</section>
