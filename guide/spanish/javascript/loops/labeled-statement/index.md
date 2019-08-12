---
title: Labeled Statement
localeTitle: Declaración etiquetada
---
## Declaración etiquetada

La **Declaración etiquetada** se usa con las declaraciones `break` y `continue`, y sirve para identificar la declaración a la que se aplican las declaraciones `break` y `continue`.

### Sintaxis
```javascript
nombredelaetiqueta:
  declaraciones
```
### Uso 
Sin el uso de una declaración etiquetada, la declaración `break` solo podría salir de un bucle o de una declaración `switch`. Usar una declaración etiquetada permite al `break` saltar fuera de un bloque de código. 
#### Example 
```javascript
foo: {
  console.log ("Esto imprime:");
  break foo;
  console.log ("Esto nunca se imprimirá");
}
console.log ("¡Porque la ejecución salta aquí!") 
/* output
Esto imprime: ¡Porque la ejecución salta hasta aquí! */
```
Cuando se usa con una declaración continue, la declaración etiquetada te permite omitir una iteración de bucle. La ventaja es ser capaz de saltar de un bucle interno a un bucle externo cuando tienes declaraciones de bucles anidados. Sin el uso de una declaración etiquetada, tu solo podrías saltar de la iteración de bucle existente a la `siguiente iteración del mismo bucle`.
#### Example 
```javascript
// sin declaración etiquetada, cuando j == i el bucle interno salta a la siguiente iteración
function test() {
  for (var i = 0; i < 3; i++) {
    console.log ("i=" + i);
    for (var j = 0; j < 3; j++) {
      if (j === i) {
        continue;
      }
      console.log ("j=" + j);
    }
  }
}

/* output
i = 0 (observa que falta j = 0)
j = 1
j = 2
i = 1
j = 0 (observa que falta j = 1)
j = 2
i = 2
j = 0
j = 1 (observa que j = 2)
*/

// usando una declaración etiquetada, en cambio, podemos saltar al bucle externo (i)
function test() {
  exterior: for (var i = 0; i < 3; i++) {
    console.log ("i=" + i);
    for (var j = 0; j < 3; j++) {
      if (j === i) {
        continue exterior;
      }
      console.log ("j=" + j);
    }
  }
}

/*
i = 0 (j solo se registra cuando es menor que i)
i = 1
j = 0
i = 2
j = 0
j = 1
*/
```

### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)
