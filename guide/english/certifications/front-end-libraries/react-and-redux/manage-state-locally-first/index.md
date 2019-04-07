---
title: Manage State Locally First
---
## Manage State Locally First

### Hint 1
Bind the method calls in component attributes with ```this```, e.g.
```jsx
<input onChange={this.handleChange.bind(this)} value={this.state.input}/>
```
or the binding can be done before ```render()```

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
          {this.state.messages.map((x)=>{
            return <li>{x}</li>
          })}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
```


This is a stub. <a href='https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/certifications/front-end-libraries/react-and-redux/manage-state-locally-first/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
