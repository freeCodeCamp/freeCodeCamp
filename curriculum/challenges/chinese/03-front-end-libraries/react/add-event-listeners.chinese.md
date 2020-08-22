---
id: 5a24c314108439a4d403617e
title: Add Event Listeners
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 添加事件监听器
---

## Description
<section id="description"> <code>componentDidMount()</code>方法也是附加您需要为特定功能添加的任何事件侦听器的最佳位置。 React提供了一个合成事件系统，它包装了浏览器中的本机事件系统。这意味着无论用户的浏览器如何，合成事件系统的行为都完全相同 - 即使本机事件在不同浏览器之间的行为可能不同。您已经使用了一些合成事件处理程序，如<code>onClick()</code> 。 React的合成事件系统非常适合用于您在DOM元素上管理的大多数交互。但是，如果要将事件处理程序附加到文档或窗口对象，则必须直接执行此操作。 </section>

## Instructions
<section id="instructions">在<code>componentDidMount()</code>方法中为<code>keydown</code>事件附加事件侦听器，并让这些事件触发回调<code>handleKeyPress()</code> 。您可以使用<code>document.addEventListener()</code> ，它将事件（在引号中）作为第一个参数，将回调作为第二个参数。然后，在<code>componentWillUnmount()</code> ，删除此相同的事件侦听器。您可以将相同的参数传递给<code>document.removeEventListener()</code> 。在卸载和销毁之前，使用此生命周期方法对React组件进行任何清理是一种很好的做法。删除事件侦听器就是一个这样的清理操作的示例。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该呈现一个包含<code>h1</code>标记的<code>div</code>元素。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('div').children().find('h1').length === 1; })());
  - text: keydown侦听器应附加到<code>componentDidMount</code>的文档。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const didMountString = mockedComponent.instance().componentDidMount.toString(); return new RegExp('document\.addEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress').test(didMountString); })());
  - text: 应该从<code>componentWillUnmount</code>的文档中删除keydown侦听器。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const willUnmountString = mockedComponent.instance().componentWillUnmount.toString(); return new RegExp('document\.removeEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress').test(willUnmountString); })());
  - text: 组件安装完成后，按<code>enter</code>应更新其状态和渲染的<code>h1</code>标签。
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
      message: "
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
