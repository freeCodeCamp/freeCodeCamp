---
title: Use the Lifecycle Method componentDidMount
---
## Use the Lifecycle Method componentDidMount

This challenges introduces the ``` componentDidMount ``` Lifecycle method. This is used to set state after a giventime period.

The syntax for the method is:
```javascript
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

### Hint

Use
```javascript
this.state.stateName
```
and change ``` stateName ``` as required.

### Solution

Change
```javascript
render() {
    return (
      <div>
        <h1>Active Users: { /* change code here */ }</h1>
      </div>
    );
  }
```

to 

```javascript
render() {
    return (
      <div>
        <h1>Active Users: { this.state.activeUsers }</h1>
      </div>
    );
  }
```
