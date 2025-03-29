---
id: 66bf6bacf178eac7b96d4f5e
title: Build a Favorite Icon Toggler
challengeType: 25
dashedName: build-a-favorite-icon-toggler
demoType: onClick
---

# --description--

In this lab you will use JavaScript click events to toggle the appearance of a favorite icon. When the heart icon is clicked, the appearance of the heart changes from empty to filled, and vice versa.

Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have an unordered list with three items.
2. The unordered list should have the class `item-list`.
3. The three list items should contain the item name followed by a `button` element with the class `favorite-icon`.
4. The `button` element should contain the code `&#9825;` initially to represent an empty heart.
5. When a `button` element containing a heart is clicked, you should add the `filled` class to the clicked `button` if it's not already present, and remove it, if it is.
6. When a `button` element containing a heart is clicked, the heart symbol should toggle between `&#9825;` (empty heart) and `&#10084;` (filled heart), depending on its current state.

**Note:** Be sure to link your JavaScript file in your HTML. (Ex. `<script src="script.js"></script>`)

# --hints--

You should have an unordered list.

```js
assert.exists(document.querySelector('ul'));
```

Your unordered list should have 3 items.

```js
assert.lengthOf(document.querySelectorAll('ul li'), 3);
```

Your unordered list should have the class `item-list`.

```js
assert.exists(document.querySelector('ul.item-list'));
```

Your individual list items should contain the item name.

```js
assert.exists(document.querySelector('ul li').textContent);
```

Your individual list item should contain a `button` element with the class `favorite-icon`.

```js
assert.exists(document.querySelector('ul li button.favorite-icon'));
```

Initially, the `button` elements should contain the code `&#9825;` to represent an empty heart.

```js
const inputs = document.querySelectorAll('ul li button.favorite-icon');
assert.isNotEmpty(inputs);

for (let input of inputs) {
  assert.strictEqual(input.innerHTML.charCodeAt(0), 9825);
}
```

When the `button` element is clicked, and it contains the class `filled`, you should remove the class `filled` from the `button` element and change the innerHTML of the `button` element to `&#9825;`.

```js
const buttonElements = document.querySelectorAll('.favorite-icon');
assert.isNotEmpty(buttonElements);

buttonElements.forEach(button => button.classList.add('filled'));

buttonElements.forEach(button => {
  button.dispatchEvent(new Event('click'));
  button.dispatchEvent(new Event('change'));
  assert.isFalse(button.classList.contains('filled'));
  assert.equal(button.innerHTML.charCodeAt(0), 9825);
});
```

When the `button` element is clicked, and it doesn't contain the class `filled`, you should add the class `filled` to the `button` element and change the `innerHTML` of the `button` element to `&#10084;`.

```js
const buttonElements = document.querySelectorAll('.favorite-icon');
assert.isNotEmpty(buttonElements);

buttonElements.forEach(button => button.classList.remove('filled'));

buttonElements.forEach(button => {
  button.dispatchEvent(new Event('click'));
  button.dispatchEvent(new Event('change'));
  assert.isTrue(button.classList.contains('filled'));
  assert.equal(button.innerHTML.charCodeAt(0), 10084);
});
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Favorite Icon Toggler</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
  
  </body>
</html>
```

```css

```

```js

```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Favorite Icon Toggle</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <h1>Art Supplies</h1>
    <ul class="item-list">
      <li>
        120 gm paper
        <button class="favorite-icon" id="favoriteIcon1">&#9825;</button>
      </li>
      <li>
        Watercolor set
        <button class="favorite-icon" id="favoriteIcon2">&#9825;</button>
      </li>
      <li>
        Lead pencil 6B
        <button class="favorite-icon" id="favoriteIcon3">&#9825;</button>
      </li>
    </ul>

    <script src="script.js"></script>
  </body>
</html>
```

```css
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 20px;
}

.item-list {
  list-style-type: none;
  padding: 0;
}

.item-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  width: 200px;
}

.favorite-icon {
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.filled {
  color: #d22b2b;
}
```

```js
document.addEventListener("DOMContentLoaded", () => {
  const favoriteIcons = document.querySelectorAll(".favorite-icon");

  favoriteIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      if (icon.classList.contains("filled")) {
        icon.classList.remove("filled");
        icon.innerHTML = "&#9825;"; // Empty heart
      } else {
        icon.classList.add("filled");
        icon.innerHTML = "&#10084;"; // Filled black heart
      }
    });
  });
});
```
