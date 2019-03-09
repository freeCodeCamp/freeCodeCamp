---
title: Sass
---

Sass (Syntactically awesome style sheets) is a preprocessor scripting language initially designed by Hampton Catlin that compiles CSS. It essentially brings the power of a standard programming language to your stylesheets. Sass files end with the `.scss` file extension. 

With Sass, you can make your CSS considerably more efficient. Some of its key features include:
- **nesting** which allows you to order child elements inside of their parents on your stylesheet
- **mixins** which allow you to apply the same style to multiple elements without having to copy and paste 
- **for**, **if**, and **else** statements which allow you to apply styles only in specific conditions
- **partials** which allow you to take chunks of your CSS and import them into other `.scss` stylesheets
- **extend** which allows you to take the style from one element into another

## Store data with Sass variables

One of the main features of Sass is its ability to define variables. You can define variables for almost anything such as color, font, units, etc.
Variables can be defined in Sass by using the `$` and variable name. (e.g., if I want my website's theme color to be blue. I can write:
```sass
$themeColor: blue; //defines theme color
$baseFont: 14px; // defines font size
```

Now I can use the variable to set color in my website:
```sass
p {
  color: $themeColor;
  font-size: $baseFont;
}
```

And it also makes it easier to change the theme color of my website without having to change the color *blue* in every element style. I can simply change the variable value:
```sass
$themeColor: red; //changed the color from blue to red
```

## Nest CSS within SASS

Another great feature of Sass is nesting. Nesting saves you from having to write too much code. If you have an element inside of another element, you don't have to write more lines of code to target the child element. It can be understood with and example.

Suppose you have a heading element inside of a div with a class of *parent*.
```html
<div class="parent">
  <h1>The heading</h1>
</div>
```

In plain CSS, to style the *parent* element and the heading inside of the *parent* element, you have to write:
```css
.parent {
  background: #e3e3e3;
  border: 1px solid #c1c3c1;
}
.parent h1 {
  color: #333;
}
```
But in Sass, you can nest one selector inside of the other:
```sass
.parent {
  background: #e3e3e3;
  border: 1px solid #c1c3c1;
   h1 {                       //nested inside .parent element
     color: #333;
   }
}
```

which would compile to:
```css
.parent {
  background: #e3e3e3;
  border: 1px solid #c1c3c1;
}
.parent h1 {
  color: #333;
}
```

## Mixins
Mixins are like functions for CSS. They allow you to break CSS down into modular chunks that can be reused anywhere in your stylesheets, and this helps us to avoid writing repetitive code. Mixins are created using the `@` symbol and included in other rules using `@include`.

To create a mixin, use the `@mixin` command followed by a space and the name of your mixin.

Example:

```sass
@mixin box-shadow() {   
  -webkit-box-shadow: 10px 10px 5px 0px;
  -moz-box-shadow: 10px 10px 5px 0px;
  -ms-box-shadow: 10px 10px 5px 0px;
  box-shadow: 10px 10px 5px 0px;
}
```

You can now use your mixin like this:

```sass
.mydiv{
  @include box-shadow();
}
```

Mixins can also take arguements. For example:
```sass
@mixin box-shadow($x,$y,$blur,$c){
  -webkit-box-shadow: $x,$y,$blur,$c;
  -moz-box-shadow: $x,$y,$blur,$c;
  -ms-box-shadow: $x,$y,$blur,$c;
   box-shadow: $x,$y,$blur,$c;
}

.mydiv {
  @include box-shadow(0px,0px,5px,#fff);
}
```

## Extends
Sometimes you’ll want one selector to share the styles of another selector. The `@extend` directive works like mixins in that you’re able to share snippets of code across your stylesheets. `@extend` is useful for sharing sets of related properties that get repeated in your stylesheets, such as base styles for button sets.

Example 1:
```sass
.btn--primary {
  background-color: #333;
  border-radius: 5px;
  text-transform: uppercase;
}
.btn--callout {
  @extend .btn;
}
.btn--info {
  @extend .btn;
}
```

Example 2:
```sass
%success {
  background-color:green;
  color:white;
}

#myDiv {
  @extend %success;
  font-size:10px;
}

#myOtherDiv {
  @extend %success;
  font-size:20px;
}
```
Both selectors(`#myDiv` and `#myOtherDiv`) will inherit properties from `%success`, while maintaining their own unique properties.

## Functions
Sass has built in functions which can be easily used to manipulate colors.

### Darken + Lighten
The first argument contains the color, the second the percentage adjusted.

```sass
$heading-color
.nav-bar li {
  &.active {
    darken( $heading-color, 10% );
  }
  &:hover {
    lighten( $heading-color, 10% );
  }
}
```

Sass also provides control directives such as `@if`, `@for`, `@each` and `@while`

### @if
```sass
$boolean: true

@if $boolean
  .header {
    display: block;
  }
@else
  .header {
    display: none;
  }
```

## Operators

Sass adds mathematical operators, such as +, -, *, / and % to CSS.

Example:

```sass
#myDiv {
  height: 1920px / 480px;
  width: 1080px * 2;
}
```

## Additional Resources
- [Official Sass website](https://sass-lang.com/)
