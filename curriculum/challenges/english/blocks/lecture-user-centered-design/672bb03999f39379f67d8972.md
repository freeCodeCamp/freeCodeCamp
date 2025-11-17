---
id: 672bb03999f39379f67d8972
title: What Is Progressive Disclosure?
challengeType: 19
dashedName: what-is-progressive-disclosure
---

# --interactive--

**NOTE**: Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

A progressive disclosure is a design pattern used to only show users relevant content based on their current activity and hide the rest. This is done to reduce cognitive load and make the user experience more intuitive.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css">

<div class="progressive-disclosure">
  <button id="show-details-btn" aria-expanded="false" aria-controls="extra-content">
    Show More Details
  </button>
  <div id="extra-content" class="hidden" tabindex="-1">
    <p>
      Here are additional details that are revealed only when you want to see them.
      This keeps the interface clean and reduces cognitive load.
    </p>
  </div>
</div>
<script src="index.js"></script>

```

```css
.progressive-disclosure {
  font-family: sans-serif;
  max-width: 400px;
  margin: 20px auto;
}

#show-details-btn {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 16px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

#show-details-btn:hover,
#show-details-btn:focus {
  background-color: #0056b3;
  outline: none;
}

.hidden {
  display: none;
}

#extra-content {
  margin-top: 15px;
  padding: 10px;
  background-color: #f7f9fcff;
  border: 1px solid #ddd;
  border-radius: 5px;
}

```

```js
const btn = document.getElementById('show-details-btn');
const content = document.getElementById('extra-content');

btn.addEventListener('click', () => {
  const isHidden = content.classList.toggle('hidden');
  btn.setAttribute('aria-expanded', !isHidden);
  if (!isHidden) {
    content.focus();
  }
});

```

:::

For example, when you use Google's search page, most of your searches will be simple. So having a simple user interface with very few options makes sense. But for the few times you will need a more advanced search, Google provides an advanced search option that will reveal more options.

You can find Google's advanced search option from the settings menu on the Google homepage. Or you can go to `google.com/advanced_search`.

Another example of progressive disclosure would be the "More details" button on products in an e-commerce website. When you visit a site like Amazon, you will see a list of product images in different categories. This allows users to shop with ease and not get overwhelmed by too much information.

If the user is interested in a particular product, they can click on the product image to reveal more details about the product. Displaying all of the information right away may be overwhelming for the user. So, by using progressive disclosure, the user can choose to see more information when they are ready.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />

<div class="product-list">
  <div class="product" tabindex="0" aria-expanded="false" aria-controls="details-1">
    <img src="https://placehold.co/150x150" alt="Example Product Image" />

    <button class="details-btn" aria-label="Show more details for Product 1">More details</button>
    <div id="details-1" class="product-details hidden" tabindex="-1">
      <p><strong>Product 1:</strong> This is a great product with awesome features that you'll love.</p>
      <ul>
        <li>Feature A</li>
        <li>Feature B</li>
        <li>Feature C</li>
      </ul>
    </div>
  </div>

  <div class="product" tabindex="0" aria-expanded="false" aria-controls="details-2">
    <img src="https://placehold.co/150x150" alt="Example Product Image" />

    <button class="details-btn" aria-label="Show more details for Product 2">More details</button>
    <div id="details-2" class="product-details hidden" tabindex="-1">
      <p><strong>Product 2:</strong> Another fantastic item with lots of benefits for your daily use.</p>
      <ul>
        <li>Benefit X</li>
        <li>Benefit Y</li>
        <li>Benefit Z</li>
      </ul>
    </div>
  </div>
</div>
<script src="index.js"></script>
```

```css
.product-list {
  font-family: sans-serif;
  display: flex;
  gap: 20px;
  max-width: 800px;
  margin: 20px auto;
  flex-wrap: wrap;
}

.product {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 180px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  position: relative;
}

.product img {
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
}

.details-btn {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 6px 12px;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.details-btn:hover,
.details-btn:focus {
  background-color: #0056b3;
  outline: none;
}

.product-details {
  margin-top: 10px;
  background-color: #f7f9fc;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px;
  font-size: 0.9rem;
}

.hidden {
  display: none;
}

```

```js
document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const details = product.querySelector('.product-details');
    const isHidden = details.classList.toggle('hidden');
    product.setAttribute('aria-expanded', !isHidden);
    if (!isHidden) {
      details.focus();
      button.textContent = 'Hide details';
    } else {
      button.textContent = 'More details';
    }
  });
});

```

:::

So, what are some best practices for designing with the progressive disclosure technique? The first consideration is to keep all important information visible at all times. Users should not have to struggle to find key information because it is hidden by extra advanced features.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />

<div class="info-section">
  <h2>Order Summary</h2>
  <p><strong>Items in Cart:</strong> 3</p>
  <p><strong>Total Price:</strong> $75.00</p>
  <div class="advanced-options">
    <button id="toggle-advanced-btn" aria-expanded="false" aria-controls="advanced-details">
      Show Advanced Options
    </button>
    <div id="advanced-details" class="hidden" tabindex="-1">
      <p>Apply coupon codes, gift wrapping, or select shipping preferences here.</p>
      <form>
        <label for="coupon">Coupon Code:</label><br />
        <input type="text" id="coupon" name="coupon" /><br /><br />
        <label>
          <input type="checkbox" name="gift-wrap" /> Gift wrap this order
        </label><br /><br />
        <label for="shipping">Shipping method:</label><br />
        <select id="shipping" name="shipping">
          <option value="standard">Standard (Free)</option>
          <option value="express">Express ($10.00)</option>
        </select>
      </form>
    </div>
  </div>
</div>

<script src="index.js"></script>
```

```css
.info-section {
  font-family: sans-serif;
  max-width: 400px;
  margin: 30px auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
}

h2 {
  margin-top: 0;
}

.advanced-options {
  margin-top: 20px;
}

#toggle-advanced-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

#toggle-advanced-btn:hover,
#toggle-advanced-btn:focus {
  background-color: #0056b3;
  outline: none;
}

.hidden {
  display: none;
}

#advanced-details {
  margin-top: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f7f9fc;
}
```

```js
const toggleBtn = document.getElementById('toggle-advanced-btn');
const advancedDetails = document.getElementById('advanced-details');

toggleBtn.addEventListener('click', () => {
  const isHidden = advancedDetails.classList.toggle('hidden');
  toggleBtn.setAttribute('aria-expanded', !isHidden);
  if (!isHidden) {
    advancedDetails.focus();
  }
});
```

:::

Another consideration is to provide a single access point for users to access additional features or information. This could be a button or link that is always visible on the page. Adding multiple access points can be confusing for users and can lead to a poor user experience. 

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />
<script src="index.js" defer></script>

<div class="product-preview">
  <img src="https://placehold.co/150x150" alt="Example Product Image" />

  <h3>Sample Product</h3>
  <p class="price">$49.99</p>
  <button class="info-toggle" aria-expanded="false" aria-controls="product-info">
    More Info
  </button>
  <div id="product-info" class="product-info hidden" tabindex="-1">
    <p>This product is made from high-quality materials and comes with a 2-year warranty. Perfect for everyday use.</p>
    <ul>
      <li>Durable and lightweight</li>
      <li>Available in multiple colors</li>
      <li>Free shipping included</li>
    </ul>
  </div>
</div>
```

```css
body {
  font-family: sans-serif;
  padding: 30px;
  display: flex;
  justify-content: center;
}

.product-preview {
  max-width: 300px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background: #fff;
  text-align: center;
}

.product-preview img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
}

.price {
  font-weight: bold;
  color: #333;
  margin: 10px 0;
}

.info-toggle {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.info-toggle:hover,
.info-toggle:focus {
  background-color: #0056b3;
  outline: none;
}

.product-info {
  margin-top: 15px;
  text-align: left;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 6px;
}

.hidden {
  display: none;
}
```

```js
const toggleBtn = document.querySelector('.info-toggle');
const infoPanel = document.getElementById('product-info');

toggleBtn.addEventListener('click', () => {
  const isHidden = infoPanel.classList.toggle('hidden');
  toggleBtn.setAttribute('aria-expanded', !isHidden);
  toggleBtn.textContent = isHidden ? 'More Info' : 'Hide Info';

  if (!isHidden) {
    infoPanel.focus();
  }
});
```

:::

As you design your applications, think about the overall user experience and how you can use progressive disclosure to make it easier for users to find the information they need. When done correctly it can make a big difference to the overall user experience.

# --questions--

## --text--

What is the main purpose of using progressive disclosure in design?

## --answers--

To increase the number of features visible at all times.

### --feedback--

Consider how progressive disclosure helps manage the amount of information shown to users.

---

To overwhelm users with all available options.

### --feedback--

Consider how progressive disclosure helps manage the amount of information shown to users.

---

To only show users relevant content based on their current activity.

---

To make the user interface more complex.

### --feedback--

Consider how progressive disclosure helps manage the amount of information shown to users.

## --video-solution--

3

## --text--

How does Google implement progressive disclosure on its search page?

## --answers--

By displaying all search options at once.

### --feedback--

Think about how Google provides advanced features without overwhelming users.

---

By offering an advanced search option that reveals more features when needed.

---

By hiding the search bar behind a modal dialog.

### --feedback--

Think about how Google provides advanced features without overwhelming users.

---

By providing a new search page for each query.

### --feedback--

Think about how Google provides advanced features without overwhelming users.

## --video-solution--

2

## --text--

What should be avoided to ensure a good user experience with progressive disclosure?

## --answers--

Providing a single, clear access point to additional information.

### --feedback--

Reflect on how having multiple options or points of access might impact user experience.

---

Using multiple access points to confuse users.

---

Keeping important information visible at all times.

### --feedback--

Reflect on how having multiple options or points of access might impact user experience.

---

Ensuring that additional information is available when needed.

### --feedback--

Reflect on how having multiple options or points of access might impact user experience.

## --video-solution--

2
