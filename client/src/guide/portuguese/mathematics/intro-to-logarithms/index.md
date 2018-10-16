---
title: Intro to Logarithms
localeTitle: Introdução aos logaritmos
---
## Introdução aos logaritmos

Logaritmos são funções matemáticas usadas para encontrar a potência para a qual uma base é elevada para receber uma saída específica.

![diagrama de log](https://cdn.kastatic.org/googleusercontent/CfdIRZu_iMA_DFp7EilcK9igLFA42jd2hksGilRMBdINxoLKxj2LAWCjQxvj8m9E3Ik6tmVfPAFIx4whUTPp-KZw)

_Aqui, no exemplo, a variável b é a base, enquanto a variável a é a saída desejada e a variável c é o expoente._

Logs são usados ​​em várias coisas no mundo real. Eles são usados ​​na escala de pH, na medição da intensidade de terremotos (a Escala Richter) e em muitas outras coisas.

Exemplo de logs em python:

```python
import math 
 
 # math.log(value, base) - outputs exponent 
 math.log(100, 10) #outputs 2 
 math.log(2, 2) #outputs 1 
```

#### Fontes:

*   https://betterexplained.com/articles/using-logs-in-the-real-world/
*   https://www.khanacademy.org/math/algebra2/exponential-and-logarithmic-functions/introduction-to-logarithms/a/intro-to-logarithms

### Definição de logaritmo

O logaritmo de um número **x** , _log_ escrito _( **x** )_ , geralmente significa o número que você tem que usar como poder acima de 10 para obter **x** . Vamos dizer que você quer encontrar _log (10)_ . Isso significa que você quer encontrar o número que você tem que levantar 10 para obter 10. Isso nos dá uma equação: _log (10) = x_ .

Podemos usar isso e aplicá-lo como uma potência de 10 em ambos os lados. Isso muda a equação para: _10 log (10) = 10 x_

O _log de 10 ( **x** )_ , onde **x** é qualquer número, retornará **x** , como _10 log_ cancela. Isso significa que nossa equação é agora _10 = 10 x_

Dado que _10 x_ é igual a 10 vezes ele mesmo _x_ vezes, isso significa que 10 precisa ser multiplicado consigo mesmo o suficiente para ser exatamente 10, e _x_ é, portanto, 1. Isto é porque _10 1 = 10_

### Definição do logaritmo natural

Isso é estritamente o mesmo que a definição de logaritmo, exceto os números que são usados. No logaritmo normal, o número base é geralmente 10, enquanto no logaritmo natural, muitas vezes escrito _ln_ , usa _e_ , o número de euler como base. Isso significa que _ln (e) = 1_ , em vez de _log (10) = 1_ . Então, ao invés disso, estamos encontrando o poder que você precisa para elevar _e_ para in _ln ( **x** )_ .