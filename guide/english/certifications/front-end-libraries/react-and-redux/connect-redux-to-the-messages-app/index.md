---
title: Connect Redux to the Messages App
---
## Connect Redux to the Messages App

### Solution
<details>
  <summary>Spoiler!</summary>

```jsx
// define the Container component here:
const Container = connect(mapStateToProps,mapDispatchToProps)(Presentational)

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // complete the return statement:
    return (
      <Provider store={store}>
        <Container />
      </Provider>
      );
  }
};
```

</details>

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
