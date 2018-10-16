---
title: Match Characters that Occur Zero or More Times
localeTitle: Caracteres de coincidencia que ocurren cero o más veces
---
## Caracteres de coincidencia que ocurren cero o más veces

Cualquier letra en una expresión regular seguida de un `*` no tiene que aparecer en la cadena probada, mientras que cualquier letra en una expresión regular seguida de un `+` debe aparecer en una cadena al menos una vez, como se muestra a continuación.

```javascript
let phrase = "ba humbug"; 
 
 let regexPlus = /bah+/; 
 let regexStar = /bah*/; 
 
 regexPlus.test(phrase);  // returns false 
 regexStar.test(phrase);  // returns true 
```

Ambos permiten cualquier número de apariciones de la misma letra en una fila, por ejemplo,

```javascript
let phrase = "wooooow look at that!"; 
 
 let regexPlus = /wo+w/; 
 let regexStar = /wo*w/; 
 
 regexPlus.test(phrase); // returns true 
 regexStar.test(phrase); // returns true 

```