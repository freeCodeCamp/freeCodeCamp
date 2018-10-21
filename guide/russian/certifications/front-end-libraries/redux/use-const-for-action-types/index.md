---
title: Use const for Action Types
localeTitle: Использовать const для типов действий
---
## Использовать const для типов действий

### Использование const для типов Action имеет большое преимущество перед использованием строк.

**Случайные неправильные штрихи могут приводить к ошибкам.**

Вы можете указать `type: 'LOGIN'` правильно в своем создателе действия, но `type: 'LOGN'` mispell `type: 'LOGN'` в вашем редукторе, как показано ниже.
```
const loginUser = () => { 
  return { 
    type: 'LOGIN' 
  } 
 }; 
 
 const authReducer = (state = defaultState, action) => { 
 
  switch (action.type) { 
 
    case 'LOGN': 
      return { 
        authenticated: true 
      } 
 
    case 'LOGOUT': 
      return { 
        authenticated: false 
      } 
 
    default: 
      return state; 
 
  } 
 
 }; 
```

Используя const для типа действия, не имеет значения, неверна ли ваша строка, потому что и статут переключения редуктора, и тип действия ссылаются на одну и ту же `const` . Использование `const` может также привести ваш редактор кода к предложению `const` когда вы его печатаете, тем самым уменьшая вероятность неправильного использования `const` .

Код, показанный ниже, будет работать.
```
const LOGIN = 'blahblahblah'; 
 const LOGOUT = 'wahwahwahwah'; 
 
 const loginUser = () => { 
  return { 
    type: LOGIN 
  } 
 }; 
 
 const logoutUser = () => { 
  return { 
    type: LOGOUT 
  } 
 }; 
 
 const authReducer = (state = defaultState, action) => { 
 
  switch (action.type) { 
 
    case LOGIN: 
      return { 
        authenticated: true 
      } 
 
    case LOGOUT: 
      return { 
        authenticated: false 
      } 
 
    default: 
      return state; 
 
  } 
 
 }; 

```