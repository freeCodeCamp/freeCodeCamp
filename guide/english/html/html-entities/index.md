---
title: HTML Entities
---

# HTML Entities

## Overview

###	What are HTML Entities?

HTML entities are characters that are used to replace reserved characters in HTML or for characters that do not appear on your keyboard. Some characters are reserved in HTML. If you use the less than(<) or greater than(>) signs in your text, the browser might mix them up with tags.

###	What are they used for?

As mentioned about HTML entities are used in order to replace reserved characters that are reserved by HTML.

### How do you use them?

A character entity looks similar to this:
```html
<!-- format &[entity_name]; -->
<!-- example for a less-than sign (<) -->
&lt;
```
Or
```html
<!-- &#[entity_number]; -->
<!-- example for a less-than sign (<) -->
&#60;
```

## Reference Guide

This is by no means an exhaustive list but the links below will be able to give you more entities if the ones below do not work for your needs. Happy Coding.


| Character | Entity Name | Entity Number |	Description |
|-------|-----------|-----------|-------|
|       | `&nbsp; ` | `&#32;`   | Space |
|   !   | `&excl;`  | `&#33;`   | Exclamation mark |
|   "   |	`&quot;`  | `&#34;`   | Quotation mark |
|   #   |	`&num;`   | `&#35;`   | Number sign |
|   $   | `&dollar;`| `&#36;`   | Dollar sign |
|   ¢   | `&cent;`  | `&#162;`  | Cent sign |
|   €   | `&euro;`  | `&#8364;` | Euro sign |
|   £   | `&pound;` | `&#163;`  | GBP sign |
|   ¥   | `&yen;`   | `&#165;`  | Yen sign |
|   %   |	`&percnt;`| `&#37;`   | Percent sign |
|   &   |	`&amp;`	  | `&#38;`   | Ampersand |
|   '   | `&apos;`  | `&#39;`  	| Apostrophe |
|   (   | `&lpar;`  | `&#40;`   | Opening/Left Parenthesis |
|    )  | `&rpar;`  | `&#41;`   | Closing/Right Parenthesis |
|   *   | `&ast;`   | `&#42;`   | Asterisk |
|   +   | `&plus;`  | `&#43;`   | Plus sign|
|   ,   | `&comma;` | `&#44;`  	| Comma |
|   -   |	`&dash;`  | `&#45;`  	| Hyphen |
|   .   |	`&period;`| `&#46;`  	| Period |
|   /   | `&sol;`   | `&#47;`  	| Slash |
|   ©   | `&copy;`  | `&#169;`  | Copyright |
|   ®   | `&reg;`   | `&#174;`  | Registered Trademark |
|   "   | `&quot;`  | `&#34;`   | double quotation mark |
|  `>`  |  `&gt;`   | `&#62;`   | Greater-than sign |
|  `<`  |  `&lt;`   | `&#60;`   | Less-than sign |
|  `•`  |  `&bull;`   | `&#8226`   | Bullet point |


#### More Information:
There are plenty of HTML entites references out there; some examples are:
* [Table of Entities - W3](https://dev.w3.org/html5/html-author/charref)
* [W3 Schools](https://www.w3schools.com/html/html_entities.asp)
* [Freeformatter](https://www.freeformatter.com/html-entities.html)
