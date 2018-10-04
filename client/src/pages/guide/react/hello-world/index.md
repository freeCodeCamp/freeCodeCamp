---
title: Hello World
---
## Hello World !!

Every language learning starts with Traditional Hello World example. Here, you get introduced to React with the same HelloWorld program.

Everything in React is a component. So firstly, you need to create HelloWorld component.

#### HelloWorld.js

```javascript
  import React from 'react';

  class HelloWorld extends React.Component{
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

  export default HelloWorld;
```

You need to have index.html which has a div with id=”helloWorld” where our HelloWorld component gets rendered.

#### index.html

```html
  <!doctype html>
  <html>
    <head>
      <title>Hello World !!</title>
    </head>
    <body>
      <div id="helloWorld"></div>
    </body>
  </html>
```

Then, you need to create index.js that act as link between HelloWorld.js and index.html, which tells exactly where we need to render the component.

#### index.js

```javascript
  import ReactDOM from 'react-dom';
  import HelloWorld from './HelloWorld';

  ReactDOM.render(<HelloWorld />, document.getElementById('helloWorld'));
```

Congrats !! You have created your first React component. You learn more about React in the coming articles.

Happy Coding !!
