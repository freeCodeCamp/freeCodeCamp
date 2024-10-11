---
id: 66ed8fedf45ce3ece4053eb3
title: CSS Grid Quiz
challengeType: 8
dashedName: quiz-css-grid
---

# --description--

Answer all of the questions below correctly to pass the quiz.

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

Which property and attribute are used to turn an element into a grid container?

#### --distractors--

`display: grid-area`

---

`grid: grid-template`

---

`grid-template: set`

#### --answer--

`display: grid`

### --question--

#### --text--

Which one of these options for the `grid-template-columns` property will result in a middle column that is 80 relative units wide, and two columns taking up the remaining space?

#### --distractors--

`10% 80rem 10%`

---

`1fr 8fr 1fr`

---

`10rem 80rem 10rem`

#### --answer--

`1fr 80rem 1fr`

### --question--

#### --text--

What does the `grid-template-rows` property do?

#### --distractors--

Specifies a grid item's size and location in a grid layout.

---

Creates a template for creating new grid rows.

---

Specifies a default row size.

#### --answer--

Specifies the number and heights of the rows in a grid layout.

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

Defines a size range between the first and second value.

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

Which property defines on which row line the item will start?

#### --distractors--

`row-start`

---

`grid-row-begin`

---

`grid-row`

#### --answer--

`grid-row-start`

### --question--

#### --text--

Which property automatically allocates rows based on a fixed size?

#### --distractors--

`grid-rows-size`

---

`grid-template`

---

`grid-row`

#### --answer--

`grid-auto-rows`

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

Specifies the number of columns in a grid element.

#### --answer--

Tells the grid item on which grid line it should start and end at.

### --question--

#### --text--

How do you create four columns of equal width?

#### --distractors--

`grid-template-columns: repeat(4)`

---

`grid-template-columns: 1, 1, 1, 1,`

---

`grid-column: repeat(4, 1fr)`

#### --answer--

`grid-template-columns: repeat(4, 1fr)`

### --question--

#### --text--

Which property and value will make an element span the full width of the grid?

#### --distractors--

`grid-column: 1 / 1`

---

`width: 100%`

---

`grid-column: 100%`

#### --answer--

`grid-column: 1 / -1`

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

What does the secondary value `dense` do in the `grid-auto-flow` property?

#### --distractors--

Narrows the grid container to fit to its content width.

---

Groups grid items of the same size.

---

Sorts grid items based on their size.

#### --answer--

Place smaller items to fill gaps in the grid.

### --question--

#### --text--

Which one of these options is NOT a unit used for the `gap` property?

#### --distractors--

`px`

---

`%`

---

`em`

#### --answer--

`fr`

### --question--

#### --text--

How do you make a grid item take up 2 rows using the `grid-row-end` property?

#### --distractors--

`grid-row-end: 2 / 2`

---

`grid-row-end: -2`

---

`grid-row-end: 2`

#### --answer--

`grid-row-end: span 2`

### --question--

#### --text--

Which of these properties is NOT used to align items inside a grid element?

#### --distractors--

`align-items`

---

`place-items`

---

`justify-items`

#### --answer--

`center-items`

### --question--

#### --text--

Which of these properties can be used as a shorthand for the `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end` properties?

#### --distractors--

`grid-section`

---

`grid-item`

---

`grid-row-column`

#### --answer--

`grid-area`

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

How can you use dev tools to debug the CSS Grid layout?

#### --distractors--

To resize the elements to fill out the gaps in the grid.

---

To drag-and-drop elements inside the grid.

---

To automatically fix overlaying grid elements.

#### --answer--

To preview the layout of grid lines.

