---
id: 5a24c314108439a4d403618d
title: Render React on the Server with renderToString
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用renderToString在服务器上渲染React
---

## Description
<section id="description">到目前为止，您已在客户端上呈现React组件。通常，这是你将永远做的。但是，在某些用例中，在服务器上呈现React组件是有意义的。由于React是一个JavaScript视图库，您可以使用Node在服务器上运行JavaScript，这是可能的。实际上，React提供了一个<code>renderToString()</code>方法，您可以将其用于此目的。有两个关键原因可以解释为什么服务器上的渲染可能会在真实世界的应用程序中使用。首先，如果不这样做，你的React应用程序将包含一个相对空的HTML文件和一大堆JavaScript，当它最初加载到浏览器时。对于试图索引页面内容以便人们可以找到您的搜索引擎而言，这可能并不理想。如果在服务器上呈现初始HTML标记并将其发送到客户端，则初始页面加载包含搜索引擎可以抓取的所有页面标记。其次，这会创建更快的初始页面加载体验，因为呈现的HTML小于整个应用程序的JavaScript代码。 React仍然能够识别您的应用并在初始加载后进行管理。 </section>

## Instructions
<section id="instructions"> <code>renderToString()</code>方法在<code>ReactDOMServer</code>上提供，在此处可用作全局对象。该方法采用一个参数，它是一个React元素。使用此选项将<code>App</code>呈现为字符串。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>App</code>组件应使用<code>ReactDOMServer.renderToString</code>呈现为字符串。
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
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
