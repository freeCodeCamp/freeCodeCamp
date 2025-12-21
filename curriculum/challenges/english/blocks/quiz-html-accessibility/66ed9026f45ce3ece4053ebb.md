---
id: 66ed9026f45ce3ece4053ebb
title: HTML Accessibility Quiz
challengeType: 8
dashedName: quiz-html-accessibility
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What is accessibility?

#### --distractors--

Accessibility is a set of standardized practices that ensures your code is free from all security risks.

---

Accessibility is a set of standardized practices that enhances the speed and performance for your web applications.

---

Accessibility is a set of standardized practices that ensures your code meets 100% test coverage.

#### --answer--

Accessibility is a set of standardized practices to ensure your web applications can be used by everyone, including those with disabilities.


### --question--

#### --text--

Which of the following is a good example for proper heading level structure?

#### --distractors--

```html
<h3>Heading 3</h3>
<h3>Heading 3</h3>
<h3>Heading 3</h3>

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h4>Heading 4</h4>
```

---

```html
<h6>Heading 6</h6>

<h1>Heading 1</h1>
<h1>Heading 1</h1>

<h5>Heading 5</h5>

<h2>Heading 2</h2>
<h2>Heading 2</h2>
```

---

```html
<h6>Heading 6</h6>
<h5>Heading 5</h5>
<h4>Heading 4</h4>
<h3>Heading 3</h3>
<h2>Heading 2</h2>
<h1>Heading 1</h1>
```

#### --answer--

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

### --question--

#### --text--

What are the six main categories of ARIA roles?

#### --distractors--

Document Structure, Landmark, Window, Explicit, Fidget, and Footer.

---

Landmark, House, Live Region, Application, Window, and Extension.

---

Window, Alert Dialog, Article, Cell, Banner, and Button.

#### --answer--

Document Structure, Landmark, Window, Abstract, Widget, and Live Region.

### --question--

#### --text--

What is the correct way to add an `alt` attribute to an `img` element?

#### --distractors--

```html
alt="cat running"<img src="cat.jpg">
```

---

```html
alt=""<img src="cat.jpg">
```

---

```html
<img src="cat.jpg"> alt="cat running"
```

#### --answer--

```html
<img src="cat.jpg" alt="cat running">
```

### --question--

#### --text--

What does WAI-ARIA stand for?

#### --distractors--

Website Accessible Initiative - Accessible Rust Internet Applications.

---

Web Anchor Initiative - Anchor Rich Internet Applications.

---

Web Accessibility Initial - Accessible Ready Internet Applications.

#### --answer--

Web Accessibility Initiative - Accessible Rich Internet Applications.

### --question--

#### --text--

What is the role of the `aria-hidden` attribute?

#### --distractors--

This attribute is used to hide elements only for users with visual impairments.

---

This attribute is used to hide and add label text for an element.

---

This attribute is used to hide an element only to keyboard users.

#### --answer--

This attribute is used to hide an element from assistive technologies.

### --question--

#### --text--

Which attribute makes elements focusable and defines the relative order in which they are navigated using the keyboard?

#### --distractors--

`keyboardindex`

---

`tabbingindex`

---

`indextab`

#### --answer--

`tabindex`

### --question--

#### --text--

Why is it a good practice to include the `caption` element inside an HTML table?

#### --distractors--

It enhances the table's appearance by adding a decorative header.

---

It allows users to easily sort and filter the table's data.

---

It helps improve the table's responsiveness on mobile devices.


#### --answer--

It is helpful for users to quickly understand the table's purpose and content.


### --question--

#### --text--

What is the difference between the attributes `aria-label` and `aria-labelledby`?

#### --distractors--

The `aria-label` and `aria-labelledby` attributes serve the same purpose.

---

The `aria-label` attribute is used to give a color to its label while the `aria-labelledby` attribute is used to give height to its label.

---

The `aria-label` and `aria-labelledby` attributes keep labels undefined.

#### --answer--

The `aria-labelledby` attribute allows you to give an element an accessible name by referencing an existing element on the page while the `aria-label` attribute allows you to define the name in the attribute itself.

### --question--

#### --text--

Which of the following attributes provides additional information about an element to screen reader users by referencing existing content on the page?

#### --distractors--

`aria-described`

---

`aria-set`

---

`aria-sets`

#### --answer--

`aria-describedby`

### --question--

#### --text--

Which of the following attributes is used to define a keyboard shortcut for an element?

#### --distractors--

`provideaccesskey`

---

`tabindexkey`

---

`accessingkey`

#### --answer--

`accesskey`

### --question--

#### --text--

Which of the following examples is the correct way to associate a `label` with an `input` element?

#### --distractors--

```html
<form>
  <label accessible="name">Your Name</label>
  <input type="text" id="name" />
</form>
```

---

```html
<form>
  <label for="name">Your Name</label>
  <input type="text" id="first-name" />
</form>
```

---

```html
<form>
  <label associate="name">Your Name</label>
  <input type="text" id="name" />
</form>
```

#### --answer--

```html
<form>
  <label for="name">Your Name</label>
  <input type="text" id="name" />
</form>
```

### --question--

#### --text--

How does a screen magnifier help visually-impaired users navigate web pages?

#### --distractors--

A screen magnifier will enlarge only images to twice their size so they can be better viewed by visually-impaired users.

---

A screen magnifier converts text to Braille for tactile reading.

---

A screen magnifier automatically adjusts the color contrast of web pages.

#### --answer--

A screen magnifier helps visually-impaired users navigate web pages by allowing them to zoom in and out.

### --question--

#### --text--

Which of the following is the correct use of `aria-describedby` to provide more context about a button's action?

#### --distractors--

```html
<button id="delete-message" aria-describedby="delete-message">Delete</button>

<p aria-describedby="delete-message" id="delete-message">Warning! All deletions are permanent.</p>
```

---

```html
<button id="delete-btn" aria-describedby="delete-btn">Delete</button>

<p aria-describedby="delete-message" id="delete-message">Warning! All deletions are permanent.</p>
```

---

```html
<button id="delete-message">Delete</button>

<p aria-describedby="delete-message">Warning! All deletions are permanent.</p>
```

#### --answer--

```html
<button aria-describedby="delete-message">Delete</button>

<p id="delete-message">Warning! All deletions are permanent.</p>
```

### --question--

#### --text--

What is the difference between WCAG and WAI-ARIA?

#### --distractors--

WCAG provides general guidelines for mobile only accessibility, while WAI-ARIA offers specific rules for making dynamic and interactive content accessible for users of assistive technologies.

---

WAI-ARIA provides general guidelines for mobile only accessibility, while WCAG offers specific rules for making dynamic and interactive content accessible for users of assistive technologies.

---

WAI-ARIA provides general guidelines for web accessibility, while WCAG offers specific rules for making dynamic and interactive content accessible for users of assistive technologies.

#### --answer--

WCAG provides general guidelines for web accessibility, while WAI-ARIA offers specific rules for making dynamic and interactive content accessible for users of assistive technologies.

### --question--

#### --text--

Which of the following is a common use case for using the `aria-hidden` attribute?


#### --distractors--

Forms and tables that don't contain important information.

---

Paragraphs and headings that don't contain important information.

---

Links and images that only have a decorative purpose.

#### --answer--

Icons and images that only have a decorative purpose.

### --question--

#### --text--

What is the purpose of the `role` attribute?

#### --distractors--

To style elements with CSS animations allowing assistive technologies to better understand how the element should be interpreted and interacted with.

---

To define the visual appearance of HTML elements allowing assistive technologies to better understand how the element should be interpreted and interacted with.

---

To add labels to form elements allowing assistive technologies to better understand how the element should be interpreted and interacted with.

#### --answer--

To specify the type and purpose of an element, allowing assistive technologies to better understand how the element should be interpreted and interacted with.

### --question--

#### --text--

Why is it important to use descriptive link text for links?

#### --distractors--

To make the link text stand out visually from the rest of the page content.

---

To ensure the link loads faster when clicked.

---

To ensure that search engines will always list your site as the first result in the list.

#### --answer--

To ensure that everyone, including users of assistive technology understand the purpose of the link.

### --question--

#### --text--

Which of the following is a best practice for making audio and video content accessible?

#### --distractors--

Providing high-quality graphics to accompany the audio and video content to make it accessible to people with visual impairments.

---

Using bright colors and large text to make the content more engaging and to make it accessible to people with visual impairments.

---

Limiting the length of audio and video content to make it accessible to people with hearing impairments.

#### --answer--

Providing captions and transcripts for audio and video content to make it accessible to people with hearing impairments.

### --question--

#### --text--

What are the four principles behind the Web Content Accessibility Guidelines?

#### --distractors--

Perceivable, Operable, Units, and Robust.

---

Perceivable, Operations, Understandable, and Robust.

---

Persistent, Operable, Understandable, and Robust.

#### --answer--

Perceivable, Operable, Understandable, and Robust.

