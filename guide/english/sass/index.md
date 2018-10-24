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

Mixins are like functions for CSS. They allow you to break CSS down into modular chunks that can be reused anywhere in your stylesheets, and this helps us to avoid writing repetitive code. Mixins are created using the `@` symbol and included in other rules using `@include`.

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

## EXTENDS

Sometimes you’ll want one selector to share the styles of another selector. The `@extend` directive works like mixins in that you’re able to share snippets of code across your stylesheets. `@extend` is useful for sharing sets of related properties that get repeated in your stylesheets, such as base styles for button sets.

Example:
```
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

#### More Information
[Official Sass website](https://sass-lang.com/)
