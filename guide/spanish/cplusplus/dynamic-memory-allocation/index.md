---
title: Dynamic Memory Allocation
localeTitle: Asignación de memoria dinámica
---
## Asignación de memoria dinámica en C ++

### ¿Qué es la asignación de memoria dinámica en C ++?

*   **La asignación de memoria** en C ++ se refiere a la memoria asignada a las variables que utiliza en todo su programa.
*   **La asignación dinámica de memoria** es la memoria que se asigna a las variables en el tiempo de ejecución y la cantidad de memoria requerida también se decide en el tiempo de ejecución.
*   Esta memoria proviene del **montón** , mientras que _las_ variables _no estáticas_ y _las_ variables _locales_ obtienen memoria de la **pila** .
*   En C ++, el programador puede realizar asignaciones de memoria manualmente y se llama como **_asignación de memoria dinámica_** .
*   En C fue posible realizar una asignación de memoria dinámica, mediante el uso de las funciones _calloc_ y _malloc_ para asignar memoria y el uso de _la_ función _libre_ para desasignar la memoria dinámica.
*   En C ++, además de lo anterior, hay dos funciones, _nueva_ y _eliminar_ para realizar la asignación y desasignación de memoria dinámica.

### NUEVO operador

*   `new` operador puede otorgar la memoria del programador desde el montón (si está disponible). Si la memoria que solicita el programador está disponible, el `new` operador inicializa la memoria y luego devuelve la dirección (referencia) de la memoria asignada.
*   **Sintaxis**  
    `pointer-variable-type` = **nuevo** `data-type;`  
    Ejemplo 1: `int *ptr` = **new** `int;`  
    Ejemplo 2: `int *ptr2` = **new** `int[10];`  
    Aquí, `pointer-variable-type` es un **puntero** de `data type` de `data type` . El `data-type` puede ser int, char, etc. o el tipo de datos definido por el usuario.

### Borrar operador

*   Es responsabilidad del programador desasignar la memoria asignada dinámicamente, de lo contrario, la memoria no estaría disponible para ser reasignada hasta el final del programa.
    
*   Para desasignar la memoria, el operador de `delete` está disponible y puede ser utilizado por el programador.
    
*   **Sintaxis**  
    **eliminar** `pointer-type-variable;`  
    Por ejemplo, para liberar la memoria asignada en el ejemplo 1 anterior, escribimos:  
    `delete ptr;`  
    Del mismo modo, por ejemplo 2, la memoria puede ser liberada por:  
    `delete ptr2` ;
    
    ### Pérdidas de memoria
    
    Las fugas se producen cuando no puede desasignar la memoria dinámica que asignó a través del `New` operador al final de su programa. Si no lo desasigna con el operador Eliminar, su computadora seguirá creando nueva memoria en el montón cada vez que se ejecute el programa. Esto hace que su computadora se ralentice porque la memoria no se elimina y su memoria disponible disminuye.