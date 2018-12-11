---
title: Running Webpack and Webpack Dev Server
---
The time has come to use Webpack. Because Webpack is installed globally, we can run the following in our terminal:

    webpack

This will run our `webpack.config.js` file. It should run successfully, and we should see something like this appear in our terminal:

    Hash: 2474b15611d8d75c5a39
    Version: webpack 1.12.14
    Time: 1721ms
        Asset    Size  Chunks             Chunk Names
    bundle.js  679 kB       0  <a href='https://webpack.github.io/docs/webpack-dev-server.html' target='_blank' rel='nofollow'>emitted]  main
        + 159 hidden modules

Notice that it refers to an `Asset` called `bundle.js`. Webpack is telling us that this file has been created when we ran the `webpack` command. Check out your `dist` folder, and you should see your `bundle.js` alongside your `index.html`.

Our tree will now look like this:

    .
    ├── dist
    |   ├── bundle.js
    │   └── index.html
    ├── node_modules
    ├── package.json
    ├── src
    │   └── js
    │       └── client.js
    └── webpack.config.js

So now that we have a `dist/bundle.js`, our `dist/index.html` file is now referring to a file that exists! If we take a look at `bundle.js`, we'll see that it's a bundle of all the JavaScript files in our project. Cool!

Go ahead and search for some contents of our `dist/bundle.js`, like `This is one cool app!`. We can see its context in the file, it's within a weird looking method:

    _createClass(Main, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'This is one cool app!'
          )
        );
      }
    }]);

This is what Babel has done; it has converted the code to ES5 and bundled it among other JavaScript files - including all our Node Modules, of course. Now all our React files can refer to this bundle using ES6 `import` statements.

Finally, it's time to check out the app in a browser. For this, we are going to use Webpack Dev Server, which is a feature-rich tool to use for setting up a `localhost` server for developing purposes when using Webpack.

*   [Help: More about Webpack Dev Server</a>

Go ahead and run:

    webpack-dev-server --content-base dist

We need to include `--content-base dist` to specify a content base to Webpack Dev Server, so that it knows where to get files to serve; in this case, it's the `dist` folder, because that is the folder that we are using for **production** as opposed to the `src` folder, which we are using for *development**.

In our terminal, we should see something like the following:

    http://localhost:8080/webpack-dev-server/
    webpack result is served from /
    content is served from /Code/react-webpack-example/dist
    Hash: 2474b15611d8d75c5a39
    Version: webpack 1.12.14
    Time: 3738ms

Following that will be a very long list of all the files bundled into `dist/bundle.js` by Webpack. Amazing!

Now is the time to head to the URL provided by that `webpack-dev-server` command, `http://localhost:8080/`. We should see a page with an `h1` that reads:

    This is one cool app!

Let's Check out your Elements pane of our Developer Tools. We should have the following:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>React Webpack Example</title>
      <style type="text/css"></style>
    </head>
    <body>
      <!-- React app will be injected into the following `div` element: -->
      <div id="app">
        <div data-reactid=".0">
          <h1 data-reactid=".0.0">This is one cool app!</h1>
        </div>
      </div>
      <!-- Include bundled JavaScript: -->
      <script src="bundle.js"></script>
    </body>
    </html>

If we this to what we wrote in `src/js/client.js`, we will see how React renders into the `dist/index.html`.

If you got this far, well done! Now you know how to set up a workspace using React, Webpack and ES6 code, which is awesome, and gives you the starting point for making impressive web apps using cutting edge technologies.

In the next tutorial we will cover some more advanced steps, including:

*   Going into more detail with React
*   Looking at some other cool features of Webpack, like compiling Sass files
*   Using minification on our `dist/bundle.js`

#### More Information:

<a href="https://webpack.js.org/" target='blank' rel='nofollow'>Webpack website</a>

<a href="https://github.com/webpack/webpack" target='blank' rel='nofollow'>Webpack Github</a>

<a href="https://github.com/webpack/webpack-dev-server" target='blank' rel='nofollow'>webpack-dev-server Github</a>