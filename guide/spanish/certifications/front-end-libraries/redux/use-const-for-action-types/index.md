---
title: Use const for Action Types
localeTitle: Utilice const para tipos de acción
---
## Utilice const para tipos de acción

### Usar una constante para tipos de acción tiene una gran ventaja sobre el uso de cadenas.

**Los errores ortográficos accidentales de las cadenas pueden llevar a errores.**

Puede escribir correctamente `type: 'LOGIN'` en su creador de acciones, pero `type: 'LOGN'` incorrectamente `type: 'LOGN'` en su reductor como se muestra a continuación.
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

Al utilizar una constante para el Tipo de acción, no importará si su cadena está mal escrita porque tanto la declaración del interruptor del reductor como el Tipo de acción hacen referencia a la misma `const` . El uso de una `const` también puede llevar a su editor de código a sugerir la `const` medida que la escribe, lo que reduce la posibilidad de escribir mal la `const` .

El código que se muestra a continuación funcionará.
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