---
id: 637f4e5872c65bc8e73dfe27
videoId: yqcd-XkxZNM
title: Working With Text Lesson A
challengeType: 15
dashedName: working-with-text-lesson-a
---
# --description--

What would you expect the following text to output on an HTML page?

```html
<body>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</body>
```

It looks like two paragraphs of text, and so you might expect it to display in that way. However that is not the case, as you can see in the output below:

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/xxrKqeV?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=xxrKqeV&amp;user=TheOdinProjectExamples&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="CodePen Embed" loading="lazy" id="cp_embed_xxrKqeV"></iframe>

When the browser encounters new lines like this in your HTML, it will compress them down into one single space. The result of this compression is that all of the text is clumped together into one long line.

If you want to create paragraphs in HTML, you need to use the paragraph element, which will add a newline after each of your paragraphs. A paragraph element is defined by wrapping text content with a `<p>` tag.

Changing our example from before to use paragraph elements fixes the issue:

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_2" scrolling="no" src="https://codepen.io/TheOdinProjectExamples/embed/mdwbmdp?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;slug-hash=mdwbmdp&amp;user=TheOdinProjectExamples&amp;name=cp_embed_2" style="width: 100%; overflow:hidden; display:block;" title="CodePen Embed" loading="lazy" id="cp_embed_mdwbmdp"></iframe>

# --assignment--

Watch and follow along to Kevin Powell’s HTML Paragraph and Headings Video above.

# --questions--

## --text--

How do you create a paragraph in HTML?

## --answers--

`<h3>This is a paragraph</h3>`

---

`<p>This is a paragraph</p>`

---

`<strong>This is a paragraph<strong>`


## --video-solution--

2
