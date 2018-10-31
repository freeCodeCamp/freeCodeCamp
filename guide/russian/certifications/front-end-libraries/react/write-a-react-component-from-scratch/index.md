---
title: Write a React Component from Scratch
localeTitle: Напишите компонент реакции с нуля
---
## Напишите компонент реакции с нуля

В этой задаче мы хотим создать компонент реагирования `class` (компоненты React могут быть компонентами `class` или `function` компонентами). Все наши компоненты класса будут расширением `React.Component` . Например, мы можем начать составлять компонент `FirstComponent` с:

```javascript
class FirstComponent extends React.Component { 
 
 }; 
```

Мы также должны обязательно определить `constructor` для нашего нового класса. Это лучшая практика для вызова любого компонента `constructor` с `super` и передать `props` для обоих. `super` вытягивает `constructor` родительского класса нашего компонента (в данном случае `React.Component` ). Теперь код для нашего компонента выглядит следующим образом:

```javascript
class FirstComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
 
 }; 
```

Теперь все, что осталось сделать, это определить, что наш компонент будет `render` ! Мы делаем это, вызывая метод `render` компонента и возвращаем наш код JSX:

```javascript
class FirstComponent extends React.Component { 
  constructor(props) { 
    super(props); 
  } 
  render() { 
    return ( 
      // The JSX code you put here is what your component will render 
    ); 
  } 
 }; 
```

Как только ваш код JSX находится там, ваш компонент завершен! Если вы хотите более подробный учебник по компонентам React, Samer Buna [написал отличную статью](https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc) .