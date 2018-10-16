---
title: Render Props Component
localeTitle: Компонент рендеринга реквизита
---
## Компонент рендеринга реквизита

Рендеринг реквизита - это передовая модель React, но так просто!

### пример

Это пример того, как вы можете использовать render prop для функции переключения.

```jsx
import React, { PureComponent } from "react"; 
 
 class Toggle extends PureComponent { 
  state = { 
    on: false 
  }; 
 
  toggle = () => { 
    this.setState({ 
      on: !this.state.on 
    }); 
  }; 
 
  render() { 
    const { children } = this.props; 
    return children({ 
      on: this.state.on, 
      toggle: this.toggle 
    }); 
  } 
 } 
 
 export default Toggle; 
```

Этот компонент Toggle возвращает его состояние `state.on` и функцию toggle. Который может быть использован в его дочерних компонентах.

Этот Toggle можно использовать следующим образом:

```jsx
<Toggle> 
  {({ on, toggle }) => ( 
    <Fragment> 
      <button onClick={toggle}>Show / Hide</button> 
      {on && <h1>I can be toggled on or off!</h1>} 
    </Fragment> 
  )} 
 </Toggle> 
```

Как вы можете видеть, функция переключения может использоваться дочерней кнопкой Button для переключения некоторого содержимого. if on is true, h1-tag будет отображаться иначе.

## Другие источники

*   [Реагировать на документы: Render реквизит](https://reactjs.org/docs/render-props.html)