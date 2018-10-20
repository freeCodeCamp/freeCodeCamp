---
title: Installing Dependencies for React with Webpack Projects
---
Now that we have an empty Webpack Configuration file (`webpack.config.js`) and a freshly made Package file (`package.json`), we need to install some dependencies. Installing dependencies automatically adds some data to our `package.json`.

This project will depend on React, ReactDOM, Webpack, and Webpack Dev Server. It will also depend on a number of Babel packages, because we are going to be writing code using ES6, and <a href='https://babeljs.io/' target='_blank' rel='nofollow'>Babel is an ES6 transpiler</a>.

The dependencies we require in detail:

| Package | Reason |  
| <a href='https://www.npmjs.com/package/react' target='_blank' rel='nofollow'>React</a> | 'An npm package to get you immediate access to React, without also requiring the JSX transformer.' |  
| <a href='https://www.npmjs.com/package/react-dom' target='_blank' rel='nofollow'>React DOM</a> | 'This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm.' |  
| <a href='https://www.npmjs.com/package/webpack' target='_blank' rel='nofollow'>Webpack</a> | 'Allows to split your codebase into multiple bundles, which can be loaded on demand.' |  
| <a href='https://www.npmjs.com/package/webpack-dev-server' target='_blank' rel='nofollow'>Webpack Dev Server</a> | 'Serves a webpack app. Updates the browser on changes.' |  
| <a href='https://www.npmjs.com/package/babel-loader' target='_blank' rel='nofollow'>Babel Loader</a> | 'Babel module loader for Webpack.' |  
| Babel Core | Required for Babel Loader. |  
| Babel Preset: ES2015 | Required for Babel Loader. |  
| Babel Preset: React | Required for Babel Loader. |

We can go ahead and install all these modules with a single command:

    npm install --save-dev react react-dom webpack webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react

If we look at our `package.json` file now, we will notice that our `devDependencies` has become a list of the Node packages we just installed. This is important because it means we can install these again if we need to using `npm install`.

*   <a href='http://stackoverflow.com/a/22004559/4637110' target='_blank' rel='nofollow'>Help: More about `dependencies` and `devDependencies`</a>