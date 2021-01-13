---
id: 5d822fd413a79914d39e98cb
title: Part 3
challengeType: 0
dashedName: part-3
---

# --description--

Next, add opening and closing `head` and `body` tags within the html element.

# --hints--

test-text

```js
assert(
  code.match(
    /<html\s*>\s*<head\s*>\s*<\/head\s*>\s*<body\s*>\s*<\/body\s*>\s*<\/html\s*>/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  
</html>
```

# --solutions--

```html
<!DOCTYPE html>
<html>    
  <head>
    
  </head>

  <body>
  </body>
</html>
```
