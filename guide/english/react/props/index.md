---
title: Props
---
### What are the props?

Props (short for properties) are the data or functions passed into a component. They are immutable (read-only).

To illustrate how props are used in components, see the following example:

```javascript
const props = {
    name: "john",
    age: 33,
    country: "Canada"
};

const PropTest = (props) => {
  return(
    <div
        name={props.name}
        age={props.age}
        country={props.country}>
        <ul>
          <li>name={props.name}</li>
          <li>age={props.age}</li>
          <li>country={props.country}</li>
        </ul>
    </div>
  );
};

ReactDOM.render(
    <div>
        <PropTest {...props}/>
    </div>
    , mountNode
);
```
The props are created in the props constant object and then used as inputs in the component and then passed and rendered in the ReactDOM.
