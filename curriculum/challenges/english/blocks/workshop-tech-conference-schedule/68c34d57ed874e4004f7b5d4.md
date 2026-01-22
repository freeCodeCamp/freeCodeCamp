---
id: 68c34d57ed874e4004f7b5d4
title: Step 11
challengeType: 0
dashedName: step-11
---

# --description--

Right now, the `td` element with the text content of `Break` only spans one column. But it would be nice if it spanned all three columns. 

As you recall from earlier workshops and lessons, you can use the `colspan` attribute to make a table cell span multiple columns.

```html
<tr>
  <td colspan="3">Total Points</td>
</tr>
```

Add a `colspan` attribute to the `td` element and set its value to `3`.

# --hints--

Your `td` element with the text content of `Break` should have a `colspan` attribute set to `3`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[2].querySelector("td")?.getAttribute("colspan"), "3");
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
        --fcc-editable-region--
        <td>Break</td>
        --fcc-editable-region--
      </tr>
    </tbody>
    
  </table>
</body>
</html>
```
