---
title: Understand Functional Programming Terminology
localeTitle: Entender la terminología de programación funcional
---
## Entender la terminología de programación funcional

### Método

Al igual que en el último desafío, debe llamar al método `getTea` y almacenarlo en una variable. Solo que esta vez, tiene 2 variables para almacenar 2 conjuntos separados de datos. Verá que la función `getTea()` es la misma que antes, solo que ahora toma 2 parámetros separados. El primer parámetro es una función, por lo que necesitaremos pasar la función `prepareGreenTea()` o la función `prepareBlackTea()` , seguida del segundo parámetro `numOfCups` que se puede ingresar como un entero.

### Solución

En este ejercicio estamos asignando el resultado de una función de orden superior a las variables. Para hacer esto, llamamos a una función con una función de devolución de llamada como parámetro.

## Insinuación:

`javascript const basketOne = makeBasket(addFruit, 10)`

\## Solución:

\`\` \`javascript

/ \*\*

*   Un largo proceso para preparar té verde.
*   @return {string} Una taza de té verde. \*\* / const prepareGreenTea = () => 'greenTea';

/ \*\*

*   Consigue un número dado de tazas de té.
    
*   @param {function (): string} prepareTea El tipo de función de preparación de té.
    
*   @param {número} numOfCups Número de tazas de té requeridas.
    
*   @return {Array } Dada la cantidad de tazas de té. \*\* / const getTea = (prepareTea, numOfCups) => { const teaCups = \[\];
    
    para (deja tazas = 1; tazas <= numOfCups; tazas + = 1) { const teaCup = prepareTea (); teaCups.push (teaCup); }
    
    devolver tazas de té; };
    
    // Añade tu código debajo de esta línea const tea4GreenTeamFCC = getTea (prepareGreenTea, 27); // :) const tea4BlackTeamFCC = getTea (prepareBlackTea, 13); // :) // Añade tu código encima de esta línea
    
    console.log ( tea4GreenTeamFCC, tea4BlackTeamFCC );
    
    \`\` \`
    

## Explicación del código:

En la solución anterior pasamos a las funciones `prepareGreenTea()` y `prepareBlackTea()` como parámetros o funciones de devolución de llamada para las funciones `getTea()` asignadas a nuestras dos variables constantes `tea4BlackTeamFCC` y `tea4GreenTeamFCC` . De esta manera, no se cambian las variables globales, y tenemos la opción de agregar un número ilimitado de diferentes opciones de métodos `prepareTea()` ya que es una función de devolución de llamada que se pasa a la función de orden superior de `getTea()` .