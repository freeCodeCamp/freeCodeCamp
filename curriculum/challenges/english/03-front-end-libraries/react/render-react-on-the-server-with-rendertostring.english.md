---
id: 5a24c314108439a4d403618d
title: Render React on the Server with renderToString
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301407
---

## Description
<section id='description'>
So far, you have been rendering React components on the client. Normally, this is what you will always do. However, there are some use cases where it makes sense to render a React component on the server. Since React is a JavaScript view library and you can run JavaScript on the server with Node, this is possible. In fact, React provides a <code>renderToString()</code> method you can use for this purpose.
There are two key reasons why rendering on the server may be used in a real world app. First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines. Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.
</section>

## Instructions
<section id='instructions'>
The <code>renderToString()</code> method is provided on <code>ReactDOMServer</code>, which is available here as a global object. The method takes one argument which is a React element. Use this to render <code>App</code> to a string.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>App</code> component should render to a string using <code>ReactDOMServer.renderToString</code>.
    testString: getUserInput => assert(getUserInput('index').replace(/ /g,'').includes('ReactDOMServer.renderToString(<App/>)') && Enzyme.mount(React.createElement(App)).children().name() === 'div');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
var ReactDOMServer = { renderToString(x) { return null; } };
```

</div>

### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<App />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line
ReactDOMServer.renderToString(<App/>);
```

</section>
