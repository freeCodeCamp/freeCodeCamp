---
title: Pigeonhole Principle
localeTitle: Principio del casillero
---
## Principio del casillero

El principio de paloma es una formalización matemática de una observación lógica e intuitiva. Esta observación se entiende mejor con un ejemplo.

### Ejemplo

Hay cinco cajas y seis bolas. Cada una de las seis bolas se coloca en una de las cinco cajas. _Debe_ haber al menos una caja con al menos dos bolas. Si se colocan cinco bolas en cinco cajas de modo que ninguna caja tenga dos bolas, entonces no importa en qué caja esté colocada la sexta bola, esa caja tendrá más de una bola.

### Generalización

Esta observación puede generalizarse para N cajas y M bolas. Si hay N cajas y M bolas, y M> N, entonces al menos una caja debe contener varias bolas.

Tenga en cuenta que el Principio de casillero no nos dice nada sobre qué caja tiene más de una bola, o cuántas bolas tiene alguna de las cajas. El principio del casillero solo establece la existencia de una caja con múltiples bolas.

### Uso en informática

El principio del casillero a menudo aparece en la informática. Por ejemplo, el algoritmo de hash SHA256 toma entradas de cualquier tamaño (como una cadena) y genera un valor de 256 bits. Debido a que la salida del algoritmo de hash SHA256 es siempre de 256 bits, hay 2 ^ 256 hashes posibles. Si bien este es un número muy grande, hay un número infinito de entradas posibles. Usando la generalización anterior, podemos decir que nuestro N = 2 ^ 256 y nuestro M = infinito. Debido a que el infinito es mayor que 2 ^ 256 (M> N), entonces, según el principio de la casilla de verificación, al menos uno de estos hashes debe tener dos entradas diferentes que tengan el mismo valor. Los científicos informáticos consideran que dos entradas diferentes que comparten un hash común son una colisión.

### Uso en problemas generales de conteo.

Podemos usar el Principio de casillero para probar algunas cosas más esotéricas también. Un ejemplo común es el problema del conteo de cabello. La cabeza humana tiene de 0 a aproximadamente 150,000 pelos. Para estar seguros, digamos que un humano puede tener hasta un millón de pelos en la cabeza. París, Francia tiene una población de alrededor de 2,2 millones de personas. Si clasificamos a todos en París en cajas según la cantidad de cabellos que tienen en la cabeza, podemos usar nuestra generalización anterior para decir N = 1000000 (el número de cajas, una caja para cada recuento de cabello posible) y M = 2200000 ( La población de París, Francia). Dado que M> N, según el Principio de Casilla, podemos afirmar con certeza que al menos dos personas en París deben tener el mismo número de pelos en la cabeza.

#### Más información:

*   [Wikipedia - Principio del casillero](https://en.wikipedia.org/wiki/Pigeonhole_principle)
*   [Más ejemplos divertidos del Principio de Pigeonhole](https://mindyourdecisions.com/blog/2008/11/25/16-fun-applications-of-the-pigeonhole-principle/)