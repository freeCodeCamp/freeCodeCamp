---
id: 5a24c314108439a4d403614a
title: Moving Forward From Here
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 从这里前进
---

## Description
<section id="description">恭喜！你完成了React和Redux的课程。在继续之前，最后一项值得指出。通常，您不会在这样的代码编辑器中编写React应用程序。如果您在自己的计算机上使用npm和文件系统，这个挑战可以让您一瞥语法的样子。代码看起来应该类似，除了使用<code>import</code>语句（这些语句提取了在挑战中为您提供的所有依赖项）。 “使用npm管理包”部分更详细地介绍了npm。最后，编写React和Redux代码通常需要一些配置。这可能很快变得复杂。如果您有兴趣在自己的机器上进行实验，可以配置<a id="CRA" target="_blank" href="https://github.com/facebookincubator/create-react-app">Create React App</a>并准备就绪。或者，您可以在CodePen中启用Babel作为JavaScript预处理器，将React和ReactDOM添加为外部JavaScript资源，并在那里工作。 </section>

## Instructions
<section id="instructions">记录消息<code>&#39;Now I know React and Redux!&#39;</code>到控制台。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 消息<code>Now I know React and Redux!</code>应该登录到控制台。
    testString: getUserInput => assert(/console\s*\.\s*log\s*\(\s*('|"|`)Now I know React and Redux!\1\s*\)/.test(getUserInput('index')));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider, connect } from 'react-redux'
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

// import rootReducer from './redux/reducers'
// import App from './components/App'

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// );

// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
