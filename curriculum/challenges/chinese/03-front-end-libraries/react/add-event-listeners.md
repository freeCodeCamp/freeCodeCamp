---
id: 5a24c314108439a4d403617e
challengeType: 6
forumTopicId: 301377
title: 添加事件侦听器
---

## Description
<section id='description'>
<code>componentDidMount()</code>方法也是添加特定功能所需的任何事件监听器的最佳位置。React 提供了一个合成事件系统，它将本地事件系统封装在浏览器中。这意味着，不管用户的浏览器如何，合成事件系统的行为都完全相同--即使不同浏览器之间的本地事件的行为可能不同。
你已经使用了一些合成事件处理程序，如<code>onClick()</code>。React 的合成事件系统非常适合用于你在 DOM 元素上管理的大多数交互。但是，如果要将事件处理程序附加到 document 或 window 对象，则必须直接执行此操作。
</section>

## Instructions
<section id='instructions'>
在<code>componentDidMount()</code>方法中为<code>keydown</code>事件添加事件监听器，并让这些事件触发回调<code>handleKeyPress()</code>。你可以使用<code>document.addEventListener()</code>，它将事件（用引号括起来）作为第一个参数，将回调作为第二个参数。
然后，在<code>componentWillUnmount()</code>中移除相同的事件监听器。你可以把相同的参数传递给<code>document.removeEventListener()</code>。在卸载和销毁 React 组件之前，最好使用这种生命周期方法对它们进行清理。移除事件监听器就是这样一个清理操作的例子。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该渲染一个包含<code>h1</code>标签的<code>div</code>元素。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('div').children().find('h1').length === 1; })());
  - text: 应该在<code>componentDidMount</code>中将 keydown 事件监听添加到到 document 上。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const didMountString = mockedComponent.instance().componentDidMount.toString(); return new RegExp('document\.addEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress').test(didMountString); })());
  - text: 应该在<code>componentWillUnmount</code>中将 document 上的 keydown 事件监听移除。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const willUnmountString = mockedComponent.instance().componentWillUnmount.toString(); return new RegExp('document\.removeEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress').test(willUnmountString); })());
  - text: 一旦组件装载完毕，按<code>enter</code>应该会更新其 state 并渲染到<code>h1</code>标签。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const beforeState = mockedComponent.state(''message''); const beforeText = mockedComponent.find(''h1'').text(); const pressEnterKey = () => { mockedComponent.instance().handleKeyPress({ keyCode: 13 }); return waitForIt(() => { mockedComponent.update(); return { state: mockedComponent.state(''message''), text: mockedComponent.find(''h1'').text()}; });}; const afterKeyPress = await pressEnterKey(); assert(beforeState !== afterKeyPress.state && beforeText !== afterKeyPress.text); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // change code below this line
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  // change code above this line
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEnter = this.handleEnter.bind(this);  }
  componentDidMount() {
    // change code below this line
    document.addEventListener('keydown', this.handleKeyPress);
    // change code above this line
  }
  componentWillUnmount() {
    // change code below this line
    document.removeEventListener('keydown', this.handleKeyPress);
    // change code above this line
  }
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```

</section>
