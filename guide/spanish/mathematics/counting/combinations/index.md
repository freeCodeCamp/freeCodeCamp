---
title: Combinations
localeTitle: Combinaciones
---
## Combinaciones

Una combinación es una selección de elementos de una colección, donde el orden de selección no importa. Más formalmente:

> Una combinación k de un conjunto S es un subconjunto de k elementos distintos de S. Si el conjunto tiene n elementos, el número de combinaciones k es igual al [coeficiente binomial](https://guide.freecodecamp.org/mathematics/counting/factorials-and-binomial-coefficients/) 1

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/08bdf0fff474c26293414f9eb01ab4bc73ef941f "coeficiente binomial")

O si prefieres usar el [factorial](https://guide.freecodecamp.org/mathematics/counting/factorials-and-binomial-coefficients/) :

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/813f7124a61dac205542db3f8491b36cb306453a "factorial")

Las combinaciones se refieren a la combinación de n cosas tomadas k a la vez **sin** repetición. Para referirnos a las combinaciones en las que se permite la repetición, los términos k-selection o k-combinación con la repetición se usan a menudo y usamos las siguientes fórmulas:

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/6c73b231f2fbfa42d5e10c310d8c3f5022d9ceb0 "coeficiente binomial")

## Algunos ejemplos:

Las combinaciones son muy útiles cuando quieres resolver problemas combinatorios como el siguiente:
```
Compute the probability to obtain a poker from 
 a standard fifty-two card deck drawing 5 cards 
 at the same time 
```

Para resolver este simple problema, debe calcular el número de 5 manos de cartas posibles utilizando combinaciones:

![alt text](https://latex.codecogs.com/gif.latex?%5Cfrac%7B13%5Cbinom%7B52%7D%7B4%7D%5Cbinom%7B48%7D%7B1%7D%7D%7B%5Cbinom%7B52%7D%7B5%7D%7D "problema de poker")

Importa que ![alt text](https://latex.codecogs.com/gif.latex?%5Cbinom%7B48%7D%7B1%7D "48 en 1") es igual a 48 según la definición del coeficiente binomial.

### Fuentes

1 [entrada combinada de Wikipedia](https://en.wikipedia.org/wiki/Combination)