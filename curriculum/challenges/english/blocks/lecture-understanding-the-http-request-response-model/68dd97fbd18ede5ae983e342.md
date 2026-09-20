---
id: 68dd97fbd18ede5ae983e342
title: What Are the Different Kinds of Assets That Are Returned in an HTTP Response?
challengeType: 19
dashedName: what-are-the-different-kinds-of-assets-that-are-returned-in-an-http-response
---

# --description--

In the last lesson, you learned that the server processes an HTTP request and sends back a response. That response includes various assets you see on the web.

The assets returned by an HTTP response include text-based assets, media assets, fonts, and so on. Each of these assets comes with a **Content-Type** header, which tells the browser how to process and display the asset correctly.

Text-based assets have always been a fundamental part of the web. In fact, the web started as pure text. These days, text-based assets include the following:

* **HTML (Hypertext Markup Language)**: The basic structure of any webpage. Without HTML, a webpage can't exist.
    
* **CSS (Cascading Stylesheet)**: The asset that controls how a webpage looks. With CSS, you apply styles like colors, fonts, and layout to the HTML.
    
* **JavaScript**: JavaScript adds interactivity and dynamic content to HTML and CSS.
    
* **JSON and XML**: These two formats let you transfer structured data between servers and browsers.
    
Media assets include images, audios, and videos. They bring the web to life with visuals and sound.

Many websites rely on images to communicate visual information. Images come in different formats like `JPG`, `JPEG`, `PNG`, `WEBP`, and `GIF`.

Websites like YouTube and Vimeo serve video content with formats like `MP4`, `MOV`, `AVI`, `WebM`, and more.

Audio is a key part of many platforms as it lets users stream music, podcasts, and other sound content. Common audio formats include `MP3`, `AAC`, Ogg, and `WAV`. Platforms like Spotify and YouTube Music rely on these formats to deliver high-quality audio experiences.

Other assets that are returned in an HTTP response are documents like `PDF`, `DOCX`, and `PAGES`, compressed archives like `ZIP` and `RAR`, font files like `WOFF`, `WOFF2`, and `TTF`, and executables like `EXE`.

Here's a table of these common assets and their content types:

| Asset Type | Content-Type Header |
| --- | --- |
| HTML | text/html |
| CSS | text/css |
| JavaScript | application/javascript |
| JPEG | image/jpeg |
| PNG | image/png |
| GIF | image/gif |
| SVG | image/svg+xml |
| WebP | image/webp |
| WOFF | font/woff |
| WOFF2 | font/woff2 |
| TTF | font/ttf |
| OTF | font/otf |
| MP4 | video/mp4 |
| WebM | video/webm |
| Ogg (Video) | video/ogg |
| MP3 | audio/mpeg |
| AAC | audio/aac |
| WAV | audio/wav |
| Ogg (Audio) | audio/ogg |
| JSON | application/json |
| XML | application/xml |
| PDF | application/pdf |
| ZIP | application/zip |

# --questions--

## --text--

Which of the following is a text-based asset used for structuring a webpage?

## --answers--

JSON

### --feedback--

This asset defines the fundamental structure of a webpage.

---

CSS

### --feedback--

This asset defines the fundamental structure of a webpage.

---

JavaScript

### --feedback--

This asset defines the fundamental structure of a webpage.

---

HTML

## --video-solution--

4

## --text--

What is the correct `Content-Type` header for serving a PDF file?

## --answers--

application/xml

### --feedback--

Look out for the MIME type for PDF files that maintain formatting across devices.

---

application/json

### --feedback--

Look out for the MIME type for PDF files that maintain formatting across devices.

---

application/pdf

---

text/html

### --feedback--

Look out for the MIME type for PDF files that maintain formatting across devices.

## --video-solution--

3

## --text--

Which of the following is a common audio format used for streaming music and podcasts?

## --answers--

PNG

### --feedback--

Think about the format widely used for compressing and streaming sound files.

---

MP3

---

SVG

### --feedback--

Think about the format widely used for compressing and streaming sound files.

---

GIF

### --feedback--

Think about the format widely used for compressing and streaming sound files.

## --video-solution--

2
