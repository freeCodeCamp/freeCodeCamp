---
id: 68c3482278a14e3cf225e897
title: Step 7
challengeType: 0
dashedName: step-7
---

# --description--

Inside your `tr` element, add a `th` element with the text of `9:00 AM`. Then below that `th` element, add three `td` elements with the text of `Keynote: Tech Future`, `Intro to Web Dev`, and `UX for All`. 

# --hints--

You should have a `th` element inside of your `tr` element.

```js
assert.exists(document.querySelector("tbody tr th"));
```

Your `th` element should have the text content of `9:00 AM`.

```js
assert.equal(document.querySelector("tbody tr th")?.textContent.trim(), "9:00 AM");
```

You should have a total of three `td` elements below your `th` element.

```js
const tdElements = document.querySelectorAll("tbody tr td");
assert.lengthOf(tdElements, 3);
```

Your first `td` element should have the text content of `Keynote: Tech Future`.

```js
const tdElements = document.querySelectorAll("tbody tr td");
assert.equal(tdElements[0]?.textContent.trim(), "Keynote: Tech Future");
```

Your second `td` element should have the text content of `Intro to Web Dev`.

```js
const tdElements = document.querySelectorAll("tbody tr td");
assert.equal(tdElements[1]?.textContent.trim(), "Intro to Web Dev");
``` 

Your third `td` element should have the text content of `UX for All`.

```js
const tdElements = document.querySelectorAll("tbody tr td");
assert.equal(tdElements[2]?.textContent.trim(), "UX for All");
``` 

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tech Conference 2025 Schedule</title>
</head>
<body>
  <h1>Tech Conference 2025 Schedule</h1>

  <table>
    <caption>Schedule by Track and Time</caption>

    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Track A</th>
        <th scope="col">Track B</th>
        <th scope="col">Track C</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        --fcc-editable-region--
        
        --fcc-editable-region--
      </tr>
    </tbody>
    
  </table>
</body>
</html>
```
