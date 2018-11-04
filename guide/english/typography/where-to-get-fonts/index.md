---
title: Where to Get Fonts
---
## Where to Get Fonts

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Online font services like Google Fonts or Font Squirrel provide an easy way to use different fonts on your site without the need to worry about whether or not the person viewing your site will have the font available on their system. 

### Downloaded Fonts
Sites like Font Squirrel allow you to download the font files you've chosen. Once it's done, you have to upload them on the server hosting your website. To use them, you then need to declare them in your CSS stylesheet which means telling your CSS to ask the user's browser to display it. Declare a font is usually made using `@font-face` on top of your CSS stylesheet.
```css
@font-face {
  font-family: "My Super Awesome Open Sans Font"; /* name that you will use later to apply the font */
  src: url("/fontfolder/open-sans.woff"); /* path to the file */
}
body {
  font-family: "My Super Awesome Open Sans Font";
}
```
Note that you can also specify the format of the font according to browser compatibility as following.

```css
@font-face {
 font-family: "My Super Awesome Open Sans Font";
 src: url("/fontfolder/open-sans.woff"); format("woff"),
}
```

### Google Fonts
With Google Fonts, you don't need to upload the font files on your site, you just have to put a certain link on the `head` of your site.

To use Google Fonts, browse the [site](https://fonts.google.com/) to find the font that works best for your project. Once you've chosen, click the plus (+) sign next to the font. A bar will appear at the bottom of the screen. Click on it. You will then be given several lines of code. Copy and paste the line of HTML into the head of your HTML file above the existing <link> element. Then take the CSS and use it where necessary in your stylesheet. 

```html
<html>
  <head>
  <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
  </head>
  <body>
  Some text.
  </body>
</html>
```
```css
body{
  font-family: "Inconsolata", monospace;
}
```
You're done! You successfully have new fonts for your site.

#### Additional Resources:
* [Google Fonts](http://fonts.google.com)
* [FontSpace](http://www.fontspace.com)
* [Font Squirrel](http://fontsquirrel.com)
* [DaFont](http://www.dafont.com)
* [1001 Free Fonts](http://www.1001freefonts.com)

#### Paid Font Reources:

* [Fonts by Hoefler & Co.] (https://www.typography.com/)
* [MyFonts] (https://www.myfonts.com/)
* [Adobe Typekit] (https://fonts.adobe.com/)

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [Web fonts overview from Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
