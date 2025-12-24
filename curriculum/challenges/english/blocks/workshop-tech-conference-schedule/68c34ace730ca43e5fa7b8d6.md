---
id: 68c34ace730ca43e5fa7b8d6
title: Step 9
challengeType: 0
dashedName: step-9
---

# --description--

Now it is time to add another row to the table. 

Start by adding another `tr` element. Inside that `tr` element, add a `th` element with a `scope` attribute set to `"row"` and the text content of `10:00 AM`. 

Then, add three `td` elements with the following text content:

- `Accessibility Deep Dive`
- `CSS for Beginners`
- `Inclusive Design Principles`

# --hints--

You should have a second `tr` element inside of the `tbody` element.

```js
assert.lengthOf(document.querySelectorAll("tbody tr"), 2);
```

You should have a `th` element inside of the second `tr` element.

```js
assert.isNotNull(document.querySelectorAll("tbody tr")[1].querySelector("th"));
```

Your `th` element should have the text content of `10:00 AM`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[1].querySelector("th")?.textContent.trim(), "10:00 AM");
```

Your `th` element should have a `scope` attribute set to `"row"`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[1].querySelector("th")?.getAttribute("scope"), "row");
```

Your second `tr` element should have three `td` elements.

```js
assert.lengthOf(document.querySelectorAll("tbody tr")[1].querySelectorAll("td"), 3);
```

Your first `td` element should have the text content of `Accessibility Deep Dive`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[1].querySelectorAll("td")[0]?.textContent.trim(), "Accessibility Deep Dive");
```

Your second `td` element should have the text content of `CSS for Beginners`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[1].querySelectorAll("td")[1]?.textContent.trim(), "CSS for Beginners");
```   

Your third `td` element should have the text content of `Inclusive Design Principles`.

```js
assert.strictEqual(document.querySelectorAll("tbody tr")[1].querySelectorAll("td")[2]?.textContent.trim(), "Inclusive Design Principles");
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

      --fcc-editable-region--
      
      --fcc-editable-region--
    </tbody>
    
  </table>
</body>
</html>
```
