react-spinkit
=============

A collection of loading indicators animated with CSS for React

Currently I've ported all the spinner animations from
[Spinkit](https://github.com/tobiasahlin/SpinKit). If you have other favorite
 css spinner you'd like to include, open an issue.

## Install

```console
$ npm install react-spinkit --save
```

## Usage
```javascript
var Spinner = require('react-spinkit');

<Spinner name='double-bounce' />
```

See more examples on the [demo page](http://kyleamathews.github.io/react-spinkit/).

## CSS
CSS is loaded automatically when using [Webpack](http://webpack.github.io) with the
[css-loader](https://github.com/webpack/css-loader) and [style-loader](https://github.com/webpack/style-loader), or Browserify/[CSSify](https://github.com/davidguttman/cssify)
 to build your project.

## External spinners
This also includes most of the spinners from [loaders.css](https://github.com/ConnorAtherton/loaders.css). Note that while
all of the native spinners from Spinkit are contained within their bounding divs,
some of the loaders.css spinners have a zero-sized parent div and extend outward
from that (as you can see on the demos page). Regardless of this, they are all
easily centerable with flexbox.

## Webpack or Browserify is required
Currently we only support Browserify and Webpack. If you'd like support
for other build tools that also support requiring CSS, PRs are welcome.

## Fades in spinners after one second
According to [research by Jakob Nielsen](http://www.nngroup.com/articles/response-times-3-important-limits/),
feedback after user operations isn't necessary for about a second so by
default, react-spinkit will fade in your spinner at one second. Nevertheless,
you can configure spinner fade-in behavior with the `fadeIn` prop, which
accepts values `full` (the default), `half`, `quarter`, and `none` for one
second, a half second, a quarter second, and no fade in, respectively.
For example: `<Spinner fadeIn='half' />`.

## PropTypes
* **name**—specify spinner to use (defaults to `three-bounce`).
* **fadeIn**-set the time before the spinner fades in.
* **overrideSpinnerClassName**—change the default `sk-spinner` className.
* **className**-add a custom classname to the outer div.
* **color**-programmatically set the color of the spinners; this can either be a
hex value or a color word.

## Server-side rendering
If you want to use this for server-side rendering, set
`process.env.REACT_SPINKIT_NO_STYLES` in your server build environment,
in webpack via `webpack.DefinePlugin`, or whatever is appropriate to your
build process. This will skip the import of styles and allow evaluation of
the SpinKit code in node.

## Demo and documentation
http://kyleamathews.github.io/react-spinkit/
