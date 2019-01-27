---
title: Sass
---
Sass is a preprocessor scripting language that compiles CSS. It essentially brings the power of a standard programming language to your stylesheets. Sass files end with the `.scss` file extension. 

With Sass, you can make your CSS considerably more efficient. Some of its key features include:

1. **mixins**, which allow you to apply the same style to multiple elements without having to copy and paste 
2. **for**, **if**, and **else** statements, which allow you to apply styles only in specific conditions
3. **partials**, which allow you to take chunks of your CSS and import them into other `.scss` stylesheets
4. **nesting**, which allows you to order child elements inside of their parents on your stylesheet
5. **extend**, which allows you to take the style from one element into another

## Store data with Sass variables:

Variable starts with '$' followed by variable name
```
// Sass Code
$main-fonts:Arial,sans-serif;
$heading-color:green;

// Css Code
h1{
  font-family: $main-fonts;
  color: $heading-color;
}
```

## Nest CSS within SASS:

On normal CSS codes we have to write each elements css seperate like:
```
.nav-bar{
  background-color: green;
}
.nav-bar ul{
  list-style : none;
}
.nav-bar ul li{
  display: inline-block;
}

```
So the above code in Sass code will be:
```
.nav-bar{
  background-color:green;
  ul{
    list-style: none;
    li{
      display: inline-block;
    }
  }
}
```

## MIXINS

Mixins are like functions for CSS.
Example:
```
@mixin box-shadow($x,$y,$blur,$c){
  -webkit-box-shadow: $x,$y,$blur,$c;
  -moz-box-shadow: $x,$y,$blur,$c;
  -ms-box-shadow: $x,$y,$blur,$c;
   box-shadow: $x,$y,$blur,$c;
}
.mydiv{
  @include box-shadow(0px,0px,5px,#fff);
}

```
#### More Information
[Official Sass website](https://sass-lang.com/)
