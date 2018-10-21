---
title: Intro to Logarithms
localeTitle: Introducción a los logaritmos
---
## Introducción a los logaritmos

Los logaritmos son funciones matemáticas que se usan para encontrar a qué potencia se eleva una base para recibir una salida específica.

![diagrama de registro](https://cdn.kastatic.org/googleusercontent/CfdIRZu_iMA_DFp7EilcK9igLFA42jd2hksGilRMBdINxoLKxj2LAWCjQxvj8m9E3Ik6tmVfPAFIx4whUTPp-KZw)

_Aquí, en el ejemplo, la variable b es la base, mientras que la variable a es la salida deseada y la variable c es el exponente._

Los registros se utilizan en varias cosas en el mundo real. Se utilizan en la escala de pH, la medición de la intensidad de los terremotos (la escala de Richter) y muchas otras cosas.

Ejemplo de logs en python:

```python
import math 
 
 # math.log(value, base) - outputs exponent 
 math.log(100, 10) #outputs 2 
 math.log(2, 2) #outputs 1 
```

#### Fuentes:

*   https://betterexplained.com/articles/using-logs-in-the-real-world/
*   https://www.khanacademy.org/math/algebra2/exponential-and-logarithmic-functions/introduction-to-logarithms/a/intro-to-logarithms

### Definición de logaritmo

El logaritmo de un número **x** , _registro_ escrito _( **x** )_ , generalmente significa el número que tiene que usar como potencia sobre 10 para obtener **x** . Digamos que quieres encontrar _log (10)_ . Esto significa que quieres encontrar el número al que debes subir 10 para obtener 10. Esto nos da una ecuación: _log (10) = x_ .

Podemos usar esto y aplicarlo como una potencia de 10 en ambos lados. Esto cambia la ecuación a: _10 log (10) = 10 x_

El _registro 10 ( **x** )_ , donde **x** es cualquier número, devolverá **x** , ya que _10 registros se_ cancelan. Esto significa que nuestra ecuación es ahora _10 = 10 x_

Dado que _10 x_ es igual a 10 veces a sí mismo _x_ veces, significa que 10 necesita ser multiplicado consigo mismo lo suficiente como para ser exactamente 10, _yx_ es por lo tanto 1. Esto se debe a que _10 1 = 10_

### Definición del logaritmo natural.

Esto es estrictamente el mismo que la definición de logaritmo, excepto qué números se utilizan. En el logaritmo normal, el número base suele ser 10, mientras que en el logaritmo natural, a menudo escrito en _ln_ , se utiliza _e_ , el número de Euler como base. Esto significa que _ln (e) = 1_ , en lugar de _log (10) = 1_ . Entonces, en lugar de eso, estamos encontrando el poder que necesitas para elevar _e_ a en _ln ( **x** )_ .