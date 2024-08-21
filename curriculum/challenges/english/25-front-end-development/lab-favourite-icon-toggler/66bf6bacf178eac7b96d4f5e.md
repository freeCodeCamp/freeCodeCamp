---
id: 66bf6bacf178eac7b96d4f5e
title: Build a Favourite Icon Toggler
challengeType: 14
dashedName: build-a-favourite-icon-toggler
demoType: onClick
---

# --description--

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab. **Do not copy this demo project**.

**User Stories:**

1. You should have an unordered list with three items.
2. The unordered list should have the class `item-list`.
3. The three list items should contain the item name followed by a `span` element with the class `favorite-icon` and an id of `favorite-icon-1`, `favorite-icon-2`, and `favorite-icon-3`, respectively.
4. The `span` element should contain the code `&#9825;` initially to represent an empty heart.
5. When the `span` element containing the heart is clicked, the class `filled` should be added to the `span` with class `favorite-icon` if it doesn't exist, and removed if it does.  `&#9825;` should change to `&#10084;` to represent a filled heart.

# --hints--

You should have an unordered list.

```js

```

Your unordered list should have 3 items.

```js

```

Your individual list item should contain the item name.

```js

```

Your individual list item should contain a  `span` element with the class `favorite-icon` 

```js

```

The `span` elements with the class `favorite-icon` should contain ids of `favorite-icon-1`, `favorite-icon-2`, and `favorite-icon-3`.

```js

```

Initially, the `span` elements should contain the code `&#9825;` to represent an empty heart.

```js

```

You should select all the `.favorite-icon` `span` elements and store them in the `favouriteIcons` variable.

```js

```

You should attach a click event listener to each of the `span` elements.

```js

```

When the `span` element is clicked, you should check if the `span` element contains the class `filled`.

```js

```

When the `span` element is clicked, and it contains the class `filled`, you should remove the class `filled` from the `span` element.

```js

```

When the `span` element is clicked, and it contains the class `filled`, you should remove change the innerHTML of the `span` element to `&#9825;`.

```js

```

When the `span` element is clicked, and it doesn't contain the class `filled`, you should add the class `filled` to the `span` element.

```js

```

When the `span` element is clicked, and it doesn't contain the class `filled`, you should change the innerHTML of the `span` element to `&#10084;`.

```js

```

Don't forget to link your style sheet using the `link` tag in the `head` section of your HTML file.

```js

```

Don't forget to link your javascript file using the `script` tag at the end of the `body` section of your HTML file.

```js

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
