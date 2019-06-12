---
title: Fragments
localeTitle: Фрагменты
---
# Фрагменты

Фрагменты - это способ визуализации нескольких элементов без использования элемента-обертки.
При попытке визуализации элементов без закрывающего тега в JSX вы увидите сообщение об ошибке. `Adjacent JSX elements must be wrapped in an enclosing tag`.
Это связано с тем, что когда JSX транслирует код, он создает элементы с соответствующими именами тегов и не знает,
какое имя тега использовать, если найдено несколько элементов. Раньше частым решением этой проблемы было использование обертки div.
Тем не менее, в React 16-ой версии появилось дополнение `Fragment`, которое полностью заменяет предыдушее решение.

`Fragment` выполняет обертку, не добавляя ненужные div в DOM. Вы можете использовать его непосредственно из импорта React или деконструировать его:

```jsx
import React from 'react'; 
 
 class MyComponent extends React.Component { 
  render(){ 
    return ( 
      <React.Fragment> 
        <div>I am an element!</div> 
        <button>I am another element</button> 
      </React.Fragment> 
    ); 
  } 
 } 
 
 export default MyComponent; 
```

```jsx
// Deconstructed 
 import React, { Component, Fragment } from 'react'; 
 
 class MyComponent extends Component { 
  render(){ 
    return ( 
      <Fragment> 
        <div>I am an element!</div> 
        <button>I am another element</button> 
      </Fragment> 
    ); 
  } 
 } 
 
 export default MyComponent; 
```

React версия 16.2 упростил этот процесс далее, позволяя пустым тегам JSX интерпретироваться как фрагменты:

```jsx
return ( 
  <> 
    <div>I am an element!</div> 
    <button>I am another element</button> 
  </> 
 ); 
```

#### Дополнительная информация:

*   [React.Fragment (официальная документация)](https://reactjs.org/docs/react-api.html#reactfragment)
*   [React v16.2.0: улучшенная поддержка фрагментов](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)
