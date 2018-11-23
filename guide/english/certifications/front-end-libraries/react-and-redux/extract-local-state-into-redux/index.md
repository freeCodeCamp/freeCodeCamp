---
title: Extract Local State into Redux
---
## Extract Local State into Redux

### Hint 1
You need to change the following sections:
* default state declarations: remove `messages`
* `submitMessage`: use `props`
* `render`: the unordered list should use `props` instead of `this.state.messages`

### Hint 2
Replace `this.state.messages` with `this.props.messages`.

### Hint 3
The `submitMessage` function still needs to set the state of the `input`.


### Solution
<details>
  <summary>Spoiler!</summary>
  
```jsx
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
  ```

</details>
