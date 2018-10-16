---
title: Create Grids within Grids
---
## Create Grids within Grids

A grid within a grid is made the same as any other grid.
1. Just nest one element inside another,
2. set them *both* to grids,
3. and *POOF*! You have a grid-within-a-grid.

### Nesting an element
For any refreshers, nesting an element looks like this:
`<div class='gridElement'> Here is your grid
  <div class='nestedGridElement'>Here is your nested grid</div>
 </div>`

### Setting your elements to grids
After that, adjust the following CSS properties:
`.gridElement{
  /* this gives you a grid */
  display: grid;
 }

 .nestedGridElement{
    /* this gives you a NESTED grid */
    display: grid;
 }`

### Additional Information
After that, feel free to customize your grids however you like.
i.e. `grid-template-columns: auto 1fr;` might look good in that nested grid.
