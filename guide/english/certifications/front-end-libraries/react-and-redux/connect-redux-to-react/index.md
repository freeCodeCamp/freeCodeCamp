---
title: Connect Redux to React
---
## Connect Redux to React

### Solution

````javascript
const addMessage = message => {
  return {
    type: 'ADD',
    message: message
  };
};

const mapStateToProps = state => {
  return {
    messages: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitNewMessage: message => {
      dispatch(addMessage(message));
    }
  };
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h3>This is a Presentational Component</h3>;
  }
}

const connect = ReactRedux.connect;

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
````
