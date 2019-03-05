---
title: Text
---

## Text

Several properties are provided by CSS to change the look and feel of the text. Various text properties are explained below.

#### Text Color

``` html
<html>
  <body>
    <p>This is an example of CSS text property.</p>
  </body>
</html>
```
``` css
p {
    color:red;
 }
```

In the above example, the text `color` of `<p>` element is changed to red. You can also specify the color as RGB values, HLS values, and hex codes (For more information about colors, click [here](https://guide.freecodecamp.org/css/colors)).
  
#### Text Alignment

`text-align` property is used to set horizontal alignment of text. It can take values `left`,`right`,`center`,and `justify`.
``` css
p {
    text-align: center;
 }
```

Here the text is aligned to the `center` ([example](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align)).When `text-align` is set to `justify`,each line is stretched so that every line has equal width, and the left and right margins are straight ([example](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align_all)).
  
#### Text Decoration

``` css
p {
    text-decoration: underline;
}
```

The `text-decoration` property is used to set or remove decorations from text. The value `text-decoration: none;` is often used to remove underlines from links. Other `text-decorations` include `overline`,`line-through`,and `underline` ([example](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-decoration)).
  
#### Text Transformation

``` css
p {
    text-transform: capitalize;
}
```

The `text-transform` property is used to convert the entire text to `uppercase`,`lowercase` or to `capitilize` each word([example](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-transform)).

#### Text Shadow

``` css
.header {
    text-shadow: 5px 5px 5px red;
}
```

The `text-shadow` property is used to add shadow to the text. The `h-shadow` (horizontal shadow, the first value) and `v-shadow` (vertical shadow, the second value) are required values. Then you can add `blur-radius` and `color` as optional values.
In the example provided above, the first value represents the horizontal value, the second is the vertical value, the third value is the blur value and the last one represents the color value.

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
- [W3Schools CSS text](https://w3schools.com/css/css_text.asp)


