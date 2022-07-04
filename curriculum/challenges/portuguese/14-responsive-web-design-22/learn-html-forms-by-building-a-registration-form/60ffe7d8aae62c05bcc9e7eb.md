---
id: 60ffe7d8aae62c05bcc9e7eb
title: Passo 52
challengeType: 0
dashedName: step-52
---

# --description--

Com um `display` de `block` o botão de enviar fica na borda esquerda do elemento pai.

Use a mesma técnica usada para centralizar o `form` para centralizar o botão de enviar.

# --hints--

Você deve dar ao botão de enviar uma `margin` de `0 auto`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('input[type="submit"]')?.margin, '0px auto');
```

Você não deve dar ao botão enviar uma `min-width` ou uma `max-width`.

```js
assert.isEmpty(new __helpers.CSSHelp(document).getStyle('input[type="submit"]')?.minWidth);
assert.isEmpty(new __helpers.CSSHelp(document).getStyle('input[type="submit"]')?.maxWidth);
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
        <label><input type="radio" name="account-type" class="inline" /> Personal Account</label>
        <label><input type="radio" name="account-type" class="inline" /> Business Account</label>
        <label>
          <input type="checkbox" name="terms" class="inline" required /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
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
  border-bottom: 3px solid #3b3b4f;
}

fieldset:last-of-type {
  border-bottom: none;
}

label {
  display: block;
    margin: 0.5rem 0;
}

input,
textarea,
select {
  margin: 10px 0 0 0;
    width: 100%;
  min-height: 2em;
}

input, textarea {
  background-color: #0a0a23;
  border: 1px solid #0a0a23;
  color: #ffffff;
}

.inline {
  width: unset;
  margin: 0 0.5em 0 0;
  vertical-align: middle;
}

--fcc-editable-region--
input[type="submit"] {
  display: block;
  width: 60%;

}
--fcc-editable-region--

```
