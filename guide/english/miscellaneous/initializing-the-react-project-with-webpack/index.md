---
title: Initializing the React Project with Webpack
---
The first thing to do is open our terminal/command line. We need to install Webpack and Webpack Dev Server globally.

*   <a href='https://docs.npmjs.com/getting-started/installing-npm-packages-globally' target='_blank' rel='nofollow'>Help: More about installing Node Modules globally</a>

    npm install webpack webpack-dev-server -g

Installing these modules globally means that we can refer to use their respective command line interfaces in the terminal. Installing Webpack allows us to run `webpack` from the terminal to execute a Webpack script. Installing Webpack Dev Server allows us to run a localhost server using our Webpack configuration. This will all become clear a little later.

In your directory of choice, make a new directory, for example `react-webpack-example`, and change directory into it:

    mkdir react-webpack-example && cd $_

Now that we're in our new directory, we need to create our Webpack file, which will live in the root. This is a configuration file, and so we name it `webpack.config.js`.

    touch webpack.config.js

Now, we can go ahead and <a href='https://docs.npmjs.com/cli/init' target='_blank' rel='nofollow'>initialise an npm project</a> using the following command:

    npm init

We can go ahead and press the enter key to cycle through the options presented to us in the terminal.

The `npm init` command will create a `package.json` file, which is going to contain important data about our project.

So far, this is what our tree should look like:  

    .
    ├── package.json
    └── webpack.config.js

If you open your `package.json` file, you should see something like this:

    {
      "name": "react-webpack-example",
      "version": "1.0.0",
      "description": "",
      "main": "webpack.config.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }