---
title: Np Completeness
localeTitle: Np Completitud
---
## Np Completitud

NP-Complete es una propiedad de ciertos tipos de problemas. Si un problema es NP-Completo, significa que no existe un algoritmo eficiente (polinomial) para encontrar una solución rápidamente. Sin embargo, si se nos da una solución, podemos verificar rápidamente (en tiempo polinomial) que es correcta.

Para ser más concretos, examinemos un problema conocido de NP-Completo: el problema de la suma de subconjuntos. Digamos que tenemos un conjunto de enteros {−7, −3, −2, 5, 8}. Queremos encontrar un subconjunto de estos enteros cuyos elementos sumen 0. ¿Cómo podemos hacer eso?

Una forma sería simplemente enumerar todos los subconjuntos posibles y verificar si sus elementos suman 0. Esto sería exponencialmente complejo.

Y, de hecho, no se conoce un mejor algoritmo, lo que mejora el límite de tiempo exponencial. Por eso se clasifica como un problema NP-Completo.

Hay muchos de estos problemas conocidos aparte del problema de suma de subconjuntos que se sabe que son NP-Completo. Si se encuentra un algoritmo eficiente para uno, implica que podemos diseñar un algoritmo eficiente para todos los problemas que son NP-Complete.

Si tiene un problema que puede demostrarse como NP-completo, debe dejar de intentar encontrar algoritmos más eficientes y, en su lugar, utilizar heurísticas para resolver el problema en la mayoría de los casos de prueba, o resolver una versión aproximada del problema. O tal vez examine el problema que está resolviendo para ver si no se puede simplificar a algo que no sea NP-Completo.

#### Más información:

https://www.ics.uci.edu/~eppstein/161/960312.html https://stackoverflow.com/questions/210829/what-is-an-np-complete-in-computer-science