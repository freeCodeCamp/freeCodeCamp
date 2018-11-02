---
title: Writing Code for Your Es6 React with Webpack Project
---
## dist/index.html

We can go now open our `dist/index.html`. This will be the one HTML page that loads our entire app. We don't need much code at all for this file, just enough to:

*   Set an element for the React DOM in the `src/js/client.js`.
*   Link to our bundled JavaScript file (which doesn't exist yet).

Therefore, this is what our `dist/index.html` file will look like:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>React Webpack Example</title>
    </head>
    <body>
      <!-- React app will be injected into the following `div` element: -->
      <div id="app"></div>
      <!-- Include bundled JavaScript: -->
      <script src="bundle.js"></script>
    </body>
    </html>

You might be wondering why this page links to a `bundle.js` when all we have so far is an empty `src/js/client.js`. This will be revealed later when we write our Webpack configuration file.

## src/js/client.js

Now it's time to write some React code. Just like in the `dist/index.html` file, for now we will write just enough code to get the app going, so there won't be much code required at all:

    import React from 'react';
    import ReactDOM from 'react-dom';

    class Main extends React.Component {
      render() {
        return (
          <div>
            <h1>This is one cool app!</h1>
          </div>
        );
      }
    }

    const app = document.getElementById('app');
    ReactDOM.render(<Main />, app);

The code that looks like HTML elements is actually JSX, which is a part of React.

*   <a href='http://buildwithreact.com/tutorial/jsx' target='_blank' rel='nofollow'>Help: More about JSX</a>

To explain what is going on in this file, we'll break it down:  
- First, we are importing `React` and `ReactDOM`. These are required for any React file that is used to inject code into the DOM. The `ReactDOM` is a virtual DOM, and it's not the same thing as the standard Document Object Model.

*   <a href='https://facebook.github.io/react/docs/glossary.html' target='_blank' rel='nofollow'>Help: More about the React DOM</a>
    *   Next, we are creating a React class. Classes were added to JavaScript in ES6\. Therefore, this is the ES6 method of writing a React class, but of course <a href='https://toddmotto.com/react-create-class-versus-component/' target='_blank' rel='nofollow'>we can write one in ES5 too</a>.

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes' target='_blank' rel='nofollow'>Help: More about ES6 classes</a>

Every React class has a `render` method. In this case, the `render` method is `return`ing a JSX `div` element. This is what we'll see all over any React file. The class can contain other methods which must appear before the `render` method, which always goes at the bottom of a class.

*   Lastly, we are linking React with our `index.html`. We set the `app` to be the location of wherever we want our React code to be injected. And finally, using ReactDOM, we inject the component we wrote, `<Main />`, into the app, which in this case is the `div` with the `id` of `app`.

## webpack.config.js

There's still one more file left to write before our project is ready. It's the Webpack configuration file. At first, `webpack.config.js` files can be confusing to look at, but often, they're not as complex as they seem.

In this case, at its most basic, a `webpack.config.js` exports an object that has the following properties:

| Property | Role |  
| --- | --- |  
| entry | What goes in: the entry point of the app. In this case, it's `src/js/client.js`. |  
| output | What comes out: what Webpack is going to bundle for us. In this case, it's whatever we name it in the `webpack.config.js`. |  
| loaders | The tasks that Webpack is going to carry out. |

Here is what the `webpack.config.js` file looks like:

    var path = require('path');
    var srcPath = path.join(__dirname, 'src');
    var buildPath = path.join(__dirname, 'dist');

    module.exports = {
      context: srcPath,
      entry: path.join(srcPath, 'js', 'client.js'),
      output: {
          path: buildPath,
          filename: "bundle.js"
      },
      module: {
          loaders: <a href='https://en.wikipedia.org/wiki/Don%27t_repeat_yourself' target='_blank' rel='nofollow'>
              {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                  presets: ['react', 'es2015']
                }
              }
          ]
      }
    };

Again, let's break it down so that it's clear what this file is doing:

*   Firstly, we are requiring NodeJS's `path` module so that we can handle file paths, which is required for setting the object's `context`. It's very important to use this module rather than try and concatenate directories with strings, because some operating systems, like Windows, require this.

*   Then, we specify a `srcPath` and a `buildPath` using the `path` module that we just required. Doing this will ensure we have [DRY</a>, readable code.

*   Now comes the time to write the object. The properties we are going to use are all relevant to Webpack.

    *   We first provide a context, which simply specifies where our app is. It refers to the `context` variable that we just created.
    *   We then specify the entry point, which is of course the React app we wrote earlier (`src/js/client.js`).
    *   Next we specify the name of the bundled file that Webpack creates when it runs. In this case it's `dist/bundle.js`. Sound familiar? It should do, because this is the file we are linking to from our `dist/index.html`!
    *   Finally comes the `module` property, which contains an array, `loaders`, which currently contains a single object. This object's properties tell Webpack what JavaScript files are being written with ES6 and React, so that its loader, `babel` can run accordingly when `webpack.config.js` is run. This is largely boilerplate code that we can see at <a href='https://github.com/babel/babel-loader' target='_blank' rel='nofollow'>the readme page on Babel Loader</a>.

If `webpack.config.js` is confusing now, don't worry, as long as you understand what it is there to do.

*   <a href='https://webpack.github.io/docs/tutorials/getting-started/#config-file' target='_blank' rel='nofollow'>Help: More about writing a Webpack configuration file</a>