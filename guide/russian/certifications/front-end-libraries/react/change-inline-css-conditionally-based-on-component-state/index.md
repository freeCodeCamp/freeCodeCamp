---
title: Change Inline CSS Conditionally Based on Component State
localeTitle: Изменение встроенного CSS, условно основанного на состоянии компонента
---
## Изменение встроенного CSS, условно основанного на состоянии компонента

## Подсказка 1:

Вы будете проверять длину `this.state.input` поэтому используйте свойство `.length` .
```
this.state.input.length 
```

## Подсказка 2:

Вы вводите код перед оператором return, чтобы вы могли использовать инструкцию JavaScript `if/then` .

## Решение:

Вы будете использовать инструкцию `if/then` чтобы проверить значение `this.state.input.length` . Если он длиннее 15, назначьте `'3px solid red'` для `inputStyle.border` .

```jsx
class GateKeeper extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      input: '' 
    }; 
    this.handleChange = this.handleChange.bind(this); 
  } 
  handleChange(event) { 
    this.setState({ input: event.target.value }) 
  } 
  render() { 
    let inputStyle = { 
      border: '1px solid black' 
    }; 
    // change code below this line 
    if (this.state.input.length > 15) { 
      inputStyle.border = '3px solid red'; 
    } 
    // change code above this line 
    return ( 
      <div> 
        <h3>Don't Type Too Much:</h3> 
        <input 
          type="text" 
          style={inputStyle} 
          value={this.state.input} 
          onChange={this.handleChange} /> 
      </div> 
    ); 
  } 
 }; 
```

## Решение

Напишите условный оператор, который оценивается в соответствии с вашим состоянием, как указано в описании задачи, проверяет длину ввода и назначает новый объект переменной inputStyle.

```jsx
if (this.state.input.length > 15) { 
  inputStyle = { 
    border: '3px solid red' 
  } 
 } 

```