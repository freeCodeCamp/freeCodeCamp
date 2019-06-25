---
title: Use PropTypes to Define the Props You Expect
localeTitle: Используйте PropTypes для определения реквизита, который вы ожидаете
---
## Используйте PropTypes для определения реквизита, который вы ожидаете

В этой задаче вы установили `propTypes` для компонента `Items` .

```jsx
const Items = (props) => { 
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1> 
 }; 
```

Чтобы установить propTypes, синтаксис, который следует соблюдать, - это

```jsx
itemName.propTypes = { 
  props: PropTypes.dataType.isRequired 
 }; 
```

После синтаксиса следующий код должен быть установлен ниже заданного кода для `quantity` реквизитов компонента `Items`

```jsx
Items.propTypes = { 
  quantity: PropTypes.number.isRequired 
 }; 

```