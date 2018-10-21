---
title: Render a Class Component to the DOM
---
## Render a Class Component to the DOM

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
ReactDOM.render(<TypesOfVehicles />,'node-id')
```
The ReactDOM.render syntax may be a little tricky, you need to use the triangle brackets when passing in a Class Component. Also the two subcomponents are declared behind the scenes, which may be confusing if you are used to all the variables being defined in the code editor and visible in front of you.

### Hint
 - use document.getElementById('id') to get target node
### Relevant Link
 - [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
