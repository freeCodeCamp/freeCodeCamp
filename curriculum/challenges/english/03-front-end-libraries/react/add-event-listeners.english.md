---
id: 5a24c314108439a4d403617e
title: Add Event Listeners
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301377
---

## Description
<section id='description'>
The <code>componentDidMount()</code> method is also the best place to attach any event listeners you need to add for specific functionality. React provides a synthetic event system which wraps the native event system present in browsers. This means that the synthetic event system behaves exactly the same regardless of the user's browser - even if the native events may behave differently between different browsers.
You've already been using some of these synthetic event handlers such as <code>onClick()</code>. React's synthetic event system is great to use for most interactions you'll manage on DOM elements. However, if you want to attach an event handler to the document or window objects, you have to do this directly.
</section>

## Instructions
<section id='instructions'>
Attach an event listener in the <code>componentDidMount()</code> method for <code>keydown</code> events and have these events trigger the callback <code>handleKeyPress()</code>. You can use <code>document.addEventListener()</code> which takes the event (in quotes) as the first argument and the callback as the second argument.
Then, in <code>componentWillUnmount()</code>, remove this same event listener. You can pass the same arguments to <code>document.removeEventListener()</code>. It's good practice to use this lifecycle method to do any clean up on React components before they are unmounted and destroyed. Removing event listeners is an example of one such clean up action.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should render a <code>div</code> element which wraps an <code>h1</code> tag.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('div').children().find('h1').length === 1; })());
  - text: A keydown listener should be attached to the document in <code>componentDidMount</code>.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const didMountString = mockedComponent.instance().componentDidMount.toString(); return new RegExp('document\.addEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress').test(didMountString); })());
  - text: The keydown listener should be removed from the document in <code>componentWillUnmount</code>.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const willUnmountString = mockedComponent.instance().componentWillUnmount.toString(); return new RegExp('document\.removeEventListener(.|\n|\r)+keydown(.|\n|\r)+this\.handleKeyPress').test(willUnmountString); })());
  - text: Once the component has mounted, pressing <code>enter</code> should update its state and the rendered <code>h1</code> tag.
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
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
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
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
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
