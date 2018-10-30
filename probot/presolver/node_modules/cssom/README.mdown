# CSSOM

CSSOM.js is a CSS parser written in pure JavaScript. It also a partial implementation of [CSS Object Model](http://dev.w3.org/csswg/cssom/). 

    CSSOM.parse("body {color: black}")
    -> {
      cssRules: [
        {
          selectorText: "body",
          style: {
            0: "color",
            color: "black",
            length: 1
          }
        }
      ]
    }


## [Parser demo](http://nv.github.com/CSSOM/docs/parse.html)

Works well in Google Chrome 6+, Safari 5+, Firefox 3.6+, Opera 10.63+.
Doesn't work in IE < 9 because of unsupported getters/setters.

To use CSSOM.js in the browser you might want to build a one-file version that exposes CSSOM global variable:

    ➤ git clone https://github.com/NV/CSSOM.git
    ➤ cd CSSOM
    ➤ npm install -d
    ➤ ./node_modules/.bin/jake
    build/CSSOM.js is done

To use it with Node.js or any other CommonJS loader:

    ➤ npm install cssom

## Don’t use it if...

You parse CSS to mungle, minify or reformat the following code:

```css
div {
  background: gray;
  background: linear-gradient(to bottom, white 0%, black 100%);
}
```

This pattern is often used to give browsers that don’t understand linear gradients a fallback solution (e.g. gray color in the example).
In CSSOM, `background: gray` [gets overwritten](http://nv.github.io/CSSOM/docs/parse.html#css=div%20%7B%0A%20%20%20%20%20%20background%3A%20gray%3B%0A%20%20%20%20background%3A%20linear-gradient(to%20bottom%2C%20white%200%25%2C%20black%20100%25)%3B%0A%7D).
The last same-name property always overwrites all the previous ones.


If you do CSS mungling, minification, image inlining, and such, CSSOM.js is no good for you, considere using one of the following:

  * [postcss](https://github.com/postcss/postcss)
  * [reworkcss/css](https://github.com/reworkcss/css)
  * [csso](https://github.com/css/csso)
  * [mensch](https://github.com/brettstimmerman/mensch)


## [Specs](http://nv.github.com/CSSOM/spec/)

To run specs locally:

    ➤ git submodule init
    ➤ git submodule update


## [Who uses CSSOM.js](https://github.com/NV/CSSOM/wiki/Who-uses-CSSOM.js)
