---
title: React TypeChecking with PropTypes
---
## React PropTypes

These serve as a method of typechecking as an application tends go grow, with this a very big base of bugs tends to be corrected with the use of this feature.

## How to get PropTypes

Starting with React version 15.5 this feature was moved to a separate package named prop-types.

In order to use it, it's required to be added to the project as a dependency by issuing the following command in a console.

```sh
npm install --save prop-types
```
After that a whole range of validators that can be used to make sure the data the developer is going to recieve is actually valid.
When an invalid value is provided there will be warning appearing in the JavaScript console.

Note that for performance reasons the PropTypes defined are only checked while in development mode.

Also on the contrary of the component state, that can be manipulated as needed, these props are readonly.

It's value cannot be changed by the component. 

## PropTypes available

Bellow is a code example with the different validators provided by the package, and how to inject them in the component.

```javascript
import PropTypes from 'prop-types';
class MyComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            ...
        );
    }
}

MyComponent.propTypes = {
  // A prop that is a specific JS primitive. By default, these
  // are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode: PropTypes.node,

  // A React element as a PropType
  optionalElement: PropTypes.element,

  // Declaring that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  optionalMessage: PropTypes.instanceOf(AnotherComponent),

  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // An object that could be one of many types
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(AnotherComponent)
  ]),

  // An array of a certain type
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // An object with property values of a certain type
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  requiredFunc: PropTypes.func.isRequired,

  // A value of any data type
  requiredAny: PropTypes.any.isRequired,
};
```
## Setting default values

As a part of this feature it's also possible to define default values for any given component defined while developing.

These make sure that the prop will have a value even if not specified by the parent component.

The code bellow ilustrates how to use this funcionality.

```javascript
import React,{Component} from 'react';
import PropTypes from 'prop-types';
class MyComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h3>Hello, {this.props.name}</h3>
        );
    }
}
MyComponent.defaultProps = {
  name: 'Stranger'
};
```

For more information about PropTypes and other docs on React.

Go to the [Official Site](https://reactjs.org/) and read the docs, or the [Github Repo](https://github.com/facebook/react/)
