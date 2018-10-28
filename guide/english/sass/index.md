---
title: Sass
---
Sass (Syntactically Awesome Style Sheets) is a preprossessor scripting language that compiles CSS. It essentially brings the power of a standard programming language (e.g. loops, variables, conditional statements, etc...) to your stylesheets.

## Store data with Sass variables:
One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.
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
In Sass, a mixin is a group of CSS declarations that can be reused throughout the style sheet.
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

## Partials:

Partials in Sass are separate files that hold segments of CSS code. These are imported and used in other Sass files. This is a great way to group similar code into a module to keep it organized.

Names for partials start with the underscore *(_)* character, which tells Sass it is a small segment of CSS and not to convert it into a CSS file. Also, Sass files end with the .scss file extension. 

## Import
To bring the code in the partial into another Sass file, you can use the @import directive.
Let's say we have a couple of Sass files, _add.scss and main.scss. We want to import _add.scss into main.scss.
Example:
```
//_add.scss
body,
ul,
ol {
   margin: 0;
  padding: 0;
}
```
```
//main.scss
@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

#### More Information
[Official Sass website](https://sass-lang.com/)
