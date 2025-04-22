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

CSS Grid is considered a two-dimensional layout system. Which two axes does it operate on?

#### --distractors--

Horizontal and vertical

---

Block and inline

---

X and Y

#### --answer--

Row and column

### --question--

#### --text--

Which CSS property creates a gap between grid rows?

#### --distractors--

column-gap

---

gap

---

grid-gap

#### --answer--

row-gap

### --question--

#### --text--

Which CSS property creates a gap between grid columns?

#### --distractors--

row-gap

---

gap

---

grid-gap

#### --answer--

column-gap

### --question--

#### --text--

What is the purpose of the `grid-auto-columns` property?

#### --distractors--

It sets the width of explicit grid columns.

---

It defines the gaps between implicitly created columns.

---

It controls how items are auto-placed in the grid.

#### --answer--

It sets the size for columns created implicitly.

### --question--

#### --text--

What does the `grid-auto-rows` property do?

#### --distractors--

Specifies the size for rows defined via `grid-template-rows`.

---

Controls alignment of rows within the grid container.

---

Sets the number of rows in the explicit grid.

#### --answer--

Sets the size for rows created implicitly.

### --question--

#### --text--

The `place-items` shorthand property controls which two CSS Grid properties?

#### --distractors--

`align-content` and `justify-content`

---

`grid-gap` and `gap`

---

`grid-template-rows` and `grid-template-columns`

#### --answer--

`align-items` and `justify-items`

### --question--

#### --text--

What is the purpose of the `repeat()` function in CSS Grid?

#### --distractors--

It repeats CSS rules for responsive breakpoints.

---

It repeats keyframe animations for grid transitions.

---

It repeats grid-area names in the template string.

#### --answer--

It repeats track listings (rows or columns) a specified number of times.

### --question--

#### --text--

Which of the following correctly creates three columns each taking up one fraction of the available space?

#### --distractors--

```css
grid-template-columns: repeat(1fr, 3);
```

---

```css
grid-template-columns: repeat(3);
```

---

```css
grid-template-columns: repeat(3) 1fr;
```

#### --answer--

```css
grid-template-columns: repeat(3, 1fr);
```

### --question--

#### --text--

What happens when you place a grid item outside of the explicit grid boundaries?

#### --distractors--

The item is ignored by the grid layout.

---

A layout error is thrown by the browser.

---

The item wraps to the next line outside the grid.

#### --answer--

New rows or columns are generated automatically in the implicit grid.

### --question--

#### --text--

Which CSS rule will make a grid item span across all columns in its container?

#### --distractors--

```css
grid-column: span all;
```

---

```css
grid-column: 1 / 1;
```

---

```css
grid-column: -1 / 1;
```

#### --answer--

```css
grid-column: 1 / -1;
```

### --question--

#### --text--

Given a `grid-template-areas` definition, how do you place an element into the area named "main"?

#### --distractors--

```css
grid-template-areas: main;
```

---

```css
area: main;
```

---

```css
grid-area: container(main);
```

#### --answer--

```css
grid-area: main;
```

### --question--

#### --text--

What is the effect of `grid-template-rows: auto 1fr auto;` in a grid container?

#### --distractors--

All three rows will automatically size based on content.

---

All rows will each take up one fraction of the available space.

---

The first row occupies one fraction, middle is auto, and last is one fraction.

#### --answer--

The first and last rows size to their content, and the middle row fills the remaining space.

### --question--

#### --text--

Which browser tool allows you to toggle and edit CSS properties in real time?

#### --distractors--

Terminal

---

Text Editor

---

Network Inspector

#### --answer--

Developer Tools (DevTools)

### --question--

#### --text--

Which online service can you use to validate your CSS against official specifications?

#### --distractors--

W3C HTML Validator

---

ESLint

---

Stylelint

#### --answer--

W3C CSS Validator

### --question--

#### --text--

In DevTools, which feature lets you simulate different screen sizes to test responsiveness?

#### --distractors--

Color Picker

---

Network Throttling

---

Performance Monitor

#### --answer--

Device Toolbar (Responsive Design Mode)

### --question--

#### --text--

When used in a track size (e.g., `grid-template-columns: auto 1fr;`), what does the `auto` keyword do?

#### --distractors--

Sizes the track to one fraction of the remaining space.

---

Sets the track size to a fixed default pixel value.

---

Creates a minimum gap between tracks.

#### --answer--

Sizes the track based on its content.

### --question--

#### --text--

What does the `grid-row` shorthand property do for a grid item?

#### --distractors--

Defines the size of explicit grid rows in the container.

---

Sets the number of rows in the grid template.

---

Specifies the row and column gap between items.

#### --answer--

Specifies the grid item's start and end row lines (row-based placement).

### --question--

#### --text--

Which property is used to set line names and track sizing for grid columns?

#### --distractors--

`grid-template-rows`

---

`grid-auto-columns`

---

`gap`

#### --answer--

`grid-template-columns`

### --question--

#### --text--

Which CSS snippet creates a 30px wide first column and a flexible second column?

#### --distractors--

```css
grid-template-columns: 1fr 30px;
```

---

```css
grid-template-columns: 30px;
```

---

```css
grid-template-columns: [30px] 1fr;
```

#### --answer--

```css
grid-template-columns: 30px 1fr;
```

### --question--

#### --text--

In a `grid-template-areas` definition, what does repeating an area name twice in a row (e.g., `"header header"`) indicate?

#### --distractors--

It creates two separate grid areas named "header" side by side.

---

It duplicates the header content automatically.

---

It merges both rows into a single header section.

#### --answer--

It makes the "header" area span across two columns.

