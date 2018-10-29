---
title: Render Conditionally from Props
localeTitle: Отказывать условно от реквизита
---
## Отказывать условно от реквизита

Это немного сложно, но легко.

## Решение

Измените `handleClick()` с правильной инструкцией по увеличению.

```react.js
handleClick() { 
  this.setState({ 
    counter: this.state.counter + 1 
  }); 
 } 
```

В методе `render()` используйте `Math.random()` как указано в описании задачи, и напишите тернарное выражение, чтобы передать `props` в компоненте **Results** .

```react.js
 let expression = Math.random() > .5; 
 
 {(expression == 1)? <Results fiftyFifty="You win!"/> : <Results fiftyFifty="You lose!"/> } 
```

Затем `fiftyFifty` реквизит в компоненте Results.

```react.js
  <h1> 
  { 
    this.props.fiftyFifty 
  } 
  </h1> 

```