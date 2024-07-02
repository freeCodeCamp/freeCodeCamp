---
id: 6571c34768e4b3b17d3957fa
title: Introduction to Flexbox Lesson I
challengeType: 15
dashedName: introduction-flexbox-lesson-i
---
# --description--

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="400" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/BaZKPdw?height=400&amp;default-tab=html%2Cresult&amp;slug-hash=BaZKPdw&amp;editable=true&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="CodePen Embed" loading="lazy" id="cp_embed_BaZKPdw"></iframe>

One thing to note is that in this example, `flex-direction: column` would not work as expected if you used the shorthand `flex: 1`. Try it out now (i.e. go change the flex value on the `flex: 1 1 auto;` line). Can you figure out why it does not work if `flex: 1` is used? The divs collapse, even though they clearly have a height defined there.

The reason for this is that the flex shorthand expands `flex-basis` to `0`, which means that all `flex-growing` and `flex-shrinking` would begin their calculations from 0. Empty divs by default have 0 height, so for our flex items to fill up the height of their container, they don't actually need to have any height at all.

The example above fixed this by specifying `flex: 1 1 auto`, telling the flex items to default to their given height. You could also have fixed it by putting a `height` on the parent `.flex-container`, or by using `flex-grow: 1` instead of the shorthand.

Another detail to notice: when you changed the `flex-direction` to `column`, `flex-basis` refers to `height` instead of `width`. Given the context this may be obvious, but it's something to be aware of.

# --question--

## --text--

Why does using `flex: 1` shorthand with `flex-direction: column` lead to collapsed divs in the example described?

## --answers--

The `flex` shorthand defaults `flex-basis` to 0, disregarding the defined height of the divs.

---

The `flex` shorthand overrides the specified `flex-direction`, causing collapsing.

---

`flex: 1` only works in a row-based layout, not in a column-based one.

---

The `flex-basis` property becomes fixed to the width, ignoring the height in column layout.


## --video-solution--

1
