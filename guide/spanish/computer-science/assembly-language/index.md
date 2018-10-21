---
title: Assembly Language
localeTitle: Lenguaje ensamblador
---
## Lenguaje ensamblador

El lenguaje ensamblador es la interfaz entre los lenguajes de nivel superior (C ++, Java, etc.) y el código de máquina (binario). Para un lenguaje compilado, el compilador transforma código de nivel superior en código de lenguaje ensamblador.

Cada familia de CPU define su propia arquitectura de conjunto de instrucciones (ISA), un conjunto de instrucciones básicas que la CPU puede ejecutar sin necesidad de más traducción o transformación. El compilador descompone las instrucciones compuestas de nivel superior en operaciones disponibles en la ISA. Algunos de los ISAS más comunes en uso hoy en día incluyen MIPS, ARM, Intel x86, RISC-V.

Los ensambladores descomponen las instrucciones de ensamblaje en sus respectivas representaciones binarias y reemplazan las direcciones genéricas del código de ensamblaje con el registro explícito y las direcciones de memoria de su computadora.

El código donde el tiempo de ejecución y el control es crucial se puede escribir directamente en el ensamblador. Sin embargo, esto conlleva el costo de prolongar el tiempo de desarrollo y dificultar el desarrollo. También se debe tener en cuenta que se ha realizado una gran cantidad de investigación para que los compiladores optimicen el código que se genera automáticamente.

El lenguaje ensamblador se usa principalmente en las siguientes situaciones:

*   Es necesario utilizar instrucciones de CPU que no estén disponibles en idiomas de nivel superior.
*   No hay un lenguaje de alto nivel para programar ciertos tipos de procesadores.
*   Implementación de un compilador para un lenguaje de nivel superior en una nueva ISA. ![Imagen de niveles de código](https://raw.githubusercontent.com/colbybanbury/assemblyPicture/master/Screenshot%20from%202017-10-14%2014-03-06.png)

#### Más información: