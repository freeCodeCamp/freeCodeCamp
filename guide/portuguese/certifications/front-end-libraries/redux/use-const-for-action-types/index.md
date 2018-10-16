---
title: Use const for Action Types
localeTitle: Use const para tipos de ação
---
## Use const para tipos de ação

### Usar uma const para Action Types tem uma grande vantagem sobre o uso de strings.

**Erros ortográficos acidentais de seqüências de caracteres podem levar a erros.**

Você pode `type: 'LOGIN'` corretamente em seu criador de ações, mas `type: 'LOGN'` no seu redutor como mostrado abaixo.
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

Ao usar uma const para o tipo de ação, não importa se a sua string foi digitada incorretamente porque tanto a declaração do comutador do redutor quanto o tipo de ação estão referenciando a mesma `const` . Usar um `const` também pode levar seu editor de código a sugerir o `const` enquanto você o digita, reduzindo assim a chance de errar o erro na `const` .

O código mostrado abaixo funcionará.
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