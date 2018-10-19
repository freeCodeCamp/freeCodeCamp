---
title: Web Safe Fonts
---

## Web Safe Fonts

Web safe fonts are fonts that are included with most operating systems, the implication of such high availability is that a designer can expect typography involving web safe fonts to appear exactly as intended to most users. Below are non-exhaustive lists of some fonts that are considered web safe at the time of writing, categorized by CSS generic font families.

Web safe serif fonts:

* Georgia
* Times New Roman

Web safe sans-serif fonts:

* Arial
* Tahoma
* Trebuchet MS
* Verdana

Web safe monospaced fonts:

* Courier New

It is worth noting that font stacks with fallback options including a generic font family should still be used even if your design uses only web safe fonts. For example:

```css
p {
  font-family: Tahoma, Arial, sans-serif;
}
```

#### A Note on Web Fonts

Just because some fonts are safer than others does not mean you should confine your designs to using only web safe fonts. Modern designs with CSS can also take advantage of web fonts to ensure consistent typography across operating systems.
You can also download fonts and add them to your website files. It can make the fonts more efficient.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [MDN Documentation: Fundamental text and font styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Web_safe_fonts)
* [MDN Documentation: Web fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
* [Web Safe Fonts](https://www.cssfontstack.com)
