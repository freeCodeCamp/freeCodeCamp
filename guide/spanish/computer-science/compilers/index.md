---
title: Compilers
localeTitle: Compiladores
---
## Compiladores

### Programación

En el fondo, una computadora de barebones (también conocida como computadora de programa almacenado) no es más que una máquina que sabe cómo leer los pasos escritos en un conjunto de instrucciones fijo y ejecutar lo mismo. El conjunto de instrucciones que una computadora entiende es muy específico para él. Esto también se conoce como lenguaje de máquina ( **opcodes** ). El lenguaje de máquina se refiere a menudo como código binario.

Los humanos interactúan con las computadoras usando **programas** . Un programa es simplemente una secuencia de códigos de operación proporcionados a la computadora junto con los datos necesarios para ejecutar los códigos de operación.

Por ejemplo,
```
ADD 10, 20  // ADD is the Opcode 
            // and 10, 20 are the two operands(data) 
            // needed for the ADD instruction to be executed successfully 
```

Los seres humanos desarrollan programas para resolver problemas complejos. Si observamos qué simples son los códigos de operación, si intentamos desarrollar programas utilizando solo códigos de operación, será muy complicado y difícil de depurar. Para resolver este problema, se desarrollaron lenguajes de alto nivel como C / C ++, Python, Java, Javascript, etc.

Ahora, los lenguajes de alto nivel no son adecuados para ser ejecutados por computadoras. Por lo tanto, surgió la necesidad de un traductor que pueda digerir los programas de lenguaje de alto nivel y convertirlos en instrucciones de lenguaje de máquina adecuadas para ser ejecutadas por una computadora.

#### \[HUMANOS\] -> \[Programas de lenguaje de alto nivel\] -> \[Traductor\] -> \[Lenguaje de máquina\] -> \[Computadora\]

Un **compilador** es un tipo de programa traductor, que traduce lenguajes de alto nivel a código binario, que no es más que 1s y 0s. Cuando ejecuta su código fuente, un compilador traduce primero todo el código y luego produce el código binario. Luego la computadora toma el código binario y lo ejecuta.

Si hay errores en su código fuente, el compilador los detecta y los marca. Esto detiene el proceso de compilación. Una vez que todos los errores se han solucionado, el compilador convierte el código y genera un programa ejecutable.

## Partes de un compilador

La mayoría de los compiladores se dividen en tres etapas principales: análisis, transformación y generación de código.

1.  _El análisis_ es tomar el código en bruto y convertirlo en una representación más abstracta del código.
2.  _La transformación_ toma esta representación abstracta y la manipula para hacer lo que el compilador quiera.
3.  _La generación de código_ toma la representación transformada del código y la convierte en un nuevo código.

#### Análisis

El análisis generalmente se divide en dos fases: **análisis léxico** y **análisis sintáctico** .

_El análisis léxico_ toma el código en bruto y lo divide en cosas llamadas tokens por una cosa llamada tokenizer (o lexer).
```
Tokens are an array of tiny little objects that describe an isolated piece of the syntax. 
 They could be numbers, labels, punctuation, operators, etc. 
```

_El análisis sintáctico_ toma los tokens y los reformatea en una representación que describe cada parte de la sintaxis. y su relación entre sí. Esto se conoce como una representación intermedia o árbol de sintaxis abstracta.
```
An Abstract Syntax Tree, or AST for short, is a deeply nested object. 
 It represents code in a way that is both easy to work with and tells us a lot of information. 
```

#### Transformación

El siguiente tipo de etapa para un compilador es la transformación. Nuevamente, esto solo toma el AST del último paso y lo modifica. Puede manipular el AST en el mismo idioma o puede traducirlo a un idioma completamente nuevo.

#### Codigo de GENERACION

La fase final de un compilador es la generación de código. A veces los compiladores hacen cosas que se superponen con la transformación, pero en su mayor parte la generación de código solo toma el AST y lo convierte en código binario.

Todos los compiladores necesitan realizar estos pasos. La mayoría de los compiladores modernos también llevan a cabo otros pasos, como la comprobación de errores de tipo y la optimización del código compilado resultante.

#### Más información:

["A Gentler Introduction to Programming" de Matt Adesanya](https://medium.freecodecamp.org/a-gentler-introduction-to-programming-707453a79ee8) cubre los compiladores y los intérpretes, junto con otros conceptos básicos de programación.