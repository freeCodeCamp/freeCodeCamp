---
id: 6571c34568e4b3b17d3957f8
title: Introduction to Flexbox Lesson G
challengeType: 15
dashedName: introduction-flexbox-lesson-g
---
# --description--

`flex-shrink` is similar to `flex-grow`, but sets the "shrink factor" of a flex item. `flex-shrink` only ends up being applied if the size of all flex items is larger than their parent container. For example, if our 3 divs from above had a width declaration like: `width: 100px`, and `.flex-container` was smaller than `300px`, our divs would have to shrink to fit.

The default shrink factor is `flex-shrink: 1`, which means all items will shrink evenly. If you do not want an item to shrink then you can specify `flex-shrink: 0;`. You can also specify higher numbers to make certain items shrink at a higher rate than normal.

Here's an example. If you shrink your browser window you'll notice that `.two` never gets smaller than the given width of `250px`, even though the `flex-grow` rule would otherwise specify that each element should be equally sized.

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_2" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/JjJXZVz?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=JjJXZVz&amp;editable=true&amp;user=TheOdinProjectExamples&amp;name=cp_embed_2" style="width: 100%; overflow:hidden; display:block;" title="CodePen Embed" loading="lazy" id="cp_embed_JjJXZVz"></iframe>

An important implication to notice here is that when you specify `flex-grow` or `flex-shrink`, flex items do not necessarily respect your given values for `width`. In the above example, all 3 divs are given a `width` of `250px`, but when their parent is big enough, they grow to fill it. Likewise, when the parent is too small, the default behavior is for them to shrink to fit. This is not a bug, but it could be confusing behavior if you aren’t expecting it.

# --question--

## --text--

What is the default behavior of `flex-shrink` when applied to flex items?

## --answers--

It prevents any item from shrinking.

---

It makes all items shrink at an equal rate.

---

It causes only specific items to shrink.

---

It enlarges the items' sizes equally.


## --video-solution--

2
