---
title: Getting Started with React Redux
---
## Getting Started with React Redux

### Hint 1
Remember to pass parameter props to constructor

### Hint 2
Remember the super(props) in constructor

### Solution
```jsx
class DisplayMessages extends React.Component {
  // change code below this line
  constructor(props){
    super(props);
    this.state={
      input:'',
      messages:[]
    }
  }
  // change code above this line
  render() {
    return <div />
  }
};
```


<a href='https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/certifications/front-end-libraries/react-and-redux/getting-started-with-react-redux/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
