---
title: How Jsonp Is Different from JSON
localeTitle: Как Jsonp отличается от JSON
---
JSONP - это просто JSON, завернутый в функцию обратного вызова.

JSONP полезен для создания междоменных запросов, которые в других случаях запрещены браузерами по соображениям безопасности.
```
 // an example of JSON 
 {"weapon":"nunchucks","headband":"yellow"} 
 
 // an example of JSONP 
 myCallback({"weapon":"nunchucks","headband":"yellow"}); 
```

Затем для доступа к данным, хранящимся в вашем JSONP, вы определяете функцию обратного вызова:
```
myCallback = function(data){ 
  alert(data.weapon); 
 }; 

```