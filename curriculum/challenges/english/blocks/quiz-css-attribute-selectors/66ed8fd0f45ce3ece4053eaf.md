---
id: 66ed8fd0f45ce3ece4053eaf
title: CSS Attribute Selectors Quiz
challengeType: 8
dashedName: quiz-css-attribute-selectors
---

# --description--

To pass the quiz, you must correctly answer at least 9 of the 10 questions below.

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
p[lang-="fr"] { color: blue; }
```

---

```css
p[lang~="fr"] { color: blue; }
```

---

```css
p[lang=="fr"] { color: blue; }
```

#### --answer--

```css
p[lang="fr"] { color: blue; }
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

What is the `data-lang` attribute commonly used for?

#### --distractors--

To specify the language of the document.

---

To define the character encoding of the document.

---

To set the language of an element based on its parent element.

#### --answer--

To apply styles to elements based on this custom data attribute.

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

### --question--

#### --text--

Which CSS selector matches ordered lists with a numerical numbering type?

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

