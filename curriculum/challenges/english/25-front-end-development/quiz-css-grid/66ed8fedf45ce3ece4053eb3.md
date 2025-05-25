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

How do you position a grid item within a layout defined by `grid-template-areas`?

#### --distractors--

By directly defining the item’s size and location within the grid using grid-template-rows and grid-template-columns.

---

By using the grid-area property and specifying both row and column start and end positions.

---

By setting both `grid-area` and explicit pixel coordinates.

#### --answer--

By assigning the named area to the item's grid-area property.

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

What defines an explicit grid?

#### --distractors--

Tracks created automatically to fit content.

---

Tracks defined by the `fr` unit.

---

Tracks added with `grid-auto-flow`.

#### --answer--

Tracks explicitly set by `grid-template-columns` or `grid-template-rows`.

### --question--

#### --text--

Which value for `grid-auto-flow` would make new items fill columns first?

#### --distractors--

`row`

---

`vertical`

---

`row dense`

#### --answer--

`column`

### --question--

#### --text--

What is the purpose of `grid-template-areas`?

#### --distractors--

To auto-generate implicit tracks.

---

To replace the `fr` unit.

---

To set `z-index` values.

#### --answer--

To visually map items to named grid areas.

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

Makes the middle column three times as wide as the others.

---

Forces all columns to be exactly 1fr wide.

#### --answer--

Creates three columns where the middle is twice as wide as the sides.

### --question--

#### --text--

How would you create a grid with 3 equal columns and a `20px` gap between them?

#### --distractors--

```css
.container {
  display: grid;
  grid-template: repeat(3, 1fr) / 20px;
} 
```

---

```css
.container {
  display: grid;
  grid: 1fr 1fr 1fr / gap 20px;
}
```

---

```css
.container {
  display: grid;
  grid-template-columns: 20px 1fr 1fr 1fr;
}
```

#### --answer--

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

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

Which statement about implicit grids is true?

#### --distractors--

Implicit grids ignore the `gap` property.

---

Implicit tracks must be defined with `grid-template-areas`.

---

Implicit tracks can only be created using the `grid-auto-flow` property.

#### --answer--

Implicit tracks are created when content doesn't fit explicit tracks.

### --question--

#### --text--

What does the `place-items` property do in CSS Grid?

#### --distractors--

It sets the size of grid items automatically based on available space.

---

It controls the grid template's column and row definitions.

---

It adjusts the order of grid items within the container.

#### --answer--

It is a shorthand for aligning grid items in both the block and inline axes.

### --question--

#### --text--

What does this CSS accomplish?

```css
.container {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

#### --distractors--

Creates fixed 150px columns that overflow the container.

---

Creates columns that are exactly 1fr wide regardless of content.

---

Creates a maximum of one column per 150px of available width.

#### --answer--

Creates flexible columns that are at least 150px and collapse when space is limited.

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

You have the following grid container setup:

```css
.container {
  display: grid;
  grid-template-columns: 100px 1fr 2fr;
  grid-template-rows: auto 150px;
  gap: 10px;
}
```

#### --distractors--

The container will have three columns of equal width, and two rows with 150px height each.

---

The container will have three columns, all with 100px width, and two rows with 150px height.

---

The container will have two rows, each with a height of 1fr.

#### --answer--

The container will have three columns where the first is 100px, the second takes up 1 fraction of the remaining space, and the third takes up 2 fractions of the remaining space, and two rows where the first row has auto height and the second row is 150px tall.

### --question--

#### --text--

How would you make a grid item span all available rows?

#### --distractors--

`grid-row: full;`

---

`grid-row: auto / -1;`

---

`grid-row: 1 / span infinite;`

#### --answer--

`grid-row: 1 / -1;`

### --question--

#### --text--

Which property controls the alignment of grid items along the block axis?

#### --distractors--

`justify-items`

---

`place-items`

---

`align-content`

#### --answer--

`align-items`

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
