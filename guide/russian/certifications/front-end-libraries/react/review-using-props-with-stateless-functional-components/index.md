---
title: Review Using Props with Stateless Functional Components
localeTitle: Обзор использования реквизитов с функциональными компонентами без учета состояния
---
## Обзор использования реквизитов с функциональными компонентами без учета состояния

### Советы

*   Функциональный (aka stateless) компонент - это просто простая функция javascript, которая принимает реквизит в качестве аргумента и возвращает элемент реакции.
*   Используйте `Component.defaultProps` для установки реквизитов по умолчанию.
*   Используйте `Component.propTypes` для установки типов реквизитов.

### Решение

```javascript
const Camper = props => (<p>{props.name}</p>); 
 
 Camper.defaultProps = { 
  name: 'CamperBot' 
 }; 
 
 Camper.propTypes = { 
  name: PropTypes.string.isRequired 
 }; 
```

### Соответствующая ссылка

*   [Типеринг с помощью PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)