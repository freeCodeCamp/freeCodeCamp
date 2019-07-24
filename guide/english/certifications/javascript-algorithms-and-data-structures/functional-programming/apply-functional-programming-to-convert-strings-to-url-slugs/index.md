---
title: Apply Functional Programming to Convert Strings to URL Slugs
---
# Apply Functional Programming to Convert Strings to URL Slugs


---
## Solutions 

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(obj => {
      return obj !== "";
    })
    .join("-")
    .toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
```
</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
```

</details>