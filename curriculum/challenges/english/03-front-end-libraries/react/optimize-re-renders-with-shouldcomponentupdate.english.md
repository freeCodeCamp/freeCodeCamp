---
id: 5a24c314108439a4d4036180
title: Optimize Re-Renders with shouldComponentUpdate
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301398
---

## Description

<section id='description'>
So far, if any component receives new <code>state</code> or new <code>props</code>, it re-renders itself and all its children. This is usually okay. But React provides a lifecycle method you can call when child components receive new <code>state</code> or <code>props</code>, and declare specifically if the components should update or not. The method is <code>shouldComponentUpdate()</code>, and it takes <code>nextProps</code> and <code>nextState</code> as parameters.
This method is a useful way to optimize performance. For example, the default behavior is that your component re-renders when it receives new <code>props</code>, even if the <code>props</code> haven't changed. You can use <code>shouldComponentUpdate()</code> to prevent this by comparing the <code>props</code>. The method must return a <code>boolean</code> value that tells React whether or not to update the component. You can compare the current props (<code>this.props</code>) to the next props (<code>nextProps</code>) to determine if you need to update or not, and return <code>true</code> or <code>false</code> accordingly.
</section>

## Instructions

<section id='instructions'>
The <code>shouldComponentUpdate()</code> method is added in a component called <code>OnlyEvens</code>. Currently, this method returns <code>true</code> so <code>OnlyEvens</code> re-renders every time it receives new <code>props</code>. Modify the method so <code>OnlyEvens</code> updates only if the <code>value</code> of its new props is even. Click the <code>Add</code> button and watch the order of events in your browser's console as the lifecycle hooks are triggered.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: The <code>Controller</code> component should render the <code>OnlyEvens</code> component as a child.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find('Controller').length === 1 && mockedComponent.find('OnlyEvens').length === 1; })());
  - text: The <code>shouldComponentUpdate</code> method should be defined on the <code>OnlyEvens</code> component.
    testString: assert((() => { const child = React.createElement(OnlyEvens).type.prototype.shouldComponentUpdate.toString().replace(/s/g,''); return child !== 'undefined'; })());
  - text: The <code>OnlyEvens</code> component should return an <code>h1</code> tag which renders the value of <code>this.props.value</code>.
    testString: "(() => {
      const mockedComponent = Enzyme.mount(React.createElement(Controller));
      const first = () => {
        mockedComponent.setState({ value: 1000 });
        return mockedComponent.find('h1').html();
      };
      const second = () => {
        mockedComponent.setState({ value: 10 });
        return mockedComponent.find('h1').html();
      };
      const firstValue = first();
      const secondValue = second();
      assert(firstValue === '<h1>1000</h1>' && secondValue === '<h1>10</h1>');
    })();
    "
  - text: <code>OnlyEvens</code> should re-render only when <code>nextProps.value</code> is even.
    testString: "(() => {
      const mockedComponent = Enzyme.mount(React.createElement(Controller));
      const first = () => {
        mockedComponent.setState({ value: 8 });
        return mockedComponent.find('h1').text();
      };
      const second = () => {
        mockedComponent.setState({ value: 7 });
        return mockedComponent.find('h1').text();
      };
      const third = () => {
        mockedComponent.setState({ value: 42 });
        return mockedComponent.find('h1').text();
      };
      const firstValue = first();
      const secondValue = second();
      const thirdValue = third();
      assert(firstValue === '8' && secondValue === '8' && thirdValue === '42');
    })();
    "

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // change code below this line
    return true;
    // change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

</div>

### After Test

<div id='jsx-teardown'>

```js
ReactDOM.render(<Controller />, document.getElementById('root'));
```

</div>

</section>

## Solution

<section id='solution'>

```js
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // change code below this line
    return nextProps.value % 2 === 0;
    // change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

</section>
