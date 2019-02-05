---
title: Sass
---

Sass is a preprocessor scripting language that compiles CSS. It essentially brings the power of a standard programming language to your stylesheets. Sass files end with the `.scss` file extension. 

With Sass, you can make your CSS considerably more efficient. Some of its key features include:
- **nesting** which allows you to order child elements inside of their parents on your stylesheet
- **mixins** which allow you to apply the same style to multiple elements without having to copy and paste 
- **for**, **if**, and **else** statements which allow you to apply styles only in specific conditions
- **partials** which allow you to take chunks of your CSS and import them into other `.scss` stylesheets
- **extend** which allows you to take the style from one element into another

## Store data with Sass variables
One of the main features of Sass is its ability to define variables. You can define variables for almost anything such as color, font, units, etc.

Variables can be defined in Sass by using the `$` and variable name. (e.g., if I want my website's theme color to be blue. I can write:
```css
$themeColor: blue; //defines theme color
$baseFont: 14px; // defines font size
```

Now I can use the variable to set color in my website:
```css
p {
  color: $themeColor;
  font-size: $baseFont;
}
```

And it also makes it easier to change the theme color of my website without having to change the color *blue* in every element style. I can simply change the variable value:
```css
$themeColor: red; //changed the color from blue to red
```

## Nest CSS within SASS
Another great feature of Sass is nesting. Nesting saves you from having to write too much code. If you have an element inside of another element, you don't have to write more lines of code to target the child element. It can be understood with and example.

Suppose you have a heading element inside of a div with a class of *parent*.
```css
<div class="parent">
  <h1>The heading</h1>
</div>
```

In plain CSS, you have to write
```css
.parent {
  background: #e3e3e3;
  border: 1px solid #c1c3c1;
}
.parent h1 {
  color: #333;
}
```

to style the *parent* element and the heading inside of the *parent* element. But in Sass, you can nest one selector inside of the other:
```css
.parent {
  background: #e3e3e3;
  border: 1px solid #c1c3c1;
   h1 {                       //nested inside .parent element
     color: #333;
   }
}
```

which will compile as:
```css
.parent {
  background: #e3e3e3;
  border: 1px solid #c1c3c1;
}
.parent h1 {
  color: #333;
}
```

## MIXINS
Mixins are like functions for CSS.

Example:
```css
@mixin box-shadow($x,$y,$blur,$c) {
  -webkit-box-shadow: $x,$y,$blur,$c;
  -moz-box-shadow: $x,$y,$blur,$c;
  -ms-box-shadow: $x,$y,$blur,$c;
   box-shadow: $x,$y,$blur,$c;
}

.mydiv {
  @include box-shadow(0px,0px,5px,#fff);
}
```

## Additional Resources
- [Official Sass website](https://sass-lang.com/)
