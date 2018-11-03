---
title: Symbols
---

## Symbols

HTML symbol entities are characters that are not represented on a user's keyboards. Many mathematical, scientific, and currency symbols
are not present on a normal keyboard; therefore, to add such symbols to a page using HTML, the HTML entity name can be used.
It is important to note that these will not effect the HTML code themselves, and will always be interpreted as text. For example, if we wanted to type `<div>` as text on a webpage, we may need to use these symbol entities: `&lt;div&gt`.

If no entity name exists, either the entity number or hexadecimal reference can be used.

![Common HTML5 Symbols](http://ways2web.weebly.com/uploads/5/4/4/8/54485903/8779038_orig.png)

### Ampersand escape
If you want to show the entity name on a webpage like this:
```html
<p>&lt;html&gt;</p>
```
Then you need to use an ampersand escape, like below:
```html
<p>&amp;lt;html&amp;gt;</p>
```
This will display the entity name rather than the entity.

#### More Information:

* [W3 Schools Reference](https://www.w3schools.com/html/html_symbols.asp)
* [Symbols Reference Chart](https://dev.w3.org/html5/html-author/charref)
* [Toptal Reference](https://www.toptal.com/designers/htmlarrows/symbols/)

