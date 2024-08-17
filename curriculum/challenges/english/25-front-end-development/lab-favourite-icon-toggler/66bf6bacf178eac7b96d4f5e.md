---
id: 66bf6bacf178eac7b96d4f5e
title: Build a Favourite Icon Toggler
challengeType: 14
dashedName: build-a-favourite-icon-toggler
demoType: onClick
---

# --description--

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab. 

**User Stories:**

1. You should have an `h1` element that contains the heading.
1. You should have an unordered list with three items.
1. The unordered list should have the class `item-list`.
1. The three list items should contain the item name followed by a `span` element with the class `favorite-icon` and an id of `favorite-icon-1`, `favorite-icon-2`, and `favorite-icon-3`, respectively.
1. The `span` element should contain the code `&#9825;` initially to represent an empty heart.
1. When the `span` element is clicked, the class `filled` should be added to the `span` with class `favorite-icon` if it doesn't exist, and removed if it does.  `&#9825;` should change to `&#10084;` to represent a filled heart.

# --hints--

Your `link` element should be within your `head` element.

```js
const link = document.querySelector('head > link');
assert.isNotNull(link);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="styles.css">
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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Favorite Icon Toggle</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <h1>Art Supplies</h1>
    <ul class="item-list">
        <li>
            120 gm paper
            <span class="favorite-icon" id="favoriteIcon1">&#9825;</span>
        </li>
        <li>
            Watercolor set
            <span class="favorite-icon" id="favoriteIcon2">&#9825;</span>
        </li>
        <li>
            Lead pencil 6B
            <span class="favorite-icon" id="favoriteIcon3">&#9825;</span>
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
    font-size: 20px;
    cursor: pointer;
}
```

```js
document.addEventListener("DOMContentLoaded", () => {
  const favoriteIcons = document.querySelectorAll(".favorite-icon");

  favoriteIcons.forEach((icon) => {
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
