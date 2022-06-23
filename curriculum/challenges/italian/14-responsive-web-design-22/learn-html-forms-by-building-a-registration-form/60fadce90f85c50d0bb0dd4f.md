---
id: 60fadce90f85c50d0bb0dd4f
title: Step 41
challengeType: 0
dashedName: step-41
---

# --description--

Per dare agli elementi `fieldset` un po' di separazione, seleziona tutti gli elementi `fieldset` tranne l'ultimo e assegna loro una proprietà `border-bottom` con il valore `3px solid #3b3b4f`.

# --hints--

Puoi usare la pseudo-classe `:not(:last-of-type)` per selezionare tutti gli elemento tranne l'ultimo.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('fieldset:not(:last-of-type)'));
```

Dovresti assegnare agli elementi `fieldset` una proprietà `border-bottom` con il valore `3px solid #3b3b4f`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('fieldset:not(:last-of-type)')?.borderBottom, '3px solid rgb(59, 59, 79)');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Registration Form</title>
      <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Registration Form</h1>
    <p>Please fill out this form with the required information</p>
    <form action='https://register-demo.freecodecamp.org'>
      <fieldset>
        <label>Enter Your First Name: <input type="text" name="first-name" required /></label>
        <label>Enter Your Last Name: <input type="text" name="last-name" required /></label>
        <label>Enter Your Email: <input type="email" name="email" required /></label>
        <label>Create a New Password: <input type="password" name="password" pattern="[a-z0-5]{8,}" required /></label>
      </fieldset>
      <fieldset>
        <label><input type="radio" name="account-type" /> Personal Account</label>
        <label><input type="radio" name="account-type" /> Business Account</label>
        <label>
          <input type="checkbox" name="terms" required /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
              </label>
      </fieldset>
      <fieldset>
        <label>Upload a profile picture: <input type="file" name="file" /></label>
        <label>Input your age (years): <input type="number" name="age" min="13" max="120" />
              </label>
        <label>How did you hear about us?
          <select name="referrer">
            <option value="">(select one)</option>
            <option value="1">freeCodeCamp News</option>
            <option value="2">freeCodeCamp YouTube Channel</option>
            <option value="3">freeCodeCamp Forum</option>
            <option value="4">Other</option>
          </select>
        </label>
        <label>Provide a bio:
          <textarea name="bio" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
              </label>
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

```css
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: #1b1b32;
    color: #f5f6f7;
  font-family: Tahoma;
    font-size: 16px;
}

h1, p {
  margin: 1em auto;
  text-align: center;
}

form {
  width: 60vw;
    max-width: 500px;
    min-width: 300px;
    margin: 0 auto;
}

fieldset {
  border: none;
    padding: 2rem 0;
}

--fcc-editable-region--

--fcc-editable-region--

label {
    display: block;
    margin: 0.5rem 0;
}

```
