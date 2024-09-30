---
id: 587d78af367417b2b2512b03
title: Build a Survey Form
challengeType: 14
forumTopicId: 301145
dashedName: build-a-survey-form
---

# --description--

**Objective:** Build an app that is functionally similar to <a href="https://survey-form.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://survey-form.freecodecamp.rocks</a>. **Do not copy this demo project**.

**User Stories:**

1. You should have a page title in an `h1` element with an `id` of `title`
1. You should have a short explanation in a `p` element with an `id` of `description`
1. You should have a `form` element with an `id` of `survey-form`
1. Inside the form element, you are **required** to enter your name in an `input` field that has an `id` of `name` and a `type` of `text`
1. Inside the form element, you are **required** to enter your email in an `input` field that has an `id` of `email`
1. If you enter an email that is not formatted correctly, you will see an HTML5 validation error
1. Inside the form, you can enter a number in an `input` field that has an `id` of `number`
1. The number input should not accept non-numbers, either by preventing you from typing them or by showing an HTML5 validation error (depending on your browser).
1. If you enter numbers outside the range of the number input, which are defined by the `min` and `max` attributes, you will see an HTML5 validation error
1. For the name, email, and number input fields, you can see corresponding `label` elements in the form, that describe the purpose of each field with the following ids: `id="name-label"`, `id="email-label"`, and `id="number-label"`
1. For the name, email, and number input fields, you can see placeholder text that gives a description or instructions for each field
1. Inside the form element, you should have a `select` dropdown element with an `id` of `dropdown` and at least two options to choose from
1. Inside the form element, you can select an option from a group of at least two radio buttons that are grouped using the `name` attribute
1. Inside the form element, you can select several fields from a series of checkboxes, each of which must have a `value` attribute
1. Inside the form element, you are presented with a `textarea` for additional comments
1. Inside the form element, you are presented with a button with `id` of `submit` to submit all the inputs

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

**Note:** Be sure to add `<link rel="stylesheet" href="styles.css">` in your HTML to link your stylesheet and apply your CSS

# --hints--

You should have an `h1` element with an `id` of `title`.

```js
const el = document.getElementById('title')
assert(!!el && el.tagName === 'H1')
```

Your `#title` should not be empty.

```js
const el = document.getElementById('title')
assert(!!el && el.innerText.length > 0)
```

You should have a `p` element with an `id` of `description`.

```js
const el = document.getElementById('description')
assert(!!el && el.tagName === 'P')
```

Your `#description` should not be empty.

```js
const el = document.getElementById('description')
assert(!!el && el.innerText.length > 0)
```

You should have a `form` element with an `id` of `survey-form`.

```js
const el = document.getElementById('survey-form')
assert(!!el && el.tagName === 'FORM')
```

You should have an `input` element with an `id` of `name`.

```js
const el = document.getElementById('name')
assert(!!el && el.tagName === 'INPUT')
```

Your `#name` should have a `type` of `text`.

```js
const el = document.getElementById('name')
assert(!!el && el.type === 'text')
```

Your `#name` should require input.

```js
const el = document.getElementById('name')
assert(!!el && el.required)
```

Your `#name` should be a descendant of `#survey-form`.

```js
const el = document.querySelector('#survey-form #name')
assert(!!el)
```

You should have an `input` element with an `id` of `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.tagName === 'INPUT')
```

Your `#email` should have a `type` of `email`.

```js
const el = document.getElementById('email')
assert(!!el && el.type === 'email')
```

Your `#email` should require input.

```js
const el = document.getElementById('email')
assert(!!el && el.required)
```

Your `#email` should be a descendant of `#survey-form`.

```js
const el = document.querySelector('#survey-form #email')
assert(!!el)
```

You should have an `input` element with an `id` of `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.tagName === 'INPUT')
```

Your `#number` should be a descendant of `#survey-form`.

```js
const el = document.querySelector('#survey-form #number')
assert(!!el)
```

Your `#number` should have a `type` of `number`.

```js
const el = document.getElementById('number')
assert(!!el && el.type === 'number')
```

Your `#number` should have a `min` attribute with a numeric value.

```js
const el = document.getElementById('number')
assert(!!el && el.min && isFinite(el.min))
```

Your `#number` should have a `max` attribute with a numeric value.

```js
const el = document.getElementById('number')
assert(!!el && el.max && isFinite(el.max))
```

You should have a `label` element with an `id` of `name-label`.

```js
const el = document.getElementById('name-label')
assert(!!el && el.tagName === 'LABEL')
```

You should have a `label` element with an `id` of `email-label`.

```js
const el = document.getElementById('email-label')
assert(!!el && el.tagName === 'LABEL')
```

You should have a `label` element with an `id` of `number-label`.

```js
const el = document.getElementById('number-label')
assert(!!el && el.tagName === 'LABEL')
```

Your `#name-label` should contain text that describes the input.

```js
const el = document.getElementById('name-label')
assert(!!el && el.innerText.length > 0)
```

Your `#email-label` should contain text that describes the input.

```js
const el = document.getElementById('email-label')
assert(!!el && el.innerText.length > 0)
```

Your `#number-label` should contain text that describes the input.

```js
const el = document.getElementById('number-label')
assert(!!el && el.innerText.length > 0)
```

Your `#name-label` should be a descendant of `#survey-form`.

```js
const el = document.querySelector('#survey-form #name-label')
assert(!!el)
```

Your `#email-label` should be a descendant of `#survey-form`.

```js
const el = document.querySelector('#survey-form #email-label')
assert(!!el)
```

Your `#number-label` should be a descendant of `#survey-form`.

```js
const el = document.querySelector('#survey-form #number-label')
assert(!!el)
```

Your `#name` should have a `placeholder` attribute and value.

```js
const el = document.getElementById('name')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Your `#email` should have a `placeholder` attribute and value.

```js
const el = document.getElementById('email')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

Your `#number` should have a `placeholder` attribute and value.

```js
const el = document.getElementById('number')
assert(!!el && !!el.placeholder && el.placeholder.length > 0)
```

You should have a `select` field with an `id` of `dropdown`.

```js
const el = document.getElementById('dropdown')
assert(!!el && el.tagName === 'SELECT')
```

Your `#dropdown` should have at least two selectable (not disabled) `option` elements.

```js
const els = document.querySelectorAll('#dropdown option:not([disabled])')
assert(els.length >= 2)
```

Your `#dropdown` should be a descendant of `#survey-form`.

```js
const el = document.querySelector('#survey-form #dropdown')
assert(!!el)
```

You should have at least two `input` elements with a `type` of `radio` (radio buttons).

```js
const els = document.querySelectorAll('input[type="radio"]')
assert(els.length >= 2)
```

You should have at least two radio buttons that are descendants of `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="radio"]')
assert(els.length >= 2)
```

All your radio buttons should have a `value` attribute and value.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][value=""], input[type="radio"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

All your radio buttons should have a `name` attribute and value.

```js
const els1 = document.querySelectorAll('input[type="radio"]')
const els2 = document.querySelectorAll('input[type="radio"][name=""], input[type="radio"]:not([name])')
assert(els1.length > 0 && els2.length === 0)
```

Every radio button group should have at least 2 radio buttons.

```js
const radioButtons = document.querySelectorAll('input[type="radio"]');
const groups = {}

if (radioButtons) {
  radioButtons.forEach(el => {
    if (!groups[el.name]) groups[el.name] = []
    groups[el.name].push(el)
  })
}

const groupKeys = Object.keys(groups)

groupKeys.forEach(key => {
  if (groups[key].length < 2) assert(false)
})

assert(groupKeys.length > 0)
```

You should have at least two `input` elements with a `type` of `checkbox` (checkboxes) that are descendants of `#survey-form`.

```js
const els = document.querySelectorAll('#survey-form input[type="checkbox"]');
assert(els.length >= 2)
```

All your checkboxes inside `#survey-form` should have a `value` attribute and value.

```js
const els1 = document.querySelectorAll('#survey-form input[type="checkbox"]')
const els2 = document.querySelectorAll('#survey-form input[type="checkbox"][value=""], #survey-form input[type="checkbox"]:not([value])')
assert(els1.length > 0 && els2.length === 0)
```

You should have at least one `textarea` element that is a descendant of `#survey-form`.

```js
const el = document.querySelector('#survey-form textarea')
assert(!!el)
```

You should have an `input` or `button` element with an `id` of `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && (el.tagName === 'INPUT' || el.tagName === 'BUTTON'))
```

Your `#submit` should have a `type` of `submit`.

```js
const el = document.getElementById('submit')
assert(!!el && el.type === 'submit')
```

Your `#submit` should be a descendant of `#survey-form`.

```js
const el = document.querySelector('#survey-form #submit')
assert(!!el)
```

# --seed--

## --seed-contents--

```html

```

```css

```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="styles.css" />
    <title>Survey Form</title>
  </head>
  <body>
    <h1>Survey Form</h1>
    <p>The card below was built as a sample survey form for freeCodeCamp.</p>
    <main id="main">
      <h1 id="title">Join the Togepi Fan Club!</h1>
      <p id="description">
        Enter your information here to receive updates about club activities,
        our monthly newsletter, and other email communications.
      </p>
      <form id="survey-form" action="#">
        <label for="name" id="name-label"
          ><p>Name:</p>
          <input type="text" id="name" placeholder="e.g. John Smith" required />
        </label>
        <label for="email" id="email-label"
          ><p>Email:</p>
          <input
            type="email"
            id="email"
            placeholder="e.g. john.smith@email.com"
            required
          />
        </label>
        <label for="age" id="number-label"
          ><p>Age<em>(optional)</em>:</p>
          <input
            type="number"
            id="number"
            placeholder="e.g. 19"
            min="18"
            max="99"
          />
        </label>
        <label for="interest" id="interest-label"
          ><p>What are you most interested in?</p>
          <select id="dropdown">
            <option selected disabled hidden></option>
            <option id="battles">Battling</option>
            <option id="breeding">Breeding</option>
            <option id="catching">Completing my Pokedex</option>
            <option id="exploring">Exploring new regions</option>
          </select>
        </label>
        <p>Who is your favourite Pokemon?</p>
        <label for="togepi">
          <input
            id="togepi"
            type="radio"
            name="favorite"
            value="togepi"
          />Togepi!
        </label>
        <label for="pikachu">
          <input
            id="pikachu"
            type="radio"
            name="favorite"
            value="pikachu"
          />Pikachu
        </label>
        <label for="other">
          <input id="other" type="radio" name="favorite" value="other" />Other
        </label>
        <p>Which communications do you want to receive?</p>
        <label for="newsletter">
          <input
            id="newsletter"
            type="checkbox"
            name="communications"
            value="newsletter"
          />Newsletter
        </label>
        <label for="events">
          <input
            id="events"
            type="checkbox"
            name="communications"
            value="events"
          />Event updates
        </label>
        <label for="updates">
          <input
            id="updates"
            type="checkbox"
            name="communications"
            value="updates"
          />Club updates
        </label>
        <p>Any other information you would like to share?</p>
        <textarea id="additional-information" rows="4" cols="50">
You can provide comments, suggestions, or feedback here.</textarea
        >
        <p>
          <em
            >Please note: This form is a proof of concept. Submitting the form
            will not actually transmit your data.</em
          >
        </p>
        <button type="Submit" id="submit">Submit</button>
      </form>
    </main>
  </body>
  <footer>
    <a href="../">Return to Project List</a> |
    <a href="https://www.nhcarrigan.com">Return to HomePage</a>
  </footer>
</html>
```

```css
main {
  text-align: center;
  background-color: #92869c;
  background-blend-mode: lighten;
  max-width: 500px;
  margin: 20px auto;
  border-radius: 50px;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.5);
  color: black;
}
body {
  text-align: center;
  background: #3a3240;
  color: white;
}
input, textarea, select, button {
  background: #3a3240;
  color: white;
}
a {
  color: white;
}
```
