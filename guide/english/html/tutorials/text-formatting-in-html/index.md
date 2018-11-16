---
title: Text Formatting in HTML
---

## Text Formatting in HTML
HTML provides you with a lot of useful elements for text formatting. It allows to make your text bold, italic, marked and much, much more. Of course, this is all for a reason - to get the important points across to the reader.

### Bold and Strong
You can make your text bold by using the `<b>` element. This makes words bold, and provides strong emphasis to a certain word or phrase.

<br/>Example:
```html
<p>The most important part of your code is <b>the end</b>, cause it can affect <b>everything!</b></p>
```

<br/> Note: You can also use `<strong>` as well. They both bold the text.

### Italics and Emphasis
If you want to write your messages in italics, you can use the `<i>` element.

<br/>Example:
```html
<p>I hate it when I start talking in Latin, it makes me <i>Lorem Ipsum</i>!</p>
```

<br/>Note: You can also use `<em>` as well. While visually, they are the same, the semantic definitions are different. `<em>` is generally used for emphasis, while `<i>` can be used for foreign words, etc.

### Small 
It makes your text smaller than the normal font size. This element's meaning was changed in HTML5 - it now represents side-comments and small print. 

<br/>Example:
```html
<p>Normal, <small>small</small>, normal, <small>small</small>!</p>
``` 

### Marked
The element `<mark>` makes your text marked. In other words, it makes your text highlighted. You can use it to tell readers things of importance.

<br/>Example:
```html
<p> The land of HTML is a strange and mysterious land, and it's our job to <mark>explore it all!</mark></p>
``` 

### Deleted 
The element `<del>` shows strikethrough. It's useful if you want to <del>corroct</del> correct something.
<br/>Example:
```html
<p>WWI started in <del>1913</del> 1914.</p>
``` 

### Underlined
Underlining is a tricky thing in HTML. The best way to underline your code is to use CSS and set `text-decoration` value to "underline". If you need to, the default for the element `<ins>` will underline your code.

<br/>Example:
```html 
<p>I like drawing <ins>lines under my words</ins></p>
``` 

<br/>Note: `<ins>` actually means "Inserted", and is intended to depict inserted text. 
<br/>Note 2:`<u>` used to be underline in HTML 4.01, but in HTML5 it was redefined to show that a word had some form of non-textual annotation applied. The default of `<u>` is a simple underline, but this can be changed using CSS.

### Subscripted 
Using the element `<sub>` makes your text subscripted (ie. it becomes smaller and gets shown near the bottom).

<br/>Example:
```html 
<p>I use subscripts in math! For example, I can say x<sub>1</sub>!</p> 
``` 

### Superscripted 
If you want to make your text superscripted (ie. it becomes smaller but gets shown near the top), use the element `<sub>`!

<br/>Example:
```html
<p>10<sup>2</sup> = 100</p>
``` 
