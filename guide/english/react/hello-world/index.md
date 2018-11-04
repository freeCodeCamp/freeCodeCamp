---
title: Hello World
---
## Hello World !!

Every language learning starts with a traditional Hello World example. Here, you get introduced to React with the same Hello World program.

Everything in React is a component. 

But before that we need to make sure to have node.js and npm installed in the computer. Optionally we can use CRA(Create React App) which is a tool built by developers at Facebook to help you build React applications. It saves you from time-consuming setup and configuration. You simply run one command and create-react-app sets up the tools you need to start your React project.

We can install it through the following commands 
```
npm install -g create-react-app

create-react-app my-app

cd my-app
npm start
```

The command line should give you an output where you can find the application in the browser. The default should be localhost:8080. If you are only using IE or Edge on your Windows machine, I can recommend you to install Chrome as well to access the developer environment and the React Developer Tools which are available as Chrome extension.

** If you don't use Chrome, there are extensions that let you use Chrome extensions. **

![alt react starting page](https://cdn-images-1.medium.com/max/800/1*Qcry5pCXIy2KeNRsq3w7Bg.png)

#### src/App.js

copy the code below and paste it into src/App.js

```javascript
  import React from 'react';

  class App extends React.Component{
    constructor(props) {
      super(props);
    }

    render(){
      return(
        <div>
          <p>Hello World !!</p>
        </div>
      );
    }
  }

  export default App;
```
If we check the index.js file in the src folder, we find that the above App.js is called into index.js and then rendered. 

```javascript
// Other code
import App from './App'; // The App component is imported

// Other code
ReactDOM.render(<App />, 
document.getElementById('root'));  //The <App /> is the way components are called in react after importing them

// Other code

```

In the above, App.js is called a component. Normally, we make multiple components and put them together in App.js, which will then be rendered in index.js, and finally, into the root div in index.html.

Congrats!! You have created your first React Hello World app. You can learn more about React in the other React Guide articles.

Happy Coding!!
