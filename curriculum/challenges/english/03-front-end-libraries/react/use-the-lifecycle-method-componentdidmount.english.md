---
id: 5a24c314108439a4d403617d
title: Use the Lifecycle Method componentDidMount
challengeType: 6
forumTopicId: 301422
---

## Description

<section id='description'>
Most web developers, at some point, need to call an API endpoint to retrieve data. If you're working with React, it's important to know where to perform this action.
The best practice with React is to place API calls or any calls to your server in the lifecycle method <code>componentDidMount()</code>. This method is called after a component is mounted to the DOM. Any calls to <code>setState()</code> here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.
</section>

## Instructions

<section id='instructions'>
There is a mock API call in <code>componentDidMount()</code>. It sets state after 2.5 seconds to simulate calling a server to retrieve data. This example requests the current total active users for a site. In the render method, render the value of <code>activeUsers</code> in the <code>h1</code> after the text <code>Active Users: </code>. Watch what happens in the preview, and feel free to change the timeout to see the different effects.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should render a <code>div</code> element which wraps an <code>h1</code> tag.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return (mockedComponent.find('div').length === 1 && mockedComponent.find('h1').length === 1); })());
  - text: Component state should be updated with a timeout function in <code>componentDidMount</code>.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return new RegExp('setTimeout(.|\n)+setState(.|\n)+activeUsers').test(String(mockedComponent.instance().componentDidMount)); })());
  - text: The <code>h1</code> tag should render the <code>activeUsers</code> value from <code>MyComponent</code>&apos;s state.
    testString: "(() => {
        const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
        const first = () => {
            mockedComponent.setState({ activeUsers: 1237 });
            return mockedComponent.find('h1').text();
        };
        const second = () => {
            mockedComponent.setState({ activeUsers: 1000 });
            return mockedComponent.find('h1').text();
        };
        assert(new RegExp('1237').test(first()) && new RegExp('1000').test(second()));
    })();"

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
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: </h1>
        {/* Change code below this line */}
      </div>
    );
  }
}
```

</div>

### After Test

<div id='jsx-teardown'>

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

</div>

</section>

## Solution

<section id='solution'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
```

</section>
