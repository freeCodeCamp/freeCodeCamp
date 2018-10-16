---
title: Chaining If Else Statements
localeTitle: Encadenamiento en caso contrario
---
## Encadenamiento en caso contrario

*   `If` : el primer condicional en cada sentencia if / else, en caso de que el condicional sea _verdadero_ , ejecute el código e ignore el resto.
*   `Else if` : nunca se puede utilizar como el primer condicional. Siempre es un condicional después de un `if` , en caso de que el condicional sea verdadero, ejecute el código. De lo contrario salta al siguiente condicional.
*   `Else` : en caso de que todos los condicionales anteriores sean _falsos_ , de lo **contrario** se ejecuta.

### Explicación del problema:

_Escriba las instrucciones `if` / `else if` encadenadas para cumplir las siguientes condiciones_ :

_`num < 5` - devuelve "Tiny" `num < 10` - devuelve "Small" `num < 15` - devuelve "Medio" `num < 20` - devuelve "Large" `num >= 20` - devuelve "Enorme"_

#### Sugerencia 1

Recuerde que puede combinar (encadenar) varias declaraciones `if...else` , una después de la otra, hasta que la última use `else if (condition) {do this}` .

> _intenta resolver el problema ahora_
> 
> #### Sugerencia 2
> 
> A veces, cuando escribes más código del que estás acostumbrado y no funciona, las pequeñas cosas son las que nos traicionan. La comprobación de puntos y comas que faltan, corchetes, etc. puede resultar muy útil. _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

**¡Solución por delante!**

## Solución:

```javascript
function testSize(num) { 
  // Only change code below this line 
  if (num < 5){ 
    return "Tiny"; 
  } 
  else if (num < 10) { 
    return "Small"; 
  } 
  else if (num < 15){ 
    return "Medium"; 
  } 
  else if (num < 20){ 
    return "Large"; 
  } 
  else { 
    return "Huge"; 
  } 
  // Only change code above this line 
 } 
```

· Ejecutar código en [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Chaining-ifelse-statements)

### Explicación del código

La función primero verifica la condición `if` `(num < 5)` . Si se evalúa como `true` , devuelve la instrucción entre las llaves ("Diminuto"). Si no lo hace, verifica la siguiente condición hasta la última declaración de lo `else` .

### Recursos

*   ["if ... else" - _referencia de JavaScript MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)