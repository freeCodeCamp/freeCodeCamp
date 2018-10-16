---
title: Render React on the Server with renderToString
---
## Render React on the Server with renderToString

## Solution:

You pass a ```class``` to ```.renderToString()``` just like you would pass a component to a ```render``` method.

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

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
