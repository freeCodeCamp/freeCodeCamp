---
title: CSS Preprocessors
---

## CSS Preprocessors

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
CSS Preprocessors are increasingly becoming a mainstay in the workflow of front end web developers. CSS is an incredibly complicated and nuanced language, and in an effort to make its usage easier, developers often turn to using preprocessors such as SASS or LESS.

CSS Preprocessors compile the code which is written using a special compiler, and then use that to create a css file, which can then be refereneced by the main HTML document. When using any CSS Preprocessor, you will be able to program in normal CSS just as you would if the preprocessor were not in place, but you also have more options available to you. Some, such as SASS, has specific style standards which are meant make the writing of the document even easier, such as the freedom to omit braces if you choose to do so. 

Of course, CSS Preprocessors also offer other features as well. Many of the features offered are incredibly similar across preprocessors, with only slight variances in syntax. Thus, you can choose pretty much anyone you wish, and will be able to achieve the same things. Some of the more useful features are: 

### Variables
One of the most commonly used item in any programming language is the variable, something which CSS notably lacks. By having variables at your disposal, you may define a value once, and reuse if throughout the entire program. An example of this in SASS would be: 

```SASS
$yourcolor: #000056
.yourDiv {
  color: $yourcolor;
 }
``` 
By declaring the ```SASS yourcolor``` variable once, it is now possible to reuse this same exact color throughout the entire document without ever having to retype the definition.

### Loops
Another common item in languages are loops, something else CSS lacks. Loops can be used to repeat the same instructions multiple times without having to be reentered multiple times. An example with SASS would be: 

```SASS 
@for $vfoo 35px to 85px {
  .margin-#{vfoo} {
    margin: $vfoo 10px;
   }
 }
```
This loop saves us from having the to write the same code multiple times to change the margin size.

### If/Else Statements
Yet another feature which CSS lacks are If/Else statements. These will run a set of instructions only if a given condition is true. An example of this in SASS would be:
```SASS
@if width(body) > 500px {
  background color: blue;
 } else {
  background color: white;
 }
```
Here, the background color will change color depending on the width of the page's body. 


These are but a few of the major functions of CSS Preprocessors. As you can see, CSS Preprocessors are incredibly useful and versitile tools. Many web developers use them, and it is highly recommended to learn at least one of them. 
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
SASS: http://sass-lang.com/

LESS: http://lesscss.org/

Stylus: http://stylus-lang.com/

MDN Page: https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor
