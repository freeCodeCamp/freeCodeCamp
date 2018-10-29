---
title: Write Reusable JavaScript with Functions
localeTitle: Escribir JavaScript reutilizable con funciones
---
En JavaScript, podemos dividir nuestro código en partes reutilizables llamadas funciones.

Aquí hay un ejemplo de una función:
```
function functionName() { 
  console.log("Hello World"); 
 } 
```

Puede `call` o `invoke` esta función utilizando su nombre seguido de paréntesis, como este:
```
functionName(); 
```

Cada vez que se llame a la función, se imprimirá el mensaje "Hello World" en la consola dev. Todo el código entre las llaves se ejecutará cada vez que se llame a la función.

Aquí hay otro ejemplo:
```
function otherFunctionName (a, b) { 
    return(a + b); 
 } 
```

Podemos `call` o `invoke` nuestra función así:
```
otherFunctionName(1,2); 
```

y se ejecutará y devolverá su valor de retorno a nosotros.