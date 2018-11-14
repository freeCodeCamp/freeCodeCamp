---
title: Manage Updates with Lifecycle Methods
localeTitle: 使用生命周期方法管理更新
---
## 使用生命周期方法管理更新

这个挑战让您创建了几个生命周期函数，componentWillUpdate和ComponentWillReceiveProps。您将获得另一个名为componentDidUpdate的函数。我们将讨论如何在组件生命周期的每个阶段使用它们，以及在检查组件的不同阶段时应该如何使用它们。

让我们谈谈功能以及如何使用它们。组件生命周期可分为4个阶段。 Initlization - > Mounting - > Updating - > Unmounting。您将使用的组件将属于更新阶段。

调用这些函数的过程如下：componentWillReceiveProps - > componentWillUpdate - > componentDidUpdate

当您创建componentWillReceiveProps时，此函数将检查是否有新的道具被接收。如果组件确实接收到新的道具，那么将调用该函数，并且在块内可以比较两个道具状态。该函数将接受一个通常名为nextProps的参数，并将其与this.props进行比较。挑战是您使用传递的参数nextProps创建此函数。请参阅下面提供的功能

接下来将在组件生命周期componentWillUpdate中调用，此函数将检查是否有对props或state的任何更新，并将在组件呈现之前调用。挑战已经为您提供了这个功能，它会注销“组件即将更新”。

一旦组件通过componentWillUpdate阶段并且组件呈现，将调用componentDidUpdate。在此阶段，您可以调用this.setState来更新前两个阶段中发生的任何状态chanegs。注意：如果在条件内包装，则只能调用setState。由于这个挑战只是让你浮出水面，他们希望你注意“组件已更新”。

一旦实现了所有生命周期功能，您应该会看到一些控制台日志正在显示。首先，您将看到componentWillReceiveProps向您发送this.props和nextProps。接下来，您将看到一个控制台日志，通知您componentWillUpdate。最后，在组件呈现后，它将调用componentDidUpdate并注销“Component has updated”。

注意：您正在创建的组件已被弃用，并且可以在版本17之前使用。您可以在下面的资源部分中找到有关这些功能的更多信息。

```javascript
class Dialog extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  componentWillUpdate() { 
    console.log('Component is about to update...'); 
  } 
  // change code below this line 
 
  // Create componentWillReceiveProps 
  // Pass in argument nextProps and log out the current prop and next prop 
  componentWillReceiveProps(nextProps) { 
    // Log the current property and the next property 
    console.log(this.props, nextProps) 
  } 
 
  // Create function componentDidUpdate 
  // Log out that the component has updated 
  componentDidUpdate() { 
    console.log("Component has updated") 
  } 
 
  // change code above this line 
  render() { 
    return <h1>{this.props.message}</h1> 
  } 
 }; 
 
 class Controller extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      message: 'First Message' 
    }; 
    this.changeMessage = this.changeMessage.bind(this); 
  } 
  changeMessage() { 
    this.setState({ 
      message: 'Second Message' 
    }); 
  } 
  render() { 
    return ( 
      <div> 
        <button onClick={this.changeMessage}>Update</button> 
        <Dialog message={this.state.message}/> 
      </div> 
    ); 
  } 
 }; 
```

### 资源

*   [反应组件生命周期](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
*   [React Component Lifecycle Visual](https://cdn-images-1.medium.com/max/2000/1*sn-ftowp0_VVRbeUAFECMA.png)