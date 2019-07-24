---
title: Render React on the Server with renderToString
---
# Render React on the Server with renderToString


---
## Solutions

You pass a ```class``` to ```.renderToString()``` just like you would pass a component to a ```render``` method.

<details><summary>Solution 1 (Click to Show/Hide)</summary>

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
ReactDOMServer.renderToString(<App />);
```
</details>
