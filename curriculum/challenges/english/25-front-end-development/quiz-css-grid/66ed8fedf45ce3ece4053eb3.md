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
What is the purpose of the `display: grid;` property in CSS?

#### --distractors--
- It arranges elements in a row.
---
- It creates inline-block elements.
---
- It applies flexbox layout to elements.

#### --answer--
It transforms a container into a grid-based layout.

### --question--

#### --text--
How do you define a grid with 4 equal columns?

#### --distractors--
- `grid-template-rows: repeat(4, 1fr);`
---
- `grid-template-columns: 4fr;`
---
- `grid-template-areas: 1fr 1fr 1fr 1fr;`

#### --answer--
`grid-template-columns: repeat(4, 1fr);`

### --question--

#### --text--
Which property defines the gap between rows in a grid?

#### --distractors--
- `grid-column-gap`
---
- `grid-row-align`
---
- `grid-template`

#### --answer--
`grid-row-gap`

### --question--

#### --text--
What does the `grid-area` property do?

#### --distractors--
- It defines the size of a column.
---
- It specifies the gap between columns.
---
- It defines the number of columns.

#### --answer--
It defines a grid item’s position within the grid.

### --question--

#### --text--
How can you inspect a grid layout using browser DevTools?

#### --distractors--
- Check the CSS Sources panel.
---
- Look under the HTML DOM inspector.
---
- Use the JavaScript Console.

#### --answer--
Enable the grid overlay in the CSS panel.

### --question--

#### --text--
Which property is used to specify the number of rows in a grid?

#### --distractors--
- `grid-template-columns`
---
- `grid-row-span`
---
- `grid-auto-flow`

#### --answer--
`grid-template-rows`

### --question--

#### --text--
Which property defines the space between grid columns?

#### --distractors--
- `grid-gap`
---
- `grid-row-gap`
---
- `grid-template-columns`

#### --answer--
`grid-column-gap`

### --question--

#### --text--
What is the purpose of `grid-template-columns`?

#### --distractors--
- It defines the space between rows.
---
- It sets the height of grid rows.
---
- It defines the gap between items.

#### --answer--
It defines the column structure of the grid.

### --question--

#### --text--
What does `fr` represent in the context of CSS Grid?

#### --distractors--
- Frame ratio
---
- Free space
---
- Fraction of available space

#### --answer--
Fraction of available space

### --question--

#### --text--
How do you create a grid with 2 rows of equal height?

#### --distractors--
- `grid-template-rows: 1fr, 1fr;`
---
- `grid-template-rows: repeat(2, auto);`
---
- `grid-template-rows: 2fr;`

#### --answer--
`grid-template-rows: repeat(2, 1fr);`

### --question--

#### --text--
Which property is used to position an item to span across multiple columns?

#### --distractors--
- `grid-column`
---
- `grid-area`
---
- `grid-auto-flow`

#### --answer--
`grid-column`

### --question--

#### --text--
What value of `grid-auto-flow` causes items to be placed in rows first?

#### --distractors--
- `column`
---
- `dense`
---
- `grid`

#### --answer--
`row`

### --question--

#### --text--
Which of the following is a valid syntax for defining a grid gap?

#### --distractors--
- `grid-gap: 5px 10px;`
---
- `grid-row-gap: 5px column-gap: 10px;`
---
- `grid-template-gap: 5px 10px;`

#### --answer--
`grid-gap: 5px 10px;`

### --question--

#### --text--
What does the `grid-auto-columns` property control?

#### --distractors--
- Defines the size of implicit columns.
---
- Sets the number of explicit columns.
---
- Aligns items along the column axis.

#### --answer--
Defines the size of implicit columns.

### --question--

#### --text--
What is the default value of the `grid-auto-flow` property?

#### --distractors--
- `column`
---
- `dense`
---
- `auto`

#### --answer--
`row`

### --question--

#### --text--
Which CSS Grid property would you use to specify where an item starts and ends on the grid?

#### --distractors--
- `grid-column-span`
---
- `grid-area-span`
---
- `grid-template-columns`

#### --answer--
`grid-column`

### --question--

#### --text--
How do you make a grid item start at the first row and end at the third row?

#### --distractors--
- `grid-column: 1 / span 3;`
---
- `grid-row: 1 / 2;`
---
- `grid-area: 1 / 2;`

#### --answer--
`grid-row: 1 / 3;`

### --question--

#### --text--
How do you set both columns and rows to automatically adjust in a grid layout?

#### --distractors--
- Use `grid-template-auto`
---
- Use `grid-template-flow: auto`
---
- Set `grid-template: auto;`

#### --answer--
Use `grid-auto-flow: row dense`

### --question--

#### --text--
What is the purpose of `grid-template-areas`?

#### --distractors--
- To define the size of the columns
---
- To declare a grid’s row and column size
---
- To assign a position within the grid

#### --answer--
To assign names to areas within the grid

### --question--

#### --text--
Which browser feature helps in debugging CSS Grid layouts?

#### --distractors--
- JavaScript Console
---
- Memory Panel
---
- Layout Inspector

#### --answer--
Layout Inspector
