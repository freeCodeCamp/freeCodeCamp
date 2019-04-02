---
title: Set the Font Family of an Element
---
## Set the Font Family of an Element

In CSS, you can define the type of font used as part of a Font Family. It's recommended to include a set of font types, mostly used for fallback mechanism such that when one Font is not available, the system will fallback to render text using the next available font, and so on.

As a rule of thumb, start by providing font family of your choice and end with commonly available fonts such that if the browser is not able to render text using user specified font, then it will use the generic font type as last resort.

A few things to keep in mind:
* It is recommended to include more than one font family (mostly for fallback purposes)
* If the name of the font family is more than one word, it must be in quotation marks, like: "Times New Roman"

```css
p {
  font-family: "Times New Roman", Helvetica, serif;
}
```

This will advise the browser to render text using ```Times New Roman``` first (if available), and then ```Helvetica``` (if Times New Roman isn't available), and finally ```serif``` if none of the other fonts are available.
