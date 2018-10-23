---
title: Sass
---
Sass is a preprossessor scripting language that compiles CSS. It essentially brings the power of a standard programming language (e.g. loops, variables, conditional statements, etc...) to your stylesheets. Sass makes writing css a lot easier by reducing repetitive codes, using functions, loops, and conditions.

### Variables

One of the main features of Sass is its ability to define variables. You can define variables for almost anything such as color, font, units, etc. Variables can be defined in Sass by using the `$` and variable name. e.g. if I want my website's theme color to be blue. I can write
```
$themeColor: blue; //defines theme color
$baseFont: 14px; // defines font size
```
Now I can use the variable to set color in my website.
```
p{
  color: $themeColor;
  font-size: $baseFont;
}
```
And it also makes it easier to change the theme color of my website without having to change the color *blue* in every element style. I can simply change the variable value.
```
$themeColor: red; //changed the color from blue to red
```

### Nesting

Another great feature of Sass is nesting. Nesting saves you from having to write too much code. If you have an element inside of another element, you don't have to write more lines of code to target the child element. It can be understood with and example.

Suppose you have a heading element inside of a div with a class of *parent*.
```
<div class="parent">
  <h1>The heading</h1>
</div>
```

In plain CSS, you have to write
```
.parent{
  background: #e3e3e3;
  border: 1px solid #c1c3c1;
}
.parent h1{
  color: #333;
}
```
to style the *parent* element and the heading inside of the *parent* element. But in Sass, you can nest one selector inside of the other as

```
.parent{
  background: #e3e3e3;
  border: 1px solid #c1c3c1;
   h1{                       //nested inside .parent element
     color: #333;
   }
}
```
which will compile as 
```
.parent{
  background: #e3e3e3;
  border: 1px solid #c1c3c1;
}
.parent h1{
  color: #333;
}
```

#### More Information
[Official Sass website](https://sass-lang.com/)
