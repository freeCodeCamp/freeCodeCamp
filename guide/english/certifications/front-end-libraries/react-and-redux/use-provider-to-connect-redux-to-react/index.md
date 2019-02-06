---
title: Use Provider to Connect Redux to React
---
## Use Provider to Connect Redux to React

## Hint 1

Recall that a React component needs to have a method to render to the page

## Hint 2

The render method should return the Provider and DisplayMessages components

```JSX

return(
    <Provider store={store}>
        <DisplayMessages />
    </Provider>
)
```

## Solution
```JSX
class AppWrapper extends React.Component {
  // render the Provider here
    render(){
        return(
            <Provider store={store}>
                <DisplayMessages />
            </Provider>
        )
    }
  // change code above this line
};
```