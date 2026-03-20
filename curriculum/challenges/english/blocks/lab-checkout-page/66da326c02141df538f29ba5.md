---
id: 66da326c02141df538f29ba5
title: Build a Checkout Page
challengeType: 25
dashedName: build-a-checkout-page
demoType: onClick
---

# --description--

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have an `h1` element with the text `Checkout`.
1. You should have two `section` elements immediately after the `h1` element.
1. You should have an `h2` element with the text `Your Cart` within the first section.
1. You should have an image of an item in the first section with appropriate alternate text. You can use this image if you would like: `https://cdn.freecodecamp.org/curriculum/labs/cube.jpg`
1. You should have an `h2` element with the text `Payment Information` within the second section.
1. You should have a `form` element within the second section.
1. You should have an input with an `id` and `name` of `card-name`, and a `type` of `text` within your form and a `label` associated with it.
1. You should have an input with an `id` and `name` of `card-number`, and a `type` of `text` within your form and a `label` associated with it.
1. You should have at least two `input` elements with the `required` attribute.
1. You should include a `span` element with the text `*` and `aria-hidden` set to `true` inside the `label` element for each required input, so that required fields are visually indicated.
1. You should have a `p` element with a help text that explains the required card number format, placed immediately after the card number input. The `p` should have an `id` of `card-number-help` and be referenced by the card number input using `aria-describedby`.

# --hints--

You should have an `h1` element with the text `Checkout`.

```js
assert.equal(document.querySelector('h1')?.innerText, 'Checkout');
```

You should only have one `h1` element on your page.

```js
assert.lengthOf(document.querySelectorAll('h1'), 1);
```

You should have at least two `section` elements after the `h1` element.

```js
const h1 = document.querySelector('h1');
const firstSibling = h1?.nextElementSibling;
const secondSibling = firstSibling?.nextElementSibling;
assert.equal(firstSibling?.tagName, 'SECTION');
assert.equal(secondSibling?.tagName, 'SECTION');
```

You should have an `h2` element with the text `Your Cart` within the first section.

```js
const firstSection = document.querySelectorAll('section')?.[0];
assert.equal(firstSection?.querySelector('h2')?.innerText, 'Your Cart');
```

You should have at least one image with alternate text in your first section.

```js
const firstSection = document.querySelectorAll('section')?.[0];
assert.isAtLeast(firstSection?.querySelector('img')?.alt?.length, 1);
```

You should have an `h2` element with the text `Payment Information` within the second section.

```js
const secondSection = document.querySelectorAll('section')?.[1];
assert.equal(secondSection?.querySelector('h2')?.innerText, 'Payment Information');
```

You should have a `form` element within the second `section` element.

```js
const secondSection = document.querySelectorAll('section')?.[1];
assert.exists(secondSection?.querySelector('form'));
```

You should have an `input` element with an `id` and `name` of `card-name` within your form.

```js
const secondSection = document.querySelectorAll('section')?.[1];
assert.exists(secondSection?.querySelector('form input#card-name'));
assert.exists(secondSection?.querySelector('form input[name="card-name"]'));
```

Your card name input should have a `type` of `text`.

```js
const cardNameInput = document.getElementById('card-name');
assert.exists(cardNameInput);
assert.equal(cardNameInput.getAttribute('type'), 'text');
```

You should have an `input` element with an `id` and `name` of `card-number` within your form.

```js
const secondSection = document.querySelectorAll('section')?.[1];
assert.exists(secondSection?.querySelector('form input#card-number'));
assert.exists(secondSection?.querySelector('form input[name="card-number"]'));
```

Your card number input should have a `type` of `text`.

```js
const cardNumberInput = document.getElementById('card-number');
assert.exists(cardNumberInput);
assert.equal(cardNumberInput.getAttribute('type'), 'text');
```

All of your `input` elements that aren't a `type` of `submit` should have a `label` element associated with them.

```js
const inputs = document.querySelectorAll('input:not([type="submit"])');
assert.isAtLeast(inputs.length, 1);
inputs.forEach(input => {
  const label = document.querySelector(`label[for="${input.id}"]`) || input.parentElement;
  assert.exists(label);
  assert.equal(label.tagName, "LABEL");
});
```

You should have at least two `input` elements with the `required` attribute.

```js
const inputs = document.querySelectorAll('input');
const requiredInputs = Array.from(inputs).filter(input => input.required);
assert.isAtLeast(requiredInputs?.length, 2)
```

You should include a `span` element with the text `*` inside the `label` element for each required input.

```js
const requiredInputs = Array.from(document.querySelectorAll('input'))
  .filter(input => input.required);

assert.isNotEmpty(requiredInputs);

requiredInputs.forEach(input => {
  const label = document.querySelector(`label[for="${input.id}"]`) || input.parentElement;
  assert.exists(label);
  assert.equal(label.tagName, "LABEL");
  const span = label?.querySelector('span');
  assert.equal(span?.textContent.trim(), '*');
});
```

Your `span` elements should have `aria-hidden` set to `true`.

```js
const requiredInputs = Array.from(document.querySelectorAll('input'))
  .filter(input => input.required);

assert.isNotEmpty(requiredInputs);

requiredInputs.forEach(input => {
  const label = document.querySelector(`label[for="${input.id}"]`) || input.parentElement;
  assert.exists(label);
  assert.equal(label.tagName, "LABEL");
  const span = label?.querySelector('span');
  assert.equal(span?.getAttribute('aria-hidden'), 'true');
});
```

You should have a `p` element with an `id` of `card-number-help` immediately after the card number input.

```js
const cardNumberInput = document.getElementById('card-number');
const cardNumberHelp = document.getElementById('card-number-help');

assert.exists(cardNumberHelp);
const nextElement = cardNumberInput.parentElement?.tagName === 'LABEL'
  ? cardNumberInput.parentElement.nextElementSibling
  : cardNumberInput.nextElementSibling;
assert.equal(nextElement, cardNumberHelp);
```

Your card number help text should not be empty.

```js
const cardNumberHelp = document.getElementById('card-number-help');
assert.isString(cardNumberHelp?.textContent);
assert.isAbove(cardNumberHelp?.textContent.trim().length, 0);
```

Your card number input should have `aria-describedby` set to `card-number-help`.

```js
const cardNumberInput = document.getElementById('card-number');
assert.equal(cardNumberInput.getAttribute('aria-describedby'), 'card-number-help');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>Checkout Page</title>
</head>

<body>

</body>

</html>
```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout Page</title>
</head>
<body>
    <div class="container">
        <h1>Checkout</h1>

        <section>
            <h2>Your Cart</h2>
            <img src="https://cdn.freecodecamp.org/curriculum/labs/spoon.jpg" alt="Left-handed spoon">
            <p>Left-handed spoon</p>
            <p>$29.99</p>
        </section>

        <section>
            <h2>Payment Information</h2>
            <form action="/submit-payment" method="POST">
                <div>
                    <label for="card-name">Cardholder Name <span aria-hidden="true">*</span></label>
                    <input type="text" id="card-name" name="card-name" required>
                </div>
                <div>
                    <label for="card-number">Card Number <span aria-hidden="true">*</span></label>
                    <input type="text" id="card-number" name="card-number" aria-describedby="card-number-help" required>
                    <p id="card-number-help">Please enter your 16-digit card number without spaces or dashes.</p>
                </div>
                <div>
                    <label for="expiry-date">Expiry Date <span aria-hidden="true">*</span></label>
                    <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required>
                </div>
                <div>
                    <label for="cvv">CVV <span aria-hidden="true">*</span></label>
                    <input type="text" id="cvv" name="cvv" required aria-label="Card Verification Value">
                </div>
                <input type="submit" value="Place Order">
            </form>
        </section>
    </div>
</body>
</html>
```
