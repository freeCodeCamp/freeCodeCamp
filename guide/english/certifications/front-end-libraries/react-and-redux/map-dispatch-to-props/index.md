---
title: Map Dispatch to Props
---
## Map Dispatch to Props

### Solution
<details>
  <summary>Spoiler!</summary>
  
```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message)=>{
            dispatch(addMessage(message))
        }
    }
}
```
</details>

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
