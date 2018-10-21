---
title: Font Family Property
---
## Font Family Property

The font family property is a property in CSS. Developers use it to change the font family (or "font") of a website's text, or a part of a website's text.

Examples of fonts include Arial, Georgia, Times New Roman, and many more!

To change the font of a part of the text, type the selector of the specific text and a pair of curly brackets. Inside the brackets, type `font-family:` and then the name of the font. If the font's name has more than one word, you need to use either single- or double-quotes. Otherwise, quotes are not needed.

```html
<p>This font will be in Times New Roman.</p>
```

```css
p {
  font-family: 'Times New Roman';
}
```

But many different people with different computers browse the web globally. This means that not everyone will have Times New Roman installed in their computers. To help those users, you should add fallback fonts. Fallback fonts are other fonts the browser will use in case the first font is unavailable. Add a comma after the first font, and add the first fallback font's name. You can use more than one fallback font.

```html
<p>This font may or may not be in Lato.</p>
```

```css
p {
  font-family: Lato, Helvetica, Georgia;
  /* Helvetica and Georgia are fallback fonts */
}
```

If the user doesn't have Lato installed first, then the browser will try to use Helvetica. If the user also doesn't have Helvetica, then the browser will try to use Georgia. If the user doesn't have Georgia, the browser will use a font installed on the user's computer.

For fallback fonts, you can use named fonts like Georgia. You can also use general types like "sans-serif," "serif," "monospace," and others. Sans-serif fonts, like Lato, are fonts without small lines at the ends of letters and numbers. Serif fonts, like Times New Roman, do use small lines at the ends of letters and numbers. Monospace fonts, like Consolas, have letters and numbers that are all the same width.

```html
<p>This font may or may not be in Lato.</p>
```

```css
p {
  font-family: Lato, sans-serif, monospace;
}
```
