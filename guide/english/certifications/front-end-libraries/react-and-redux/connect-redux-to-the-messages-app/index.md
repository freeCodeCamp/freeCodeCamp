---
title: Connect Redux to the Messages App
---
## Connect Redux to the Messages App

## Hint 1:

Create the Container component the same way as you did in the previous challenge
```javascript
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
```

## Hint 2:

AppWrapper should render a Provider component with a Container as a child
```javascript
return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
```

## Solution:
```javascript
// define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

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