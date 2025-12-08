---
id: 68ce56d54d3cad1149a1c4cf
title: Design a Feature Selection Page
challengeType: 25
dashedName: design-a-feature-selection-page
demoType: onClick
---

# --description--

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. Your page should have an `h1` element with the text `Feature Selection`.
2. Your page should have a `div` element with the class `feature-card-container`.
3. Your page should have at least two `label` elements each with the class `feature-card` inside the `div`.
4. Each of your `label` elements should have label text and an `input` element of type `checkbox` in them.
5. Create a selector that targets the checkboxes, and apply the following styling:
    - All of your checkbox elements should be set to `appearance: none;` in your CSS.
    - All of your checkbox elements should have a border width, color and style of your choosing.
6. When the checkbox is checked, it should display a checkmark `✓` in the center of the checkbox.
7. When the checkbox is checked, the background color of the checkbox should change to a color of your choosing.
8. When the checkbox is checked, the border color of the checkbox should change to a color of your choosing.

**Note:** Be sure to link your CSS file in your HTML.

# --hints--

You should have an `h1` element.

```js
assert.exists(document.querySelector('h1'));
```

Your `h1` should have a text of `Feature Selection`.

```js
assert.equal(document.querySelector('h1').innerText.trim(), `Feature Selection`);
```

You should have a `div` element with the class `feature-card-container`.

```js
assert.exists(document.querySelector('div.feature-card-container'));
```

You should have at least two `label` elements inside `.feature-card-container`.

```js
const labels = document.querySelectorAll('.feature-card-container label');
assert.isAtLeast(labels.length, 2);
```

Each `label` element inside `.feature-card-container` should have the class `feature-card`.

```js
const labels = document.querySelectorAll('.feature-card-container label');
assert.isNotEmpty(labels);

labels.forEach(label => assert.isTrue(label.classList.contains('feature-card')));
```

Inside each `label` element you should have label text.

```js
const labels = document.querySelectorAll('.feature-card-container label');
assert.isNotEmpty(labels);

labels.forEach(label => assert.isNotEmpty(label.innerText.trim()));
```

Inside each label element there should be one `input` element of type `checkbox`.

```js
const labels = document.querySelectorAll('.feature-card-container label');
assert.isNotEmpty(labels);

labels.forEach(label => assert.exists(label.querySelector('input[type="checkbox"]')));
```

You should have a selector for the checkboxes.

```js
const selectors = [
  '.feature-card input[type="checkbox"]',
  '.feature-card [type="checkbox"]',
  'input[type="checkbox"]',
  '[type="checkbox"]',
  '.feature-card input',
  'input'
]
assert.isNotNull(new __helpers.CSSHelp(document).getStyleAny(selectors));
```

Your checkboxes should be set to `appearance: none`.

```js
const selectors = [
  '.feature-card input[type="checkbox"]',
  '.feature-card [type="checkbox"]',
  'input[type="checkbox"]',
  '[type="checkbox"]',
  '.feature-card input',
  'input'
]
assert.equal(new __helpers.CSSHelp(document).getStyleAny(selectors).getPropVal('appearance'), 'none');
```

Your checkboxes should have a border width of your choosing.

```js
const selectors = [
  '.feature-card input[type="checkbox"]',
  '.feature-card [type="checkbox"]',
  'input[type="checkbox"]',
  '[type="checkbox"]',
  '.feature-card input',
  'input'
]
assert.isNotEmpty(new __helpers.CSSHelp(document).getStyleAny(selectors).getPropVal('border-width'));
```

Your checkboxes should have a border color of your choosing.

```js
const selectors = [
  '.feature-card input[type="checkbox"]',
  '.feature-card [type="checkbox"]',
  'input[type="checkbox"]',
  '[type="checkbox"]',
  '.feature-card input',
  'input'
]
assert.isNotEmpty(new __helpers.CSSHelp(document).getStyleAny(selectors).getPropVal('border-color'));
```

Your checkboxes should have a border style of your choosing.

```js
const selectors = [  
  '.feature-card [type="checkbox"]',
  '.feature-card input[type="checkbox"]',
  'input[type="checkbox"]',
  '[type="checkbox"]',
  '.feature-card input', // there aren't other input elements, so this is a valid approach
  'input'
]
assert.isNotEmpty(new __helpers.CSSHelp(document).getStyleAny(selectors).getPropVal('border-style'));
```

When the checkboxes are selected, there should be a checkmark `✓` in the center of the checkbox.

```js
const checkboxes = document.querySelectorAll('.feature-card input[type="checkbox"]');
assert.isNotEmpty(checkboxes);

checkboxes.forEach((checkbox) => { 
    checkbox.checked = false;

    checkbox.checked = true;
    const after = window.getComputedStyle(checkbox, ':after');
    assert.equal(after.content, '"✓"');
});
```

When the checkbox is checked, the background color of the checkbox should change to a color of your choosing.

```js
const checkboxes = document.querySelectorAll('.feature-card input[type="checkbox"]');
assert.isNotEmpty(checkboxes);

checkboxes.forEach((checkbox) => { 
    checkbox.checked = false;
    const uncheckedBG = window.getComputedStyle(checkbox).backgroundColor;
    checkbox.checked = true;
    const checkedBG = window.getComputedStyle(checkbox).backgroundColor;

    assert.notEqual(checkedBG, uncheckedBG);
});
```

When the checkbox is checked, the border color of the checkbox should change to a color of your choosing.

```js
const checkboxes = document.querySelectorAll('.feature-card input[type="checkbox"]');
assert.isNotEmpty(checkboxes);

checkboxes.forEach((checkbox) => { 
    checkbox.checked = false;
    const uncheckedBC = window.getComputedStyle(checkbox).borderColor;
    checkbox.checked = true;
    const checkedBC = window.getComputedStyle(checkbox).borderColor;

    assert.notEqual(checkedBC, uncheckedBC);
});
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Selection Feature Page</title>
</head>

<body>

</body>

</html>
```

```css

```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Feature Selection</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Feature Selection</h1>
    <div class="feature-card-container">
      <label class="feature-card">
        <input type="checkbox" />
        <h4>Cloud Storage</h4>
        <p>100 Gigabyte secure storage</p>
      </label>

      <label class="feature-card">
        <input type="checkbox" />
        <h4>Dedicated Support</h4>
        <p>24/7 customer help</p>
      </label>

      <label class="feature-card">
        <input type="checkbox" />
        <h4>Advanced Analytics</h4>
        <p>Insights & reports</p>
      </label>

      <label class="feature-card">
        <input type="checkbox" />
        <h4>Custom User Themes</h4>
        <p>Personalized dashboard design</p>
      </label>

      <label class="feature-card">
        <input type="checkbox" />
        <h4>Multi-User Collab</h4>
        <p>Team access and sharing</p>
      </label>

      <label class="feature-card">
        <input type="checkbox" />
        <h4>API Access</h4>
        <p>Integrate with your custom built tools</p>
      </label>
    </div>
  </body>
</html>
```

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.feature-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 600px;
  justify-content: center;
}

.feature-card-container > * {
  flex: 1 1 180px;
}

.feature-card {
  border: 2px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.feature-card:hover {
  border-color: #f1be32;
  box-shadow: 0 4px 12px rgba(255, 201, 53, 0.6);
}

.feature-card input[type='checkbox'] {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: white;
}

.feature-card input[type='checkbox']:checked {
  background-color: #f1be32;
  border-color: #f1be32;
}

.feature-card input[type='checkbox']:checked::after {
  content: '✓';
  display: block;
  text-align: center;
  font-weight: bold;
  color: white;
  line-height: 20px;
}

.feature-card h4 {
  margin: 10px 0 5px;
  font-size: 1.2rem;
}

@media (max-width: 600px) {
  body {
    height: auto;
  }
}
```
