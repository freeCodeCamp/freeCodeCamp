---
id: 66ed8fa2f45ce3ece4053eab
title: Basic CSS Quiz
challengeType: 8
dashedName: quiz-basic-css
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What does CSS stand for?

#### --distractors--

Cascading Style Script

---

Concatenating Style Script

---

Castor Sage Style

#### --answer--

Cascading Style Sheets

### --question--

#### --text--

Which of the following is a correct CSS rule?

#### --distractors--

`p=red`

---

`p (color: red)`

---

`{p color: red;}`

#### --answer--

`p {color: red;}`

### --question--

#### --text--

What does `<meta name="viewport">` do?

#### --distractors--

It links external stylesheets to a webpage for responsive design.

---

It specifies the metadata used by search engines to index a webpage.

---

It specifies the character encoding used on the webpage.

#### --answer--

It controls the shape and size of a web page on different screen sizes.

### --question--

#### --text--

Which syntax is correct to use inline CSS?

#### --distractors--

`<p color =  blue></p>`

---

`<p><style = blue></p>`

---

`p {color: blue;}`

#### --answer--

`<p style="color: blue;"></p>`

### --question--

#### --text--

When using internal CSS, where is the `style` element placed within the HTML?

#### --distractors--

In the `meta` element.

---

In the `script` element.

---

In the `body` element.

#### --answer--

In the `head` element.

### --question--

#### --text--

Which rule is correct for setting the width and height in CSS?

#### --distractors--

`height-width: 50px;`

---

`width-and-height: 50px;`

---

`flex-width: 50px; flex-height: 50px;`

#### --answer--

`width: 50px; height: 50px;`

### --question--

#### --text--

Which selector correctly targets `h1` elements only when inside a `div`?

#### --distractors--

`div, h1 {}`

---

`div ~ h1 {}`

---

`div + h1 {}`

#### --answer--

`div h1 {}`

### --question--

#### --text--

Which selector is correct to target direct children of a `footer`?

#### --distractors--

`footer ~ ul {}`

---

`footer + ul {}`

---

`footer ul {}`

#### --answer--

`footer > ul {}`

### --question--

#### --text--

Which selector is correct to target the next sibling of an `img`?

#### --distractors--

`img h1 {}`

---

`img > h1 {}`

---

`img ~ h1 {}`

#### --answer--

`img + h1 {}`

### --question--

#### --text--

Which selector is correct to target all siblings preceded by an `img` element?

#### --distractors--

`img > caption {}`

---

`img caption {}`

---

`img + caption {}`

#### --answer--

`img ~ caption {}`

### --question--

#### --text--

What statement is TRUE about block-level elements?

#### --distractors--

Block-level elements stack horizontally by default.

---

`width` and `height` properties usually do not apply to block-level elements unless you set their `display` property to `inline-block`.

---

Block-level elements cannot contain inline elements inside them.

#### --answer--

Block-level elements start on a new line and take up the full width of their container.

### --question--

#### --text--

What statement is TRUE when using the `inline-block` value?

#### --distractors--

Elements stack vertically, always taking up the full width of their container.

---

Elements align horizontally but cannot apply vertical padding or margin.

---

Elements respect width and height settings but cannot contain other elements inside them.

#### --answer--

Elements retain inline flow but allow setting width and height.

### --question--

#### --text--

Given the following selectors, which has the highest specificity?

#### --distractors--

`div`

---

`h1`

---

`p`

#### --answer--

`#id`

### --question--

#### --text--

Given the following selectors, which has the lowest specificity?

#### --distractors--

`#id`

---

`.class`

---

`div h1`

#### --answer--

`h1`

### --question--

#### --text--

What does the `*` selector do?

#### --distractors--

Targets some elements on the page.

---

Targets elements that have children on the page.

---

Targets all `p` elements on the page.

#### --answer--

Targets all elements on the page.

### --question--

#### --text--

What does `!important` do in CSS?

#### --distractors--

It makes the CSS rule work exclusively for inline styles and ignores styles defined in external or internal stylesheets.

---

It disables all other CSS properties applied to the same element, effectively making it the only rule that affects the element's styling.

---

It applies on to a certain selector or group of elements.

#### --answer--

It overrides any other values applied to the property for that selector.

### --question--

#### --text--

How does the CSS Cascade algorithm work?

#### --distractors--

It determines styles of the element based on order of declaration, regardless of other factors.

---

It applies styles based solely on the order they are written, ignoring specificity.

---

It applies styles prioritizing specificity, ignoring origin and relevance.

#### --answer--

It determines styles of the element based on specificity and order of declaration.

### --question--

#### --text--

Which rule applies `32px` of margin to all sides?

#### --distractors--

`margin-top: 32px;`

---

`margin: 32px 0;`

---

`margin: 0 32px;`

#### --answer--

`margin: 32px;`

### --question--

#### --text--

Which rule applies `24px` padding to the top and bottom?

#### --distractors--

`padding: 24px;`

---

`padding-top-bottom: 24px;`

---

`padding: 0 24px;`

#### --answer--

`padding: 24px 0;`

### --question--

#### --text--

For `padding: 10px 20px 30px 40px`, what is the correct order of values?

#### --distractors--

Right, Top, Left, Bottom.

---

Top, Left, Bottom, Right.

---

Top, Bottom, Right, Left.

#### --answer--

Top, Right, Bottom, Left.

