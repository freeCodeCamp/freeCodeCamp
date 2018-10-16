---
title: Media Queries
---
#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Using media queries - MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

Also see the <a href='https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/01-responsive-web-design/responsive-web-design.json' target='_blank' rel='nofollow'>Responsive Web Design Principles</a> section on Beta

#### Draft of Article:
<!-- Please add your working draft below in GitHub-flavored Markdown -->
Media queries are sets of rules that define CSS properties. You can set media queries to change the appearance of your content based on how your content is viewed.

Media queries can determine your content's appearance in different displays. Some examples of different displays are: images on a computer screen, text in print, or web pages in an audio screenreader.

In web pages, some elements may not display consistently across different screen sizes. You can use media queries to set special rules for small and larger screens.

Here is an example of a media query that sets the size of body text on a phone screen:

```css
@media screen and (max-width: 450px) {
 body {
   font-size: 12px;
  }
}
```

This media query stipulates that for screen sizes up to 450 pixels in width, the body text should display in a 12px font size.

Media queries can be helpful in [responsive web design](https://guide.freecodecamp.org/html/responsive-web-design).
