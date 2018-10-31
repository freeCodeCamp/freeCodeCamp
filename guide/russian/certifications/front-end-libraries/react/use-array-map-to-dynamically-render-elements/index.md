---
title: Use Array.map() to Dynamically Render Elements
localeTitle: Используйте Array.map () для динамически визуализирующих элементов
---
## Используйте Array.map () для динамически визуализирующих элементов

## Подсказка 1:

Определите два состояния как `object` JavaScript.

```javascript
{object: state, object: state} 
```

## Подсказка 2:

Для создания строки для каждого объекта в массиве требуется `.map()` .

```javascript
this.state.toDoList.map(i => <li>{i}</li>); 
```

## Решение:

Как только вы добавите функцию карты, вы заметите, что она будет генерировать `<li>` для каждого элемента, который вы ввели в список.

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