---
id: 68eb1f4e8ccb1cb263b81efe
title: Step 22
challengeType: 0
dashedName: step-22
---

# --description--

The description text needs to be a bit larger. Select the element with the class `description` and set its `font-size` to `1.2rem`.

# --hints--

You should target the element with the class `description`.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.description'));
```

Set the `font-size` property to `1.2rem`.

```js
const style = new __helpers.CSSHelp(document).getStyle('.description')
assert.strictEqual(style?.fontSize, '1.2rem')
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Parent Teacher Conference Form</title>
  <link rel="stylesheet" href="./styles.css" />
</head>

<body>
  <main class="container">
    <h1 class="title center">Parent Teacher Conference Form</h1>
    <p class="description center">Please fill out the form below to help schedule your parent-teacher conference.</p>

    <form>
      <fieldset>
        <legend>Student Information</legend>
        <label for="student-name">Full Name: </label>
        <input
            type="text"
            name="student-name"
            id="student-name"
            required
            placeholder="E.g., Jane Doe"
          />

        <label for="grade">Student Grade: </label>
        <input
            type="number"
            name="grade"
            id="grade"
            required
            placeholder="E.g., 4"
          />
      </fieldset>

      <fieldset>
        <legend>Parent/Guardian Information</legend>
        <label for="parent-name">Parent/Guardian Name: </label>
        <input
            type="text"
            name="parent-name"
            id="parent-name"
            required
            placeholder="E.g., Nancy Doe"
          />
      </fieldset>

      <fieldset>
        <legend>Preferred Contact Method</legend>
        <label class="contact-method" for="email">Email: </label>
        <input
            id="email"
            class="contact-method-radio-btn"
            type="radio"
            name="contact-method"
            value="email"
            checked
          />

        <label class="contact-method" for="phone">Phone: </label>
        <input
            id="phone"
            class="contact-method-radio-btn"
            type="radio"
            name="contact-method"
            value="phone"
          />
      </fieldset>

      <fieldset>
        <legend>Additional Notes</legend>
        <label for="notes"
            >Any specific concerns or topics you'd like to discuss?</label>
        <textarea id="notes" name="notes" rows="4" cols="50"></textarea>
      </fieldset>

      <button class="submit-btn" type="submit">Submit Form</button>
    </form>
  </main>
</body>

</html>
```

```css
body {
  background-color: MidnightBlue;
  color: whitesmoke;
}

.container {
    background-color: #ffffff1a;
    width: 80%;
    max-width: 600px;
    border-radius: 10px;
    margin: 20px auto;
    padding: 10px 20px;
    box-shadow: 0 5px 15px black;  
}

.center {
  text-align: center;
}

--fcc-editable-region--

--fcc-editable-region--
```

