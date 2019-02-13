---
title: Manage State Locally First
---
## Manage State Locally First

### Solution

````javascript
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      messages: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage(event) {
    event.preventDefault();
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <button type='submit' onClick={this.submitMessage}>
          Add message
        </button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}
````
