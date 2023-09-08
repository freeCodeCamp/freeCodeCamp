---
id: 5d8a4cfbe6b6180ed9a1c9df
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

Наступний крок, додайте відкриті та закриті html, head та body теги у свій документ. Переконайтеся, що вставите їх належним чином.

# --hints--

test-text

```js
assert(
  /<!DOCTYPE\s+html\s*>\s*<html\s*>\s*<head\s*>\s*<\/head\s*>\s*<body\s*>\s*<\/body\s*>\s*<\/html\s*>/gi.test(
    code
  )
);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
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
