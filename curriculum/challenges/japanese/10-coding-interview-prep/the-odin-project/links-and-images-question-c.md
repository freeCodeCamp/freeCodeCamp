---
id: 637f703072c65bc8e73dfe34
videoId: tsEQgGjSmkM
title: Links and Images Question C
challengeType: 15
dashedName: links-and-images-question-c
---

# --description--

To get some practice using links and images throughout this lesson you need an HTML project to work with.

- Create a new directory named odin-links-and-images.

- Within that directory, create a new file named index.html.

- Fill in the usual HTML boilerplate.

- finally, add the following h1 to the body: `<h1>Homepage</h1>`

## Anchor Elements
To create a link in HTML, you use the anchor element. An anchor element is defined by wrapping the text or another HTML element you want to be a link with an `<a>` tag. Add the following to the body of the index.html page you created and open it in the browser:

```html
<a>click me</a>
```

You may have noticed that clicking this link doesn’t do anything. This is because an anchor tag on its own won’t know where you want to link to. You have to tell it a destination to go to. You do this by using an HTML attribute. An HTML attribute gives additional information to an HTML element and always goes in the element’s opening tag. An attribute is usually made up of two parts: a name, and a value; however, not all attributes require a value. In your case, you need to add a href (hyperlink reference) attribute to the opening anchor tag. The value of the href attribute is the destination you want your link to go to. Add the following href attribute to the anchor element you created previously and try clicking it again, don’t forget to refresh the browser so the new changes can be applied.

```html
<a href="https://www.theodinproject.com/about">click me</a>
```

By default, any text wrapped with an anchor tag without a `href` attribute will look like plain text. If the `href` attribute is present, the browser will give the text a blue color and underline it to signify it is a link. It’s worth noting you can use anchor tags to link to any kind of resource on the internet, not just other HTML documents. You can link to videos, pdf files, images, and so on, but for the most part, you will be linking to other HTML documents.

# --question--

## --text--

What attribute tells links where to go to?

## --answers--

`src`

---

`href`

---

`link`

## --video-solution--

2
