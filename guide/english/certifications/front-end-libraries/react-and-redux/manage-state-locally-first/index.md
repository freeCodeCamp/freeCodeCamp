---
title: Manage State Locally First
---
## Manage State Locally First

## Hint 1:

Remember that functions need to be bound in the constructor

```JSX
this.handleChange = this.handleChange.bind(this);
this.submitMessage = this.submitMessage.bind(this);
```

## Hint 2:

handleChange() should take in an event, and use setState to update the component's state

```JSX
  handleChange(e) {
    this.setState({ input: e.target.value })
  }
```

## Hint 3:

submitMessage should add the input to the messages array, and reset the input value

```JSX
submitMessage() {
    this.setState({
      input: '',
      messages: this.state.messages.concat(this.state.input)
    });
  }
```

## Hint 4: 

The input, button and ul elements should make use of the component's methods and values

```JSX
<input onChange={this.handleChange} value={this.state.input} />
<button onClick={this.submitMessage}>Add message</button>
<ul>
    {this.state.messages.map(message =>
        (<li>{message}</li>)
    )}
</ul>
```

## Solution:
```JSX
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here

  handleChange(e){
    this.setState({input: e.target.value})
  }

  submitMessage() {
    this.setState({
      input: '',
      messages: this.state.messages.concat(this.state.input)
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage}>Add message</button>
        <ul>
        {this.state.messages.map(message =>
          (<li>{message}</li>)
        )}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
```