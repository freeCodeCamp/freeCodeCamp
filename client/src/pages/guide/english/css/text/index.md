---
title: Text
---

## Text

Several properties are provided by CSS to change the look and feelof the text.Various text properties are explained below.

#### Text Color

``` html
<html>
  <body>
    <p>This is an example of css text propertiy.</p>
  </body>
</html>
```
``` css
p{
    color:red;
 }
```
In the above example, the text `color` of `<p>` element is changed to red. You can also specify the color as RGB values, HLS values, and hex codes (For more information about colors, click <a href =' guides/src/pages/css/colors/index.md ' target='_blank'>here<a>).
  
#### Text Alignment

`text-align` property is used to set horizontal alignment of text.It can tak values `left`,`right`,`center`,and `justify`.
``` css
p{
    text-align:center;
 }
```
Here the text is alligned to the `center`(<a href ="https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align" target="_blank">example<a>).When `text-align` is set to `justify`,each line is stretched so that every line has equal width, and the left and right margins are straight(<a href ="https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align_all" target="_blank">example<a>).
  
#### Text Decoration

``` css
p {
    text-decoration: underline;
}
```
The `text-decoration` property is used to set or remove decorations from text.The value `text-decoration: none;` is often used to remove underlines from links.Other `text-decorations` include `overline`,`line-through`,and `underline`(<a href ="https://www.w3schools.com/css/tryit.asp?filename=trycss_text-decoration" target="_blank">example<a>).
  
#### Text Tranformation

``` css
p {
    text-transform:capitiize;
}
```
The `text-transform` property is used to convert the entire text to `uppercase`,`lowercase` or to `capitilize` each word(<a href ="https://www.w3schools.com/css/tryit.asp?filename=trycss_text-transform" target="_blank">example<a>).

#### Letter Spacing

The `letter-spacing` property sets the space between characters in a text.
``` css
p {
    letter-spacing: 5px;
}
```

#### Line Height

The `line-height` property sets the space between two lines of text.
``` css
p {
    line-height: 5px;
}
```

#### Word Spacing

The `word-spacing` sets the space between words in a text.
``` css
p {
    word-spacing: 5px;
}
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href ="https://w3schools.com/css/css_text.asp" target='_blank'>W3Schools CSS text<a><br>


