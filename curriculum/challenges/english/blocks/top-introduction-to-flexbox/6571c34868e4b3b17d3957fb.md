---
id: 6571c34868e4b3b17d3957fb
title: Introduction to Flexbox Lesson J
challengeType: 15
dashedName: introduction-flexbox-lesson-j
---
# --description--

Let's look at an example.

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="400" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/MWoyBzR?height=400&amp;default-tab=html%2Cresult&amp;slug-hash=MWoyBzR&amp;editable=true&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="CodePen Embed" loading="lazy" id="cp_embed_MWoyBzR"></iframe>

You should be able to predict what happens if you put `flex: 1` on the `.item` by now. Give it a shot before you move on!

Adding `flex: 1` to `.item` makes each of the items grow to fill the available space, but what if you wanted them to stay the same width, but distribute themselves differently inside the container? You can do this!

Remove `flex: 1` from `.item` and add `justify-content: space-between` to `.container`. Doing so should give you something like this:

<img src="https://cdn.freecodecamp.org/curriculum/odin-project/flex-box/flexbox-05.png" alt="Three small boxes within a much larger rectangle. The boxes are arranged in a single row, one close to the left edge of the container, one close to the right edge of the container, and the last directly in the middle of the container, placing as much space as possible between each box.">

`justify-content` aligns items across the **main axis**. There are a few values that you can use here. You'll learn the rest of them in the reading assignments, but for now try changing it to center, which should center the boxes along the main axis.

# --assignment--

Before moving on to the next lesson, see what is possible with the `justify-content` property. Read this [interactive article on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) and play around with the different values of `justify-content` on the example.

# --questions--

## --text--

How does applying `justify-content: space-between` to a flex container affect the positioning of its items?

## --answers--

It evenly distributes space between items, pushing the first and last items to the edges.

---

It centers all items within the container.

---

It causes the items to grow to fill available space.

---

It aligns items to the left side while leaving excessive space on the right side.

## --video-solution--

1
