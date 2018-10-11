---
title: UTF 8 Reference
---
## UTF 8 Reference

UTF 8 is an encoding scheme used to translate the characters we see on screens into numbers computers can store. Specifying a character encoding like UTF8 will allow the browser to properly display advanced characters like accented letters and emoji.

In HTML documents, you can specify the character encoding on the page by placing this meta tag in the `head` tag of your HTML page: `<meta charset="UTF-8">`. UTF 8 is the standard encoding.

The [Unicode](https://www.unicode.org/) standard was developed in order to accomodate the characters used in languages across the world. 

But wait! What does Unicode have to do with UTF 8? UTF 8 is the encoding scheme but it is important to understand Unicode is the character set definition. In plain speak what this means is Unicode defines a unique number - called a code point - for many major characters used in languages across the world and UTF 8 will translate (aka encode) the character into computer-friendly binary format. <sup>1</sup> Here is an example:

  1. You want to mention freeCodeCamp somewhere in your web page (because, you know, freeCodeCamp is 🔥 🔥 🔥).
  2. The character code points to spell freeCodeCamp as defined in Unicode are:   

       | f | r | e | e | C | o | d | e | C | a | m | p |
       | :---: |  :---: |  :---: |  :---: |  :---: |  :---: |  :---: |  :---: |  :---: |  :---: |  :---: |  :---: |
       |102| 114| 101| 101|  67| 111| 100| 101|  67|  97| 109| 112|
  3. UTF 8 translates the code points to binary: 1100110 1110010 1100101 1100101 1000011 1101111 1100100 1100101 1000011 1100001 1101101 1110000  


### How to use UTF-8 In Your Webpage

Specify a meta tag with a charset of UTF 8 in your head tag.

```html
<head>
  <meta charset="utf-8">
</head>
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

* [Unicode Character Code Charts](https://www.unicode.org/charts/index.html)
* [HTML Unicode Reference](https://www.w3schools.com/charsets/ref_html_utf8.asp)
