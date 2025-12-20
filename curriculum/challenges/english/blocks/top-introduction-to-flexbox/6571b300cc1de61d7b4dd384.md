---
id: 6571b300cc1de61d7b4dd384
title: Introduction to Flexbox Lesson F
challengeType: 15
dashedName: introduction-flexbox-lesson-f
---
# --description--

`flex-grow` expects a single number as its value, and that number is used as the flex-item's "growth factor". When you applied `flex: 1` to every div inside our container, you were telling every div to grow the same amount. The result of this is that every div ends up the exact same size. If you instead add `flex: 2` to just one of the divs, then that div would grow to 2x the size of the others.

In the following example the `flex` shorthand has values for `flex-shrink` and `flex-basis` specified with their default values.

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/YzQqvgK?height=300&amp;default-tab=html%2Cresult&amp;slug-hash=YzQqvgK&amp;editable=true&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="CodePen Embed" loading="lazy" id="cp_embed_YzQqvgK"></iframe>

# --questions--

## --text--

What does setting `flex: 2` to one specific div inside a flex container, while other divs have `flex: 1`, imply?

## --answers--

The container will shrink to accommodate the larger div.

---

All divs will retain the same size due to conflicting `flex` values.

---

The specific div will grow to be twice the size of the others.

---

All divs will shrink equally to adjust to the new `flex` values.

## --video-solution--

3
