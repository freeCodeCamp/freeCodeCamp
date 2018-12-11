---
title: Font Variant
---
## Font Variant Property

The font-variant property is most commonly used to change targeted text to small caps. The default value is `normal`.

```css
p {
  font-variant: small-caps;
}
```
The property also accepts `all-small-caps`, `petite-caps`, `all-petite-caps`, `titling-caps`, and `unicase`; however, these are new in CSS3 and not yet well-supported.

Note that if you use caps in the HTML markup, that will override the small caps value, resulting in regular uppercase letters. If you want to keep the markup in uppercase, but change to small caps with CSS, just set `text-transform: lowercase` along with your small caps declaration.

While small caps can add an extra bit of elegance to your typography, designers reccommend to only use them if they are actually built into the font. "Fake" small caps are computer-generated scaled down versions of capital letters. "Real" small caps, on the other hand, are drawn separately by the type designer and appear a little bit wider and fatter than the "fake" ones. 

#### More Information:
[Design for Hackers](https://designforhackers.com/blog/small-caps/)

[Font-variant on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)

