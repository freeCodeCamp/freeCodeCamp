---
id: 690ddb5e6ee94eb73ed172b0
title: Debug a Donation Form
challengeType: 25
dashedName: debug-donation-form
# Purposefully removed the demo type because this is a debugging project.
---

# --description--

A local charity has built a donation form website, but there are several issues that need to be fixed. The form isn't accessible and has some HTML syntax errors.

Your job is to fix all of the errors so the form works correctly and is accessible to all users. Complete the items in the user stories below and click "Run the Tests" to see if you fixed all the errors.

**User Stories:**

1. The `input` elements are void elements and should not have closing tags. Remove all `</input>` closing tags from the form.
2. Add `label` elements for each form input field so users know what each field is for. The label text should match what's currently next to each input.
3. The `Email Address:` input type should be an `email` instead of `text`.
4. You should associate each `label` element with its corresponding `input` element using the `for` attribute on the `label` and a matching `id` attribute on the `input`.
5. Add the `required` attribute to the text, email, and number input fields (but not the checkbox or submit button) to ensure users fill in the required information.

# --hints--

You should not have any `</input>` closing tags in your code.

```js
assert.notMatch(code, /<\/input>/);
```

You should have exactly five `input` elements in your form.

```js
assert.lengthOf(document.querySelectorAll("input"), 5);
```

You should have exactly four `label` elements in your form.

```js
assert.lengthOf(document.querySelectorAll("label"), 4);
```

Your first `label` should have the text `Full Name:`.

```js
const labels = document.querySelectorAll("label");
assert.match(labels[0]?.textContent, /Full\s*Name\s*:/i);
```

Your first `input` should have a `required` attribute.

```js
const firstInput = document.querySelector("input[name='name']");
assert.isTrue(firstInput?.hasAttribute("required"));
```

Your second `label` should have the text `Email Address:`.

```js
const labels = document.querySelectorAll("label");
assert.match(labels[1]?.textContent, /Email\s*Address\s*:/i);
```

Your second `input` should have a `required` attribute.

```js
const secondInput = document.querySelector("input[name='email']");
assert.isTrue(secondInput?.hasAttribute("required"));
```

Your third `label` should have the text `Donation Amount ($):`.

```js
const labels = document.querySelectorAll("label");
assert.match(labels[2]?.textContent, /Donation\s*Amount\s*\(\$\)\s*:/i);
```

Your third `input` should have a `required` attribute.

```js
const thirdInput = document.querySelector("input[name='amount']");
assert.isTrue(thirdInput?.hasAttribute("required"));
```

Your fourth `label` should have the text `Subscribe`.

```js
const labels = document.querySelectorAll("label");
assert.match(labels[3]?.textContent, /Subscribe/i);
```

You should associate every `input` element with a `label` element using the `for` and `id` attributes.

```js 
const els = document.querySelectorAll('input:not([type="submit"])'); 
assert.isNotEmpty(els); 
els.forEach(input => { 
  const label = document.querySelector(`label[for="${input.id}"]`); 
  assert.exists(label);  
  assert.equal(label.tagName, "LABEL"); 
})
``` 

Your `input` for the email address should be of type `email`.

```js
const emailInput = document.querySelector("input[name='email']");
assert.strictEqual(emailInput?.getAttribute("type"), "email");
```

Your checkbox `input` should not have a `required` attribute.

```js
const checkboxInput = document.querySelector("input[name='newsletter']");
assert.isFalse(checkboxInput?.hasAttribute("required"));
```

Your submit `button` should not have a `required` attribute.

```js
const submitButton = document.querySelector("input[type='submit']");
assert.isFalse(submitButton?.hasAttribute("required"));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Donation Form</title>
</head>
<body>
  <h1>Donation Form</h1>
  <form>
    
    Full Name:
    <input type="text" name="name"></input>

    Email Address:
    <input type="text" name="email">

    Donation Amount ($):
    <input type="number" name="amount"></input>

    <input type="checkbox" name="newsletter"></input>
    Subscribe

    <input type="submit" value="Send"></input>
  </form>
</body>
</html>
```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Donation Form</title>
</head>
<body>
  <h1>Donation Form</h1>
  <form>
    <label for="full-name">Full Name:</label>
    <input id="full-name" type="text" name="name" required>

    <label for="email">Email Address:</label>
    <input id="email" type="email" name="email" required>

    <label for="amount">Donation Amount ($):</label>
    <input id="amount" type="number" name="amount" required>

    <label for="newsletter">Subscribe</label>
    <input id="newsletter" type="checkbox" name="newsletter">

    <input type="submit" value="Send">
  </form>
</body>
</html>
```
