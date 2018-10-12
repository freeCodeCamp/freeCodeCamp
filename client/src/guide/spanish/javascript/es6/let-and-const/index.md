---
title: Let and Const
localeTitle: Let y Const
---
## Dejar

let es similar a var pero let tiene alcance. Let solo es accesible en el nivel de bloque que se define.
```
if (true) { 
 let a = 40; 
 console.log(a); //40 
 } 
 console.log(a); // undefined 
```

En el ejemplo anterior, la variable 'a' se define dentro de una instrucción If y, por lo tanto, no es accesible desde fuera de la función.

Otro ejemplo:
```
let a = 50; 
 let b = 100; 
 if (true) { 
 let a = 60; 
 var c = 10; 
 console.log(a/c); // 6 
 console.log(b/c); // 10 
 } 
 console.log(c); // 10 
 console.log(a); // 50 
```

## Const

Const se utiliza para asignar un valor constante a la variable. Y el valor no puede ser cambiado. Está arreglado.
```
const a = 50; 
 a = 60; // shows error. You cannot change the value of const. 
 const b = "Constant variable"; 
 b = "Assigning new value"; // shows error. 
```

Considere otro ejemplo.
```
const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go']; 
 LANGUAGES = "Javascript"; // shows error. 
 LANGUAGES.push('Java'); // Works fine. 
 console.log(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java'] 
```

Esto puede ser un poco confuso.

Considera de esta manera. Cuando defina una variable const, Javascript hace referencia a la dirección del valor a la variable. En nuestro ejemplo, la variable 'IDIOMAS' en realidad hace referencia a la memoria asignada a la matriz. Por lo tanto, no puede cambiar la variable para hacer referencia a otra ubicación de memoria más adelante. A lo largo del programa solo hace referencia a la matriz.