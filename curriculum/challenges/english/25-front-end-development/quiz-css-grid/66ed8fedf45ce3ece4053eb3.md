---
id: 66ed8fedf45ce3ece4053eb3
title: CSS Grid Quiz
challengeType: 8
dashedName: quiz-css-grid
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What is CSS Grid?

#### --distractors--

A method used for displaying tables on a website.

---

A method used for tiling images.

---

A way to display outlines around HTML elements.

#### --answer--

A two-dimensional layout for HTML documents.

### --question--

#### --text--

Which of the following is the correct way to create a grid container?

#### --distractors--

`display: grid-area;`

---

`grid: grid-template;`

---

`grid-template: set;`

#### --answer--

`display: grid;`

### --question--

#### --text--

What does the `grid-template-columns` property do?

#### --distractors--

Defines two columns and three rows for a grid container.

---

Sets all columns for the grid layout to a fixed length.

---

Creates a two column grid layout container.

#### --answer--

Defines the number of columns in a grid layout.

### --question--

#### --text--

What does the `grid-template-rows` property do?

#### --distractors--

Specifies a grid item's size and location in a grid layout.

---

Creates a template for creating new grid rows.

---

Specifies a default row size in the grid container.

#### --answer--

Specifies the number and height for each row in a grid layout.

### --question--

#### --text--

What does the `minmax()` function do?

#### --distractors--

Toggles between the first and second value, depending on available space.

---

Returns the average of the two inputs.

---

Sets the minimal size of the element for browser working in full-screen mode.

#### --answer--

Sets the minimum and maximum sizes for a track.

### --question--

#### --text--

What is the shorthand for the `column-gap` and `row-gap` properties?

#### --distractors--

`gap-column-row`

---

`gutters`

---

`grid-gap`

#### --answer--

`gap`

### --question--

#### --text--

What is the difference between an implicit and explicit grid?

#### --distractors--

Implicit grids use the `grid-template-columns` property while explicit grids use the `grid-template-rows` property.

---

Explicit grids use the `grid-template-columns` property while implicit grids use the `grid-template-rows` property.

---

Implicit grids use the `grid-template-columns` or `grid-template-rows` properties to create columns while rows and columns are automatically created in explicit grids.

#### --answer--

Explicit grids use the `grid-template-columns` or `grid-template-rows` properties to create columns while rows and columns are automatically created in implicit grids.

### --question--

#### --text--

Which of the following units represents a fraction of the space within the grid container?

#### --distractors--

`fractional`

---

`frac`

---

`f`

#### --answer--

`fr`

### --question--

#### --text--

What are grid lines?

#### --distractors--

Shorthand for rows and columns.

---

Outlines of a grid element.

---

Lines along which grid columns and rows are created.

#### --answer--

Lines on which each of the grid items begin and end.

### --question--

#### --text--

What does the `grid-column` property do?

#### --distractors--

Adds a new grid element as a child of the element it's applied to.

---

Aligns text in the grid item vertically.

---

Sets two columns for a grid container.

#### --answer--

Tells the grid item on which grid line it should start and end at.

### --question--

#### --text--

How do you create four columns of equal width?

#### --distractors--

`grid-template-columns: repeat(4);`

---

`grid-template-columns: repeat(1, 4);`

---

`grid-template-columns: repeat(1fr, 4);`

#### --answer--

`grid-template-columns: repeat(4, 1fr);`

### --question--

#### --text--

What does the `grid-template-areas` property do?

#### --distractors--

It is used to specify where the item begins on a line in the grid container.

---

It is used to create gaps between tracks in the container.

---

It is used to repeat sections in the track listing. 

#### --answer--

It is used to provide a name for the items you are going to position on the grid.

### --question--

#### --text--

What does the `grid-auto-flow` property do?

#### --distractors--

Controls the order in which grid items are displayed.

---

Adjusts the spacing between the grid elements.

---

Automatically adjusts the element to fit in the grid.

#### --answer--

Controls how auto-placed elements get inserted to the grid.

### --question--

#### --text--

Which of the following is the correct way to use the `grid-template-areas` property?

#### --distractors--

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; 
  grid-template-rows: auto 1fr auto; 
  grid-template-areas: set(
    "header header"
    "sidebar main"
    "footer footer" 
  );
  gap: 20px; 
}
```

---

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; 
  grid-template-rows: auto 1fr auto; 
  grid-template-areas: apply(
    "header header"
    "sidebar main"
    "footer footer" 
  );
  gap: 20px; 
}
```

---

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; 
  grid-template-rows: auto 1fr auto; 
  grid-template-areas: set-areas;
  gap: 20px; 
}
```

#### --answer--

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr; 
  grid-template-rows: auto 1fr auto; 
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer"; 
  gap: 20px; 
}
```

### --question--

#### --text--

Which of the following is the correct way to work with the `grid-auto-flow` property?

#### --distractors--

```css
.social-icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: none;
  grid-auto-columns: 1fr;
}
```

---

```css
.social-icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: allow;
  grid-auto-columns: 1fr;
}
```

---

```css
.social-icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: set;
  grid-auto-columns: 1fr;
}
```

#### --answer--

```css
.social-icons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
}
```

### --question--

#### --text--

Which of the following is NOT a valid grid property?

#### --distractors--

`gap`

---

`grid-column`

---

`grid-template-columns`

#### --answer--

`grid-set`

### --question--

#### --text--

Which of these properties can be used to center items inside a grid element?

#### --distractors--

`allow-items`

---

`set-items`

---

`center-items`

#### --answer--

`align-items`

### --question--

#### --text--

Which of the following is a correct value to use with the `grid-auto-columns` property?

#### --distractors--

`grid-auto-columns: unset-grid;`

---

`grid-auto-columns: revert-grid;`

---

`grid-auto-columns: set-content(20%);`

#### --answer--

`grid-auto-columns: 1fr;`

### --question--

#### --text--

What are grid tracks?

#### --distractors--

Shorthand for rows and columns.

---

Lines along which you can animate movement of the grid items.

---

Lines on which each of the grid items begins and ends.

#### --answer--

Spaces between two adjacent grid lines.

### --question--

#### --text--

Which of the following is the correct way to use the `minmax()` function?

#### --distractors--

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(apply);
}
```

---

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax();
}
```

---

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(set);
}
```

#### --answer--

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(150px, auto);
}
```

## --quiz--

### --question--

#### --text--

Which property controls the alignment of grid items along the inline (row) axis?

#### --distractors--

`align-content`

---

`place-items`

---

`grid-align`

#### --answer--

`justify-items`

### --question--

#### --text--

What does the `grid-auto-rows` property control?

#### --distractors--

The height of explicitly defined rows.

---

The maximum width of grid columns.

---

The spacing between rows.

#### --answer--

The size of implicitly created rows.

### --question--

#### --text--

Which property would you use to make a grid item span multiple rows?

#### --distractors--

`grid-row-span`

---

`row-span`

---

`span-rows`

#### --answer--

`grid-row`

### --question--

#### --text--

What is the purpose of the `place-content` shorthand property?

#### --distractors--

To position the grid container within its parent.

---

To align all items to the center of their cells.

---

To set both `grid-template-rows` and `grid-template-columns`.

#### --answer--

To align the grid content along both block and inline axes.

### --question--

#### --text--

Which value for `grid-auto-flow` would make new items fill columns first?

#### --distractors--

`row`

---

`dense`

---

`row dense`

#### --answer--

`column`

### --question--

#### --text--

What does `align-content: space-between` do in a grid container?

#### --distractors--

Centers all items with equal space around them.

---

Distributes items to start at the beginning and end of the container.

---

Stretches items to fill the container height.

#### --answer--

Distributes extra space evenly between grid tracks.

### --question--

#### --text--

How can you make a grid item start at column line 2 and end at column line 4?

#### --distractors--

`grid-column: 2 / span 2;`

---

`grid-column: start 2 / end 4;`

---

`grid-column: from 2 to 4;`

#### --answer--

`grid-column: 2 / 4;`

### --question--

#### --text--

What is the effect of `grid-template-columns: 1fr 2fr 1fr`?

#### --distractors--

Creates three equal-width columns.

---

Makes the middle column twice as wide as the others.

---

Forces all columns to be exactly 1fr wide.

#### --answer--

Creates three columns where the middle is twice as wide as the sides.

### --question--

#### --text--

Which property would you use to override alignment for a specific grid item?

#### --distractors--

`grid-item-align`

---

`align-self`

---

`item-placement`

#### --answer--

`justify-self`

### --question--

#### --text--

What does `repeat(3, minmax(100px, 1fr))` create?

#### --distractors--

Three columns that can't shrink below 100px.

---

Three fixed 100px columns.

---

Three rows with maximum height of 1fr.

#### --answer--

Three columns that grow proportionally but won't shrink below 100px.

### --question--

#### --text--

How does `auto-fill` differ from `auto-fit` in grid layouts?

#### --distractors--

`auto-fill` creates more tracks than needed.

---

`auto-fit` only works with fixed sizes.

---

`auto-fill` ignores the minmax function.

#### --answer--

`auto-fill` creates empty tracks while `auto-fit` collapses them.

### --question--

#### --text--

Which property controls the order of grid items visually?

#### --distractors--

`grid-order`

---

`item-position`

---

`flow-order`

#### --answer--

`order`

### --question--

#### --text--

What is the purpose of the `subgrid` value?

#### --distractors--

To create nested grids with independent tracks.

---

To make a grid item inherit its parent's track sizing.

---

To automatically fill empty grid areas.

#### --answer--

To align a nested grid with its parent's tracks.

### --question--

#### --text--

How can you create asymmetric grid layouts?

#### --distractors--

By using only `fr` units.

---

By mixing different length units in `grid-template-columns`.

---

By setting `grid-asymmetric: true`.

#### --answer--

By defining different sizes for each track.

### --question--

#### --text--

What does `grid-column-start: 2` do to a grid item?

#### --distractors--

Makes it span 2 columns.

---

Offsets it by 2 pixels.

---

Positions it starting at the second vertical grid line.

#### --answer--

Makes it start at the second column line.

### --question--

#### --text--

Which property would you use to control overflow behavior in grid tracks?

#### --distractors--

`grid-overflow`

---

`track-sizing`

---

`fit-content`

#### --answer--

`minmax()`

### --question--

#### --text--

How do you make grid items align to the end of their grid area vertically?

#### --distractors--

`align-grid: end;`

---

`justify-items: flex-end;`

---

`grid-align: bottom;`

#### --answer--

`align-items: end;`

### --question--

#### --text--

What is the effect of `grid-template: 100px 1fr / 200px 1fr`?

#### --distractors--

Creates two rows and two columns with specific sizes.

---

Makes all items 100px tall and 200px wide.

---

Sets minimum sizes for rows and columns.

#### --answer--

Defines two rows (100px and flexible) and two columns (200px and flexible).

### --question--

#### --text--

Which property controls the stacking order of grid items?

#### --distractors--

`grid-layer`

---

`stack-order`

---

`item-index`

#### --answer--

`z-index`

### --question--

#### --text--

How can you ensure a grid item stays in the first column regardless of grid changes?

#### --distractors--

`grid-column: fixed;`

---

`grid-column: first;`

---

`grid-lock: column;`

#### --answer--

`grid-column: 1;`
