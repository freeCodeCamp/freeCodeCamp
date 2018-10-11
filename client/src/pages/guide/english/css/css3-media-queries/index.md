---
title: CSS3 Media Queries
---
## CSS3 Media Queries

Media Queries allow you to have different styles for different devices/screen sizes. Their introduction in CSS3 has greatly eased the building
of responsive webpages.

The best approach when designing a responsive website is to think mobile first; meaning that you create your page starting with the design and content
of the mobile version. You may think that with some scalable sizes ( %, vw or vh ), your page will adapt perfectly to any device. But it will not. Maybe
for some very basic design, but certainly not for more common or complex pages!

When designing your page for smaller devices, you will focus on the main content. On a bigger screen, you will have to readapt some font-sizes, margins,
paddings and so on in order to keep your site comfortable and readable, but you will also want/need to add more content, the ones you did not judge
fundamental, and fill in the space created by the screen size.

The thought process should be:
1. Which content to show?
2. How to layout?
3. Size?

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

### More Information
* [MDN - media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
* [W3 Schools - @media rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
* [CSS Tricks Standard Device Widths Atricle](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
* [https://alistapart.com/article/responsive-web-design](Ethan Marcotte A List Apart Atricle on  Responsive Web Design)
