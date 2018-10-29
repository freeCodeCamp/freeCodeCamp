---
title: Iterate Odd Numbers With a For Loop
localeTitle: Iterar números impares con un bucle for
---
## Iterar números impares con un bucle for

Aquí está el ejemplo:

```javascript
var ourArray = []; 
 
 for (var i = 0; i < 10; i += 2) { 
  ourArray.push(i); 
 } 
 
 // Setup 
 var myArray = []; 
 
 // Only change code below this line. 
```

Aquí hay una solución: Después de la cadena `// Only change code below this line.` Añadimos `for` bucle. Necesitas copiar loop desde la parte superior:

`javascript for (var i = 0; i < 10; i += 2) { ourArray.push(i); }` Y cambie la `initialization` `var i = 0` a `var i = 1` , también necesita cambiar el nombre de la matriz `ourArray` a `myArray` :

`javascript for (var i = 1; i < 10; i += 2) { myArray.push(i); }`

Aquí hay una solución completa:

\`\` \`javascript var ourArray = \[\];

para (var i = 0; i <10; i + = 2) { nuestroArray.push (i); }

// Preparar var myArray = \[\];

// Solo cambia el código debajo de esta línea.

para (var i = 1; i <10; i + = 2) { myArray.push (i); } \`\` \`