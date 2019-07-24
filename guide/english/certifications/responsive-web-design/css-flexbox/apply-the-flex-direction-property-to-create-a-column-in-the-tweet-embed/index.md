---
title: Apply the flex-direction Property to Create a Column in the Tweet Embed
---
# Apply the flex-direction Property to Create a Column in the Tweet Embed


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

Changing the flex direction from its default of row to column by explicitly adding the property to the css will make the handle be shown below the name.
```css
header .profile-name {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
```

</details>