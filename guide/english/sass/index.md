---
title: Sass
---
Sass is a preprossessor scripting language that compiles CSS. It essentially brings the power of a standard programming language (e.g. loops, variables, conditional statements, etc...) to your stylesheets.

## Store data with Sass variables:

Variable starts with '$' followed by variable name
```sass
$main-fonts: Arial,sans-serif;
$heading-color: green;
```
```css
h1{
  font-family: $main-fonts;
  color: $heading-color;
}
```

## Nest CSS within SASS:

On normal CSS codes we have to write each elements css seperate like:
```css
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
```sass
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
To create a mixin, use the `@mixin` command followed by a space and the name of your mixin.

For example:

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
```

You can now pass your arguments into your mixin like this:
```sass
.mydiv{
  @include box-shadow(0px,0px,5px,#fff);
}
```

#### More Information
* [Official Sass website](https://sass-lang.com/)
