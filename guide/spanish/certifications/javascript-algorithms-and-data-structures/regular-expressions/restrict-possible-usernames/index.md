---
title: Restrict Possible Usernames
localeTitle: Restringir posibles nombres de usuario
---
## Restringir posibles nombres de usuario

## Solución:

```javascript
let username = "JackOfAllTrades"; 
 let userCheck = /^[az]{2,}\d*$/i; 
 let result = userCheck.test(username); 
```

## Explique:

1.  Los únicos números en el nombre de usuario deben estar al final. `\d$` Puede haber cero o más de ellos al final. `*`

```javascript
/\d*$/; 
```

2.  Las letras del nombre de usuario pueden estar en minúsculas y en mayúsculas. `i`

```javascript
/\d*$/i; 
```

3.  Los nombres de usuario deben tener al menos dos caracteres de largo. `{2,}` Un nombre de usuario de dos letras solo puede usar caracteres de letras del alfabeto. `^[az]`

```javascript
/^[az]{2,}\d*$/i; 

```