---
title: Use Array.map() to Dynamically Render Elements
localeTitle: Use Array.map () para renderizar elementos dinamicamente
---
## Use Array.map () para renderizar elementos dinamicamente

## Sugestão 1:

Defina os dois estados como um `object` JavaScript.

```javascript
{object: state, object: state} 
```

## Dica 2:

Você precisa de `.map()` para gerar uma linha para cada objeto na matriz.

```javascript
this.state.toDoList.map(i => <li>{i}</li>); 
```

## Solução:

Depois de adicionar a função de mapa, você notará que irá gerar um `<li>` para cada item que você colocar na lista.

```jsx
const textAreaStyles = { 
  width: 235, 
  margin: 5 
 }; 
 
 class MyToDoList extends React.Component { 
  constructor(props) { 
    super(props); 
    // change code below this line 
    this.state = { 
      userInput: '', 
      toDoList: [] 
    } 
    // change code above this line 
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
  } 
  handleSubmit() { 
    const itemsArray = this.state.userInput.split(','); 
    this.setState({ 
      toDoList: itemsArray 
    }); 
  } 
  handleChange(e) { 
    this.setState({ 
      userInput: e.target.value 
    }); 
  } 
  render() { 
    const items = this.state.toDoList.map(i => <li>{i}</li>); // change code here 
    return ( 
      <div> 
        <textarea 
          onChange={this.handleChange} 
          value={this.state.userInput} 
          style={textAreaStyles} 
          placeholder="Separate Items With Commas" /><br /> 
        <button onClick={this.handleSubmit}>Create List</button> 
        <h1>My "To Do" List:</h1> 
        <ul> 
          {items} 
        </ul> 
      </div> 
    ); 
  } 
 }; 

```