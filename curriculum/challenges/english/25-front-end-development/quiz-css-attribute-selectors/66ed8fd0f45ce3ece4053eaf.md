---
id: 66ed8fd0f45ce3ece4053eaf
title: CSS Attribute Selectors Quiz
challengeType: 8
dashedName: quiz-css-attribute-selectors
---

# --description--

Answer all of the questions below correctly to pass the quiz.

# --quizzes--

## --quiz--

### --question--

#### --text--

Which selector would target all `option` elements where the value attribute starts with `"A"`?

#### --distractors--

```css
option[value$="A"] { font-size: 14px; }
```

---

```css
option[value*="A"] { font-size: 14px; }
```

---

```css
option[value~="A"] { font-size: 14px; }
```

#### --answer--

```css
option[value^="A"] { font-size: 14px; }
```

### --question--

#### --text--

Which of the following will not match this CSS rule?

```html
<style>
[title~="flower"] {
  border: 5px solid yellow;
}
</style>
```

#### --distractors--

```html
<img src="img1.jpg" title="klematis flower" width="150" height="113">
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

Which selector will target all elements with a `lang` attribute starting with `"fr"`?

#### --distractors--

```css
[lang*="fr"] { color: blue; }
```

---

```css
[lang="fr"] { color: blue; }
```

---

```css
[lang~="fr"] { color: blue; }
```

#### --answer--

```css
[lang^="fr"] { color: blue; }
```

### --question--

#### --text--

How would you style all `a` elements where the `title` attribute starts with `"Read"`?

#### --distractors--

```css
a[title$="Read"] { color: blue; }
```

---

```css
a[title~="Read"] { color: blue; }
```

---

```css
a[title*="Read"] { color: blue; }
```

#### --answer--

```css
a[title^="Read"] { color: blue; }
```

### --question--

#### --text--

How would you target all `input` elements with an `id` attribute that ends with `"field"`?

#### --distractors--

```css
input[id^="field"] { border-color: red; }
```

---

```css
 input[id*="field"] { border-color: red; }
```

---

```css
input[id~="field"] { border-color: red; }
```

#### --answer--

```css
input[id$="field"] { border-color: red; }
```

### --question--

#### --text--

Which selector targets all elements with a `lang` attribute set to `"en-US"`?

#### --distractors--

```css
[lang*="en"] { color: black; }
```

---

```css
[lang$="US"] { color: black; }
```

---

```css
[lang~="en"] { color: black; }
```

#### --answer--

```css
[lang="en-US"] { color: black; }
```

### --question--

#### --text--

Which selector targets `a` elements where the href attribute contains `"https"`?

#### --distractors--

```css
a[href^="https"] { text-decoration: none; }
```

---

```css
a[href~="https"] { text-decoration: none; }
```

---

```css
a[href$="https"] { text-decoration: none; }
```

#### --answer--

```css
a[href*="https"] { text-decoration: none; }
```

### --question--

#### --text--

How would you target all elements with a lang attribute that starts with `"es"` but not `"es-MX"`?

#### --distractors--

```css
[lang*="es"]:not([lang="es-MX"]) { color: red; }
```

---

```css
[lang~="es"]:not([lang="es-MX"]) { color: red; }
```

---

```css
[lang$="es"]:not([lang="es-MX"]) { color: red; }
```

#### --answer--

```css
[lang^="es"]:not([lang="es-MX"]) { color: red; }
```

### --question--

#### --text--

You want to style the `img` elements only if their `alt` attribute does not contain the word `"thumbnail"`. Which selector would achieve this?

#### --distractors--

```css
img[alt$="thumbnail"] { border: 1px solid red; }
```

---

```css
img[alt^="thumbnail"] { border: 1px solid red; }
```

---

```css
img[alt*="thumbnail"] { border: 1px solid red; }
```

#### --answer--

```css
img:not([alt*="thumbnail"]) { border: 1px solid red; }
```

### --question--

#### --text--

You're implementing an accessibility feature where `button` elements with a `data-tooltip` attribute should show a dotted underline. However, you want to exclude `button` elements where `data-tooltip` is exactly `"off"`. How would you write the selector?

#### --distractors--

```css
button[data-tooltip="off"] { text-decoration: none; }
```

---

```css
button[data-tooltip*="off"] { text-decoration: underline dotted; }
```

---

```css
button[data-tooltip$="off"] { text-decoration: underline dotted; }
```

#### --answer--

```css
button[data-tooltip]:not([data-tooltip="off"]) { text-decoration: underline dotted; }
```

### --question--

#### --text--

You need to style all links (`a`) that point to image files by selecting `href` attributes ending with `.jpg`, `.png`, or `.gif`. Which selector works best?

#### --distractors--

```css
a[href*=".jpg"], a[href*=".png"], a[href*=".gif"] { border-bottom: 2px solid green; }
```

---

```css
a[href$=".jpg"], a[href~=".png"], a[href^=".gif"] { border-bottom: 2px solid green; }
```

---

```css
a[href*="image"] { border-bottom: 2px solid green; }
```

#### --answer--

```css
a[href$=".jpg"], a[href$=".png"], a[href$=".gif"] { border-bottom: 2px solid green; }
```

### --question--

#### --text--

How would you target `section` elements that have a `data-theme` attribute containing the word `"dark"` but exclude those where it ends with `"-light"`?

#### --distractors--

```css
section[data-theme="dark"]:not([data-theme$="-light"]) { background-color: black; }
```

---

```css
section[data-theme*="dark"]:not([data-theme*="-light"]) { background-color: black; }
```

---

```css
section[data-theme^="dark"]:not([data-theme$="-light"]) { background-color: black; }
```

#### --answer--

```css
section[data-theme*="dark"]:not([data-theme$="-light"]) { background-color: black; }
```

### --question--

#### --text--

You want to style ordered lists (`ol`) where the `type` attribute is set to `"i"` (for Roman numerals). Which of the following selectors would you use?

#### --distractors--

```css
ol[type$="i"] { color: darkgreen; }
```

---

```css
 ol[type*="i"] { color: darkgreen; }
```

---

```css
ol[type^="i"] { color: darkgreen; }
```

#### --answer--

```css
ol[type="i"] { color: darkgreen; }
```

### --question--

#### --text--

You want to create a highlight effect for all external links (links that point to another domain) by checking for `href` attributes that do not start with your domain (`"freecodecamp.org"`). How would you do this?

#### --distractors--

```css
 a[href^="https://freecodecamp.org"] { color: inherit; }
```

---

```css
a[href$="freecodecamp.org"] { color: inherit; }
```

---

```css
a[href*="freecodecamp.org"] { color: inherit; }
```

#### --answer--

```css
a:not([href^="https://freecodecamp.org"]) { color: orange; }
```

### --question--

#### --text--

You need to select ordered lists (`ol`) that use the `type="1"` (for numerical listing). Which of the following selectors is correct?

#### --distractors--

```css
ol[type*="1"] { font-weight: bold; }
```

---

```css
ol[type$="1"] { font-weight: bold; }
```

---

```css
ol[type~="1"] { font-weight: bold; }
```

#### --answer--

```css
 ol[type="1"] { font-weight: bold; }
```

### --question--

#### --text--

Suppose, on freeCodeCamp’s forum, each discussion has a `data-status` attribute that could be `"open"` or `"closed"`. You want to highlight all open discussions. How would you select these discussions?

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

 You want to style `textarea` elements in your form, but only those with a `maxlength` attribute. Which selector would work?

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

Suppose, on freeCodeCamp’s course catalog, each course has a `data-completion` attribute representing the percentage completed. You want to style courses where this attribute ends with `"100"`, indicating full completion. Which selector would work?

#### --distractors--

```css
div[data-completion="100"] { font-weight: bold; }
```

---

```css
div[data-completion*="100"] { font-weight: bold; }
```

---

```css
div[data-completion^="100"] { font-weight: bold; }
```

#### --answer--

```css
div[data-completion$="100"] { font-weight: bold; }
```

### --question--

#### --text--

You're building a job portal and want to style job listings where the `data-role` attribute contains `"developer"`. How would you write this selector?

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
div[data-role*="developer"] { background-color: lightgreen; }
```

### --question--

#### --text--

You want to style lists that have a type attribute with a value ending in `"square"`, indicating they use square bullets. Which selector would you use?

#### --distractors--

```css
ul[type*="square"] { list-style-type: square; }
```

---

```css
ul[type="square"] { list-style-type: square; }
```

---

```css
ul[type~="square"] { list-style-type: square; }
```

#### --answer--

```css
ul[type$="square"] { list-style-type: square; }
```

