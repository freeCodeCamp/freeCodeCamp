---
title: Restrict Possible Usernames
localeTitle: Restringir nomes de usuário possíveis
---
## Restringir nomes de usuário possíveis

## Solução:

```javascript
let username = "JackOfAllTrades"; 
 let userCheck = /^[az]{2,}\d*$/i; 
 let result = userCheck.test(username); 
```

## Explicar:

1.  Os únicos números no nome de usuário devem estar no final. `\d$` Pode haver zero ou mais deles no final. `*`

```javascript
/\d*$/; 
```

2.  As letras de nome de usuário podem ser minúsculas e maiúsculas. `i`

```javascript
/\d*$/i; 
```

3.  Os nomes de usuários devem ter pelo menos dois caracteres. `{2,}` Um nome de usuário de duas letras só pode usar caracteres alfabéticos. `^[az]`

```javascript
/^[az]{2,}\d*$/i; 

```