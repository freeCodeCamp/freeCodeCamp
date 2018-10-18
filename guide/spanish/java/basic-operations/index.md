---
title: Basic Operations
localeTitle: Operaciones básicas
---
# Operaciones básicas

Java soporta las siguientes operaciones en variables:

*   **Aritmética** : `Adición (+)` , `Sustracción (-)` , `Multiplicación (*)` , `División (/)` , `Módulo (%)` , `Incremento (++)` , `Decremenot (--)` .
*   **Concatenación de cadenas** : `+` se puede usar para la concatenación de cadenas, pero la resta `-` en una cadena no es una operación válida.
*   **Relacional** : `Igual a (==)` , `No Igual a (!=)` , `Mayor que (>)` , `Menor que (<)` , `Mayor o igual que (>=)` , `Menos igual que (<=)`
*   **Bitwise** : `Bitwise And (&)` , `Bitwise Or (|)` , `Bitwise XOR (^)` , `Bitwise Compliment (~)` , `Left shift (<<)` , `Right Shift (>>)` , `Zero fill right shift (>>>)`
*   **Lógico** : `Logical And (&&)` , `Logical Or (||)` , `Logical Not (!)`
*   **Asignación** : `=` , `+=` , `-=` , `*=` , `/=` , `%=` , `<<=` , `>>=` , `&=` , `^=` , `|=`
*   **Otros** : `Conditional/Ternary(?:)` , `instanceof`

Si bien la mayoría de las operaciones se explican por sí mismas, el operador condicional (ternario) funciona de la siguiente manera:

`expression that results in boolean output ? return this value if true : return this value if false;`

Ejemplo: Verdadera condición:

```java
    int x = 10; 
    int y = (x == 10) ? 5 : 9; // y will equal 5 since the expression x == 10 evaluates to true 
```

Condición falsa:

```java
    int x = 25; 
    int y = (x == 10) ? 5 : 9; // y will equal 9 since the expression x == 10 evaluates to false 
```

La instancia de operador se utiliza para la verificación de tipos. Se puede usar para probar si un objeto es una instancia de una clase, una subclase o una interfaz. Formato general _**instancia** de objeto de clase / subclase / interfaz_

Aquí hay un programa para ilustrar el operador de la instalación: \`\` \`Java Persona obj1 = nueva persona (); Persona obj2 = chico nuevo ();
```
    // As obj is of type person, it is not an 
    // instance of Boy or interface 
    System.out.println("obj1 instanceof Person: " +  (obj1 instanceof Person)); /*it returns true since obj1 is an instance of person */ 
```

\`\` \`
