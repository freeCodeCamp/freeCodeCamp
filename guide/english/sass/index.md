---
title: Sass
---
Sass is a preprossessor scripting language that compiles CSS. It essentially brings the power of a standard programming language (e.g. loops, variables, conditional statements, etc...) to your stylesheets.

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
