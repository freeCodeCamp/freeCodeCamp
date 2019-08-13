---
title: Map Dispatch to Props
---
# Map Dispatch to Props


---
## Solutions
  
<details><summary>Solution 1 (Click to Show/Hide)</summary>

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
