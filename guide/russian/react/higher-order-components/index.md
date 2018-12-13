---
title: Higher-Order Components
localeTitle: Higher-Order Components
---
## Higher-Order Components

В React ***Higher-Order Components*** (HOC) - это функция, которая принимает компонент и возвращает новый компонент. Программисты используют HOC для обеспечения **повторного использования компонентной логики** .

Если вы использовали Redux `connect`, то это значит, что вы уже работали с Higher-Order Components.

Основная идея:

```jsx
const EnhancedComponent = enhance(WrappedComponent); 
```

Куда:
  * `enhance` - это Higher-Order Component;
  * `WrappedComponent` - это компонент, который вы хотите улучшить; а также
  * `EnhancedComponent` - это новый компонент.

Это может стать телом `enhance` HOC:
```jsx
function enhance(WrappedComponent) { 
  return class extends React.Component { 
    render() { 
      const extraProp = 'This is an injected prop!'; 
      return ( 
        <div className="Wrapper"> 
          <WrappedComponent 
            {...this.props} 
            extraProp={extraProp} 
          /> 
        </div> 
      ); 
    } 
  } 
 } 
```

В этом случае `React.Component` `enhance` возвращает **anonymous class** который расширяет `React.Component` . Этот новый компонент выполняет три простых действия:

  * Отрисовывание `WrappedComponent` в элементе `div` ;
  * Передача собственных реквизитов для `WrappedComponent` ; а также
  * Внедрение дополнительной поддержки для `WrappedComponent` .

HOC - это всего лишь образец, который использует силу композиционной природы Реакта. **Они добавляют функции к компоненту** . С ними вы можете многое сделать!

## Другие источники
* [React docs: Компоненты более высокого порядка](https://reactjs.org/docs/higher-order-components.html)
