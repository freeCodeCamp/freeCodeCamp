---
id: 67167835def3588873f339c6
title: What Are Common Ways to Optimize Media Assets?
challengeType: 19
dashedName: what-are-common-ways-to-optimize-media-assets
---

# --description--

There are three tools to consider when using media, such as images, on your web pages: the size, the format, and the compression.

Let's talk about the size of your images first. When you are building a website, you'll often style images to display in a specific size. For example, you might have an image display at a 640x480 resolution. 640 represents the width while 480 represents the height in pixels. When preparing your image you want to scale it to a 640x480 size to match that styling. If you serve an image that is 1920x1080 but you are styling it to be much smaller, you're requiring your users to download unnecessary data. A smaller resolution results in a smaller file size.

The next thing to consider is your file format. Two of the most common file formats are PNG and JPG, but these are no longer the most ideal formats for serving images. Unless you need support for older browsers, you should consider using a more optimized format, like WEBP or AVIF.

Finally, you can run compression algorithms on your images to reduce file size. Tools like pngcrush work well for lossless formats like PNG, which can be compressed without any quality loss since the original data can be perfectly reconstructed. However, not all formats are lossless. JPG, for example, uses lossy compression — each time a JPG is re-saved or re-compressed, some image data is permanently discarded, resulting in degraded quality. You should keep all these things in mind when selecting and preparing images for your web pages.

# --questions--

## --text--

How should you scale, or size, your images?

## --answers--

Your images should be smaller than the rendered size on the page.

### --feedback--

Using a mismatched size can create loading or display issues.

---

Your images should be larger than the rendered size on the page.

### --feedback--

Using a mismatched size can create loading or display issues.

---

Your images should be the same scale as the rendered size on the page.

---

It doesn't matter, use whatever size you'd like.

### --feedback--

Using a mismatched size can create loading or display issues.

## --video-solution--

3

## --text--

Which of the following is NOT a valid image file type?

## --answers--

TS

---

PNG

### --feedback--

Review the middle of the lesson to see which of these options was not mentioned.

---

JPG

### --feedback--

Review the middle of the lesson to see which of these options was not mentioned.

---

WEBP

### --feedback--

Review the middle of the lesson to see which of these options was not mentioned.

## --video-solution--

1

## --text--

Which file format uses lossy compression, meaning re-saving or re-compressing it degrades image quality?

## --answers--

WEBP

### --feedback--

This format can use both lossy and lossless compression, so it is not specifically known for degrading image quality.

---

PNG

### --feedback--

This format uses lossless compression, so compressing it would not result in a degraded quality.

---

JPG

---

GIF

### --feedback--

This format uses lossless compression, so compressing it would not result in a degraded quality.

## --video-solution--

3
