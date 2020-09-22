---
id: 5a24c314108439a4d403617d
title: Use the Lifecycle Method componentDidMount
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return (mockedComponent.find("div").length === 1 && mockedComponent.find("h1").length === 1); })(), "<code>MyComponent</code> should render a <code>div</code> element which wraps an <code>h1</code> tag.");'
  - text: ''
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return new RegExp("setTimeout(.|\n)+setState(.|\n)+activeUsers").test(String(mockedComponent.instance().componentDidMount)); })(), "Component state should be updated with a timeout function in <code>componentDidMount</code>.");'
  - text: ''
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ activeUsers: 1237 }); return mockedComponent.find("h1").text(); }; const second = () => { mockedComponent.setState({ activeUsers: 1000 }); return mockedComponent.find("h1").text(); }; assert(new RegExp("1237").test(first()) && new RegExp("1000").test(second()), "The <code>h1</code> tag should render the <code>activeUsers</code> value from <code>MyComponent</code>&apos;s state."); }; '

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
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: { /* change code here */ }</h1>
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
</section>
