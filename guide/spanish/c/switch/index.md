---
title: Switch Case
localeTitle: Caja de interruptores
---
# Caja de interruptores

La instrucción switch es como un conjunto de `if statements` .

Es una lista de posibilidades, con una acción para cada posibilidad, y una acción predeterminada opcional, en caso de que nada se evalúe como verdadero.

Salimos del interruptor por `break` . Si no se llega a la declaración de `break` antes del comienzo del siguiente caso, la ejecución se ejecutará y comenzará a ejecutar el código en el siguiente caso.

## Sintaxis del interruptor ... caso

```c
switch (n) 
 { 
    case constant1: 
        // code to be executed if n is equal to constant1; 
        break; 
 
    case constant2: 
        // code to be executed if n is equal to constant2; 
        break; 
        . 
        . 
        . 
    default: 
        // code to be executed if n doesn't match any constant 
 } 
```

## Ejemplo

El uso de una instrucción de conmutación sobre varias declaraciones if / else puede contribuir a una mayor velocidad y legibilidad.

```c
# include <stdio.h> 
 
 int main() { 
 
    char operator; 
    double firstNumber,secondNumber; 
 
    printf("Enter an operator (+, -, *, /): "); 
    scanf("%c", &operator); 
 
    printf("Enter two operands: "); 
    scanf("%lf %lf",&firstNumber, &secondNumber); 
 
    switch (operator) { 
        case '+': 
            printf("%.1lf + %.1lf = %.1lf",firstNumber, secondNumber, firstNumber+secondNumber); 
            break; 
        case '-': 
            printf("%.1lf - %.1lf = %.1lf",firstNumber, secondNumber, firstNumber-secondNumber); 
            break; 
        case '*': 
            printf("%.1lf * %.1lf = %.1lf",firstNumber, secondNumber, firstNumber*secondNumber); 
            break; 
        case '/': 
            printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/firstNumber); 
            break; 
        // Operator is doesn't match any case constant (+, -, *, /) 
        default: 
            printf("Error! operator is not correct"); 
    } 
 
    return 0; 
 } 
```

## Salida:

```c
-> Enter an operator (+, -, *,): - 
 -> Enter two operands: 32.5 
 -> 12.4 
 -> 32.5 - 12.4 = 20.1 
```

## Revisión: Cambiar vs si más

*   Compruebe la expresión de prueba: una instrucción if-then-else puede probar expresiones basadas en rangos de valores o condiciones, mientras que una instrucción switch prueba expresiones basadas solo en un solo entero, valor enumerado u objeto String.
*   Conmutador mejor para la bifurcación de múltiples vías: cuando el compilador compila una declaración de conmutador, inspeccionará cada una de las constantes de caso y creará una "tabla de salto" que utilizará para seleccionar la ruta de ejecución en función del valor de la expresión. Por lo tanto, si necesitamos seleccionar entre un gran grupo de valores, una instrucción de conmutación se ejecutará mucho más rápido que la lógica equivalente codificada utilizando una secuencia de if-elses. El compilador puede hacer esto porque sabe que las constantes de caso son todas del mismo tipo y simplemente deben compararse para igualarlas con la expresión de cambio, mientras que en el caso de las expresiones if, el compilador no tiene ese conocimiento.
*   if-else es mejor para los valores booleanos: if-else bifurcaciones condicionales son excelentes para condiciones variables que resultan en un valor booleano, mientras que las instrucciones de conmutación son excelentes para valores de datos fijos.
*   Velocidad: una declaración de cambio puede resultar más rápida que si la cantidad de casos proporcionada fuera buena. Si solo hay pocos casos, podría no afectar la velocidad en cualquier caso. Prefiere cambiar si el número de casos es más de 5, de lo contrario, también puedes usar if-else.
*   Si un conmutador contiene más de cinco elementos, se implementa utilizando una tabla de búsqueda o una lista de hash. Esto significa que todos los elementos obtienen el mismo tiempo de acceso, en comparación con una lista de if: s, donde el último elemento tarda mucho más en llegar, ya que tiene que evaluar primero cada condición previa.
*   Claridad en la legibilidad: un interruptor se ve mucho más limpio cuando tiene que combinar los casos. Los ifs son bastante vulnerables a los errores también. Falta una declaración de otra cosa puede hacerte estragos. Agregar / eliminar etiquetas también es más fácil con un interruptor y hace que su código sea mucho más fácil de cambiar y mantener.