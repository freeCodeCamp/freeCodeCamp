# CSS quiz question pool

Each question has a comment with its source id (`quiz-name-N`) and a status:
- KEEP: covered in review-css-v2
- MAYBE: not in the review, but not commented out either (may be covered deeper in the lessons)
- CUT: tests something commented out in the review (compact list at the bottom)

Change a status in a comment (e.g. `MAYBE` -> `KEEP`) or delete questions you don't want.

# KEEP (287)

## basic-css (33)

<!-- basic-css-1 KEEP -->

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

<!-- basic-css-2 KEEP -->

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

<!-- basic-css-6 KEEP -->

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

<!-- basic-css-7 KEEP -->

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

<!-- basic-css-8 KEEP -->

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

<!-- basic-css-9 KEEP -->

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

<!-- basic-css-10 KEEP -->

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

<!-- basic-css-11 KEEP -->

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

<!-- basic-css-12 KEEP -->

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

<!-- basic-css-13 KEEP -->

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

<!-- basic-css-14 KEEP -->

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

<!-- basic-css-15 KEEP -->

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

<!-- basic-css-16 KEEP -->

### --question--

#### --text--

What does `!important` do in CSS?

#### --distractors--

It makes the CSS rule work exclusively for inline styles and ignores styles defined in external or internal stylesheets.

---

It disables all other CSS properties applied to the same element, effectively making it the only rule that affects the element's styling.

---

It applies only to a certain selector or group of elements.

#### --answer--

It overrides any other values applied to the property for that selector.

<!-- basic-css-18 KEEP -->

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

<!-- basic-css-19 KEEP -->

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

<!-- basic-css-20 KEEP -->

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

<!-- basic-css-21 KEEP -->

### --question--

#### --text--

What are the main parts of a CSS rule?

#### --distractors--

Elements and attributes

---

Style and sheets

---

Scripts and values

#### --answer--

Selectors and declaration blocks

<!-- basic-css-22 KEEP -->

### --question--

#### --text--

Which of the following is the correct syntax for a CSS rule?

#### --distractors--

```css
body [
  font-family: Arial;
]
```

---

```css
font-family {
  body: Arial;
}
```

---

```css
body {
  font-family; Arial:
}
```

#### --answer--

```css
body {
  font-family: Arial;
}
```

<!-- basic-css-24 KEEP -->

### --question--

#### --text--

What is the default value for the `width` property?

#### --distractors--

`none`

---

`0`

---

`100%`

#### --answer--

`auto`

<!-- basic-css-25 KEEP -->

### --question--

#### --text--

What does the `min-height` property specify?

#### --distractors--

The starting height for an element.

---

The height for an element.

---

The maximum height for an element.

#### --answer--

The minimum height for an element.

<!-- basic-css-26 KEEP -->

### --question--

#### --text--

Which of the following is TRUE about the universal selector `*`?

#### --distractors--

It has the highest specificity because it can style all the elements on a page.

---

It contributes 1 to all parts of the specificity value.

---

It cannot reset styles across different browsers.

#### --answer--

It has the lowest specificity value of any selector.

<!-- basic-css-27 KEEP -->

### --question--

#### --text--

Which selector correctly targets `li` elements for an ordered list?

#### --distractors--

`li {}`

---

`ul li {}`

---

`ol + li {}`

#### --answer--

`ol li {}`

<!-- basic-css-28 KEEP -->

### --question--

#### --text--

Which selector targets the paragraph elements of a `div` element?

#### --distractors--

`p div {}`

---

`div, p {}`

---

`p, div {}`

#### --answer--

`div p {}`

<!-- basic-css-29 KEEP -->

### --question--

#### --text--

Where does the `margin` apply styling properties?

#### --distractors--

The space inside the element.

---

Between the content and the border.

---

On the border of the element.

#### --answer--

The space outside the element.

<!-- basic-css-30 KEEP -->

### --question--

#### --text--

Where does the `padding` property apply styling?

#### --distractors--

Between the element's border and the surrounding elements.

---

The space outside the element.

---

On the border of the element.

#### --answer--

The space inside the element.

<!-- basic-css-31 KEEP -->

### --question--

#### --text--

Which statement is FALSE about block-level elements?

#### --distractors--

They can stretch to fit the width of their container.

---

Common block-level elements include `div`, `p`, and `section`.

---

Block-level elements start on a new line and take up the full width of their container.

#### --answer--

They cannot take up the full width available as they are blocked from doing so.

<!-- basic-css-32 KEEP -->

### --question--

#### --text--

Which statement is FALSE when using the `inline-block` value?

#### --distractors--

`inline-block` elements behave like inline elements.

---

They can have `width` and `height` properties.

---

Elements retain inline flow but allow setting `width` and `height`.

#### --answer--

They do not share properties with inline or block-level elements.

<!-- basic-css-33 KEEP -->

### --question--

#### --text--

Which is TRUE about the `!important` keyword?

#### --distractors--

They are used to make comments for an important CSS property.

---

They make sure a CSS property has the correct syntax.

---

They make CSS rules easier to maintain.

#### --answer--

They override the specificity of other selectors.

<!-- basic-css-34 KEEP -->

### --question--

#### --text--

What character precedes a class selector name?

#### --distractors--

`#`

---

`$`

---

`*`

#### --answer--

`.`

<!-- basic-css-35 KEEP -->

### --question--

#### --text--

Which is FALSE about inline-level elements?

#### --distractors--

They take up only as much space as they need.

---

They do not start on a new line.

---

Common inline elements include `span` and `img`.

#### --answer--

They always start on a new line.

<!-- basic-css-37 KEEP -->

### --question--

#### --text--

What is the order for applying the `padding` property when using the shorthand syntax?

#### --distractors--

`top`, `bottom`, `left`, `right`

---

`left`, `right`, `top`, `bottom`

---

`right`, `top`, `left`, `bottom`

#### --answer--

`top`, `right`, `bottom`, `left`

<!-- basic-css-38 KEEP -->

### --question--

#### --text--

What is the order for applying the `margin` property when using the shorthand syntax?

#### --distractors--

`left`, `right`, `top`, `bottom`

---

`right`, `top`, `left`, `bottom`

---

`top`, `bottom`, `left`, `right`

#### --answer--

`top`, `right`, `bottom`, `left`

<!-- basic-css-40 KEEP -->

### --question--

#### --text--

What symbol precedes the ID selector?

#### --distractors--

`.`

---

`*`

---

`$`

#### --answer--

`#`

## css-backgrounds-and-borders (30)

<!-- css-backgrounds-and-borders-4 KEEP -->

### --question--

#### --text--

Which pseudo-class is used to style links when a user hovers over them?

#### --distractors--

`:hovered`

---

`:hovering`

---

`:hasHovered`

#### --answer--

`:hover`

<!-- css-backgrounds-and-borders-5 KEEP -->

### --question--

#### --text--

What is the default value for the `background-repeat` property?

#### --distractors--

`no-repeat`

---

`repeat-x`

---

`space`

#### --answer--

`repeat`

<!-- css-backgrounds-and-borders-6 KEEP -->

### --question--

#### --text--

Which CSS property can be used to control the size of a background image?

#### --distractors--

`image-size`

---

`background-fit`

---

`size-image`

#### --answer--

`background-size`

<!-- css-backgrounds-and-borders-7 KEEP -->

### --question--

#### --text--

Which of the following is the correct way to apply a solid red top border to an element?

#### --distractors--

`set-top-border: 3px solid red;`

---

`border-top: apply 3px solid red;`

---

`top-border: 3px solid red;`

#### --answer--

`border-top: 3px solid red;`

<!-- css-backgrounds-and-borders-8 KEEP -->

### --question--

#### --text--

Which of the following is NOT a valid `border` property?

#### --distractors--

`border-bottom`

---

`border-right`

---

`border-top`

#### --answer--

`border-side`

<!-- css-backgrounds-and-borders-9 KEEP -->

### --question--

#### --text--

Which of the following is a valid `border-style` value?

#### --distractors--

`wave`

---

`triple`

---

`zig zag`

#### --answer--

`dotted`

<!-- css-backgrounds-and-borders-10 KEEP -->

### --question--

#### --text--

Which of the following is the correct way to apply borders using the shorthand property?

#### --distractors--

```css
.box {
  borders: 1px solid black;
}
```

---

```css
.box {
  borderShort: 1px solid black;
}
```

---

```css
.box {
  border-short: 1px solid black;
}
```

#### --answer--

```css
.box {
  border: 1px solid black;
}
```

<!-- css-backgrounds-and-borders-11 KEEP -->

### --question--

#### --text--

What is the role of the `linear-gradient` function?

#### --distractors--

It is used to set the style of an element's border.

---

It is used to determine how background images should be repeated along the horizontal and vertical axes.

---

It is used to style an element that was activated by the user.

#### --answer--

It is used to create a transition between multiple colors along a straight line.

<!-- css-backgrounds-and-borders-12 KEEP -->

### --question--

#### --text--

Which value for the `background-repeat` property ensures the image repeats horizontally but not vertically?

#### --distractors--

`repeat-y`

---

`space`

---

`no-repeat`

#### --answer--

`repeat-x`

<!-- css-backgrounds-and-borders-13 KEEP -->

### --question--

#### --text--

What is the purpose of the `border-radius` property?

#### --distractors--

To create shadows around the border.

---

To change the width of the border.

---

To make the border disappear.

#### --answer--

To round the corners of an element.

<!-- css-backgrounds-and-borders-14 KEEP -->

### --question--

#### --text--

Which of the following is NOT a valid value for the `background-position` property?

#### --distractors--

`top`

---

`center`

---

`bottom`

#### --answer--

`side`

<!-- css-backgrounds-and-borders-15 KEEP -->

### --question--

#### --text--

Which of the following `background-repeat` values can be used to repeat a background image vertically?

#### --distractors--

`repeat-x`

---

`vertical-only`

---

`stretch`

#### --answer--

`repeat-y`

<!-- css-backgrounds-and-borders-16 KEEP -->

### --question--

#### --text--

What does `background-position: center;` do to a background image?

#### --distractors--

It aligns the background image to the top of the element.

---

It repeats the background image horizontally and vertically.

---

It scales the background image to fill the entire element.

#### --answer--

It positions the background image in the center of the element.

<!-- css-backgrounds-and-borders-17 KEEP -->

### --question--

#### --text--

Which of these is NOT a valid `border` value?

#### --distractors--

`1px solid black`

---

`3px dotted blue`

---

`2px dashed red`

#### --answer--

`5px inverted green`

<!-- css-backgrounds-and-borders-18 KEEP -->

### --question--

#### --text--

What does the `radial-gradient` function do?

#### --distractors--

It creates a background that transitions between multiple colors along a straight line.

---

It specifies whether the background image should scroll with the content or remain fixed in place.

---

It is used to style an element that was activated by the user.

#### --answer--

It creates an image that radiates from a particular point and gradually transitions between multiple colors.

<!-- css-backgrounds-and-borders-19 KEEP -->

### --question--

#### --text--

Which of the following is NOT a valid pseudo-class?

#### --distractors--

`:focus`

---

`:visited`

---

`:link`

#### --answer--

`:before`

<!-- css-backgrounds-and-borders-20 KEEP -->

### --question--

#### --text--

Which of the following shows the `background` shorthand property being used properly?

#### --distractors--

```css
body {
  background: apply url("example-url-goes-here");
}
```

---

```css
body {
  background: set url("example-url-goes-here");
}
```

---

```css
body {
  background: 2px solid red url("example-url-goes-here");
}
```

#### --answer--

```css
body {
  background: no-repeat url("example-url-goes-here");
}
```

<!-- css-backgrounds-and-borders-26 KEEP -->

### --question--

#### --text--

Which CSS property adds spacing outside each list item to improve readability?

#### --distractors--

`padding`

---

`line-height`

---

`text-indent`

#### --answer--

`margin`

<!-- css-backgrounds-and-borders-28 KEEP -->

### --question--

#### --text--

What pseudo-class styles a link that has already been visited by the user?

#### --distractors--

`:hover`

---

`:link`

---

`:focus`

#### --answer--

`:visited`

<!-- css-backgrounds-and-borders-30 KEEP -->

### --question--

#### --text--

When does the `:active` pseudo-class apply?

#### --distractors--

When the link is first loaded

---

When the user is not interacting

---

When the browser finishes rendering

#### --answer--

When a user clicks or taps the element

<!-- css-backgrounds-and-borders-31 KEEP -->

### --question--

#### --text--

Which pseudo-class is used for hover effects?

#### --distractors--

`:link`

---

`:click`

---

`:active`

#### --answer--

`:hover`

<!-- css-backgrounds-and-borders-32 KEEP -->

### --question--

#### --text--

What does `background-size: cover` do?

#### --distractors--

Repeats the image in all directions

---

Crops the image

---

Fixes the image in one position

#### --answer--

Scales the image to fill the element while preserving aspect ratio

<!-- css-backgrounds-and-borders-33 KEEP -->

### --question--

#### --text--

Which value of `background-repeat` will repeat the background image both horizontally and vertically?

#### --distractors--

`no-repeat`

---

`repeat-x`

---

`space`

#### --answer--

`repeat`

<!-- css-backgrounds-and-borders-34 KEEP -->

### --question--

#### --text--

Which property sets where the background image is placed?

#### --distractors--

`background-location`

---

`background-origin`

---

`background-place`

#### --answer--

`background-position`

<!-- css-backgrounds-and-borders-35 KEEP -->

### --question--

#### --text--

What value of `background-attachment` keeps the image fixed when scrolling?

#### --distractors--

`scroll`

---

`static`

---

`sticky`

#### --answer--

`fixed`

<!-- css-backgrounds-and-borders-36 KEEP -->

### --question--

#### --text--

Which of the following correctly sets a background image that doesn’t repeat and is centered?

#### --distractors--

`background: no-repeat-center img("img.png");`

---

`background: image url("img.png") center;`

---

`background-position: center no-repeat url("img.png");`

#### --answer--

`background: center no-repeat url("img.png");`

<!-- css-backgrounds-and-borders-37 KEEP -->

### --question--

#### --text--

Which property is used to set the top, right, bottom, and left borders in a single declaration?

#### --distractors--

`border-style`

---

`border-radius`

---

`outline`

#### --answer--

`border`

<!-- css-backgrounds-and-borders-38 KEEP -->

### --question--

#### --text--

What effect does setting `border-radius: 10px;` have on an element?

#### --distractors--

It changes the border's opacity

---

It creates a 10-pixel border

---

It adds a 10px shadow

#### --answer--

It rounds the corners of the element

<!-- css-backgrounds-and-borders-39 KEEP -->

### --question--

#### --text--

Which of the following CSS rules correctly creates a linear gradient from red to yellow?

#### --distractors--

`background: gradient-linear(red to yellow);`

---

`background: linear(red, yellow);`

---

`background-color: gradient(red, yellow);`

#### --answer--

`background: linear-gradient(red, yellow);`

<!-- css-backgrounds-and-borders-40 KEEP -->

### --question--

#### --text--

Which of the following CSS declarations correctly applies a radial gradient from white in the center to blue at the edges?

#### --distractors--

`background: linear-gradient(white to blue);`

---

`background: gradient-radial(white to blue);`

---

`background: radial-gradient(blue, white);`

#### --answer--

`background: radial-gradient(white, blue);`

## css-relative-and-absolute-units (20)

<!-- css-relative-and-absolute-units-1 KEEP -->

### --question--

#### --text--

What is an absolute unit?

#### --distractors--

Units that adjust dynamically based on screen size.

---

Units that depend on the font size of the parent element.

---

Units measured in percentages of the viewport.

#### --answer--

Fixed length units that are not relative to anything else.

<!-- css-relative-and-absolute-units-2 KEEP -->

### --question--

#### --text--

What does `100vw` cover in terms of screen width?

#### --distractors--

`100%` of the screen width.

---

`100%` of the viewport height.

---

`100%` of the parent's width.

#### --answer--

`100%` of the viewport width.

<!-- css-relative-and-absolute-units-3 KEEP -->

### --question--

#### --text--

Which of the following is a relative unit?

#### --distractors--

`pt`

---

`cm`

---

`mm`

#### --answer--

`em`

<!-- css-relative-and-absolute-units-4 KEEP -->

### --question--

#### --text--

If the root font size is `20px`, what is `1rem` equal to?

#### --distractors--

`18px`

---

`16px`

---

`10px`

#### --answer--

`20px`

<!-- css-relative-and-absolute-units-5 KEEP -->

### --question--

#### --text--

What can the `calc()` function do in CSS?

#### --distractors--

Modify colors dynamically.

---

Set a fixed width.

---

Only work with percentages.

#### --answer--

Add, subtract, multiply, or divide different units.

<!-- css-relative-and-absolute-units-6 KEEP -->

### --question--

#### --text--

Which unit is the most commonly used absolute unit in CSS?

#### --distractors--

`inch`

---

`rem`

---

`%`

#### --answer--

`px`

<!-- css-relative-and-absolute-units-7 KEEP -->

### --question--

#### --text--

If the viewport height is `800px`, what would `50vh` be?

#### --distractors--

`50px`

---

`200px`

---

`100px`

#### --answer--

`400px`

<!-- css-relative-and-absolute-units-8 KEEP -->

### --question--

#### --text--

What does setting an element's width to `100%` mean?

#### --distractors--

It takes up the full width of the document.

---

It takes up the full width of the screen.

---

It takes up `100px`.

#### --answer--

It takes up the full width of its parent.

<!-- css-relative-and-absolute-units-9 KEEP -->

### --question--

#### --text--

What happens with `calc(10px + 20%)` in CSS?

#### --distractors--

It adds `10px` to `10%` of the document width.

---

It always equals `30px`.

---

It adds `10px` to `20%` of the screen width.

#### --answer--

It adds `10px` to `20%` of the parent's width.

<!-- css-relative-and-absolute-units-10 KEEP -->

### --question--

#### --text--

Which unit is relative to the font size of the root element?

#### --distractors--

`px`

---

`pt`

---

`%`

#### --answer--

`rem`

<!-- css-relative-and-absolute-units-11 KEEP -->

### --question--

#### --text--

With a root font size of `16px`, how big is `10rem`?

#### --distractors--

`140px`

---

`10px`

---

`100px`

#### --answer--

`160px`

<!-- css-relative-and-absolute-units-12 KEEP -->

### --question--

#### --text--

Why might you use `point` instead of `pixels` in design?

#### --distractors--

Points are scalable.

---

Points are better for responsive layouts.

---

Points are easier to manage on screens.

#### --answer--

Points are for print design.

<!-- css-relative-and-absolute-units-13 KEEP -->

### --question--

#### --text--

Why are `rem` units preferred over `pixels` in typography?

#### --distractors--

Because they provide fixed sizing regardless of screen resolution.

---

Because they ensure compatibility with older browsers.

---

Because they are easier to implement in responsive designs.

#### --answer--

Because they scale proportionally with the user’s browser settings.

<!-- css-relative-and-absolute-units-14 KEEP -->

### --question--

#### --text--

How much screen space does `80vw` take?

#### --distractors--

`80%` of the parent's width.

---

`100%` of the viewport height.

---

`80px`

#### --answer--

`80%` of the viewport width.

<!-- css-relative-and-absolute-units-15 KEEP -->

### --question--

#### --text--

Which units should you use if you want to make an element occupy a certain width or height by the percentage of the screen?

#### --distractors--

`pt` and `px`

---

`rem` and `em`

---

`pt` and `pc`

#### --answer--

`vw` and `vh`

<!-- css-relative-and-absolute-units-16 KEEP -->

### --question--

#### --text--

What does `vw` stand for?

#### --distractors--

Vertical Width.

---

Virtual Width.

---

Variable Width.

#### --answer--

Viewport Width.

<!-- css-relative-and-absolute-units-17 KEEP -->

### --question--

#### --text--

What's the key difference between `rem` and `em` in CSS?

#### --distractors--

`em` is relative to the root element, while `rem` is relative to the parent element.

---

`rem` is relative to desktop width, while `em` is relative to mobile width.

---

`rem` is relative to the user-defined width, while `em` is relative to the browser width.

#### --answer--

`em` is relative to the font size of the parent element, while `rem` is relative to the root element.

<!-- css-relative-and-absolute-units-18 KEEP -->

### --question--

#### --text--

What is a `vh` unit?

#### --distractors--

A unit based on the width of the viewport.

---

A unit based on the height of the element.

---

A unit that adjusts based on font size.

#### --answer--

A unit equal to 1% of the viewport height.

<!-- css-relative-and-absolute-units-19 KEEP -->

### --question--

#### --text--

What does setting an element's width to `auto` do in CSS?

#### --distractors--

It sets the width to `100%` of the parent element by default.

---

It sets the width to `50%` of the viewport unless other styles override it.

---

It sets the width to `0px` if no content or padding is present. 

#### --answer--

It allows the browser to determine the width based on the content and container.

<!-- css-relative-and-absolute-units-20 KEEP -->

### --question--

#### --text--

What’s a key advantage of the `calc()` function?

#### --distractors--

It automatically minifies your CSS files for better performance.

---

It enables the use of variables within CSS without any preprocessors.

---

It allows embedding JavaScript expressions directly within CSS rules.

#### --answer--

It lets you determine the value of a CSS property dynamically based on different aspects of the application or viewport.

## css-pseudo-classes (12)

<!-- css-pseudo-classes-1 KEEP -->

### --question--

#### --text--

What are pseudo-classes?

#### --distractors--

They are CSS rules that create additional content within an element when needed.

---

They are properties that adjust an element's size or layout on the page.

---

They are selectors used to add movement effects to an element during interactions.

#### --answer--

They are keywords added to a selector that style an element based on its state.

<!-- css-pseudo-classes-2 KEEP -->

### --question--

#### --text--

Which pseudo-class applies when a pointing device is being positioned over an element?

#### --distractors--

`:focus`

---

`:active`

---

`:checked`

#### --answer--

`:hover`

<!-- css-pseudo-classes-3 KEEP -->

### --question--

#### --text--

Which pseudo-element allows you to style the first letter of a paragraph?

#### --distractors--

`:first-letter`

---

`:first-child`

---

`:last-of-type`

#### --answer--

`::first-letter`

<!-- css-pseudo-classes-4 KEEP -->

### --question--

#### --text--

Which pseudo-class changes the style of an element while it is being clicked?

#### --distractors--

`:focus`

---

`:hover`

---

`:checked`

#### --answer--

`:active`

<!-- css-pseudo-classes-6 KEEP -->

### --question--

#### --text--

Which of the following CSS rules correctly adds the text `Note:` in front of each paragraph element with a class of `note`?

#### --distractors--

```css
.note::before {
  content: "Note:";
}
```

---

```css
p.note::after {
  content: "Note:";
}
```

---

```css
p::before {
  content: "Note:";
}
```

#### --answer--

```css
p.note::before {
  content: "Note:";
}
```

<!-- css-pseudo-classes-8 KEEP -->

### --question--

#### --text--

Which of the following is the correct syntax to style the last child of a list?

#### --distractors--

```css
li:nth-child(last) {
  color: blue;
}
```

---

```css
#li:last-child {
  color: blue;
}
```

---

```css
.li:last-child() {
  color: blue;
}
```

#### --answer--

```css
li:last-child {
  color: blue;
}
```

<!-- css-pseudo-classes-10 KEEP -->

### --question--

#### --text--

What does the `:disabled` pseudo-class do?

#### --distractors--

It styles checked inputs.

---

It styles elements being hovered over.

---

It selects elements that do not match a given selector.

#### --answer--

It styles elements that are not available for user interaction.

<!-- css-pseudo-classes-16 KEEP -->

### --question--

#### --text--

What does the following CSS rule do?

```css
p:first-of-type {
  font-style: italic;
}
```

#### --distractors--

It selects the first `p` element in the document.

---

It selects all `p` elements in the document.

---

It selects the first child of every `p` element.

#### --answer--

It selects the first `p` element within a parent container.

<!-- css-pseudo-classes-17 KEEP -->

### --question--

#### --text--

What does the `:last-of-type` pseudo class do?

#### --distractors--

It selects the first child element of a specific type within its parent.

---

It selects the middle child element of a specific type within its parent.

---

It selects every child element of a specific type within its parent.

#### --answer--

It selects the last child element of a specific type within its parent.

<!-- css-pseudo-classes-33 KEEP -->

### --question--

#### --text--

Which CSS rule will apply a `color` of `yellow` to the second `p` element in the following HTML?

```html
<div>
  <h1>Courses</h1>
  <p>HTML</p>
  <p>CSS</p>
  <p>JavaScript</p>
</div>
```

#### --distractors--

```css
p:nth-child(2) {
  color: yellow;
}
```

---

```css
p:first-of-type {
  color: yellow;
}
```

---

```css
p:last-of-type {
  color: yellow;
}
```

#### --answer--

```css
p:nth-of-type(2) {
  color: yellow;
}
```

<!-- css-pseudo-classes-34 KEEP -->

### --question--

#### --text--

Which pseudo-element allows you to select the marker of list items for styling?

#### --distractors--

`::before`

---

`::after`

---

`:root`

#### --answer--

`::marker`

<!-- css-pseudo-classes-39 KEEP -->

### --question--

#### --text--

Which pseudo-element uses the `content` property to insert content after the element?

#### --distractors--

`::before`

---

`::marker`

---

`::first-letter`

#### --answer--

`::after`

## css-colors (29)

<!-- css-colors-1 KEEP -->

### --question--

#### --text--

Which of these color systems cannot be used to set a color in CSS?

#### --distractors--

RGB

---

HSL

---

HEX

#### --answer--

CMYK

<!-- css-colors-6 KEEP -->

### --question--

#### --text--

What is the default value of alpha in `rgba` if it's not specified?

#### --distractors--

`0` (completely transparent)

---

`2` (completely opaque)

---

`0.5` (half transparent)

#### --answer--

`1` (completely opaque)

<!-- css-colors-7 KEEP -->

### --question--

#### --text--

Which of the following is a valid hex color code?

#### --distractors--

`#12345G`

---

`#12ffg0`

---

`#12ffgg`

#### --answer--

`#ff12ff`

<!-- css-colors-9 KEEP -->

### --question--

#### --text--

Which of these functions allows specifying the transparency of a color?

#### --distractors--

`rgb()`

---

`hsl()`

---

`alpha()`

#### --answer--

`rgba()`

<!-- css-colors-10 KEEP -->

### --question--

#### --text--

Which of the following hex codes represents a shade of red?

#### --distractors--

`#0000ff`

---

`#ffff00`

---

`#00ff00`

#### --answer--

`#ff0000`

<!-- css-colors-11 KEEP -->

### --question--

#### --text--

How many colors are required to create a valid CSS gradient?

#### --distractors--

At least 4.

---

Exactly 2.

---

Exactly 3.

#### --answer--

At least 2.

<!-- css-colors-12 KEEP -->

### --question--

#### --text--

Which is NOT a valid way to apply a `linear-gradient`?

#### --distractors--

```css
background: linear-gradient(to right, red, blue);
```

---

```css
background: linear-gradient(90deg, red, green, blue);
```

---

```css
background: linear-gradient(#F00, #00F);
```

#### --answer--

```css
background: linear-gradient(up, red, blue);
```

<!-- css-colors-13 KEEP -->

### --question--

#### --text--

What unit is used to express the lightness value in the `hsl` color model?

#### --distractors--

Degrees

---

Hex

---

Pixels

#### --answer--

Percent

<!-- css-colors-14 KEEP -->

### --question--

#### --text--

What does the `rgb()` function stand for?

#### --distractors--

`Red`, `Gray`, `Black`

---

`Radiant`, `Glow`, `Blend`

---

`Rendered`, `Graphic`, `Background`

#### --answer--

`Red`, `Green`, `Blue`

<!-- css-colors-15 KEEP -->

### --question--

#### --text--

What does the `hsl()` function stand for?

#### --distractors--

`Hue`, `Saturation`, `Luminosity`

---

`Hue`, `Shadow`, `Lightness`

---

`Hue`, `Shadow`, `Luminosity`

#### --answer--

`Hue`, `Saturation`, `Lightness`

<!-- css-colors-16 KEEP -->

### --question--

#### --text--

Which of these is a valid CSS named color?

#### --distractors--

`hsl(yellow)`

---

`rgb(red)`

---

`#blue`

#### --answer--

`gold`

<!-- css-colors-17 KEEP -->

### --question--

#### --text--

What is the maximum value allowed for a single color component in the `RGB` color system?

#### --distractors--

`200`

---

`500`

---

`128`

#### --answer--

`255`

<!-- css-colors-18 KEEP -->

### --question--

#### --text--

Which of these correctly uses one of the color models to set the background color?

#### --distractors--

```css
background: rgb(50%, 255, 155);
```

---

```css
background: #blue;
```

---

```css
background: #0I0I0I;
```

#### --answer--

```css
background: hsl(50, 50%, 50%);
```

<!-- css-colors-19 KEEP -->

### --question--

#### --text--

Which of these sets the opacity of the color?

#### --distractors--

```css
hsl(0, 20%, 30%, 50%)
```

---

```css
rgb(20, 30, 80, 0.5)
```

---

```css
rgba(20, 30, 80)
```

#### --answer--

```css
hsla(0, 20%, 30%, 50%)
```

<!-- css-colors-20 KEEP -->

### --question--

#### --text--

Which of the following is the correct way to give an element a top-to-bottom red-to-blue gradient background?

#### --distractors--

```css
background: radial-gradient(red, blue)
```

---

```css
background: radial-gradient(blue, red)
```

---

```css
background: linear-gradient(blue, red)
```

#### --answer--

```css
background: linear-gradient(red, blue)
```

<!-- css-colors-27 KEEP -->

### --question--

#### --text--

What are the three primary colors of light?

#### --distractors--

Red, Yellow, Blue

---

Red, Green, Purple

---

Red, Green, Brown

#### --answer--

Red, Green, Blue

<!-- css-colors-28 KEEP -->

### --question--

#### --text--

What does the alpha value control in `rgba`?

#### --distractors--

Hue

---

Saturation

---

Intensity

#### --answer--

Transparency

<!-- css-colors-29 KEEP -->

### --question--

#### --text--

Which of these functions is a valid `hsl` function?

#### --distractors--

`hsl(0, 100%, 50)`

---

`hsl(0%, 100%, 50%)`

---

`hsl(0, 100%, 150%)`

#### --answer--

`hsl(0, 100%, 50%)`

<!-- css-colors-30 KEEP -->

### --question--

#### --text--

Which of these `hsl` functions represents the color black?

#### --distractors--

`hsl(255,100%,100%)`

---

`hsl(0,0%,100%)`

---

`hsl(283,0%,75%)`

#### --answer--

`hsl(255,100%,0%)`

<!-- css-colors-31 KEEP -->

### --question--

#### --text--

What is "hex code" short for?

#### --distractors--

Hexagonal code

---

Hexabinary code

---

Hexaglyphic code

#### --answer--

Hexadecimal code

<!-- css-colors-32 KEEP -->

### --question--

#### --text--

Which letters can be used in a hex code?

#### --distractors--

A-G

---

A-H

---

A-E

#### --answer--

A-F

<!-- css-colors-33 KEEP -->

### --question--

#### --text--

Which digits can be used in a hex code?

#### --distractors--

0-10

---

10-19

---

1-9

#### --answer--

0-9

<!-- css-colors-34 KEEP -->

### --question--

#### --text--

What’s the maximum hue value in an `hsl` color?

#### --distractors--

100

---

255

---

60

#### --answer--

360

<!-- css-colors-35 KEEP -->

### --question--

#### --text--

What’s the fourth value in the `hsla()` function?

#### --distractors--

Absorption

---

Aura

---

Aperture

#### --answer--

Alpha

<!-- css-colors-36 KEEP -->

### --question--

#### --text--

Linear gradients create a gradual blend across what type of line?

#### --distractors--

Curved

---

Circular

---

Perpendicular

#### --answer--

Straight

<!-- css-colors-37 KEEP -->

### --question--

#### --text--

What types of color codes can be used in a gradient?

#### --distractors--

Hex code and HSL

---

HSL and RGB

---

RGB and Hex code

#### --answer--

Any CSS color

<!-- css-colors-38 KEEP -->

### --question--

#### --text--

How many color stops can you have in one gradient?

#### --distractors--

Up to 2

---

Up to 3

---

Up to 5

#### --answer--

Unlimited

<!-- css-colors-39 KEEP -->

### --question--

#### --text--

Which of these is NOT a valid radial gradient?

#### --distractors--

`radial-gradient(circle, red, blue)`

---

`radial-gradient(circle, #33ff11, rgb(255,0,255))`

---

`radial-gradient(circle, #bbb123, blue, rgb(255,0,255))`

#### --answer--

`radial-gradient(45deg, red, blue)`

<!-- css-colors-40 KEEP -->

### --question--

#### --text--

Which of these is NOT a valid gradient?

#### --distractors--

`radial-gradient(circle, red, blue, green)`

---

`linear-gradient(80deg, red, #44bb23, rgba(200,255,0,0.5))`

---

`radial-gradient(circle, red, #1168ff, rgba(200,255,0,0.5), hsl(120,100%,50%))`

#### --answer--

`linear-gradient(30deg, blue, hsl(120%,100%,50%))`

## css-layout-and-effects (27)

<!-- css-layout-and-effects-1 KEEP -->

### --question--

#### --text--

What term is used in CSS to describe when an element's content exceeds the size of its container?

#### --distractors--

Underflow

---

Compression

---

Padding

#### --answer--

Overflow

<!-- css-layout-and-effects-2 KEEP -->

### --question--

#### --text--

What is the default behavior of CSS when content overflows an element?

#### --distractors--

Hiding the content.

---

Clipping the content.

---

Resizing the content.

#### --answer--

Keeping the content visible.

<!-- css-layout-and-effects-3 KEEP -->

### --question--

#### --text--

Why does CSS typically avoid hiding content when there is overflow?

#### --distractors--

To maintain the original layout and design.

---

To prevent performance issues in the browser.

---

To allow for better search engine optimization.

#### --answer--

To ensure all content is accessible to users.

<!-- css-layout-and-effects-4 KEEP -->

### --question--

#### --text--

How can you handle vertical overflow in CSS by hiding content or displaying scrollbars?

#### --distractors--

Use `overflow-y: visible` to hide content and `overflow-y: auto` to always display scrollbars.

---

Use `overflow-y: collapse` to hide content and `overflow-y: expand` to display scrollbars.

---

Use `overflow-y: none` to hide content and `overflow-y: show` to display scrollbars.

#### --answer--

Use `overflow-y: hidden` to hide content and `overflow-y: scroll` to always display scrollbars.

<!-- css-layout-and-effects-6 KEEP -->

### --question--

#### --text--

What does the `transform` CSS property allow you to do?

#### --distractors--

Change the color and font style of an element.

---

Adjust the margin and padding of an element.

---

Modify the visibility and display of an element.

#### --answer--

Rotate, scale, skew, and translate an element.

<!-- css-layout-and-effects-8 KEEP -->

### --question--

#### --text--

What is the purpose of the CSS properties `overflow-x` and `overflow-y`?

#### --distractors--

They adjust the padding and margin of an element.

---

They set the background color and font style of an element.

---

They define the visibility and display properties of an element.

#### --answer--

They control the horizontal and vertical overflow of an element's content.

<!-- css-layout-and-effects-9 KEEP -->

### --question--

#### --text--

What is the purpose of the `margin` property in CSS?

#### --distractors--

It defines the space between the content and the border of an element.

---

It defines the space between the border and the padding of an element.

---

It defines the width and height of an element.

#### --answer--

It defines the space around an element, outside of its border.

<!-- css-layout-and-effects-10 KEEP -->

### --question--

#### --text--

What does the content area of an element represent in CSS?

#### --distractors--

It defines the margins and padding around the element.

---

It defines the thickness of the element's border.

---

It controls the visibility of the element on the page.

#### --answer--

It contains the actual content of the element, such as text, images, and videos.

<!-- css-layout-and-effects-11 KEEP -->

### --question--

#### --text--

What is the difference between `content-box` and `border-box` in CSS?

#### --distractors--

`content-box` includes padding and border, while `border-box` includes only content dimensions.

---

Both `content-box` and `border-box` include only the border dimensions.

---

`content-box` is used for 2D elements, while `border-box` is used for 3D elements.

#### --answer--

`content-box` includes only content dimensions, while `border-box` includes content, padding, and border in the dimensions.

<!-- css-layout-and-effects-14 KEEP -->

### --question--

#### --text--

Which CSS property is used to apply changes such as rotation, scaling, and translation to elements?

#### --distractors--

`box-shadow`

---

`opacity`

---

`z-index`

#### --answer--

`transform`

<!-- css-layout-and-effects-15 KEEP -->

### --question--

#### --text--

How is the total width of an element calculated in CSS when using the `border-box` value for the `box-sizing` property?

#### --distractors--

Total Width = Content Width + Border + Margin

---

Total Width = Content Width + Padding + Border + Margin

---

Total Width = Content Width

#### --answer--

Total Width = Content Width + Padding + Border

<!-- css-layout-and-effects-16 KEEP -->

### --question--

#### --text--

What is the purpose of the `filter` property in CSS?

#### --distractors--

Changing the scale and rotation of an element.

---

Changing the background color and texture of an element.

---

Altering the size and position of an element.

#### --answer--

Modifying the visual appearance of an element by using various graphical effects.

<!-- css-layout-and-effects-17 KEEP -->

### --question--

#### --text--

What does the CSS property `filter: grayscale(50%);` do to an element?

#### --distractors--

It increases the brightness of the element by 50%.

---

It decreases the contrast of the element by 50%.

---

It applies a sepia effect to the element.

#### --answer--

It applies a 50% grayscale effect to the element.

<!-- css-layout-and-effects-19 KEEP -->

### --question--

#### --text--

What is the purpose of the `hue-rotate()` function in CSS?

#### --distractors--

It changes the brightness of an image.

---

It rotates an image clockwise by a certain number of degrees.

---

It adjusts the saturation and contrast of an image.

#### --answer--

It applies a color shift, where the `angle` value defines the number of degrees to rotate around the color circle.

<!-- css-layout-and-effects-22 KEEP -->

### --question--

#### --text--

Which of the following is a component of the CSS box model?

#### --distractors--

Width

---

Height

---

Size

#### --answer--

Padding

<!-- css-layout-and-effects-23 KEEP -->

### --question--

#### --text--

When an element's `box-sizing` is set to `content-box`, which part of the box model does the `width` and `height` apply to?

#### --distractors--

Content, padding, border, and margin

---

Content and padding

---

Content, padding, and border

#### --answer--

Content

<!-- css-layout-and-effects-24 KEEP -->

### --question--

#### --text--

When an element's `box-sizing` is set to `border-box`, which parts of the CSS box model does the `width` and `height` NOT apply to?

#### --distractors--

The content area.

---

Padding

---

Border

#### --answer--

Margin

<!-- css-layout-and-effects-25 KEEP -->

### --question--

#### --text--

Which value for the `brightness()` function makes an element completely black?

#### --distractors--

`100%`

---

`0px`

---

`100px`

#### --answer--

`0%`

<!-- css-layout-and-effects-26 KEEP -->

### --question--

#### --text--

What kind of values does the `hue-rotate()` function use?

#### --distractors--

Pixels

---

Radians

---

Percentages

#### --answer--

Degrees

<!-- css-layout-and-effects-28 KEEP -->

### --question--

#### --text--

What is the baseline value of the `brightness()` CSS function from which increasing brightness starts?

#### --distractors--

`100px`

---

`50px`

---

`50%`

#### --answer--

`100%`

<!-- css-layout-and-effects-29 KEEP -->

### --question--

#### --text--

What kind of values does the `grayscale()` function use?

#### --distractors--

Pixels

---

Degrees

---

Radians

#### --answer--

Percentages

<!-- css-layout-and-effects-31 KEEP -->

### --question--

#### --text--

What does the `overflow-x` property in CSS control?

#### --distractors--

It determines the horizontal overflow on the y-axis.

---

It determines the vertical overflow on the y-axis.

---

It determines the vertical overflow on the x-axis.

#### --answer--

It determines the horizontal overflow on the x-axis.

<!-- css-layout-and-effects-32 KEEP -->

### --question--

#### --text--

What does the `overflow-y` property in CSS control?

#### --distractors--

It determines the horizontal overflow on the x-axis.

---

It determines the vertical overflow on the x-axis.

---

It determines the horizontal overflow on the y-axis.

#### --answer--

It determines the vertical overflow on the y-axis.

<!-- css-layout-and-effects-34 KEEP -->

### --question--

#### --text--

How many dimensions are there to the overflow property in CSS?

#### --distractors--

One

---

Three

---

Four

#### --answer--

Two

<!-- css-layout-and-effects-36 KEEP -->

### --question--

#### --text--

What kind of blur effect does the `blur()` function apply to an element in CSS?

#### --distractors--

Giliani

---

Galilei

---

Galileo

#### --answer--

Gaussian

<!-- css-layout-and-effects-37 KEEP -->

### --question--

#### --text--

What kind of values does the `sepia()` function use?

#### --distractors--

Pixels

---

Radians

---

Degrees

#### --answer--

Percentages

<!-- css-layout-and-effects-40 KEEP -->

### --question--

#### --text--

What does the CSS property `filter: grayscale(100%);` do to an element?

#### --distractors--

It will have no effect on the element.

---

It will make the element appear completely black.

---

It will make the element appear completely white.

#### --answer--

It removes color saturation while maintaining the element's tonal structure.

## css-flexbox (39)

<!-- css-flexbox-1 KEEP -->

### --question--

#### --text--

What is flexbox?

#### --distractors--

A two-dimensional model for layout.

---

A three-dimensional model for layout.

---

A multi-dimensional model for layout.

#### --answer--

A one-dimensional model for layout.

<!-- css-flexbox-2 KEEP -->

### --question--

#### --text--

What CSS property is set to enable the flexbox layout for the `div` element?

#### --distractors--

```css
div {
  flex: 1;
}
```

---

```css
div {
  flex-direction: row;
}
```

---

```css
div {
  flex-wrap: wrap;
}
```

#### --answer--

```css
div {
  display: flex;
}
```

<!-- css-flexbox-3 KEEP -->

### --question--

#### --text--

Which CSS property lets flex items wrap onto a new row when the current row is full?

#### --distractors--

`flex-direction`

---

`justify-content`

---

`align-items`

#### --answer--

`flex-wrap`

<!-- css-flexbox-4 KEEP -->

### --question--

#### --text--

What does the flexbox property `justify-content` control?

#### --distractors--

It controls the direction of the child elements of the flexbox container.

---

It controls the text style of the child elements of the flexbox container.

---

It controls the alignment of the child elements within the flexbox container.

#### --answer--

It controls the distribution of the child elements on the main axis.

<!-- css-flexbox-5 KEEP -->

### --question--

#### --text--

What property controls the direction of the elements within the flexbox container?

#### --distractors--

`flex-wrap`

---

`flex`

---

`justify-content`

#### --answer--

`flex-direction`

<!-- css-flexbox-6 KEEP -->

### --question--

#### --text--

Which CSS properties can be used to make flex items flow from left to right, and have the new flex item appear on top of the previous one if the width of the current row is exceeded?

#### --distractors--

```css
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
}
```

---

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
```

---

```css
.container {
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
}
```

#### --answer--

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
}
```

<!-- css-flexbox-7 KEEP -->

### --question--

#### --text--

What property controls the positioning of the elements on the cross axis?

#### --distractors--

`flex-wrap`

---

`flex-direction`

---

`justify-content`

#### --answer--

`align-items`

<!-- css-flexbox-8 KEEP -->

### --question--

#### --text--

Which is not a value for `justify-content`?

#### --distractors--

`flex-start`

---

`center`

---

`space-between`

#### --answer--

`row`

<!-- css-flexbox-9 KEEP -->

### --question--

#### --text--

What CSS properties would you use to center an element within a flex container horizontally, and vertically?

#### --distractors--

```css
.container {
  display: flex;
  justify-content: center;
}
```

---

```css
.container {
  display: flex;
  align-items: center;
}
```

---

```css
.container {
  display: flex;
  align-content: center;
}
```

#### --answer--

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

<!-- css-flexbox-10 KEEP -->

### --question--

#### --text--

What value of `flex-direction` makes the flex items go from right to left?  

#### --distractors--

`column-reverse`

---

`column`

---

`row`

#### --answer--

`row-reverse`

<!-- css-flexbox-11 KEEP -->

### --question--

#### --text--

What is not a value of the `flex-wrap` property?

#### --distractors--

`nowrap`

---

`wrap`

---

`wrap-reverse`

#### --answer--

`row`

<!-- css-flexbox-12 KEEP -->

### --question--

#### --text--

What does the `stretch` value in `align-items` do?

#### --distractors--

Items are packed directly against each other toward the start edge of the container.

---

Items are aligned such that their flex container baselines align.

---

Items are packed directly against each other toward the end edge of the container.

#### --answer--

Auto-size items to be equally large to fill the container.

<!-- css-flexbox-13 KEEP -->

### --question--

#### --text--

Which `justify-content` value places the first item at the start, the last item at the end, and evenly spaces the other items between them along the main axis?

#### --distractors--

`space-evenly`

---

`space-around`

---

`center`

#### --answer--

`space-between`

<!-- css-flexbox-14 KEEP -->

### --question--

#### --text--

Which `justify-content` value spaces items so that the gaps between every pair of adjacent items and the container’s edges are all equal?

#### --distractors--

`space-between`

---

`space-around`

---

`center`

#### --answer--

`space-evenly`

<!-- css-flexbox-15 KEEP -->

### --question--

#### --text--

Which `justify-content` value spaces items equally along the main axis while leaving half that amount of space at the container’s edges?

#### --distractors--

`space-evenly`

---

`center`

---

`space-between`

#### --answer--

`space-around`

<!-- css-flexbox-16 KEEP -->

### --question--

#### --text--

Which of the following results in the items being aligned at the start of the cross axis?

#### --distractors--

`align-items: flex-starts;`

---

`align-items: baseline;`

---

`align-items: first-baseline;`

#### --answer--

`align-items: flex-start;`

<!-- css-flexbox-18 KEEP -->

### --question--

#### --text--

Which value for `flex-direction` will make it so items are aligned along the main axis from left to right?

#### --distractors--

`column`

---

`column-reverse`

---

`row-reverse`

#### --answer--

`row`

<!-- css-flexbox-19 KEEP -->

### --question--

#### --text--

Which value for `flex-direction` will make it so items are aligned along the cross axis from top to bottom?

#### --distractors--

`row`

---

`column-reverse`

---

`row-reverse`

#### --answer--

`column`

<!-- css-flexbox-20 KEEP -->

### --question--

#### --text--

Which of the following use case is not suitable for flexbox?

#### --distractors--

Centering an item in a container.

---

Vertical alignment of items in a row.

---

Dynamically adjusting distribution and alignment of items for different viewports.

#### --answer--

Fixed sizing and space between items like a grid.

<!-- css-flexbox-21 KEEP -->

### --question--

#### --text--

What is the purpose of a one-dimensional layout model like Flexbox?

#### --distractors--

To handle layout in two dimensions, both rows and columns at the same time.

---

To control the stacking order of positioned elements using `z-index`.

---

To create 3D transforms and complex animations on page elements.

#### --answer--

To lay out items along a single line or axis, either as a row or as a column.

<!-- css-flexbox-22 KEEP -->

### --question--

#### --text--

Which CSS property will align all the flex items to the right side of the `.container` element?

```css
.container {
  display: flex;
  flex-direction: row;
}
```

#### --distractors--

`justify-content: flex-start;`

---

`justify-content: space-between;`

---

`align-items: flex-end;`

#### --answer--

`justify-content: flex-end;`

<!-- css-flexbox-23 KEEP -->

### --question--

#### --text--

What are the two axes that define the direction of item layout in the Flex Model?

#### --distractors--

The horizontal axis and the vertical axis.

---

The x-axis and the y-axis.

---

The primary axis and the secondary axis.

#### --answer--

The main axis and the cross axis.

<!-- css-flexbox-24 KEEP -->

### --question--

#### --text--

Which of the following CSS rules will arrange items in a vertical column and also center them horizontally within their container?

#### --distractors--

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

---

```css
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

---

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
```

#### --answer--

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

<!-- css-flexbox-25 KEEP -->

### --question--

#### --text--

What is the main purpose of the `flex-wrap` property?

#### --distractors--

It sets the direction that flex items are placed in the flex container.

---

It aligns flex items along the main axis of the container.

---

It aligns flex items along the cross axis of the container.

#### --answer--

It determines if flex items should wrap onto new lines to fit available space.

<!-- css-flexbox-26 KEEP -->

### --question--

#### --text--

What is the default behavior of the `flex-wrap: nowrap;` declaration?

#### --distractors--

It forces flex items to wrap onto a new line if they are too wide for the container.

---

It wraps items onto a new line, but in the reverse order.

---

It prevents the flex container from being larger than its parent element.

#### --answer--

It forces flex items to remain on a single line, even if they overflow the container.

<!-- css-flexbox-27 KEEP -->

### --question--

#### --text--

Which CSS property is a shorthand for setting both the `flex-direction` and `flex-wrap` properties at once?

#### --distractors--

`flex-box`

---

`flex-align`

---

`flex-container`

#### --answer--

`flex-flow`

<!-- css-flexbox-28 KEEP -->

### --question--

#### --text--

What is the effect of setting `flex-direction: column-reverse;` on a flex container?

#### --distractors--

It arranges items horizontally from right to left.

---

It reverses the items in a row, but keeps them on a single line.

---

It arranges items vertically from top to bottom.

#### --answer--

It arranges items vertically in a reverse order from bottom to top.

<!-- css-flexbox-29 KEEP -->

### --question--

#### --text--

Which CSS snippet correctly arranges flex items in a vertical column and allows them to wrap onto a new column if they overflow the container's height?

#### --distractors--

```css
.container {
  display: flex;
  flex-flow: row wrap;
}
```

---

```css
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
```

---

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### --answer--

```css
.container {
  display: flex;
  flex-flow: column wrap;
}
```

<!-- css-flexbox-30 KEEP -->

### --question--

#### --text--

Which `justify-content` value aligns all flex items to the end of the container's main axis?

#### --distractors--

`justify-content: end;`

---

`justify-content: center;`

---

`justify-content: flex-start;`

#### --answer--

`justify-content: flex-end;`

<!-- css-flexbox-31 KEEP -->

### --question--

#### --text--

What is the effect of the following CSS rule on flex items?

```css
.container {
  flex-flow: row nowrap;
}
```

#### --distractors--

Items are arranged in a column and will wrap to a new column.

---

Items are arranged in a row and will wrap to a new row.

---

Items are arranged in a column and will overflow if they don't fit.

#### --answer--

Items are arranged in a row and will overflow the container if they don't fit.

<!-- css-flexbox-32 KEEP -->

### --question--

#### --text--

How does `justify-content: space-evenly;` align flex items?

```css
.container {
  display: flex;
  justify-content: space-evenly;
}
```

#### --distractors--

Items are evenly spaced, with no space at the start or end.

---

Items are packed together in the center of the container.

---

Items are pushed to the right side of the container, with equal spacing between them.

#### --answer--

Items have equal space between them and at both ends of the container.

<!-- css-flexbox-33 KEEP -->

### --question--

#### --text--

Which property would you use to vertically center items when `flex-direction: row;` is set?

#### --distractors--

`justify-content: center;`

---

`vertical-align: middle;`

---

`text-align: center;`

#### --answer--

`align-items: center;`

<!-- css-flexbox-34 KEEP -->

### --question--

#### --text--

What does the `flex-start` value for the `justify-content` property do?

#### --distractors--

It aligns items to the start of the cross axis.

---

It stretches items to fill the container's main axis.

---

It centers all the items along the main axis.

#### --answer--

It aligns items to the beginning of the container's main axis.

<!-- css-flexbox-35 KEEP -->

### --question--

#### --text--

How would you set up a flex container to arrange its items from right-to-left on a single line, and also position them at the top of the container?

#### --distractors--

```css
.container {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
```

---

```css
.container {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
}
```

---

```css
.container {
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: flex-start;
}
```

#### --answer--

```css
.container {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
}
```

<!-- css-flexbox-36 KEEP -->

### --question--

#### --text--

Which of the following is a valid declaration for the `flex-flow` property?

#### --distractors--

`flex-flow: center wrap;`

---

`flex-flow: row space-between;`

---

`flex-flow: column reverse;`

#### --answer--

`flex-flow: column wrap-reverse;`

<!-- css-flexbox-37 KEEP -->

### --question--

#### --text--

Which of the following CSS rules will result in flex items being centered horizontally and stretched vertically to fill the height of the container?

#### --distractors--

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

```css
.container {
  display: flex;
  justify-content: stretch;
  align-items: center;
}
```

---

```css
.container {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}
```

#### --answer--

```css
.container {
  display: flex;
  justify-content: center;
  align-items: stretch;
}
```

<!-- css-flexbox-38 KEEP -->

### --question--

#### --text--

What effect does `align-items: stretch;` have when `flex-direction` is set to `column`?

#### --distractors--

It stretches items vertically to fill the container's height.

---

It has no effect when the direction is `column`.

---

It stretches items vertically to match the tallest item.

#### --answer--

It stretches items horizontally to fill the container's width.

<!-- css-flexbox-39 KEEP -->

### --question--

#### --text--

If you want to reverse the order of items in a horizontal row, which declaration should you use?

#### --distractors--

`flex-direction: column-reverse;`

---

`flex-wrap: wrap-reverse;`

---

`flex-direction: reverse-row;`

#### --answer--

`flex-direction: row-reverse;`

<!-- css-flexbox-40 KEEP -->

### --question--

#### --text--

Which value of `align-items` will position items at the top of a container whose `flex-direction` is `row`?

#### --distractors--

`align-items: top;`

---

`justify-content: flex-start;`

---

`align-items: stretch;`

#### --answer--

`align-items: flex-start;`

## css-typography (5)

<!-- css-typography-4 KEEP -->

### --question--

#### --text--

What is a font family in the context of typography?

#### --distractors--

A specific font style used for headings and body text.

---

A collection of text options for formatting text.

---

A set of visually consistent colors used for text.

#### --answer--

A group of fonts that share similar design characteristics.

<!-- css-typography-9 KEEP -->

### --question--

#### --text--

Why is it important to include multiple font options in the `font-family` property?

#### --distractors--

It reduces page load time by optimizing the process of loading fonts.

---

It prevents browser compatibility issues by providing multiple options.

---

It makes the web page more engaging and interactive.

#### --answer--

It ensures a consistent user experience in case the custom font doesn't load.

<!-- css-typography-17 KEEP -->

### --question--

#### --text--

How do you specify multiple font families in the `font-family` property in CSS?

#### --distractors--

By separating them with spaces and listing the preferred font last.

---

By separating them with commas and listing the preferred font last.

---

By enclosing them in curly braces and listing the preferred font first.

#### --answer--

By separating them with commas and listing the preferred font first.

<!-- css-typography-34 KEEP -->

### --question--

#### --text--

Which example correctly uses the `font-family` property?

#### --distractors--

```css
font-family {
  body: Arial;
}
```

---

```css
body {
  Arial: font-family;
}
```

---

```css
body {
  font-family; Arial:
}
```


#### --answer--

```css
body {
  font-family: Arial;
}
```

<!-- css-typography-37 KEEP -->

### --question--

#### --text--

How are font families related?

#### --distractors--

They are developed by the same design team.

---

They are all designed by the same designer.

---

They share the same name but are based on a different typeface.

#### --answer--

They are a group of fonts that share a common design.

## css-positioning (31)

<!-- css-positioning-1 KEEP -->

### --question--

#### --text--

Which of the following is NOT a valid value for the `position` property?

#### --distractors--

`fixed`

---

`absolute`

---

`relative`

#### --answer--

`above`

<!-- css-positioning-5 KEEP -->

### --question--

#### --text--

Which CSS property is used to control the vertical stacking order of positioned elements that overlap on the page?

#### --distractors--

`position`

---

`bg-green`

---

`float`

#### --answer--

`z-index`

<!-- css-positioning-6 KEEP -->

### --question--

#### --text--

Which of the following is the correct syntax for relative positioning?

#### --distractors--

```css
.relative {
  position: relative-position;
  top: 30px;
  left: 30px;
}
```

---

```css
.relative {
  relative-position: relative;
  top: 30px;
  left: 30px;
}
```

---

```css
.relative {
  relative: position;
  top: 30px;
  left: 30px;
}
```

#### --answer--

```css
.relative {
  position: relative;
  top: 30px;
  left: 30px;
}
```

<!-- css-positioning-7 KEEP -->

### --question--

#### --text--

Which CSS property would you use to fix an element at a certain position on the page so that it does not move when scrolling occurs?

#### --distractors--

`position: no-scroll;`

---

`position: relative;`

---

`display: block;`

#### --answer--

`position: fixed;`

<!-- css-positioning-8 KEEP -->

### --question--

#### --text--

What does absolute positioning do to an element?

#### --distractors--

Absolute positioning is used to determine if an element needs to be moved below the floated content.

---

Absolute positioning is used to position the element within the normal document flow.

---

Absolute positioning is used to control the vertical stacking order of positioned elements that overlap on the page.

#### --answer--

Absolute positioning allows you to take an element out of the normal document flow, making it behave independently from other elements.

<!-- css-positioning-9 KEEP -->

### --question--

#### --text--

Which of the following is NOT a valid property that you can use for absolute positioning?

#### --distractors--

`right`

---

`bottom`

---

`top`

#### --answer--

`side`

<!-- css-positioning-10 KEEP -->

### --question--

#### --text--

What is the key difference between relative and absolute positioning?

#### --distractors--

Absolute positioning sets the element in a sticky position while relative positioning takes an element out of the normal document flow.

---

Relative positioning sets the element in a fixed position while absolute positioning takes an element out of the normal document flow.

---

Absolute positioning positions the element within the normal document flow while relative positioning takes an element out of the normal document flow.

#### --answer--

Relative positioning positions the element within the normal document flow while absolute positioning takes an element out of the normal document flow.

<!-- css-positioning-11 KEEP -->

### --question--

#### --text--

Which of the following is an example of positioning a box in the upper left hand corner of the page?

#### --distractors--

```css
.box {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

---

```css
.box {
  position: absolute;
  top: 0;
  right: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

---

```css
.box {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

#### --answer--

```css
.box {
  position: absolute;
  top: 0;
  left: 0;
  background-color: coral;
  width: 50px;
  height: 50px;
}
```

<!-- css-positioning-12 KEEP -->

### --question--

#### --text--

Which positioning method allows an element to stick to a defined position only when you scroll past a certain point?

#### --distractors--

Float positioning.

---

Fixed positioning.

---

Absolute positioning.

#### --answer--

Sticky positioning.

<!-- css-positioning-13 KEEP -->

### --question--

#### --text--

Which of the following is a correct example of using sticky positioning?

#### --distractors--

```css
.box {
  sticky: position;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

---

```css
.box {
  position: sticky-fixed;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

---

```css
.box {
  position: sticky-top;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

#### --answer--

```css
.box {
  position: sticky;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: red;
}
```

<!-- css-positioning-14 KEEP -->

### --question--

#### --text--

What is the difference between sticky and fixed positioning?

#### --distractors--

Sticky elements can only be used in table layouts while fixed elements can be used in any type of CSS layout.

---

Sticky elements will always remain in the same position while fixed elements will stick to a certain point then behave like relative elements.

---

Fixed elements will be positioned relative to its normal position while sticky elements will only stick to a certain point then behave like relative elements.

#### --answer--

Fixed elements will remain in the same position on the screen while sticky elements will only stick to a certain point then behave like relative elements.

<!-- css-positioning-17 KEEP -->

### --question--

#### --text--

What is static positioning?

#### --distractors--

This is used to remove an element from its normal flow on the page and automatically position it in the upper right hand side of the webpage.

---

This allows you to take an element out of the normal document flow, making it behave independently from other elements.

---

This allows an element to stick to a defined position only when you scroll past a certain point.

#### --answer--

This is the normal flow for the document. Elements are positioned from top to bottom and left to right one after another.

<!-- css-positioning-18 KEEP -->

### --question--

#### --text--

Which of the following is an example of setting the navbar to the top of the page using fixed positioning?

#### --distractors--

```css
.navbar {
  fixed: top;
  top: 0;
  width: 100%;
}
```

---

```css
.navbar {
  upper: fixed;
  width: 100%;
}
```

---

```css
.navbar {
  position: fixed-top;
  top: 0;
  width: 100%;
}
```

#### --answer--

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
```

<!-- css-positioning-19 KEEP -->

### --question--

#### --text--

Which of the following is a valid value to use for the `z-index` property?

#### --distractors--

`12.0`

---

`none`

---

`up`

#### --answer--

`1`

<!-- css-positioning-20 KEEP -->

### --question--

#### --text--

Which of the following is the default value of the `position` property?

#### --distractors--

`inherit`

---

`initial`

---

`relative`

#### --answer--

`static`

<!-- css-positioning-21 KEEP -->

### --question--

#### --text--

Which `position` value lets you adjust an element's position with `top` and `left` while keeping it within the normal document flow?

#### --distractors--

`position: absolute;`

---

`position: static;`

---

`position: fixed;`

#### --answer--

`position: relative;`

<!-- css-positioning-22 KEEP -->

### --question--

#### --text--

How does an element with `position: sticky;` initially behave?

#### --distractors--

It behaves like a `fixed` element until a scroll position is reached.

---

It is always removed from the normal document flow.

---

It behaves like an `absolute` element within its parent.

#### --answer--

It behaves like a `relative` element until a specified scroll position is met.

<!-- css-positioning-23 KEEP -->

### --question--

#### --text--

Which of the following demonstrates a valid and effective use of the `z-index` property to make `.box-two` appear on top of `.box-one`?

#### --distractors--

```css
.box-one {
  position: static;
  z-index: 2;
}
.box-two {
  position: static;
  z-index: 1;
}
```

---

```css
.box-one {
  position: absolute;
  stack-order: 1;
}
.box-two {
  position: absolute;
  stack-order: 2;
}
```

---

```css
.box-one {
  float: left;
  z-index: 1;
}
.box-two {
  float: left;
  z-index: 2;
}
```

#### --answer--

```css
.box-one {
  position: absolute;
  z-index: 1;
}
.box-two {
  position: absolute;
  z-index: 2;
}
```

<!-- css-positioning-24 KEEP -->

### --question--

#### --text--

What is the `z-index` property used for in CSS?

#### --distractors--

It sets the zoom level of the page.

---

It controls the horizontal alignment of elements within a flex container.

---

It defines the spacing between an element's content and its border.

#### --answer--

It controls the vertical stacking order of positioned elements that overlap.

<!-- css-positioning-25 KEEP -->

### --question--

#### --text--

When you apply `top: 10%;` to an element with `position: fixed;`, what is the `10%` calculated in relation to?

#### --distractors--

The height of the element itself.

---

The height of its parent container.

---

The width of the viewport.

#### --answer--

The height of the viewport.

<!-- css-positioning-26 KEEP -->

### --question--

#### --text--

Which of the code examples is a correct use of the `z-index` property to place an overlay above other content?

#### --distractors--

```css
.overlay {
  z-index: 5;
  background-color: black;
}
```

---

```css
.overlay {
  display: block;
  z-layer: 1;
  background-color: black;
}
```

---

```css
.overlay {
  float: left;
  z-index: 2;
  background-color: black;
}
```

#### --answer--

```css
.overlay {
  position: absolute;
  z-index: 10;
  background-color: black;
}
```

<!-- css-positioning-28 KEEP -->

### --question--

#### --text--

How will an element with `position: relative;` and `bottom: 25px;` be moved?

#### --distractors--

It will move 25px down from its normal position.

---

It will move 25px to the right of its normal position.

---

It will be positioned 25px from the bottom of the viewport.

#### --answer--

It will move 25px up from its normal position.

<!-- css-positioning-29 KEEP -->

### --question--

#### --text--

The `z-index` property will only affect elements that have what CSS property applied?

#### --distractors--

A `float` value other than `none`.

---

A `display` value of `inline-block`.

---

A `background-color` set.

#### --answer--

A `position` value other than `static`.

<!-- css-positioning-31 KEEP -->

### --question--

#### --text--

Which CSS snippet will keep an element fixed to the top of the viewport once it is scrolled to?

#### --distractors--

```css
.header {
  position: fixed;
  top: 0;
}
```

---

```css
.header {
  position: relative;
  top: 0;
}
```

---

```css
.header {
  position: absolute;
  top: 0;
}
```

#### --answer--

```css
.header {
  position: sticky;
  top: 0;
}
```

<!-- css-positioning-33 KEEP -->

### --question--

#### --text--

Given the following code, how will `.child` be positioned?

```css
.parent {
  /* No position property set */
  height: 200px;
}
.child {
  position: absolute;
  top: 10px;
}
```

#### --distractors--

It will be positioned 10px from the top of the `.parent` element, as `absolute` positioning is always relative to the direct parent.

---

It will remain in its default static position because the `absolute` value is invalid without a `z-index` property.

---

It will be positioned 10px from the top of the browser window, remaining fixed in place even when the user scrolls the page.

#### --answer--

It will be positioned 10px from the top of the initial containing block, such as the `<body>`, because its parent is not positioned.

<!-- css-positioning-34 KEEP -->

### --question--

#### --text--

What effect will the following CSS have on the `.box` element?

```css
.box {
  position: absolute;
  top: 50px;
  left: 50px;
}
```

#### --distractors--

The element will remain in its normal flow but will be indented by 50px from the top and left, pushing other elements away.

---

The element will be fixed to the viewport and will stay 50px from the top and 50px from the left, even when the page is scrolled.

---

The element will be positioned relative to its own starting point, moving 50px down and 50px to the right without leaving the document flow.

#### --answer--

The element will be taken out of the normal flow and placed 50px from the top and 50px from the left of its nearest positioned ancestor.

<!-- css-positioning-35 KEEP -->

### --question--

#### --text--

Which of the following `position` values removes an element entirely from the document's normal flow?

#### --distractors--

`position: static;`

---

`position: relative;`

---

`position: inherit;`

#### --answer--

`position: absolute;`

<!-- css-positioning-36 KEEP -->

### --question--

#### --text--

Given a `.parent` and a `.child` element, which CSS snippet will correctly position the `.child` 20px from the top left corner of the `.parent` element?

#### --distractors--

```css
.parent {
  /* position: static; by default */
}
.child {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

---

```css
.parent {
  position: relative;
}
.child {
  position: relative;
  top: 20px;
  left: 20px;
}
```

---

```css
.parent {
  position: relative;
}
.child {
  float: left;
  top: 20px;
  left: 20px;
}
```

#### --answer--

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

<!-- css-positioning-37 KEEP -->

### --question--

#### --text--

What is the difference between `static` and `relative` positioning?

#### --distractors--

`static` positioning removes an element from the document flow, while `relative` positioning keeps it in the flow.

---

An element with `position: static;` can be offset with the `top` and `left` properties, while `position: relative;` cannot.

---

`static` positioning is for block-level elements, while `relative` positioning is only intended for inline elements.

#### --answer--

Both keep an element in the normal document flow, but `relative` allows the element to be offset from its original position.

<!-- css-positioning-39 KEEP -->

### --question--

#### --text--

What is the difference between `absolute` and `fixed` positioning?

#### --distractors--

`absolute` positioning is relative to the viewport, while `fixed` positioning is relative to the nearest positioned ancestor.

---

`absolute` positioning keeps the element in the normal document flow, while `fixed` positioning removes it from the flow.

---

Both are positioned relative to the viewport, but `fixed` elements will scroll with the page while `absolute` elements will not.

#### --answer--

`absolute` positioning is relative to the nearest positioned ancestor, while `fixed` positioning is relative to the browser viewport.

<!-- css-positioning-40 KEEP -->

### --question--

#### --text--

Which `position` value places an element in the normal document flow and prevents offset properties like `top` and `left` from having any effect?

#### --distractors--

`position: relative;`

---

`position: absolute;`

---

`position: fixed;`

#### --answer--

`position: static;`

## css-attribute-selectors (4)

<!-- css-attribute-selectors-1 KEEP -->

### --question--

#### --text--

What are CSS attribute selectors used for?

#### --distractors--

To apply styles to elements based on their tag name.

---

To apply styles to elements based on their class name.

---

To apply styles to elements based on their parent element.

#### --answer--

To apply styles to elements based on their attributes.

<!-- css-attribute-selectors-4 KEEP -->

### --question--

#### --text--

Which CSS selector matches all `a` elements with an `href` attribute?

#### --distractors--

```css
a(href) { color: green; }
```

---

```css
a { color: green; }
```

---

```css
a[href~=""] { color: green; }
```

#### --answer--

```css
a[href] { color: blue; }
```

<!-- css-attribute-selectors-7 KEEP -->

### --question--

#### --text--

Which CSS selector should you use to style `img` elements only if their `alt` attribute is equal to `"code"`?

#### --distractors--

```css
img[alt~="code"] { border: 1px solid red; }
```

---

```css
img[alt=="code"] { border: 1px solid red; }
```

---

```css
img[alt*="code"] { border: 1px solid red; }
```

#### --answer--

```css
img[alt="code"] { border: 1px solid red; }
```

<!-- css-attribute-selectors-9 KEEP -->

### --question--

#### --text--

Which of the following CSS selectors would you use to style `a` elements with both `href` and `title` attributes?

#### --distractors--

```css
a[href] a[title] { text-decoration: underline dotted; }
```

---

```css
a[href]a[title] { text-decoration: underline dotted; }
```

---

```css
a[href].[title] { text-decoration: underline dotted; }
```

#### --answer--

```css
a[href][title] { text-decoration: underline dotted; }
```

## responsive-web-design (4)

<!-- responsive-web-design-3 KEEP -->

### --question--

#### --text--

What is the main purpose of using media queries in responsive web design?

#### --distractors--

To change the color scheme of the page for Safari browsers.

---

To create animations for table layouts.

---

To adjust margins and padding for layouts using CSS flexbox.

#### --answer--

To apply different styles based on the screen size or device type.

<!-- responsive-web-design-4 KEEP -->

### --question--

#### --text--

Which media feature in a media query checks the width of the browser window?

#### --distractors--

`set-width`

---

`accept-width`

---

`allow-width`

#### --answer--

`min-width`

<!-- responsive-web-design-22 KEEP -->

### --question--

#### --text--

What is the primary purpose of using media queries in responsive web design?

#### --distractors--

To apply different styles based on user input

---

To make the website load faster

---

To change the website’s color scheme automatically

#### --answer--

To adjust the layout and design based on screen size

<!-- responsive-web-design-24 KEEP -->

### --question--

#### --text--

Which of the following is an example of a media feature that can be used in a media query?

#### --distractors--

`background-color`

---

`font-size`

---

`text-align`

#### --answer--

`min-width`

## css-variables (20)

<!-- css-variables-2 KEEP -->

### --question--

#### --text--

In the following code, which value will `color` have if `--main-color` is not defined?

```css
p {
  color: var(--main-color, pink);
}
```

#### --distractors--

`Undefined`

---

No color will be applied.

---

`--main-color`

#### --answer--

`pink`

<!-- css-variables-3 KEEP -->

### --question--

#### --text--

Which of the following is a valid way to declare a custom property in CSS?

#### --distractors--

`$background-color: #333;`

---

`@property: #333`

---

`var(--background-color: #333);`

#### --answer--

`--background-color: #333;`

<!-- css-variables-4 KEEP -->

### --question--

#### --text--

What is the main purpose of using custom properties in CSS?

#### --distractors--

To change the DOM structure.

---

To create dynamic selectors.

---

To improve accessibility.

#### --answer--

To define reusable styles.

<!-- css-variables-6 KEEP -->

### --question--

#### --text--

How do you apply a `--foreground` custom property as the `color` in CSS?

#### --distractors--

`color: --foreground;`

---

`color: css(--foreground);`

---

`color: $foreground;`

#### --answer--

`color: var(--foreground);`

<!-- css-variables-9 KEEP -->

### --question--

#### --text--

What should you be cautious of when using custom properties?

#### --distractors--

Custom properties are automatically converted to `px` units.

---

Custom properties always override inline styles.

---

Custom properties cannot be used to set font values.

#### --answer--

Custom properties may not be supported in older browsers.

<!-- css-variables-10 KEEP -->

### --question--

#### --text--

What is the purpose of providing a fallback value in the `var()` function for CSS custom properties?

#### --distractors--

To reduce the amount of CSS code.

---

To improve performance in modern browsers.

---

To optimize rendering time on slow networks.

#### --answer--

To ensure a valid value is applied if the custom property is undefined.

<!-- css-variables-12 KEEP -->

### --question--

#### --text--

How would the following declaration behave?

```css
color: var(--main-color, var(--fallback-color, #000));
```

#### --distractors--

It will apply `--main-color` even if it is not defined, defaulting to that value.

---

It will apply `--main-color` and `--fallback-color` simultaneously, resulting in a blend of the two colors.

---

It will always default to `#000`, regardless of whether `--main-color` or `--fallback-color` is defined.

#### --answer--

It applies `--main-color` if defined; otherwise, checks `--fallback-color;` and if both are undefined, it uses `#000`.

<!-- css-variables-16 KEEP -->

### --question--

#### --text--

Given the following HTML and CSS code, what will be the value of the `color` property for the `.box` element?

```html
<div class="container">
  <div class="box">Text</div>
</div>
```

```css
:root {
  --main-color: red;
}

.container {
  --main-color: blue;
}

.box {
  color: var(--main-color, black);
}
```

#### --distractors--

`black`

---

`red`

---

`green`

#### --answer--

`blue`

<!-- css-variables-17 KEEP -->

### --question--

#### --text--

Which property should a CSS gradient be applied to?

#### --distractors--

`color`

---

`border-radius`

---

`box-shadow`

#### --answer--

`background`

<!-- css-variables-19 KEEP -->

### --question--

#### --text--

What happens if no angle or direction is specified in a CSS linear gradient?

#### --distractors--

The gradient defaults to a diagonal direction.

---

The gradient defaults to moving from bottom to top.

---

The gradient defaults to moving from left to right.

#### --answer--

The gradient defaults to moving from top to bottom.

<!-- css-variables-20 KEEP -->

### --question--

#### --text--

Which CSS gradient function allows you to create a gradient that radiates outward from a central point?

#### --distractors--

`linear-gradient()`

---

`conic-gradient()`

---

`repeating-linear-gradient()`

#### --answer--

`radial-gradient()`

<!-- css-variables-21 KEEP -->

### --question--

#### --text--

Which of the following is a correct way to declare a CSS custom property?

#### --distractors--

`background-color: var(--blue);`

---

`custom-property: blue;`

---

`define --my-color: blue;`

#### --answer--

`--my-color: blue;`

<!-- css-variables-23 KEEP -->

### --question--

#### --text--

When using `var()`, why is it recommended to include a fallback value?

#### --distractors--

It ensures the variable will animate correctly.

---

It avoids loading external stylesheets.

---

It prevents browser reflow.

#### --answer--

It guarantees a valid value if the custom property is undefined.

<!-- css-variables-24 KEEP -->

### --question--

#### --text--

What is the correct syntax to apply a custom property as a background color?

#### --distractors--

`background: get(--main-bg);`

---

`background: css(--main-bg);`

---

`background: --main-bg;`

#### --answer--

`background: var(--main-bg);`

<!-- css-variables-28 KEEP -->

### --question--

#### --text--

What distinguishes a CSS custom property from a standard CSS property in terms of how it's defined?

#### --distractors--

Standard CSS properties are defined with a single dash, while custom properties use two dashes.

---

Standard CSS properties use `var()` for definition, while custom properties do not.

---

Standard CSS properties are defined using the `@property` rule, while custom properties are not.

#### --answer--

Custom properties must start with two dashes (`--`), while standard CSS properties do not.

<!-- css-variables-29 KEEP -->

### --question--

#### --text--

Which of these is a benefit of using CSS custom properties?

#### --distractors--

They reduce the need for CSS comments.

---

They automatically optimize images.

---

They make JavaScript variables obsolete.

#### --answer--

They allow styles to be reused and centrally maintained.

<!-- css-variables-32 KEEP -->

### --question--

#### --text--

Consider the following HTML and CSS. What background color will be applied to the `.card` element?

```html
<div class="dark-theme">
  <div class="card">Content</div>
</div>
```

```css
:root {
  --bg-color: white;
}

.dark-theme {
  --bg-color: #333;
}

.card {
  background: var(--bg-color);
}
```

#### --distractors--

`white`

---

`transparent`

---

`inherit`

#### --answer--

`#333`

<!-- css-variables-35 KEEP -->

### --question--

#### --text--

Which scenario best shows the advantage of using custom properties for themes?

#### --distractors--

Using them just for font sizes.

---

Applying them only on `:hover`.

---

Restricting them to one CSS class.

#### --answer--

Changing values via class.

<!-- css-variables-37 KEEP -->

### --question--

#### --text--

What would the following CSS do if `--secondary-color` is undefined?

```css
h1 {
  color: var(--secondary-color, orange);
}
```

#### --distractors--

It will apply `black`.

---

It will ignore the `color` property.

---

It will apply `--secondary-color`.

#### --answer--

It will apply `orange`.

<!-- css-variables-40 KEEP -->

### --question--

#### --text--

What does `var(--undefined-property, fallback)` do when the custom property is not defined?

#### --distractors--

Throws an error and stops applying styles.

---

Ignores the entire CSS rule.

---

Applies the variable name as is.

#### --answer--

Applies the fallback value instead.

## css-grid (33)

<!-- css-grid-1 KEEP -->

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

<!-- css-grid-2 KEEP -->

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

<!-- css-grid-3 KEEP -->

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

<!-- css-grid-4 KEEP -->

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

<!-- css-grid-5 KEEP -->

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

<!-- css-grid-6 KEEP -->

### --question--

#### --text--

What is the shorthand for the `column-gap` and `row-gap` properties?

#### --distractors--

`gap-column-row`

---

`gutters`

---

`grid-space`

#### --answer--

`gap`

<!-- css-grid-7 KEEP -->

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

<!-- css-grid-8 KEEP -->

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

<!-- css-grid-9 KEEP -->

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

<!-- css-grid-10 KEEP -->

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

<!-- css-grid-11 KEEP -->

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

<!-- css-grid-12 KEEP -->

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

<!-- css-grid-13 KEEP -->

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

<!-- css-grid-14 KEEP -->

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

<!-- css-grid-16 KEEP -->

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

<!-- css-grid-17 KEEP -->

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

<!-- css-grid-19 KEEP -->

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

<!-- css-grid-21 KEEP -->

### --question--

#### --text--

How do you position a grid item within a layout defined by `grid-template-areas`?

#### --distractors--

By directly defining the item's size and location within the grid using `grid-template-rows` and `grid-template-columns`.

---

By using the `grid-area` property and specifying both row and column start and end positions.

---

By setting both `grid-area` and explicit pixel coordinates.

#### --answer--

By assigning the named area to the item's `grid-area` property.

<!-- css-grid-23 KEEP -->

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

<!-- css-grid-24 KEEP -->

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

<!-- css-grid-25 KEEP -->

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

<!-- css-grid-26 KEEP -->

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

<!-- css-grid-27 KEEP -->

### --question--

#### --text--

How can you make a grid item start at column line 2 and end at column line 4?

#### --distractors--

`grid-column: 2 / span 4;`

---

`grid-column: start 2 / end 4;`

---

`grid-column: from 2 to 4;`

#### --answer--

`grid-column: 2 / 4;`

<!-- css-grid-28 KEEP -->

### --question--

#### --text--

What is the effect of `grid-template-columns: 1fr 2fr 1fr`?

#### --distractors--

Creates three equal-width columns.

---

Makes the middle column three times as wide as the others.

---

Forces all columns to be exactly `1fr` wide.

#### --answer--

Creates three columns where the middle is twice as wide as the sides.

<!-- css-grid-29 KEEP -->

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

<!-- css-grid-30 KEEP -->

### --question--

#### --text--

What does `repeat(3, minmax(100px, 1fr))` create when used with `grid-template-columns`?

#### --distractors--

Three columns that can't grow larger than `100px`.

---

Three fixed `100px` columns.

---

Three rows with maximum height of `1fr`.

#### --answer--

Three columns that grow proportionally but won't shrink below `100px`.

<!-- css-grid-31 KEEP -->

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

<!-- css-grid-34 KEEP -->

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

<!-- css-grid-35 KEEP -->

### --question--

#### --text--

What does `grid-column-start: 2` do to a grid item?

#### --distractors--

Makes it span 2 columns.

---

Offsets it by 2 pixels.

---

Makes it start at the second row line.

#### --answer--

Makes it start at the second column line.

<!-- css-grid-37 KEEP -->

### --question--

#### --text--

What will be the result for the following code?

```css
.container {
  display: grid;
  grid-template-columns: 100px 1fr 2fr;
  grid-template-rows: auto 150px;
  gap: 10px;
}
```

#### --distractors--

The container will have three columns of equal width, and two rows with `150px` height each.

---

The container will have three columns, all with `100px` width, and two rows with `150px` height.

---

The container will have two rows, each with a height of `1fr`.

#### --answer--

The container will have three columns: 100px, `1fr` and `2fr` wide and two rows: one auto and one with `150px` height.

<!-- css-grid-38 KEEP -->

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

<!-- css-grid-39 KEEP -->

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

<!-- css-grid-40 KEEP -->

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

# MAYBE (44)

## css-flexbox (1)

<!-- css-flexbox-17 MAYBE -->

### --question--

#### --text--

Which of the following results in the items being aligned at the end of the cross axis?

#### --distractors--

`align-items: flex-ends;`

---

`align-items: end;`

---

`align-items: flex-ending;`

#### --answer--

`align-items: flex-end;`

## css-attribute-selectors (2)

<!-- css-attribute-selectors-10 MAYBE -->

### --question--

#### --text--

Which CSS selector would you use if you are developing a website for a restaurant and want to style all elements with the `menu-item` class that have a `data-special` attribute?

#### --distractors--

```css
menu-item[data-special] { background-color: blue; }
```

---

```css
#menu-item[data-special] { background-color: blue; }
```

---

```css
[data-special="menu-item"] { background-color: blue; }
```

#### --answer--

```css
.menu-item[data-special] { background-color: blue; }
```

## responsive-web-design (7)

<!-- responsive-web-design-5 MAYBE -->

### --question--

#### --text--

What will the following code do?

```css
@media screen and (min-width: 768px) {
  /* Styles go here */
}
```

#### --distractors--

This will ignore styles for screens that are `768px` wide.

---

This will apply styles for screens that are only `768px` wide.

---

This will apply styles for screens that are smaller than `768px`.

#### --answer--

This will apply styles for screens that are `768px` and wider.

<!-- responsive-web-design-25 MAYBE -->

### --question--

#### --text--

What does the `@media screen and (max-width: 768px)` media query apply to?

#### --distractors--

It applies styles to screens larger than 768px wide.

---

It applies styles to all screens, regardless of size.

---

It applies styles to screens with a resolution greater than 768dpi.

#### --answer--

It applies styles to screens smaller than 768px wide.

#### --answer--

Setting the image width to a percentage like `width: 100%`

## css-variables (6)

<!-- css-variables-22 MAYBE -->

### --question--

#### --text--

What selector is typically used to define global CSS custom properties?

#### --distractors--

`.global {}`

---

`* {}`

---

`body {}`

#### --answer--

`:root {}`

<!-- css-variables-36 MAYBE -->

### --question--

#### --text--

Why might developers prefer using `:root` for defining CSS variables?

#### --distractors--

Because `:root` improves page load speed.

---

Because `:root` disables specificity.

---

Because `:root` is required for JavaScript.

#### --answer--

Because `:root` allows the properties to be globally scoped.

## css-grid (7)

<!-- css-grid-20 MAYBE -->

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

## css-animations (1)

<!-- css-animations-1 MAYBE -->

### --question--

#### --text--

What is the purpose of the `transform` property in CSS?

#### --distractors--

To change the visibility of an element.

---

To apply a visual effect to text.

---

To set the dimensions of an element.

#### --answer--

To modify the position, size, and shape of an element.
