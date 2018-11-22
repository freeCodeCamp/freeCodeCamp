---
title: Use Provider to Connect Redux to React
---
## Use Provider to Connect Redux to React

### Hint 1

You do not need to wrap the `Provider` in any `<div>` tags.

### Solution

```jsx
const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    );
  }
};
```
