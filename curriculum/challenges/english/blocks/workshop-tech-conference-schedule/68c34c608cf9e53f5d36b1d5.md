---
id: 68c34c608cf9e53f5d36b1d5
title: Step 10
challengeType: 0
dashedName: step-10
---

# --description--

Next, add a third row to the table. Start by adding another `tr` element. Inside that `tr` element, add a `th` element with a `scope` attribute set to `"row"` and the text content of `11:00 AM`. Then below that `th` element, add a `td` element with the text content of `Break`. 

# --hints--

You should have a third `tr` element inside of the `tbody` element.

```js
assert.lengthOf(document.querySelectorAll("tbody tr"), 3);
```

You should have a `th` element inside of the third `tr` element.

```js
assert.isNotNull(document.querySelectorAll("tbody tr")[2].querySelector("th"));
```

Your `th` element should have the text content of `11:00 AM`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[2].querySelector("th")?.textContent.trim(), "11:00 AM");
```

Your `th` element should have a `scope` attribute set to `"row"`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[2].querySelector("th")?.getAttribute("scope"), "row");
```

You should have a `td` element inside of the third `tr` element.

```js
assert.isNotNull(document.querySelectorAll("tbody tr")[2].querySelector("td"));
```

Your `td` element should have the text content of `Break`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[2].querySelector("td")?.textContent.trim(), "Break");
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
        <th scope="row">9:00 AM</th>
        <td>Keynote: Tech Future</td>
        <td>Intro to Web Dev</td>
        <td>UX for All</td>
      </tr>

      <tr>
        <th scope="row">10:00 AM</th>
        <td>Accessibility Deep Dive</td>
        <td>CSS for Beginners</td>
        <td>Inclusive Design Principles</td>
      </tr>

--fcc-editable-region--
      
--fcc-editable-region--
    </tbody>
    
  </table>
</body>
</html>
```
