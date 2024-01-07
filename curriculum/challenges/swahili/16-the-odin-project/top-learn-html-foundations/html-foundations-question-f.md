---
id: 637f4e2f72c65bc8e73dfe22
title: HTML Foundations Question F
challengeType: 15
dashedName: html-foundations-question-f
---

# --description--

The `<head>` element is where you put important meta-information about your webpages, and stuff required for your webpages to render correctly in the browser. Inside the `<head>`, you should not use any element that displays content on the webpage.

## The Charset Meta Element
You should always have the `meta` tag for the `charset` encoding of the webpage in the `head` element: `<meta charset="utf-8">`.

Setting the encoding is very important because it ensures that the webpage will display special symbols and characters from different languages correctly in the browser.

## Title Element
Another element you should always include in the head of an HTML document is the `title` element:

```html
<title>My First Webpage</title>
```

The `title` element is used to give webpages a human-readable title which is displayed in your webpage’s browser tab.

If you didn’t include a `title` element, the webpage’s title would default to its file name. In your case that would be `index.html`, which isn’t very meaningful for users; this would make it very difficult to find your webpage if the user has many browser tabs open.

There are many more elements that can go within the `head` of an HTML document. However, for now it’s only crucial to know about the two elements you have covered here. You will introduce more elements that go into the `head` throughout the rest of the curriculum.

Back in `index.html` file, let’s add a `head` element with a `charset` `meta` element and a `title` within it. The head element goes within the HTML element and should always be the first element under the opening `<html>` tag:


```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
</html>
```

# --question--

## --text--

What is the purpose of the `head` element?

## --answers--

The `head` element is used to display all elements that are displayed on the webpage.

---

The `head` element is used to display important information about your webpage and is used to render web pages correctly with `meta` elements.

---

The `head` element is used to display the header content on top of the webpage.


## --video-solution--

2
