---
title: Use State to Toggle an Element
localeTitle: Использовать состояние для переключения элемента
---
## Использовать состояние для переключения элемента

*   Вы можете переключать элемент, проверяя и изменяя его состояние.

## Подсказка 1:

*   Не забудьте связать `this` с конструктором метода.

```javascript
    this.toggleVisibility = this.toggleVisibility.bind(this); 
```

## Подсказка 2:

*   Помните, что вы можете использовать функцию JavaScript для проверки состояния элемента.

## Решение:

```jsx
class MyComponent extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      visibility: false 
    }; 
    // change code below this line 
    this.toggleVisibility = this.toggleVisibility.bind(this); 
    // change code above this line 
  } 
  // change code below this line 
  toggleVisibility() { 
    if (this.state.visibility == true) { 
    this.setState({ 
      visibility: false 
    });} else { 
      this.setState({ 
        visibility: true 
      }) 
    } 
  } 
  // change code above this line 
  render() { 
    if (this.state.visibility) { 
      return ( 
        <div> 
          <button onClick={this.toggleVisibility}>Click Me</button> 
          <h1>Now you see me!</h1> 
        </div> 
      ); 
    } else { 
      return ( 
        <div> 
          <button onClick={this.toggleVisibility}>Click Me</button> 
        </div> 
      ); 
    } 
  } 
 }; 

```