---
title: Media Queries
---
## Media Queries
Media queries are sets of rules that define CSS properties. You can set media queries to change the appearance of your content based on how your content is viewed.

Media queries can determine your content's appearance in different displays. Some examples of different displays are: images on a computer screen, text in print, or web pages in an audio screenreader.

In web pages, some elements may not display consistently across different screen sizes. You can use media queries to set special rules for small and larger screens.

Media queries are essential to [responsive web design](https://guide.freecodecamp.org/html/responsive-web-design). Best practice dictates websites should be designed for mobile first. Meaning, mobile styles should be written first, then scaling up to larger screens.

### Examples

The h1 is set to 18 pixels initially, then increased when the screen is width expands to 640px (tablet) and then again at 1024px (desktop).

```
h1 {
  font-size: 18px;
}

// Medium and up
@media screen and (min-width: 640px) {
  h1 {
    font-size: 20px;
  }
}

// Large and up
@media screen and (min-width: 1024px) {
  h1 {
    font-size: 30px;
  }
}
```


#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Using media queries - MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

Also see the <a href='https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/01-responsive-web-design/responsive-web-design.json' target='_blank' rel='nofollow'>Responsive Web Design Principles</a> section on Beta
