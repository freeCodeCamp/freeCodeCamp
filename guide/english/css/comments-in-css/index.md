---
title: Comments in CSS
---
## Comments in CSS

Comments are used in CSS to explain a block of code or to make temporary changes during development. The commented code doesn't execute. 

The comment syntax in CSS works for both single and multi-line comments. You can add as many comments to your stylesheet as you like.

```css
    /*
        This is
        a multi-line
        comment
    */
    
    /* This is a single line comment*/
    .group:after {
        content: "";
        display: table;
        clear: both;
    }
```

By using CSS comments to make your stylesheets more readable, the CSS will be easier to maintain in the future for you or another developer. 
It’s good practice to use CSS comments to help identify parts of any stylesheet that might be difficult to understand for someone who didn't write the code. 

You can also make your comments more readable by stylizing it.  

```css
/*
***
* SECTION FOR H2 STYLE 
***
* A paragraph where I give informations
* about everything that someone who reads the code
* but didn't write it would need to know.
* The asterisk around the paragraph makes it more readable.
***
*/
```

You can add as many comments to your stylesheet as you like. It’s good practice to use CSS comments to help identify parts of any stylesheet that might be difficult to understand from a cursory glance. Comments are especially important when working in a team, when your code must be understood by others. By using CSS comments to make your stylesheets more readable, the CSS will be easier to maintain in the future.

## Comment Formats

Comments should be used everyday in your CSS to keep in maintainable and readable by any dev who dives into said CSS.
Here are a few exmples to get you started of CSS comments you can use in your daily work to make your life that bit easier.

``` css
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   CSS TABLE OF CONTENTS
   
   1.0 - Reset
   2.0 - Fonts
   3.0 - Globals
   4.0 - Color Palette
   5.0 - Header
   6.0 - Body
       6.1 - Sliders
       6.2 - Imagery
   7.0 - Footer
   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/****************************************************************************
1.0 - Reset */

/****************************************************************************
2.0 - Fonts */

/****************************************************************************
3.0 - Globals */

/****************************************************************************
4.0 - Color Palette */

/****************************************************************************
5.0 - Header */

/****************************************************************************
6.0 - Body */

    /************************************************************************
    5.1 - Sliders */
    
    /************************************************************************
    5.2 - Imagery */
    
/****************************************************************************
7.0 - Footer */
``` css

h2 {
    font-size: 1.2em;
    font-family: "Ubuntu", serif;
    text-transform: uppercase;
    }
```

Tip: Many code editors will comment a highlighted portion of text by typing `CMD + /` (Mac) or `CTRL + /` (Windows).

### More Information:

* [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
* [CSS Comments by Adam Roberts](https://www.sitepoint.com/css-comments/)
* [CSS Guidelines](https://cssguidelin.es/#commenting) 
