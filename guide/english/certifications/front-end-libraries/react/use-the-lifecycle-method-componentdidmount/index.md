---
title: Use the Lifecycle Method componentDidMount
---
# Use the Lifecycle Method componentDidMount

---
## Problem Explanation
This challenges introduces the ``` componentDidMount ``` Lifecycle method. This is used to set state after a giventime period.

The syntax for the method is:
```jsx
componentDidMount() {
    setTimeout( () => {
      this.setState({
        one: 1,
        two: false
      });
    }, interval);
  }
```
where ``` one ``` and ``` two ``` are states you want to set after ``` interval ```ms.


---
## Hints

### Hint 1

Use
```javascript
this.state.stateName;
```
and change ``` stateName ``` as required.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

Change
```jsx
render() {
    return (
      <div>
        <h1>Active Users: { /* change code here */ }</h1>
      </div>
    );
  }
```

to 

```jsx
render() {
    return (
      <div>
        <h1>Active Users: { this.state.activeUsers }</h1>
      </div>
    );
  }
```
</details>
