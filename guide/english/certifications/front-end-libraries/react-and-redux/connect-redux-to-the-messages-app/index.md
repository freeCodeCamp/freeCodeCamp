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

<a href='https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/certifications/front-end-libraries/react-and-redux/connect-redux-to-the-messages-app/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
