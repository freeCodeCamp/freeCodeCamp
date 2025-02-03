---
id: 66ed8fd0f45ce3ece4053eaf
title: CSS Attribute Selectors Quiz
challengeType: 8
dashedName: quiz-css-attribute-selectors
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

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

### --question--

#### --text--

Which of the following will NOT be selected by this CSS selector?

```css
[title~="flower"] {
  border: 5px solid yellow;
}
```

#### --distractors--

```html
<img src="img1.jpg" title="clematis flower" width="150" height="113">
```

---

```html
<img src="img2.jpg" title="flower" width="150" height="113">
```

---

```html
<img src="img2.jpg" title="FLOWERS of flower" width="150" height="113">
```

#### --answer--

```html
<img src="img2.jpg" title="flowers" width="150" height="113">
```

### --question--

#### --text--

Which CSS selector matches all `p` elements with a `lang` attribute set to `"fr"`?

#### --distractors--

```css
[lang-="fr"] { color: blue; }
```

---

```css
[lang~="fr"] { color: blue; }
```

---

```css
[lang=="fr"] { color: blue; }
```

#### --answer--

```css
[lang="fr"] { color: blue; }
```

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

### --question--

#### --text--

Which CSS selector matches all ordered lists with uppercase Roman numerals?

#### --distractors--

```css
ol[type="a"] { border-color: black; }
```

---

```css
ol[type="A"] { border-color: black; }
```

---

```css
ol[type="i"] { border-color: black; }
```

#### --answer--

```css
ol[type="I"] { border-color: black; }
```

### --question--

#### --text--

Which CSS selector targets all elements with a `lang` attribute set to `"en-US"`?

#### --distractors--

```css
[data-lang="en-US"] { color: black; }
```

---

```css
[lang^="en-US"] { color: black; }
```

---

```css
[lang~="en-US"] { color: black; }
```

#### --answer--

```css
[lang="en-US"] { color: black; }
```

### --question--

#### --text--

What is the purpose of the `data-lang` attribute in CSS?

#### --distractors--

To specify the language of the document.

---

To define the character encoding of the document.

---

To set the language of an element based on its parent element.

#### --answer--

To apply styles to elements based on their custom data attribute.

### --question--

#### --text--

What does the CSS attribute selector `div[type="button"]` do?

#### --distractors--

It selects all `div` elements with a `type` attribute.

---

It selects all `div` elements with a `type` attribute that ends with `"button"`.

---

It selects all `div` elements with a `type` attribute that starts with `"button"`.

#### --answer--

It selects all `div` elements with a `type` attribute equal to `"button"`.

### --question--

#### --text--

Which CSS selector should you use to style `img` elements only if their `alt` attribute is equal to `"code"`?

#### --distractors--

```css
img[alt$="code"] { border: 1px solid red; }
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

### --question--

#### --text--

You're implementing a feature where all `button` elements with a `data-tooltip` attribute should have a dotted underline. How would you write this CSS selector?

#### --distractors--

```css
button[data-tooltip="off"] { text-decoration: underline dotted; }
```

---

```css
button[data-tooltip="on"] { text-decoration: underline dotted; }
```

---

```css
button { text-decoration: underline dotted; }
```

#### --answer--

```css
button[data-tooltip] { text-decoration: underline dotted; }
```

### --question--

#### --text--

Which CSS selector styles all `a` elements that take users to `"https://freecodecamp.org/"`?

#### --distractors--

```css
a[href=="https://freecodecamp.org/"] { border-bottom: 2px solid green; }
```

---

```css
a[href^="https://freecodecamp.org/"] { border-bottom: 2px solid green; }
```

---

```css
a["https://freecodecamp.org/"] { border-bottom: 2px solid green; }
```

#### --answer--

```css
a[href="https://freecodecamp.org/"] { border-bottom: 2px solid green; }
```

### --question--

#### --text--

What CSS selector matches ordered lists with a numerical numbering type?

#### --distractors--

```css
ol[type="i"] { color: purple; }
```

---

```css
ol[type="I"] { color: purple; }
```

---

```css
ol[type="a"] { color: purple; }
```

#### --answer--

```css
ol[type="1"] { color: purple; }
```

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

### --question--

#### --text--

What CSS selector should you use to style all `p` element with a `lang` attribute set to `"es"`?

#### --distractors--

```css
p[lang~="es"] { font-weight: bold; }
```

---

```css
p[lang=="en"] { font-weight: bold; }
```

---

```css
p(lang="es") { font-weight: bold; }
```

#### --answer--

```css
p[lang="es"] { font-weight: bold; }
```

### --question--

#### --text--

What is the purpose of the value `"a"` in the `type` attribute of an `<ol>` element?

#### --distractors--

It specifies that the list items should be numbered with Arabic numerals.

---

It specifies that the list items should be numbered with Roman numerals.

---

It specifies that the list items should be numbered with uppercase letters.

#### --answer--

It specifies that the list items should be numbered with lowercase letters.

### --question--

#### --text--

Suppose that on freeCodeCamp's forum, each discussion has a `data-status` attribute that could be either `"open"` or `"closed"`. You want to use CSS to highlight all open discussions. How would you select them?

#### --distractors--

```css
div[data-status$="open"] { border: 2px solid green; }
```

---

```css
div[data-status^="open"] { border: 2px solid green; }
```

---

```css
div[data-status*="open"] { border: 2px solid green; }
```

#### --answer--

```css
div[data-status="open"] { border: 2px solid green; }
```

### --question--

#### --text--

Which CSS selectors should you choose to style the `textarea` elements in your form, but only those with a `maxlength` attribute?

#### --distractors--

```css
textarea[maxlength="true"] { border-color: darkred; }
```

---

```css
textarea[maxlength^="true"] { border-color: darkred; }
```

---

```css
textarea[maxlength*="true"] { border-color: darkred; }
```

#### --answer--

```css
textarea[maxlength] { border-color: darkred; }
```

### --question--

#### --text--

Which one of these CSS selectors matches images that have an `alt` attribute?

#### --distractors--

```css
img[alt=""] { width: 200px; }
```

---

```css
img(alt) { width: 200px; }
```

---

```css
img[title] { width: 200px; }
```

#### --answer--

```css
img[alt] { width: 200px; }
```

### --question--

#### --text--

You are building a job portal and want to style job listings where the `data-role` attribute has the word `"developer"`. How would you write this CSS selector?

#### --distractors--

```css
div[data-role="developer"] { background-color: lightgreen; }
```

---

```css
div[data-role^="developer"] { background-color: lightgreen; }
```

---

```css
div[data-role$="developer"] { background-color: lightgreen; }
```

#### --answer--

```css
div[data-role~="developer"] { background-color: lightgreen; }
```

### --question--

#### --text--

Which CSS selector would you use if you are designing a website for a restaurant and want to style all elements with the `menu-item` class that have a `data-special` attribute?

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

