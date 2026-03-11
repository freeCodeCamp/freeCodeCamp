---
id: 670803abcb3e980233da4768
title: What are Div Elements and When Should You Use Them?
challengeType: 19
dashedName: what-are-div-elements
---

# --interactive--

The `div` element is used as a container to group other elements.

Here is an example of a `div` element. Add another paragraph element inside of the `div` element and see the changes in the preview window. To see the previews, you will need to enable the interactive editor.

:::interactive_editor

```html
<div>
  <p>Example paragraph element.</p>
</div>
```

:::

You will mainly use the `div` element when you want to group HTML elements that will share a set of CSS styles. You will learn more about CSS in future lessons and workshops.

Even though the `div` element is commonly used in real world codebases, you should be careful not to overuse it. There are times when another element would be more appropriate.

For example, if you wanted to divide up your content into sections, then the `section` element would be more appropriate than a `div` element.

Add another `section` element below the first one. Then inside of the `section` element, a `h2` and `p` elements. You can use whatever text you like and you will see the changes in the preview window. To interact with the example, you will need to enable the interactive editor.

:::interactive_editor

```html
<section>
  <h2>Mammals</h2>
  <p>
    Mammals are warm-blooded animals with fur or hair. Most give birth to live
    young.
  </p>
  <ul>
    <li>Lion</li>
    <li>Elephant</li>
    <li>Dolphin</li>
  </ul>
</section>
```

:::

The `section` element has semantic meaning over the `div` element which is not semantic. Semantics are the meaning of words or phrases in a language. In HTML, which is a language, elements have their own semantic meaning too. So, this means if you use a `section` element, the browser will pick up its semantic meaning and understand to treat this as a section - on desktops, mobiles, you name it.

# --questions--

## --text--

What semantic meaning does a `div` element have?

## --answers--

The `div` element represents a container for introductory content or a set of navigational links.

### --feedback--

Refer back to the examples showing the correct definition.

---

The `div` element defines a footer for a document or section.

### --feedback--

Refer back to the examples showing the correct definition.

---

The `div` specifies the main page content and should be unique.

### --feedback--

Refer back to the examples showing the correct definition.

---

The `div` element has no semantic meaning.

## --video-solution--

4

## --text--

When is it most appropriate to use a `div` element in your HTML?

## --answers--

When dividing content into separate sections of a page.

### --feedback--

Refer back to the notes for the correct answer.

---

When grouping related content for styling purposes.

---

When marking up the main heading of a page.

### --feedback--

Refer back to the notes for the correct answer.

---

When embedding media such as images or videos.

### --feedback--

Refer back to the notes for the correct answer.

## --video-solution--

2

## --text--

Which of the following HTML elements is commonly used to group content into distinct sections?

## --answers--

`section`

---

`aside`

### --feedback--

Refer back to the beginning of the lesson for the correct syntax.

---

`nav`

### --feedback--

Refer back to the notes for the correct answer.

---

`h1`

### --feedback--

Refer back to the notes for the correct answer.

## --video-solution--

1
