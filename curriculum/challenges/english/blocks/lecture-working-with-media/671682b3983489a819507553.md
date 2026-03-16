---
id: 671682b3983489a819507553
title: How Do You Embed Videos onto Your Page Using the iframe Element?
challengeType: 19
dashedName: how-do-you-embed-videos-onto-your-page-using-the-iframe-element
---

# --interactive--

In a prior lesson, you were first introduced to the `iframe` element. In this lesson, you will learn more about how to work with the `iframe` element. This element stands for inline frame. It's an inline element used to embed other HTML content directly within the HTML page. That HTML content could be a video, map, another HTML element, or even other web pages.

Here's an example of embedding a popular freeCodeCamp course from YouTube. To see a different video, enable the interactive editor and change the `src` value to a video of your choosing.

:::interactive_editor

```html
<iframe
  width="400"
  height="400"
  src="https://www.youtube.com/embed/PkZNo7MFNFg?si=-UBVIUNM3csdeiWF"
  title="Learn JavaScript - Full Course for Beginners (YouTube video)"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
```

:::

The `src` attribute specifies the URL of the page you want to embed. The `width` attribute specifies the width of the `iframe`. The `height` attribute specifies the height of the `iframe`. The `allowfullscreen` attribute allows the user to display the `iframe` in full screen mode. It's also a good practice to specify a `title` attribute for the `iframe`, as it's important for accessibility.

The `allow` attribute, on the other hand, lets you define what an iframe can or can't do. This is called an allowlist. In the above example, adding `clipboard-write` to it allows the embedded page to write items to your clipboard. Items in an allowlist can be separated by semicolons or spaces, and both can be used together.

Note that the video can come from anywhere. It doesn't have to come from video services like YouTube and Vimeo.

Don't forget you can also embed a map, another web page, or direct HTML within the `iframe` element. Here is an example of an embedded map.

Try interacting with the map by zooming in and out.

:::interactive_editor

```html
<h1>A Map from Openstreetmap.org Embedded with the iframe Element</h1>

<iframe
  width="425"
  height="350"
  src="https://www.openstreetmap.org/export/embed.html?bbox=3.006134033203125%2C6.150112578753815%2C3.6357879638671875%2C6.749850810550778&amp;layer=mapnik"
  title="Map of Lagos area, Nigeria"
  style="border: 1px solid black"
>
</iframe>
<br />
<small>
  <a href="https://www.openstreetmap.org/#map=11/6.4501/3.3210">
    View Larger Map
  </a>
</small>
```

:::

If you want to embed direct HTML within the `iframe` element you have to use the `srcdoc` attribute instead of `src`.

# --questions--

## --text--

What does iframe mean?

## --answers--

International frame.

### --feedback--

Review the beginning of the lesson to obtain the answer.

---

Inline form.

### --feedback--

Review the beginning of the lesson to obtain the answer.

---

Inline frame.

---

Inline form element.

### --feedback--

Review the beginning of the lesson to obtain the answer.

## --video-solution--

3

## --text--

Which attribute of the `iframe` element specifies the location of what you want to embed?

## --answers--

`src`

---

`url`

### --feedback--

Think about the attribute that means "source".

---

`frameborder`

### --feedback--

Think about the attribute that means "source".

---

`cross-origin`

### --feedback--

Think about the attribute that means "source".

## --video-solution--

1

## --text--

Which attribute of the `iframe` element do you use instead of `src` if you want to embed direct HTML?

## --answers--

`html`

### --feedback--

Look out for the attribute that is related to src.

---

`document`

### --feedback--

Look out for the attribute that is related to src.

---

`srcweb`

### --feedback--

Look out for the attribute that is related to src.

---

`srcdoc`

## --video-solution--

4
