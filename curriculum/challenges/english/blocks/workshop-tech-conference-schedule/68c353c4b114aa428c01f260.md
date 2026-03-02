---
id: 68c353c4b114aa428c01f260
title: Step 14
challengeType: 0
dashedName: step-14
---

# --description--

The last step is to add one more row to the table.

Start by adding another `tr` element. Inside that `tr` element, add a `th` element with a `scope` attribute set to `"row"` and the text content of `2:00 PM`. 

Then, add three `td` elements with the following text content:

- `Voice UI Workshop`
- `Git & GitHub Essentials`
- `Color & Contrast in UI`

With those last set of changes, your table is now complete!

# --hints--

You should have a sixth `tr` element inside of the `tbody` element.

```js
assert.lengthOf(document.querySelectorAll("tbody tr"), 6);
```

You should have a `th` element inside of the sixth `tr` element.

```js
assert.isNotNull(document.querySelectorAll("tbody tr")[5].querySelector("th"));
```

Your `th` element should have the text content of `2:00 PM`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[5].querySelector("th")?.textContent.trim(), "2:00 PM");
```

Your `th` element should have a `scope` attribute set to `"row"`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[5].querySelector("th")?.getAttribute("scope"), "row");
```

Your sixth `tr` element should have three `td` elements.

```js
assert.lengthOf(document.querySelectorAll("tbody tr")[5].querySelectorAll("td"), 3);
```

Your first `td` element should have the text content of `Voice UI Workshop`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[5].querySelectorAll("td")[0]?.textContent.trim(), "Voice UI Workshop");
```

Your second `td` element should have the text content of `Git & GitHub Essentials`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[5].querySelectorAll("td")[1]?.textContent.trim(), "Git & GitHub Essentials");
```

Your third `td` element should have the text content of `Color & Contrast in UI`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[5].querySelectorAll("td")[2]?.textContent.trim(), "Color & Contrast in UI");
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

      <tr>
        <th scope="row">12:30 PM</th>
        <td colspan="3">Lunch Break</td>
      </tr>

    --fcc-editable-region--
      
    --fcc-editable-region--
    </tbody>
  </table>
</body>
</html>
```

# --solutions--

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

      <tr>
        <th scope="row">12:30 PM</th>
        <td colspan="3">Lunch Break</td>
      </tr>

      <tr>
        <th scope="row">2:00 PM</th>
        <td>Voice UI Workshop</td>
        <td>Git & GitHub Essentials</td>
        <td>Color & Contrast in UI</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

