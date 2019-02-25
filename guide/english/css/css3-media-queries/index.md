---
title: CSS3 Media Queries
---
## CSS3 Media Queries

Media Queries allow you to have different styles for different devices/screen sizes. Their introduction in CSS3 has greatly eased the building
of responsive webpages.

The best approach when designing a responsive website is to think mobile first; meaning that you create your page starting with the design and content
of the mobile version. You may think that with some scalable sizes ( %, vw or vh ), your page will adapt perfectly to any device. But it will not. Maybe
for some very basic design, but certainly not for more common or complex pages!

When designing your page for smaller devices, you will focus on the main content. On a bigger screen, you will have to adapt some font-sizes, margins,
paddings and so on in order to keep your site comfortable and readable. You will also likely want to add more content and fill in the space created by the screen size.

The thought process should be:
1. Which content to show?
2. How to layout the page?
3. Which size to use?

### The basic syntax

```css
@media only screen and (min-width: 768px) {
  p {padding: 30px;}
}
```

The `p` tag will have a padding of 30px as soon as the screen reaches min 768px width.</p>

### The AND syntax


```css
@media only screen and (min-height: 768px) and (orientation: landscape) {
  p {padding: 30px;}
}
```

The `p` tag will have a padding of 30px as soon as the screen reaches min 768px height and its orientation is landscape.

### The OR syntax

```css
@media only screen and (min-width: 768px), (min-resolution: 150dpi) {
  p {padding: 30px;}
}
```

The `p` tag will have a padding of 30px as soon as the screen reaches min 768px width or its resolution reaches min 150dpi.

### And beyond!

There are more operators beyond the main two, a full list with examples can be found [https://css-tricks.com/logic-in-media-queries/](in this article from CSS Tricks.)

Beyond the core uses of media queries for mobile-first web design shown above, media queries can do a lot, especially for web accessibility. Here are just a few examples:

1. Adjusting for screen readers that convert website text to speech for the visually impaired (for example, ignoring non-essential text).
```css
  @media speech {
    /* ... */
  }
```
2. Allowing for more graceful zooming in for those with minor visual impairments, such as many elderly people.
3. Allowing smoother experiences for those who prefer or need less animation to read a page.
```css
  @media (prefers-reduced-motion: reduce) {
    .animation {
      animation: none;
      -webkit-animation: none;
    }
  }
```
4. Restyling a page for when it's printed as opposed to read on a screen.
```css
  @media print {
    /* ... */
  }
```

### More Information
* [MDN - media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
* [W3 Schools - @media rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
* [CSS Tricks Standard Device Widths Article](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
* [Ethan Marcotte A List Apart Atricle on  Responsive Web Design](https://alistapart.com/article/responsive-web-design)
* [Brad Frost 7 habits of highly effective media queries](http://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/)
* [How to make media queries work on older browsers](https://www.templatemonster.com/blog/css-media-queries-for-all-devices-and-browsers-including-ie7-and-ie8/)
