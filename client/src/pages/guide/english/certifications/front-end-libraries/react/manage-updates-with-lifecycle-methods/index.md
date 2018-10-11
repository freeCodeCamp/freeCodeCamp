---
title: Manage Updates with Lifecycle Methods
---
## Manage Updates with Lifecycle Methods

This challenge has you creating a couple lifecycle functions, componentWillUpdate and ComponentWillReceiveProps. You will be provided with another function called componentDidUpdate. We'll discuss how you use them at each stage of the component lifecycle and why you should use them when you are checking different stages of your component.

Lets talk about the functions and how you will be using them. Component lifecycles can be broken down into 4 stages. Initlization -> Mounting -> Updating -> Unmounting. The components that you will work with are going to fall within the Updating stage.

The progression in which these functions are called are as follows: componentWillReceiveProps -> componentWillUpdate -> componentDidUpdate

When you create componentWillReceiveProps, this function will check to see if there are new props being received. If the component did receive new props then the function will be called and within the block you can compare the two prop states. The function will take in an argument typically named nextProps and will compare it to this.props. The challenge has you creating this function using the passed argument nextProps. See provided function below.

Next in the component lifecycle componentWillUpdate will be called, this function will check to see if there has been any updates to props or state and will be called before the component renders. The challenge has already provided you with this function and it logs out "Component is about to update." 

Once the component passes through the componentWillUpdate phase and the component renders, componentDidUpdate will be called. At this stage you can call this.setState to update any state chanegs that occurred during the first two phases. Note: you can only call setState if you wrap within a condition. Since this challenge only has you scratching the surface they would like you to log out that the "Component has updated."

Once you have implemented all the lifecycle functions you should see some console logs being displayed. First, you will see componentWillReceiveProps send you this.props and nextProps. Next, you will see a console log letting you know that componentWillUpdate. Lastly, after the component renders it will call the componentDidUpdate and will log out "Component has updated."

Note: The components that you are creating have been deprecated and will be available to use until version 17. You can find more information about these functions in the resource section below.

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
### Resources
- [React Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
- [React Component Lifecycle Visual](https://cdn-images-1.medium.com/max/2000/1*sn-ftowp0_VVRbeUAFECMA.png)


