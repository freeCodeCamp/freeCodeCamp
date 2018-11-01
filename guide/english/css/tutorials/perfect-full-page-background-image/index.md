---
title: Perfect Full Page Background Image
---
## Perfect Full Page Background Image

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/tutorials/perfect-full-page-background-image/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
The following example will show how to create a full-screen responsive background image:
```css
body, html {
    /* To make sure the image covers the entire screen, set the height of both <body> and <html>
    to height:100% */
    height: 100%;
}
.bg-img {
    /* Image link */
    background-image: url("link_to_image.png");

    /* Set height of container to 100% */
    height: 100%;

    /* Center and scale the image to cover the entire background */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
```
Click [here](https://codepen.io/velimirkumric/pen/KGONjQ/) for a codepen that I created to demonstrate what it looks like. If you press "fork" at the top right, you can edit it yourself and play around with the code.

#### More Information:
[CSS Tricks - Perfect Full Page Background Image](https://css-tricks.com/perfect-full-page-background-image/)

[w3schools - Full Page Image](https://www.w3schools.com/howto/howto_css_full_page.asp)
