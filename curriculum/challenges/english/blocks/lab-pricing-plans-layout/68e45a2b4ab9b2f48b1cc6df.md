---
id: 68e45a2b4ab9b2f48b1cc6df
title: Design a Pricing Plans Layout Page
challengeType: 25
dashedName: design-a-pricing-plans-layout-page
demoType: onClick
---

# --description--

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories**

1. Your page should have an `h1` element with the text `Pricing Plans`.
2. Your page should have a `div` element with the class `pricing-container` below the `h1` element.
    - The `.pricing-container` selector should have a `display` property with the value of `flex` and a `flex-wrap` property with the value of `wrap`.
3. Within the `.pricing-container` element, you should have three `div` elements with the class `pricing-card` to represent the pricing plans.
    - One of the `.pricing-card` elements should have the class `basic-plan` in addition to the `pricing-card` class.
    - One of the `.pricing-card` elements should have the class `pro-plan` in addition to the `pricing-card` class.
    - One of the `.pricing-card` elements should have the class `premium-plan` in addition to the `pricing-card` class.
4. Your `.basic-plan` element should have an `h2` element with the text `Basic`.
5. Your `.basic-plan` element should have a `p` element with the text `$9/month`.
6. Your `.pro-plan` element should have an `h2` element with the text `Pro`.
7. Your `.pro-plan` element should have a `p` element with the text `$19/month`.
8. Your `.premium-plan` element should have an `h2` element with the text `Premium`.
9. Your `.premium-plan` element should have a `p` element with the text `$29/month`.
10. Each of your `.pricing-card` elements should:
    - Use Flexbox to stack its content in a column and justify the space between the children using `space-between`.
    - Set the `flex` property to `0 0 200px` to give it a consistent width and prevent it from growing or shrinking in the layout.
    - Set the `border` property to `2px solid black` to see how the different cards take up space.
11. The `.basic-plan` element should appear first in the layout. You should use the `order` property for this.
12. The `.pro-plan` element should appear second in the layout. You should use the `order` property and set its `flex-grow` property to `2` so it takes up more space than the other plans.
13. The `.premium-plan` element should come last in the layout. You should use the `order` property for this.

**Note:** Be sure to link your stylesheet in your HTML and apply your CSS.

# --hints--

You should have an `h1` element.

```js
assert.exists(document.querySelector('h1'));
```

Your page should have an `h1` element with the text `Pricing Plans`.

```js
const h1 = document.querySelector('h1');
assert.strictEqual(h1?.textContent.trim(), 'Pricing Plans');
```

You should have a `div` element below the `h1` element.

```js
assert.exists(document.querySelector('h1 + div'));
```

Your `div` element should have the class `pricing-container`.

```js
assert.exists(document.querySelector('h1 + div.pricing-container'));
```

You should have a `.pricing-container` selector.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.pricing-container'));
```

Your `pricing-container` selector should have the property `display` with a value of `flex`.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('.pricing-container')?.display, 'flex');
```

Your `.pricing-container` selector should have the property `flex-wrap` with a value of `wrap`.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('.pricing-container')?.flexWrap, 'wrap');
```

You should have three `div` elements with the class `pricing-card` within the `.pricing-container` element.

```js
const divEls = document.querySelectorAll('.pricing-container .pricing-card');
assert.lengthOf(divEls, 3);
```

One of your `.pricing-card` elements should have the class `basic-plan`.

```js
assert.exists(document.querySelector('div.pricing-card.basic-plan'));
```

One of your `.pricing-card` elements should have the class `premium-plan`.

```js
assert.exists(document.querySelector('div.pricing-card.premium-plan'));
```

One of your `.pricing-card` elements should have the class `pro-plan`.

```js
assert.exists(document.querySelector('div.pricing-card.pro-plan'));
```

You should have a `.pricing-card` selector.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('.pricing-card'));
```

Your `.pricing-card` selector should have the property `display` with a value of `flex`.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('.pricing-card')?.display, 'flex');
```

Your `.pricing-card` selector should have the property `flex-direction` with a value of `column`.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('.pricing-card')?.flexDirection, 'column');
```

Your `.pricing-card` selector should have the property `justify-content` with a value of `space-between`.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('.pricing-card')?.justifyContent, 'space-between');
```

Your `.pricing-card` selector should have the property `flex` with a value of `0 0 200px`.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('.pricing-card')?.flex, '0 0 200px');
```

Your `.pricing-card` selector should have the property `border` with a value of `2px solid black`.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('.pricing-card')?.border, '2px solid black');
```

Your `.basic-plan` selector should have the property `order` with a value of `0`.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('.basic-plan')?.order, '0');
```

Your `.basic-plan` element should have an `h2` element with the text `Basic`.

```js
const h2 = document.querySelector('.basic-plan > h2');
assert.strictEqual(h2?.textContent.trim(), 'Basic');
```

Your `.basic-plan` element should have a `p` element with the text `$9/month`.

```js
const p = document.querySelector('.basic-plan > p');
assert.strictEqual(p?.textContent.trim(), '$9/month');
```

Your `.pro-plan` element should have an `h2` element with the text `Pro`.

```js
const h2 = document.querySelector('.pro-plan > h2');
assert.strictEqual(h2?.textContent.trim(), 'Pro');
```

Your `.pro-plan` element should have a `p` element with the text `$19/month`.

```js
const p = document.querySelector('.pro-plan > p');
assert.strictEqual(p?.textContent.trim(), '$19/month');
```

Your `.pro-plan` element should have the property `order` with a value of `1`.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('.pro-plan')?.order, '1');
```

Your `.pro-plan` element should have the property `flex-grow` with a value of `2`.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('.pro-plan')?.flexGrow, '2');
```

Your `.premium-plan` element should have an `h2` element with the text `Premium`.

```js
const h2 = document.querySelector('.premium-plan > h2');
assert.strictEqual(h2?.textContent.trim(), 'Premium');
```

Your `.premium-plan` element should have a `p` element with the text `$29/month`.

```js
const p = document.querySelector('.premium-plan > p');
assert.strictEqual(p?.textContent.trim(), '$29/month');
```

Your `premium-plan` element should be the last element in the layout and have the property `order` and the value `2`.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('.premium-plan')?.order, '2');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Pricing Plans Layout Page</title>
  </head>
  <body></body>
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
    <title>Pricing Plans Layout</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Pricing Plans</h1>
    <div class="pricing-container">
      <div class="pricing-card pro-plan">
        <h2>Pro</h2>
        <p class="price">$19/month</p>
        <ul class="features">
          <li><span class="check">✓</span> Access to our core features</li>
          <li><span class="check">✓</span> Email support</li>
          <li><span class="check">✓</span> Advanced analytics</li>
          <li><span class="check">✓</span> Custom integrations</li>
          <li><span class="cross">✗</span> Priority support</li>
        </ul>
        <a href="#">Choose Plan</a>
      </div>

      <div class="pricing-card basic-plan">
        <h2>Basic</h2>
        <p class="price">$9/month</p>
        <ul class="features">
          <li><span class="check">✓</span> Access to our core features</li>
          <li><span class="check">✓</span> Email support</li>
          <li><span class="cross">✗</span> Advanced analytics</li>
          <li><span class="cross">✗</span> Custom integrations</li>
          <li><span class="cross">✗</span> Priority support</li>
        </ul>
        <a href="#">Choose Plan</a>
      </div>

      <div class="pricing-card premium-plan">
        <h2>Premium</h2>
        <p class="price">$29/month</p>
        <ul class="features">
          <li><span class="check">✓</span> Access to our core features</li>
          <li><span class="check">✓</span> Email support</li>
          <li><span class="check">✓</span> Advanced analytics</li>
          <li><span class="check">✓</span> Custom integrations</li>
          <li><span class="check">✓</span> Priority support</li>
        </ul>
        <a href="#">Choose Plan</a>
      </div>
    </div>
  </body>
</html>
```

```css
body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}

h1 {
  margin-bottom: 20px;
}

h2,
p {
  margin: 0;
}

.pricing-container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  border: 2px solid #000;
  gap: 20px;
  width: 80%;
  max-width: 900px;
  height: 70vh;
  padding: 0 20px;
}

.pricing-card {
  background: rgb(247, 247, 247);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex: 0 0 200px;
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid black;
}

.pricing-card:hover {
  transform: scale(1.05);
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #3e3e3e;
  margin: 10px;
  border-bottom: 1px solid #433d28;
}

.features {
  list-style-type: none;
  padding: 0;
  text-align: left;
}

.features li {
  padding: 5px 0;
  font-size: 0.95rem;
}

.check {
  color: #219c54;
  font-weight: bold;
  margin-right: 8px;
}

.cross {
  color: crimson;
  font-weight: bold;
  margin-right: 8px;
}

a {
  text-decoration: none;
  display: inline-block;
  margin-top: 15px;
  background: #f1be32;
  color: #000;
  font-weight: bold;
  border: 3px solid #eebe3a;
  padding: 5px;
  transition: background 0.3s;
}

a:hover {
  background: #f7c436;
}

.basic-plan {
  order: 0;
}
.pro-plan {
  order: 1;
  flex-grow: 2;
  background: #f0f8ff;
}
.premium-plan {
  order: 2;
}

@media screen and (max-width: 1000px) {
  .pricing-container {
    height: auto;
    padding-bottom: 20px;
  }

  h1 {
    display: block;
    font-size: 1.5rem;
    text-align: center;
  }

  .pricing-card {
    flex: 0 0 175px;
  }
}

@media screen and (max-width: 650px) {
  .pricing-container {
    flex-direction: column;
    height: auto;
  }

  .pricing-card {
    flex: 1 1 auto;
    width: 100%;
  }
}
```

