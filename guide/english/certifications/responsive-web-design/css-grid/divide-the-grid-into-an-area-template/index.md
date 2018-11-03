---
title: Divide the Grid Into an Area Template
---
## Divide the Grid Into an Area Template

In this challenge you are required to use the "grid-template-areas" property to group cells of a grid together into areas and give the areas a custom name.

### Hint

A period (`.`) designates an empty cell in a grid.

### Solution

Since the challenge requires you to make the cell labeled `advert` into an empty cell, change `advert` to a `.` (period) so that the code reflects the following:

````css
grid-template-areas:
  "header header header"
  ". content content"
  "footer footer footer";
````
