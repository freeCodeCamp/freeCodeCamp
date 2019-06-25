---
title: React TypeChecking with PropTypes
localeTitle: 使用PropTypes进行React TypeChecking
---
## 反应PropTypes

当应用程序趋于增长时，这些可以作为一种类型检查的方法，通过使用此功能，可以纠正非常大的错误基础。

## 如何获得PropTypes

从React版本15.5开始，此功能已移至名为prop-types的单独包中。

为了使用它，需要通过在控制台中发出以下命令将其作为依赖项添加到项目中。

```shell
npm install --save prop-types 
```

之后，可用于确保开发人员将要接收的数据的一系列验证器实际上是有效的。 如果提供的值无效，则会在JavaScript控制台中显示警告。

请注意，出于性能原因，仅在开发模式下检查定义的PropTypes。

与组件状态相反，可以根据需要进行操作，这些道具是只读的。

它的值不能被组件改变。

## Proptypes可用

Bellow是一个代码示例，包含提供的不同验证器，以及如何将它们注入组件中。

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

## 设置默认值

作为此功能的一部分，还可以为开发时定义的任何给定组件定义默认值。

这些确保即使未由父组件指定，prop也将具有值。

下面的代码说明了如何使用这个功能。

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

有关React上PropTypes和其他文档的更多信息。

访问[官方网站](https://reactjs.org/)并阅读文档或[GitHub Repo](https://github.com/facebook/react/)
