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

In which scenario is using an attribute selector a bad idea?

#### --distractors--

```css
input[type="text"]:focus {
    background-color: yellow;
}

```

---
```css
img[alt] {
    border: 2px solid red;
}
```

---
```css
input[type="text"] {
    border: 1px solid gray;
}
```

#### --answer--

```css
a[href^="http"] { 
    color: blue;
 }
```

### --question--

#### --text--

Which of the following will not run as expected with this style?
```CSS
<style>
[title~="flower"] {
  border: 5px solid yellow;
}
</style>
```


#### --distractors--
```css
<img src="img1.jpg" title="klematis flower" width="150" height="113">
```

---

```css
<img src="img2.jpg" title="flower" width="150" height="113">
```

---

```css
<img src="img2.jpg" title="FLOWERS of flower" width="150" height="113">
```

#### --answer--
```css
<img src="img2.jpg" title="flowers" width="150" height="113">
```

### --question--

#### --text--

Which selector will target all elements with a `lang` attribute starting with "`fr`"?

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
How would you style `<a>` elements where the title attribute starts with `"Read"`?

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

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

### --question--

#### --text--

Placeholder question

#### --distractors--

Placeholder distractor 1

---

Placeholder distractor 2

---

Placeholder distractor 3

#### --answer--

Placeholder answer

