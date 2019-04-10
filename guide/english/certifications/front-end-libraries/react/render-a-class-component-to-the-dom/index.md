---
title: Render a Class Component to the DOM
---
# Render a Class Component to the DOM

Your code should end up looking similar to this:

```javascript
class TypesOfVehicles extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
          <h1>Types of Vehicles:</h1>
          <Car />
          <Motorcycle />
          </div>
        );
    }
}
ReactDOM.render(<TypesOfVehicles />, document.getElementById('node-id'))
```
The ReactDOM.render syntax may be a little tricky, you need to use the triangle brackets when passing in a Class Component. Also the two subcomponents are declared behind the scenes, which may be confusing if you are used to all the variables being defined in the code editor and visible in front of you.

### Hint
 - use `document.getElementById('node-id')` to get target node whose id has the value 'node-id'
### Relevant Link

 - [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

## Solution
If you're still having trouble, here's the full solution. Note how you're using concepts learned in previous challenges to render a class component with children components to the DOM using the ReactDOM method `render()` and the Document method `getElementbyId('element-id')`.
```jsx

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits />
        <Vegetables />
        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
```
