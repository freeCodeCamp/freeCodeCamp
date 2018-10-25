---
title: Use Provider to Connect Redux to React
---
## Use Provider to Connect Redux to React

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->


### Hint 1
Create a render method which returns the component wrapped in the Provider Component.

### Hint 2
Wrap the ```<DisplayMessages />``` component inside: 

```<Provider store= {store}>``` 

```</Provider>```

This method makes the store available to all container component's in the application.
In other words the  states and functions within Redux are now available in your application. 

### Solution
```Javascript
class AppWrapper extends React.Component {
  // render the Provider here
 render(){
        return (
            <Provider store = {store}>
                <DisplayMessages />
            </Provider>
        )
    }

  // change code above this line
};
```
