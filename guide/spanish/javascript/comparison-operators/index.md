---
title: Comparison Operators
localeTitle: Operadores de comparación
---
JavaScript tiene comparaciones **estrictas** y **de conversión de tipos** .

*   Una comparación estricta (por ejemplo, ===) solo es cierta si los operandos son del mismo tipo.
    
*   La comparación abstracta más comúnmente utilizada (por ejemplo, ==) convierte los operandos al mismo Tipo antes de hacer la comparación.
    
*   Para comparaciones abstractas relacionales (por ejemplo, <=), los operandos se convierten primero en primitivas, luego al mismo tipo, antes de la comparación.
    
*   Las cadenas se comparan según el ordenamiento lexicográfico estándar, utilizando valores de Unicode.
    

## Características de las comparaciones:

*   Dos cadenas son estrictamente iguales cuando tienen la misma secuencia de caracteres, la misma longitud y los mismos caracteres en las posiciones correspondientes.
    
*   Dos números son estrictamente iguales cuando son numéricamente iguales (tienen el mismo valor numérico). NaN no es igual a nada, incluyendo NaN. Los ceros positivos y negativos son iguales entre sí.
    
*   Dos operandos booleanos son estrictamente iguales si ambos son verdaderos o ambos son falsos.
    
*   Dos objetos distintos nunca son iguales para comparaciones estrictas o abstractas.
    
*   Una expresión que compara Objetos solo es verdadera si los operandos hacen referencia al mismo Objeto.
    
*   Los tipos nulos e indefinidos son estrictamente iguales a sí mismos y abstractamente iguales entre sí.
    

## Operadores de igualdad

### Igualdad (==)

El operador de igualdad convierte los operandos si no son **del mismo tipo** , luego aplica una comparación estricta. Si **ambos operandos son objetos** , JavaScript compara las referencias internas que son iguales cuando los operandos se refieren al mismo objeto en la memoria.

#### Sintaxis
```
 x == y 
```

#### Ejemplos
```
 1   ==  1        // true 
 "1"  ==  1        // true 
 1   == '1'       // true 
 0   == false     // true 
 0   == null      // false 
 
   0   == undefined   // false 
 null  == undefined   // true 
```

### Desigualdad (! =)

El operador de desigualdad devuelve verdadero si los operandos no son iguales. Si los dos operandos **no** son **del mismo tipo** , JavaScript intenta convertir los operandos a un tipo apropiado para la comparación. Si **ambos operandos son objetos** , JavaScript compara las referencias internas que no son iguales cuando los operandos se refieren a diferentes objetos en la memoria.

#### Sintaxis
```
x != y 
```

#### Ejemplos
```
1 !=   2     // true 
 1 !=  "1"    // false 
 1 !=  '1'    // false 
 1 !=  true   // false 
 0 !=  false  // false 
```

### Identidad / igualdad estricta (===)

El operador de identidad devuelve verdadero si los operandos son estrictamente iguales **sin conversión de tipo** .

#### Sintaxis
```
x === y 
```

#### Ejemplos
```
3 === 3   // true 
 3 === '3' // false 
```

### No identidad / desigualdad estricta (! ==)

El operador de no identidad devuelve verdadero si los operandos **no son iguales y / o no son del mismo tipo** .

#### Sintaxis
```
x !== y 
```

#### Ejemplos
```
3 !== '3' // true 
 4 !== 3   // true 
```

## Operadores relacionales

### Operador mayor que (>)

El operador mayor que devuelve verdadero si el operando izquierdo es mayor que el operando derecho.

#### Sintaxis
```
x > y 
```

#### Ejemplos
```
4 > 3 // true 
```

### Operador mayor o igual (> =)

El operador mayor o igual devuelve verdadero si el operando izquierdo es mayor o igual que el operando derecho.

#### Sintaxis
```
x >= y 
```

#### Ejemplos
```
4 >= 3 // true 
 3 >= 3 // true 
```

### Menos que operador (<)

El operador menor que devuelve verdadero si el operando izquierdo es menor que el operando derecho.

#### Sintaxis
```
x < y 
```

#### Ejemplos
```
3 < 4 // true 
```

### Operador menor o igual (<=)

El operador menor o igual devuelve verdadero si el operando izquierdo es menor o igual que el operando derecho.

#### Sintaxis
```
x <= y 
```

#### Ejemplos
```
3 <= 4 // true 
```

_Puedes encontrar más información en [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) ._

## Comparando nulo e indefinido

Cuando comparamos nulo e indefinido vemos comportamientos diferentes. Permite comprobar diferentes escenarios a través de ejemplos.

#### Ejemplo: verificación de igualdad estricta (===)

console.log (null === undefined); // O / P - falso

Otuput es falso y eso es correcto porque sabemos que "null" y "indefinido" son tipos diferentes.

#### Ejemplo: verificación de igualdad no estricta (==)

console.log (null == undefined); // O / P: - verdadero

¿Cómo? Esto se debe a que hay una regla especial para "nulo" y "indefinido". Debido a que son iguales en caso de verificación no estricta (==) pero no son iguales a ningún otro valor.

Si utilizamos operadores de comparación como <,>, <=,> = etc., "null" y "indefinido" se convierten en número y en tales casos "nulo" se convertirá en 0 y "indefinido" será NaN. Veamos algunos de esos ejemplos.

#### Ejemplo - comparar nulo con 0 (cero)

console.log (null> 0); // O / P - falso console.log (null> = 0); // O / P - verdadero console.log (null == 0); // O / P - falso

¿Extraño? Según la primera declaración, null no es mayor que 0 y de la segunda instrucción null es mayor o igual a 0. Entonces, si pensamos matemáticamente y comparamos ambas declaraciones, obtendremos el resultado de que null es igual a 0. Pero , según la tercera declaración no es cierto. ¿Por qué?

La razón es que la "comparación" y la "verificación de igualdad" funcionan de manera diferente. En comparación, "null / undefined" se convierte primero en número, por lo que, en los dos primeros casos, "null" se convierte en 0 y, por lo tanto, case1) (null> 0) -> false and case2) (null> = 0) -> true. Pero, en la verificación de igualdad (==), "nulo / indefinido" funciona sin ninguna conversión y como se explicó anteriormente (regla especial), en la verificación de igualdad "nulo / indefinido" solo son iguales entre sí y no son iguales a ninguna otra cosa. Por lo tanto (nulo == 0) -> falso.

#### Ejemplo: comparar indefinido con 0 (cero)

console.log (undefined> 0); // O / P - falso console.log (undefined> = 0); // O / P - falso console.log (undefined == 0); // O / P - falso

Aquí, probamos los mismos casos que hicimos para null, pero nuevamente el resultado es diferente. ¿Por qué?

Las razones son las siguientes. En los dos primeros casos, estamos comparando indefinido con 0 y, como se mencionó anteriormente, en comparación, indefinido se convierte a NaN. NaN es un valor especial que siempre devuelve falso cuando se compara con cualquier número y es por eso que obtuvimos falso como resultado en los dos primeros casos. Para la tercera declaración, la razón es la misma que se menciona para "null". En la comprobación de igualdad, "nulo / indefinido" solo son iguales entre sí y no iguales a cualquier otra cosa. Por lo tanto (indefinido == 0) -> falso.