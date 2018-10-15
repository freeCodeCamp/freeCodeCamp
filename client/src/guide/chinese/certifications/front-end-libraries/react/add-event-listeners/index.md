---
title: Add Event Listeners
localeTitle: 添加事件监听器
---
## 添加事件监听器

这个挑战让您修改了两个生命周期方法componentDidMount和componentWillUnmount。如果要在事件中设置事件监听器，则可以使用componentDidMount。当您需要清除事物监听器时，可以使用componentWillUnmount。

您将向componentDidMount方法添加一个事件侦听器，该方法将侦听“keydown”事件。使用document.addEventListener（event，function，optional（useCapture））。然后通过将相同的参数传递到componentWillUnmount方法中的document.removeEventListener（event，function，optional（useCapture））来删除此相同的事件侦听器。

注意：document.addEventListener和document.removeEventListener将为其事件接受带引号的字符串，并且在传入函数时，您将引用函数handleKeyPress（）作为this.handleKeyPress。如果以this.handleKeyPress（）方式调用该函数，则事件侦听器将首先计算该函数，并将传回一个undefined值。

```javascript
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      message: '' 
    }; 
    this.handleEnter = this.handleEnter.bind(this); 
    this.handleKeyPress = this.handleKeyPress.bind(this); 
  } 
  // change code below this line 
  componentDidMount() { 
    document.addEventListener("keydown", this.handleKeyPress) 
  } 
  componentWillUnmount() { 
    document.removeEventListener("keydown", this.handleKeyPress) 
  } 
  // change code above this line 
  handleEnter() { 
    this.setState({ 
      message: this.state.message + 'You pressed the enter key! ' 
    }); 
  } 
  handleKeyPress(event) { 
    if (event.keyCode === 13) { 
      this.handleEnter(); 
    } 
  } 
  render() { 
    return ( 
      <div> 
        <h1>{this.state.message}</h1> 
      </div> 
    ); 
  } 
 }; 
```

### 资源

[反应组件](https://reactjs.org/docs/react-component.html) ， [共同生命周期](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) ， [国家和生命周期](https://reactjs.org/docs/state-and-lifecycle.html) ， [document.addEventListener](https://www.w3schools.com/jsref/met_document_addeventlistener.asp) ， [HTML DOM事件](https://www.w3schools.com/jsref/dom_obj_event.asp)