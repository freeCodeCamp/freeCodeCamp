---
title: Letter Spacing Property
---
## Letter Spacing Property

The letter-spacing property adjusts the space between all letters in a block of text. It is also referred to as "tracking" in typography terms and in software with advanced type-setting options. The property accepts `px` and `em` length values, including negative values.

```css
.first-example {
  letter-spacing: 3px;
}
.second-example {
  letter-spacing: -1px;
}
.third-example {
  letter-spacing: 0.5em;
}
```
![result of CSS](https://github.com/kaithrendyle/guide-photos/blob/master/letter-spacing.png)

In general it is good practice to use relative units (`em`) because the spacing will always be relative to the font size you've declared.

It is important to consider legibility when adjusting letter spacing. If letters are too close together, they can appear cramped and hard to read. On the other hand, if letters are too far apart, they might not read as a word, but instead as individual letters. This might also affect how screen readers read the text out loud to people with low vision. 

In general lowercase letters don't typically need the letter spacing adjusted. You might find a need for adjustments when you use sections of uppercase if spacing looks too tight.


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


