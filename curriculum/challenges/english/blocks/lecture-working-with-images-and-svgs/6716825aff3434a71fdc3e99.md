---
id: 6716825aff3434a71fdc3e99
title: What Are SVGs, and When Should You Use Them?
challengeType: 19
dashedName: what-are-svgs
---

# --interactive--

First, you need to understand how images work. Common image formats like PNG and JPG are classified as raster formats. This essentially means that they are pixel-based, with the data tracking the color value in each pixel.

A large downside of raster based images is that they do not upscale well. If you've ever tried to make a PNG larger, you may have seen that it becomes pixelated, or blurry.

An SVG is a different kind of image. SVG stands for a scalable vector graphic. A vector graphic tracks data based on paths and equations to plot points, lines, and curves. What this really means is that a vector graphic, like an SVG, can be scaled to any size without impacting the quality.

SVGs specifically have the added benefit of storing data in XML. This means you can use them directly in your code as raw HTML with the `svg` element. It also means you can programmatically change the color of the image.

To change the smiley face to red, enable the interactive editor and change the `fill="yellow"` to `fill="red"`.

:::interactive_editor

```html
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="45" stroke="black" stroke-width="4" fill="yellow" />
  <circle cx="35" cy="40" r="5" fill="black" />
  <circle cx="65" cy="40" r="5" fill="black" />
  <path d="M35 65 Q50 80 65 65" stroke="black" stroke-width="4" fill="transparent" />
</svg>
```

:::

Here are the basic elements for the example:

- The `svg` element is the container for the whole drawing. It sets up the space where all the shapes appear. Everything you want to draw with SVG, such as circles, lines, or paths, goes inside the `svg` element.
- The `circle` element is used to make the face and the eyes. One large circle forms the yellow face, and two smaller circles make the eyes.
- The `path` element is used to draw the smile. It creates a curved line for the mouth.
- Each SVG element has attributes that control its appearance and position within the drawing area.

Here are a few more examples. To change the color for any of the examples, update the value for the `fill` attribute to any named color like `red`, `green`, `blue`, `yellow`, etc. 

:::interactive_editor

```html
<!-- Star Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="gold" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L14.9 8.6L22 9.3L17 14.1L18.3 21.2L12 17.8L5.7 21.2L7 14.1L2 9.3L9.1 8.6L12 2Z"/>
</svg>

<!-- Heart Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="crimson" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 6 4 4 6.5 4C8 4 9.5 4.8 10.5 6.09C11.5 4.8 13 4 14.5 4C17 4 19 6 19 8.5C19 12.28 15.6 15.36 10.45 20.04L12 21.35Z"/>
</svg>

<!-- Checkmark Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="green" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.29 5.71L9 17L3.71 11.71L5.12 10.29L9 14.17L18.88 4.29L20.29 5.71Z"/>
</svg>
```

:::

So when would you want to use an SVG? A great use case is for icons. If you want to create custom bullet points, or add icons to your links to represent social media platforms, using SVGs is the best approach. One of the most popular icon libraries, Font Awesome, uses SVG images for their icons. SVGs are also great for webpage logos, because they scale perfectly. They allow you to adapt your layout to any responsive design you need. Next time you have an SVG locally, try opening it with a text editor and playing with the code.

# --questions--

## --text--

What is a raster image?

## --answers--

An image which stores paths, lines, points, and curves.

### --feedback--

Review the beginning of the lesson to obtain the answer.

---

An image which stores color data for each pixel.

---

All images are raster images.

### --feedback--

Review the beginning of the lesson to obtain the answer.

---

An image which is easily scalable.

### --feedback--

Review the beginning of the lesson to obtain the answer.

## --video-solution--

2

## --text--

What is a vector image?

## --answers--

An image which stores paths, lines, points, and curves.

---

An image which stores color data for each pixel.

### --feedback--

Review the middle of the lesson to obtain the answer.

---

All images are vector images.

### --feedback--

Review the middle of the lesson to obtain the answer.

---

An image which is not easily scalable.

### --feedback--

Review the middle of the lesson to obtain the answer.

## --video-solution--

1

## --text--

How does an SVG store data?

## --answers--

As pixels.

### --feedback--

Review the middle of the lesson to obtain the answer.

---

As binary.

### --feedback--

Review the middle of the lesson to obtain the answer.

---

As hexadecimal.

### --feedback--

Review the middle of the lesson to obtain the answer.

---

As XML.

## --video-solution--

4
