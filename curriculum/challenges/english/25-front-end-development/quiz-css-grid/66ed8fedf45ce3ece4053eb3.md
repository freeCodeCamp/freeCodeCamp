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

What is the purpose of CSS Grid?

#### --distractors--

To style tables using CSS.

---

To create fixed-width layouts only.

---

To stack elements vertically using float.

#### --answer--

To create two-dimensional layouts using rows and columns.

### --question--

#### --text--

How do you turn a `<div>` into a grid container?

#### --distractors--

`grid-template: active;`

---

`display: grid-layout;`

---

`grid: enable;`

#### --answer--

`display: grid;`

### --question--

#### --text--

What does the `grid-template-columns` property define?

#### --distractors--

The total width of the grid container.

---

How many items fit in each column.

---

Which elements go in which columns.

#### --answer--

The number and size of the columns in the grid.

### --question--

#### --text--

Which value allows a grid column to take up a portion of remaining space?

#### --distractors--

`auto-fit`

---

`auto`

---

`px`

#### --answer--

`fr`

### --question--

#### --text--

Which CSS property sets the number and size of the rows in a grid?

#### --distractors--

`grid-rows`

---

`row-template`

---

`grid-row-count`

#### --answer--

`grid-template-rows`

### --question--

#### --text--

How do you make all grid items stretch to fill their grid areas?

#### --distractors--

`justify-content: stretch;`

---

`align-self: fill;`

---

`place-content: fit;`

#### --answer--

`align-items: stretch;`

### --question--

#### --text--

What does the `gap` property do in a grid layout?

#### --distractors--

Adds margin inside each grid item.

---

Creates spacing around the grid container.

---

Offsets the grid position from the top.

#### --answer--

Creates space between grid tracks.

### --question--

#### --text--

Which shorthand defines both `row-gap` and `column-gap`?

#### --distractors--

`grid-spacing`

---

`gap-size`

---

`grid-gap`

#### --answer--

`gap`

### --question--

#### --text--

How can you define flexible track sizes within a range?

#### --distractors--

By using `fr` units only.

---

By setting min-width and max-width on each item.

---

With `auto` and fixed `px` values together.

#### --answer--

By using the `minmax()` function.

### --question--

#### --text--

Which statement best describes the difference between an explicit and implicit grid?

#### --distractors--

Explicit grids adjust automatically; implicit ones require manual sizes.

---

Implicit grids only appear when using `grid-area`.

---

Explicit grids are created with `grid-auto-flow`.

#### --answer--

Explicit grids are defined using template properties; implicit grids are created when content exceeds the defined layout.

### --question--

#### --text--

Which property sets a name for a grid item's location?

#### --distractors--

`grid-name`

---

`grid-identifier`

---

`area-set`

#### --answer--

`grid-area`

### --question--

#### --text--

What does `grid-template-areas` do?

#### --distractors--

Assigns specific items to start at a grid line.

---

Specifies default gaps between areas.

---

Controls flow direction for rows.

#### --answer--

Defines named layout areas in the grid.

### --question--

#### --text--

You set `grid-template-areas`, but an item doesn't appear. Why?

#### --distractors--

You didn't use `grid-template-columns`.

---

The layout must use `grid-auto-flow` to render.

---

The item must be wrapped in a `section`.

#### --answer--

It is missing a matching `grid-area` name.

### --question--

#### --text--

How can you center all content in a grid cell both vertically and horizontally?

#### --distractors--

`text-align: center;`

---

`place-content: center;`

---

`align-content: middle;`

#### --answer--

`place-items: center;`

### --question--

#### --text--

How do you make a grid item span two columns?

#### --distractors--

`grid-column: span two;`

---

`grid-column: auto / 2;`

---

`column-span: 2;`

#### --answer--

`grid-column: span 2;`

### --question--

#### --text--

What does `grid-auto-flow: row dense;` do?

#### --distractors--

Aligns all items to the start of the row.

---

Places all items on the same row.

---

Overwrites the grid template layout.

#### --answer--

Fills in gaps in row order, even if it means reordering items.

### --question--

#### --text--

How does `auto-fit` behave in this rule?  
`grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))`

#### --distractors--

It limits the grid to one column.

---

It creates fixed 150px columns.

---

It forces each item to the same width.

#### --answer--

It fills the container with as many columns as possible, hiding empty ones.

### --question--

#### --text--

Which value with `grid-auto-columns` makes implicit columns flexible?

#### --distractors--

`grid-auto-columns: fixed;`

---

`grid-auto-columns: 150px auto;`

---

`grid-auto-columns: fill;`

#### --answer--

`grid-auto-columns: 1fr;`

### --question--

#### --text--

When does `justify-items: stretch` not affect layout?

#### --distractors--

When `gap` is greater than 0.

---

When the container has a width of `auto`.

---

When using `fr` units for rows.

#### --answer--

When grid items have a fixed width.

### --question--

#### --text--

What does this code create?  
`grid-template: auto 1fr auto / 200px 1fr`

#### --distractors--

A 2-column layout without rows.

---

A 3x3 uniform grid.

---

A 1-row, 2-column layout.

#### --answer--

A grid with 3 rows and 2 columns.
