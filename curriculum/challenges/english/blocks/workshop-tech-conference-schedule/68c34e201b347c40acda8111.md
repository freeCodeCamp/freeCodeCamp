---
id: 68c34e201b347c40acda8111
title: Step 12
challengeType: 0
dashedName: step-12
---

# --description--

Now it is time to add another row to the table. 

Start by adding another `tr` element. Inside that `tr` element, add a `th` element with a `scope` attribute set to `"row"` and the text content of `11:30 AM`. 

Then, add three `td` elements with the following text content:

- `AR/VR in Education`
- `JavaScript Fundamentals`
- `Design Systems at Scale`

# --hints--

You should have a fourth `tr` element inside of the `tbody` element.

```js
assert.lengthOf(document.querySelectorAll("tbody tr"), 4);
```

You should have a `th` element inside of the fourth `tr` element.

```js
assert.isNotNull(document.querySelectorAll("tbody tr")[3].querySelector("th"));
```

Your `th` element should have the text content of `11:30 AM`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[3].querySelector("th")?.textContent.trim(), "11:30 AM");
```

Your `th` element should have a `scope` attribute set to `"row"`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[3].querySelector("th")?.getAttribute("scope"), "row");
```

Your fourth `tr` element should have three `td` elements.

```js
assert.lengthOf(document.querySelectorAll("tbody tr")[3].querySelectorAll("td"), 3);
```

Your first `td` element should have the text content of `AR/VR in Education`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[3].querySelectorAll("td")[0]?.textContent.trim(), "AR/VR in Education");
```

Your second `td` element should have the text content of `JavaScript Fundamentals`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[3].querySelectorAll("td")[1]?.textContent.trim(), "JavaScript Fundamentals");
```   

Your third `td` element should have the text content of `Design Systems at Scale`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[3].querySelectorAll("td")[2]?.textContent.trim(), "Design Systems at Scale");
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

      --fcc-editable-region--
      
      --fcc-editable-region--
    </tbody>
    
  </table>
</body>
</html>
```
