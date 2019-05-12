---
title: CSS3 Media Queries
---
## CSS3 Media Queries

Media queries allow you to design a website differently for different devices/screen sizes. Their introduction in CSS3 has greatly eased the building of responsive webpages.

The best approach when designing a responsive website is to think <em>mobile first</em> - meaning that you design the mobile version of your site first and scale up for larger devices. Using relative units of size (like %, vw or vh) will not guarantee your page adapts perfectly to any device, especially for complex layouts! Media queries let you specify <em>breakpoints</em> where different styles will be applied.

When designing your page for smaller devices, you should focus on the main content. On a bigger screen, you will want to adjust font sizes, margins, padding, etc. to keep your site readable, but you may also want to add secondary content to fill in the space created by the screen size.

The thought process for responsive design should be:
1. Which content to show?
2. How to create the layout of the page?
3. Which size to use?

### The basic syntax

```css
@media only screen and (min-width: 768px) {
  p {padding: 30px;}
}
```

`p` tags will have 30px of padding when the screen width is at least 768px.

### The AND syntax


```css
@media only screen and (min-height: 768px) and (orientation: landscape) {
  p {padding: 30px;}
}
```

`p` tags will have 30px of padding when the screen height is at least 768px AND its orientation is landscape.

### The OR syntax

```css
@media only screen and (min-width: 768px), (min-resolution: 150dpi) {
  p {padding: 30px;}
}
```

`p` tags will have 30px of padding when the screen width is at least 768px OR its resolution reaches 150dpi.

### And beyond!

Additional tips for using media queries, such as the `not` operator and examples of greater specificity, can be found [https://css-tricks.com/logic-in-media-queries/](in this article from CSS Tricks.)

Beyond their core use for mobile-first web design, media queries can also greatly improve web accessibility. Here are a few examples:

1. Adjusting for screen readers that convert website text to speech for people with visual impairments (for example, ignoring non-essential text).
```css
  @media speech {
    /* ... */
  }
```

2. Allowing for more graceful zooming in for people with visual impairments.

3. Allowing smoother experiences for those who prefer or need less animation to read a page.
```css
  @media (prefers-reduced-motion: reduce) {
    .animation {
      animation: none;
      -webkit-animation: none;
    }
  }
```
4. Restyling a page for printing as opposed to reading on a screen.
```css
  @media print {
    /* ... */
  }
```

### More Information
* [MDN - media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
* [W3 Schools - @media rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
* [CSS Tricks - Standard Device Widths Article](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
* [Ethan Marcotte - A List Apart Article on Responsive Web Design](https://alistapart.com/article/responsive-web-design)
* [Brad Frost - 7 habits of highly effective media queries](http://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/)
* [How to make media queries work on older browsers](https://www.templatemonster.com/blog/css-media-queries-for-all-devices-and-browsers-including-ie7-and-ie8/)
