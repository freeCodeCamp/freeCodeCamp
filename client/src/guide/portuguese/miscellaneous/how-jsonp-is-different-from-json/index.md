---
title: How Jsonp Is Different from JSON
localeTitle: Como o Jsonp é diferente do JSON
---
O JSONP é apenas JSON envolvido em uma função de retorno de chamada.

O JSONP é útil para fazer solicitações entre domínios, que geralmente são proibidas pelos navegadores por motivos de segurança.
```
 // an example of JSON 
 {"weapon":"nunchucks","headband":"yellow"} 
 
 // an example of JSONP 
 myCallback({"weapon":"nunchucks","headband":"yellow"}); 
```

Em seguida, para acessar os dados armazenados em seu JSONP, você define a função de retorno de chamada:
```
myCallback = function(data){ 
  alert(data.weapon); 
 }; 

```