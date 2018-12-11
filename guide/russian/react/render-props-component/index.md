---
title: Render Props Component
localeTitle: Рендеринг props компонент
---
## Рендеринг props компонент

Рендеринг props - это передовая модель React, да, так просто!

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

Этот компонент Toggle возвращает состояние его дочерних элементов `state.on` и функцию toggle. Которые могут быть использованы в его дочерних компонентах.

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

Как вы можете заметить, функция переключения может использоваться дочерней кнопкой Button для переключения некоторого содержимого. if on is true, h1-tag будет отображаться иначе.

## Другие источники

* [React docs: Render реквизит](https://reactjs.org/docs/render-props.html)
