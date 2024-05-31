---
id: 6597b43d854b3fa8e35d66d7
title: Introduction to Flexbox Question K
challengeType: 15
dashedName: introduction-flexbox-question-k
---
# --description--

<iframe allowfullscreen="true" allowpaymentrequest="true"
style="margin: 15px 0"
allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="400" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/MWoyBzR?height=400&amp;default-tab=html%2Cresult&amp;slug-hash=MWoyBzR&amp;editable=true&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="CodePen Embed" loading="lazy" id="cp_embed_MWoyBzR"></iframe>

To change the placement of items along the cross axis use `align-items`. Try getting the boxes to the center of the container by adding `align-items: center` to `.container`. The desired result looks like this:

<img src="https://cdn.freecodecamp.org/curriculum/odin-project/flex-box/flexbox-06.png" alt="three blue squares centered in the middle of the flex container" style="margin: 15px 0">

Because `justify-content` and `align-items` are based on the main and cross axis of your container, their behavior changes when you change the flex-direction of a flex-container. For example, when you change `flex-direction` to `column`, `justify-content` aligns vertically and `align-items` aligns horizontally. The most common behavior, however, is the default, i.e. `justify-content` aligns items horizontally (because the main axis defaults to horizontal), and `align-items` aligns them vertically. One of the biggest sticking points that beginners have with flexbox is confusion when this behavior changes.

# --question--

## --assignment--

Before moving on to the next lesson, see if you can figure out how `align-items` behaves when you change the `flex-direction` property to `column`.

## --text--

When changing the `flex-direction` property to `column` in a flex container, how does `align-items` behave in relation to the flex items?

## --answers--

It distributes space between items evenly.

---

It aligns items horizontally along the main axis.

---

It centers items vertically along the cross axis.

---

It aligns items to the start of the container along the cross axis.

## --video-solution--

3
