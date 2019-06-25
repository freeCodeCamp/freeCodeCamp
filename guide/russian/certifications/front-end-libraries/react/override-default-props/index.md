---
title: Override Default Props
localeTitle: Переопределить опоры по умолчанию
---
## Переопределить опоры по умолчанию

Эта задача имеет переопределить значение по умолчанию реквизита `quantity` для компонента Items. Если значение по умолчанию `quantity` устанавливается в `0` .

```jsx
const Items = (props) => { 
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1> 
 } 
 
 Items.defaultProps = { 
  quantity: 0 
 } 
```

Чтобы переопределить значение реквизита по умолчанию, синтаксис, который следует соблюдать,

```jsx
<Component propsName={Value}/> 
```

После синтаксиса следующий код должен быть объявлен ниже данного кода

```jsx
<Items quantity={50}/> 
```

Это приведет к переопределению значения от `0` до `50`