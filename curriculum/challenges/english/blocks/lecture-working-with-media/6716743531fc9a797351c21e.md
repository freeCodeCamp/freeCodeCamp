---
id: 6716743531fc9a797351c21e
title: What Are Replaced Elements, and What Are Some Examples?
challengeType: 19
dashedName: what-are-replaced-elements
---

# --interactive--

A replaced element is an element whose content is determined by an external resource rather than by CSS itself. CSS, or cascading stylesheets, is used to add styles to a web page. Common examples of replaced elements include the image, iframe, and video elements.

With replaced elements, you can control the position, or layout of an element. But your CSS cannot directly modify the content of that element. This might be easier to explain with some examples. Consider the image element, which embeds an image on your web page:

```html
<img src="example-img-url" alt="Descriptive text goes here">
```

The element itself is replaced with the external object: the image. Your CSS can control things like the positioning of the image, or apply a filter to it, but you cannot actually modify the image itself. A more robust example might be the `iframe` element, which embeds an external site on your web page.

Here is an example of using the `iframe` element for a popular YouTube video on the freeCodeCamp channel. If you want to see different videos in the preview window, change the value of the `src` attribute to a video of your choosing. To see the previews, you will need to enable the interactive editor.

**NOTE**: Don't worry about the extra attributes mentioned in the interactive example like `referrerpolicy` and `allowfullscreen`. You will learn more about working with `iframe` elements in a future workshop. 

:::interactive_editor

```html
<iframe width="400" height="200" src="https://www.youtube.com/embed/u43gJJrVa1I?si=BoDW_puFsy8OEr_Z" title="Professional Cloud Architect Certification Course – Pass the Exam! (YouTube video)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

:::

Other common examples of using the `iframe` element would be to embed maps onto the page. Here is an example of an embedded map.

Enable the interactive editor and try playing around with the map itself by zooming in/out. 

:::interactive_editor

```html
<iframe
  title="Map of the Royal Observatory, Greenwich, London"
  width="300"
  height="200"
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&amp;layer=mapnik">
</iframe>
```

:::

The element itself is replaced with the external object: the site. Your CSS can change the positioning of the embedded site, but you cannot modify the site's contents. To dive a bit further, if the embedded site has an `h1` element, your CSS would not be able to style that `h1` element. You cannot change the size, font color, and so on.

There are some other replaced elements, such as `video`, and `embed`. And some elements behave as replaced elements under specific circumstances. Here's an example of an `input` element with the `type` attribute set to `image`:

```html
<input type="image" alt="Descriptive text goes here" src="example-img-url">
```

This type of `input` is considered to be a replaced element, but other `input` types like `text`, or `email` are not replaced elements.

# --questions--

## --text--

What can you style in a replaced element?

## --answers--

The font size.

### --feedback--

You can change where the element is located on your page.

---

The layout or positioning.

---

The color of specific text.

### --feedback--

You can change where the element is located on your page.

---

Everything.

### --feedback--

You can change where the element is located on your page.

## --video-solution--

2

## --text--

What is a replaced element replaced with?

## --answers--

An external object.

---

Another element.

### --feedback--

The element is replaced by something outside your site.

---

Some CSS.

### --feedback--

The element is replaced by something outside your site.

---

Assembly.

### --feedback--

The element is replaced by something outside your site.

## --video-solution--

1

## --text--

Which of these is a replaced element?

## --answers--

`h1`

### --feedback--

Review the section where examples of replaced elements were discussed. 

---

`p`

### --feedback--

Review the section where examples of replaced elements were discussed. 

---

`iframe`

---

`a`

### --feedback--

Review the section where examples of replaced elements were discussed. 

## --video-solution--

3
