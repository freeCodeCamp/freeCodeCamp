---
title: Manage State Locally First
---
## Manage State Locally First

### Hint 1
Bind the method calls in component attributes with ```this```, e.g.
```jsx
<input onChange={this.handleChange.bind(this)} value={this.state.input}/>
```
or the binding can be done beforehand

### Hint 2
Pass ```event``` to ```handleChange()``` method declaration and note that ```event.target.value``` stores the input value.

### Hint 3
You may wanna add the following ```<div>``` into render content to check if the ```handleChange()``` method is working.
```jsx
<div>{this.state.input}</div>
```

### Hint 4
spread operator ```...``` can be used for array concatenation in ```submitMessage()``` method declaration.

### Solution
<details>
  <summary>Spoiler!</summary>

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    })
  }

  submitMessage(){
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map((x, i)=>{
            return <li key={i}>{x}</li>
          })}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
```

</details>
