---
id: 68c34f4aeb2b1a4170506751
title: Step 13
challengeType: 0
dashedName: step-13
---

# --description--

Next, add a fifth row to the table. Start by adding another `tr` element. Inside that `tr` element, add a `th` element with a `scope` attribute set to `"row"` and the text content of `12:30 PM`. Then below that `th` element, add a `td` element with the text content of `Lunch Break`. Your `td` element should also have a `colspan` attribute set to `3` so that it spans all three tracks.

# --hints--

You should have a fifth `tr` element inside of the `tbody` element.

```js
assert.lengthOf(document.querySelectorAll("tbody tr"), 5);
```

You should have a `th` element inside of the fifth `tr` element.

```js
assert.isNotNull(document.querySelectorAll("tbody tr")[4].querySelector("th"));
```

Your `th` element should have the text content of `12:30 PM`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[4].querySelector("th")?.textContent.trim(), "12:30 PM");
```

Your `th` element should have a `scope` attribute set to `"row"`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[4].querySelector("th")?.getAttribute("scope"), "row");
```

You should have a `td` element inside of the fifth `tr` element.

```js
assert.isNotNull(document.querySelectorAll("tbody tr")[4].querySelector("td"));
```

Your `td` element should have the text content of `Lunch Break`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[4].querySelector("td")?.textContent.trim(), "Lunch Break");
``` 

Your `td` element should have a `colspan` attribute set to `3`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[4].querySelector("td")?.getAttribute("colspan"), "3");
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

      <tr>
        <th scope="row">11:00 AM</th>
        <td colspan="3">Break</td>
      </tr>

      <tr>
        <th scope="row">11:30 AM</th>
        <td>AR/VR in Education</td>
        <td>JavaScript Fundamentals</td>
        <td>Design Systems at Scale</td>
      </tr>

      --fcc-editable-region--
      
      --fcc-editable-region--
    </tbody>
  </table>
</body>
</html>
```
