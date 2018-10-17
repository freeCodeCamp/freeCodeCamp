---
title: Use Array.map() to Dynamically Render Elements
localeTitle: Utilice Array.map () para generar elementos dinámicamente
---
## Utilice Array.map () para generar elementos dinámicamente

## Sugerencia 1:

Define los dos estados como un `object` JavaScript.

```javascript
{object: state, object: state} 
```

## Sugerencia 2:

Necesita `.map()` para generar una línea para cada objeto en la matriz.

```javascript
this.state.toDoList.map(i => <li>{i}</li>); 
```

## Solución:

Una vez que agregue la función de mapa, notará que generará un `<li>` para cada elemento que ponga en la lista.

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