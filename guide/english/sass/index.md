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

#### More Information
[Official Sass website](https://sass-lang.com/)
