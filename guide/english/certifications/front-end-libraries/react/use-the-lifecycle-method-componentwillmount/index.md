---
title: Use the Lifecycle Method componentWillMount
---
# Use the Lifecycle Method componentWillMount

---
## Problem Explanation
The challenge is a basic introduction to React's LifeCycle components.
These methods are also called Lifecycle Hooks.


---
## Hints

### Hint 1

Log something to the console in the ```react componentWillMount ``` method.

### Hint 2

The ``` console.log(); ``` statement is used to log to the browser console.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

Since you can log anything, use the ``` console.log(); ``` and pass in a string. The ``` componentWillMount ``` method should look like:

```jsx
componentWillMount() {
  console.log('Component being mounted');
}
```

**Note:** The ``` componentWillMount ``` Lifecycle method has been deprecated as of version 17, and does not work on later versions. [(Source)](https://reactjs.org/docs/react-component.html)
</details>
