---
title: Combinations
localeTitle: Combinações
---
## Combinações

Uma combinação é uma seleção de itens de uma coleção, em que a ordem de seleção não importa. Mais formalmente:

> Uma combinação k de um conjunto S é um subconjunto de k elementos distintos de S. Se o conjunto tiver n elementos, o número de combinações k é igual ao [coeficiente binominal](https://guide.freecodecamp.org/mathematics/counting/factorials-and-binomial-coefficients/) 1.

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/08bdf0fff474c26293414f9eb01ab4bc73ef941f "coeficiente binomial")

Ou se você preferir usar o [fatorial](https://guide.freecodecamp.org/mathematics/counting/factorials-and-binomial-coefficients/) :

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/813f7124a61dac205542db3f8491b36cb306453a "fatorial")

Combinações referem-se à combinação de n coisas tomadas k de cada vez **sem** repetição. Para referir-se a combinações nas quais a repetição é permitida, os termos k-selection ou k-combination com repetição são frequentemente usados ​​e usamos as seguintes fórmulas:

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/6c73b231f2fbfa42d5e10c310d8c3f5022d9ceb0 "coeficiente binomial")

## Alguns exemplos:

Combinações são muito úteis quando você quer resolver problemas combinatórios como o seguinte:
```
Compute the probability to obtain a poker from 
 a standard fifty-two card deck drawing 5 cards 
 at the same time 
```

Para resolver este problema simples, você precisa calcular o número de 5 cartas possíveis usando combinações:

![alt text](https://latex.codecogs.com/gif.latex?%5Cfrac%7B13%5Cbinom%7B52%7D%7B4%7D%5Cbinom%7B48%7D%7B1%7D%7D%7B%5Cbinom%7B52%7D%7B5%7D%7D "problema de poker")

Pense nisso ![alt text](https://latex.codecogs.com/gif.latex?%5Cbinom%7B48%7D%7B1%7D "48 em 1") é igual a 48 conforme a definição do coeficiente binomial.

### Fontes

1 [entrada de combinação da Wikipedia](https://en.wikipedia.org/wiki/Combination)