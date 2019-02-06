---
title: Extract Local State into Redux
---
## Extract Local State into Redux

## Hint 1 

Update submitMessage() to use submitNewMessage from props

```javascript
submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
    });
  }
```

## Hint 2

Update the unordered list in render() to use messages from props instead of locally
```javascript
<ul>
    {this.props.messages.map( (message, idx) => {
        return (
            <li key={idx}>{message}</li>
        )
      })
    }
</ul>
```

## Solution
```javascript
// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line
```