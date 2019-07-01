---
title: Use a Ternary Expression for Conditional Rendering
localeTitle: Использование терминологического выражения для условного рендеринга
---
## Использование терминологического выражения для условного рендеринга

Эта задача состоит в том, чтобы использовать Ternary Expression только вместо использования `If/Else` в коде,

## намек

Тернарный оператор состоит из трех частей, но вы можете комбинировать несколько тройных выражений. Вот основной синтаксис:
```
condition ? expressionIfTrue : expressionIfFalse 
```

## Решение

Вот образец решения с использованием тройного выражения. Сначала вам нужно объявить состояние в конструкторе, как это

```jsx
constructor(props) { 
    super(props); 
    // change code below this line 
      this.state = { 
        input: '', 
        userAge: '' 
      } 
    // change code above this line 
    this.submit = this.submit.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
  } 
```

Тогда тернарный оператор

```jsx
{ 
    /* change code here */ 
    (this.state.userAge >= 18) ? buttonTwo : (this.state.userAge== '')? buttonOne: buttonThree 
 
 } 

```