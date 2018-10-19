---
title: Setting Up a React Es6 and Webpack Project
---
This wiki will instruct you how to set up a bare-bones project that uses React, Webpack and ES6\. We'll go over getting everything set up in depth.

*   <a href='https://facebook.github.io/react/docs/why-react.html' target='_blank' rel='nofollow'>Help: More about React</a>

For this project we will make use of Webpack, which is a module bundler, and is commonly used in React projects.

*   <a href='https://webpack.github.io/docs/what-is-webpack.html' target='_blank' rel='nofollow'>Help: More about Webpack</a>

<a href='https://babeljs.io/blog/2015/06/07/react-on-es6-plus' target='_blank' rel='nofollow'>React goes well with ES6</a>, so we’re going to use ES6 in our code.

> ES6 is a significant update to the language, and the first update to the language since ES5 was standardized in 2009.  
> -- <a href='https://github.com/lukehoban/es6features' target='_blank' rel='nofollow'>lukehoban</a>

ES6 doesn’t work in browsers on its own yet, but we can make it work manually using Babel to transpile it to ES5.

A key feature of the technologies we are using is that our `index.html` file will refer to one bundled JavaScript file from which we can refer in other JavaScript files, rather than referring to them from the HTML file with `script` tags.

*   <a href='http://dev.venntro.com/2013/09/es6-part-1/' target='_blank' rel='nofollow'>Help: More about ES6</a>

## Prerequisites

This tutorial is intended to give you a bare bones structure upon which to expand. It should be a good starting point for anyone that wants to learn React and ES6\. If you haven’t built anything with JavaScript or jQuery yet, you should go through some of the exercises in the <a href='http://www.freecodecamp.com/map' target='_blank' rel='nofollow'>FreeCodeCamp map</a> first.

Before you start, make sure you have <a href='https://nodejs.org/en/download/' target='_blank' rel='nofollow'>NodeJS</a> and <a href='http://blog.npmjs.org/post/85484771375/how-to-install-npm' target='_blank' rel='nofollow'>Node Package Manager</a> installed at their most recent versions.

# Quick Instructions

Here is a list of all the instructions mentioned in this tutorial.

*   `npm install webpack webpack-dev-server -g`
*   `mkdir react-webpack-example && cd $_`
*   `touch webpack.config.js`
*   `npm init`
*   `npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react`
*   `touch .gitignore`
*   write `.gitignore` (use <a href='https://www.gitignore.io/api/node' target='_blank' rel='nofollow'>https://www.gitignore.io/api/node</a>)
*   `mkdir src`
*   `mkdir dist`
*   `mkdir src/js`
*   `touch src/js/client.js`
*   `touch dist/index.html`
*   write `dist/index.html`
*   write `src/js/client.js`
*   write `webpack.config.js`
*   `webpack`
*   `webpack-dev-server --content-base dist`
*   Open Webpack Dev Server route in browser. Done!