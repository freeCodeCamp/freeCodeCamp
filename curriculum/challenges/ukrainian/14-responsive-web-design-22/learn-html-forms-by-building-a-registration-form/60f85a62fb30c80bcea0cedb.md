---
id: 60f85a62fb30c80bcea0cedb
title: Крок 23
challengeType: 0
dashedName: step-23
---

# --description--

Користувачам буде дозволено вибирати `Personal Account` або `Business Account`.

Для цього потрібно до кожного з перших двох елементів `label` додати по одному елементу `input`, що мають `type="radio"`.

# --hints--

Додайте два елементи `input`.

```js
assert.equal(document.querySelectorAll('fieldset:nth-child(2) input')?.length, 2);
```

Ви повинні додати один `input` до кожного з перших двох елементів `label`.

```js
assert.exists(document.querySelector('fieldset:nth-child(2) > label:nth-child(1) > input'));
assert.exists(document.querySelector('fieldset:nth-child(2) > label:nth-child(2) > input'));
```

Для обох елементів `input` надайте `type` зі значенням `radio`.

```js
assert.equal(document.querySelectorAll('fieldset:nth-child(2) input[type="radio"]')?.length, 2);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Registration Form</h1>
    <p>Please fill out this form with the required information</p>
    <form action='https://register-demo.freecodecamp.org'>
      <fieldset>
        <label>Enter Your First Name: <input type="text" required /></label>
        <label>Enter Your Last Name: <input type="text" required /></label>
        <label>Enter Your Email: <input type="email" required /></label>
        <label>Create a New Password: <input type="password" pattern="[a-z0-5]{8,}" required /></label>
      </fieldset>
--fcc-editable-region--
      <fieldset>
        <label></label>
        <label></label>
        <label></label>
      </fieldset>
--fcc-editable-region--
      <fieldset></fieldset>
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
}

label {
  display: block;
  margin: 0.5rem 0;
}

```
