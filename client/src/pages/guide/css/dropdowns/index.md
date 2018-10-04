---
title: Dropdowns
---

## Dropdowns

Dropdowns are used in CSS to hide a predefined list within a button.

Examples:

```html
<div class="dropdown">
  <button class="dropbtn">Name</button>
  <div class="dropdownContent">
    <a href="#">One</a>
    <a href="#">Two</a>
    <a href="#">Three</a>
  </div>
</div>
```
Then you should customise the classes in css

```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: red;
  padding: 10px;
}

.dropdown-content {
  display: none;
  position: absolute;
}

.dropdown:hover .dropdown-content {
  display:block;
}
```

You need the separate div classes to create the button, and another div to separate the list of what the button contains.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* W3 School Dropdown Hover Button: <a href="https://www.w3schools.com/howto/howto_css_dropdown.asp">Link to W3 School</a>
* W3 School Dropdowns: <a href="https://www.w3schools.com/css/css_dropdowns.asp">Link to W3 School</a>
