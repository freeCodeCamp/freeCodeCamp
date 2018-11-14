---
title: Your first React App
---
## Your first React App
### Installation

As specified in the previous artice (Installation), run the `Create React App` tool. After everything has finished, `cd` into the folder of your application and run `npm start`.
This will start a development server and you are all set to start developing your app!

- For node version 5.2+
```bash
npx create-react-app my-app

cd my-first-app
npm start
```

- For node versions below 5
```bash
npm install -g create-react-app
create-react-app my-first-app

cd my-first-app
npm start
```

### Editing the code

Start up your editor or IDE of choice and edit the `App.js` file in the `src` folder. When created with the `react-create-app` tool, there will already be some code in this file.

The code will consist of these parts:
#### imports
```JavaScript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
```

This is used by [webpack](https://webpack.js.org/) to import all required modules so that your code can use them. This code imports 3 modules:
1) `React` and `Component`, which allow us to use React as it should be used. (With components)
2) `logo`, which allows us to use `logo.svg` in this file.
3) `./App.css`, which imports the stylesheet for this file.

#### classes/components
```JavaScript
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
```

React is a library that makes use of Components, which let you split up your UI into independent, reusable pieces, and think about each piece in isolation.
There is already 1 component created, the `App` component. If you used the `create-react-app` tool, this component is the main component in the project and you should build around this central class.

We will look at components more detailed in next chapters.

#### exports
When creating a class in react, you should export them after declaration, which allows you to use the component in another file by using the `import` keyword. You can use `default` after the `export` keyword to tell React that this is the main class of this file.

```JavaScript
export default App;
```
### View the results!
When you've started the development server by issuing the `npm start` command, you can view the changes you add to your project live in your browser. After issuing the command, npm should open a browser automatically displaying your app.

### Sources
[1. React documentation](https://reactjs.org/docs/hello-world.html)
