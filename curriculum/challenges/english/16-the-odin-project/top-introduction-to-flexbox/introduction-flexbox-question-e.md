---
id: 6571b300cc1de61d7b4dd383
title: Introduction to Flexbox Question E
challengeType: 15
dashedName: introduction-flexbox-question-e
---
# --description--

The `flex` declaration is actually a shorthand for 3 properties that you can set on a flex item. These properties affect how flex items size themselves within their container. You've seen some shorthand properties before, but you haven't officially defined them yet.

> Shorthand properties are CSS properties that let you set the values of multiple other CSS properties simultaneously. Using a shorthand property, you can write more concise (and often more readable) stylesheets, saving time and energy.

In this case, `flex` is actually a shorthand for `flex-grow`, `flex-shrink` and `flex-basis`.

<img src="https://cdn.freecodecamp.org/curriculum/odin-project/flex-box/flexbox-04.png" alt="CSS code setting the flex property to 1 for a div element.">

In the above screenshot, `flex: 1` equates to: `flex-grow: 1`, `flex-shrink: 1`, `flex-basis: 0`.

Very often, you see the flex shorthand defined with only one value. In that case, that value is applied to `flex-grow`. So when you put `flex: 1` on our divs, you were actually specifying a shorthand of `flex: 1 1 0`.

# --question--

## --text--

Which properties are set by the `flex` shorthand?

## --answers--

`flex-grow`, `flex-shrink`, and `flex`

---

`flex-basis`, `flex-wrap`, and `flex-direction`

---

`flex-grow`, `flex-shrink`, and `flex-basis`

---

`flex-direction`, `flex`, and `flex-wrap`

## --video-solution--

3
