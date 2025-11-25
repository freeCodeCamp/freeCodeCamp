---
id: 672bb02ecb230779bbbaccd9
title: What Are Best Practices for Designing Shopping Carts?
challengeType: 19
dashedName: what-are-best-practices-for-designing-shopping-carts
---

# --interactive--

**NOTE**: Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

There are thousands of e-commerce websites on the internet, and the shopping cart is a crucial part of the e-commerce experience. A good design can make the shopping cart experience more enjoyable and increase sales. A poor design can lead to abandoned carts and lost sales.

In this lesson, we will discuss some best practices for designing shopping carts. The first design consideration is making sure the shopping cart is visible to users at all times. Most shopping cart designs will have the cart displayed in the upper right hand corner of the page. Users should see the number of items in their cart displayed next to the cart icon, and be able to click on the cart to see more details about the items they are purchasing.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />

<div class="shopping-cart">
  <button id="cart-btn" aria-label="Shopping cart">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-shopping-cart"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    <span id="item-count">2</span>
  </button>
</div>
```

```css
.shopping-cart {
  position: fixed;
  top: 20px;
  right: 20px;
  font-family: sans-serif;
}

#cart-btn {
  background: none;
  border: none;
  cursor: default;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  color: #333;
  font-size: 24px;
}

#item-count {
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 13px;
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  line-height: 14px;
  text-align: center;
  font-weight: 700;
  user-select: none;
  box-sizing: border-box;
}

#cart-details {
  background: white;
  border: 1px solid #ccc;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-top: 10px;
  padding: 10px;
  position: relative;
  z-index: 1000;
}

#cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

#cart-items li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}
```

:::

Another consideration is providing a clear way for users to update the quantity of items in their cart. This can be done by providing a quantity input field next to each item in the cart. Users can easily update the quantity of an item by changing the number in the input field.

You should also provide a "Remove" button next to each item in the cart. This allows users to easily remove items from their cart. You don't want to make it difficult for users to remove items from their cart, as this can lead to frustration and abandoned carts.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />

<div class="shopping-cart">
  <h2>Your Cart</h2>
  <ul class="cart-items">
    <li class="cart-item">
      <span class="item-name">T-Shirt</span>
      <input type="number" min="1" value="2" class="quantity-input" aria-label="Quantity for T-Shirt" />
      <button class="remove-btn">Remove</button>
    </li>
    <li class="cart-item">
      <span class="item-name">Hat</span>
      <input type="number" min="1" value="1" class="quantity-input" aria-label="Quantity for Hat" />
      <button class="remove-btn">Remove</button>
    </li>
  </ul>
</div>
```

```css
.shopping-cart {
  max-width: 400px;
  margin: 20px auto;
  font-family: sans-serif;
  border: 1px solid #ccc;
  padding: 15px;
  background: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 6px;
}

.shopping-cart h2 {
  margin-top: 0;
  font-weight: 600;
  font-size: 1.4rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}

.cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.item-name {
  flex: 1;
  font-size: 1rem;
}

.quantity-input {
  width: 50px;
  padding: 4px 6px;
  font-size: 1rem;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

.remove-btn {
  background: #e74c3c;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.remove-btn:hover,
.remove-btn:focus {
  background: #c0392b;
  outline: none;
}
```

:::

Another consideration is the shopping cart icon itself. The icon should be something easily recognizable for all users. A common icon is a shopping cart with a handle and wheels. Other icons might be a shopping bag or a basket. But you don't want to choose an icon that is too abstract or difficult to understand.

When the user wants to review the total in their cart, they should be able to easily find the total cost of all items in the cart. This should be displayed prominently on the page, so users don't have to search for it.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />

<div class="shopping-cart">
  <button id="cart-btn" aria-label="Shopping cart">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-shopping-cart"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    <span id="item-count">3</span>
  </button>
  <div id="cart-details">
    <ul id="cart-items">
      <li>T-Shirt x2 - $40.00</li>
      <li>Hat x1 - $15.00</li>
    </ul>
    <div id="cart-total">
      Total: <strong>$55.00</strong>
    </div>
  </div>
</div>
```

```css
.shopping-cart {
  position: fixed;
  top: 20px;
  right: 20px;
  font-family: sans-serif;
  width: 280px;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 6px;
}

#cart-btn {
  background: none;
  border: none;
  cursor: default;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  color: #333;
  font-size: 28px;
}

#item-count {
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 7px;
  font-size: 14px;
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  line-height: 14px;
  text-align: center;
  font-weight: 700;
  user-select: none;
  box-sizing: border-box;
}

#cart-details {
  margin-top: 10px;
}

#cart-items {
  list-style: none;
  padding: 0;
  margin: 0 0 10px 0;
  font-size: 1rem;
}

#cart-items li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

#cart-total {
  font-size: 1.2rem;
  font-weight: 700;
  text-align: right;
  color: #111;
}
```

:::

Finally, you should provide a clear call-to-action button for users to proceed to checkout. This button should be prominently displayed on the page, so users don't have to search for it.

You don't want to have too many buttons on the page, as this can lead to confusion. The call-to-action button should be the most prominent button on the page, so users know exactly what to do next. You should use the brand's primary color for the button, so it stands out from the rest of the page.

:::interactive_editor

```html
<link rel="stylesheet" href="styles.css" />

<div class="shopping-cart">
  <button id="cart-btn" aria-label="Shopping cart">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-shopping-cart"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    <span id="item-count">3</span>
  </button>
  <div id="cart-details">
    <ul id="cart-items">
      <li>T-Shirt x2 - $40.00</li>
      <li>Hat x1 - $15.00</li>
    </ul>
    <div id="cart-total">
      Total: <strong>$55.00</strong>
    </div>
    <button id="checkout-btn">Proceed to Checkout</button>
  </div>
</div>
```

```css
:root {
  --primary-color: #007bff; 
}

.shopping-cart {
  position: fixed;
  top: 20px;
  right: 20px;
  font-family: sans-serif;
  width: 280px;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 6px;
}

#cart-btn {
  background: none;
  border: none;
  cursor: default;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  color: #333;
  font-size: 28px;
}

#item-count {
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 7px;
  font-size: 14px;
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  line-height: 14px;
  text-align: center;
  font-weight: 700;
  user-select: none;
  box-sizing: border-box;
}

#cart-details {
  margin-top: 10px;
}

#cart-items {
  list-style: none;
  padding: 0;
  margin: 0 0 10px 0;
  font-size: 1rem;
}

#cart-items li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

#cart-total {
  font-size: 1.2rem;
  font-weight: 700;
  text-align: right;
  color: #111;
  margin-bottom: 15px;
}

#checkout-btn {
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 0;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#checkout-btn:hover,
#checkout-btn:focus {
  background-color: #0056b3;
  outline: none;
}
```

:::

These are just a few best practices for designing shopping carts. By following these guidelines, you can create a shopping cart that is easy to use and will help increase sales for your e-commerce website.

# --questions--

## --text--

What is a crucial aspect of designing a shopping cart that can impact the shopping experience and sales?

## --answers--

The color of the shopping cart icon.

### --feedback--

Consider what feature helps users always be aware of their cart and its contents.

---

The position of the shopping cart on the page.

---

The number of items in the cart.

### --feedback--

Consider what feature helps users always be aware of their cart and its contents.

---

The brand of the e-commerce website.

### --feedback--

Consider what feature helps users always be aware of their cart and its contents.

## --video-solution--

2

## --text--

How should users be able to update the quantity of items in their cart?

## --answers--

By contacting customer service.

### --feedback--

Look for a method that allows users to directly change the number of items they have.

---

By using a dropdown menu.

### --feedback--

Look for a method that allows users to directly change the number of items they have.

---

By entering a new number in a quantity input field.

---

By adding a new item with the desired quantity.

### --feedback--

Look for a method that allows users to directly change the number of items they have.

## --video-solution--

3

## --text--

What is an important feature to include in the shopping cart to help users proceed with their purchase?

## --answers--

A "Save for Later" option.

### --feedback--

Think about what helps users finalize their purchase and complete the transaction smoothly.

---

Multiple call-to-action buttons.

### --feedback--

Think about what helps users finalize their purchase and complete the transaction smoothly.

---

A clear and prominent checkout button.

---

An option to chat with a sales representative.

### --feedback--

Think about what helps users finalize their purchase and complete the transaction smoothly.

## --video-solution--

3
