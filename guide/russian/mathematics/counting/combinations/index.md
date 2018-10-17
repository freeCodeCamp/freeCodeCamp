---
title: Combinations
localeTitle: Комбинации
---
## Комбинации

Комбинация - это выбор предметов из коллекции, где порядок выбора не имеет значения. Более формально:

> K-комбинация множества S является подмножеством k различных элементов S. Если множество имеет n элементов, число k-комбинаций равно [биномиальному коэффициенту](https://guide.freecodecamp.org/mathematics/counting/factorials-and-binomial-coefficients/) 1

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/08bdf0fff474c26293414f9eb01ab4bc73ef941f "биномиальный коэффициент")

Или, если вы предпочитаете использовать [факториал](https://guide.freecodecamp.org/mathematics/counting/factorials-and-binomial-coefficients/) :

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/813f7124a61dac205542db3f8491b36cb306453a "факториал")

Комбинации относятся к комбинации n вещей, сделанных k за раз, **без** повторения. Для обозначения комбинаций, в которых допускается повторение, часто используются термины k-выбор или k-комбинация с повторением, и мы используем следующие формулы:

![alt text](https://wikimedia.org/api/rest_v1/media/math/render/svg/6c73b231f2fbfa42d5e10c310d8c3f5022d9ceb0 "биномиальный коэффициент")

## Некоторые примеры:

Комбинации очень полезны, если вы хотите решить комбинаторные проблемы, такие как:
```
Compute the probability to obtain a poker from 
 a standard fifty-two card deck drawing 5 cards 
 at the same time 
```

Чтобы решить эту простую задачу, вам нужно вычислить количество 5 карточных рук, используя комбинации:

![alt text](https://latex.codecogs.com/gif.latex?%5Cfrac%7B13%5Cbinom%7B52%7D%7B4%7D%5Cbinom%7B48%7D%7B1%7D%7D%7B%5Cbinom%7B52%7D%7B5%7D%7D "покерная проблема")

Помните, что ![alt text](https://latex.codecogs.com/gif.latex?%5Cbinom%7B48%7D%7B1%7D "48 на 1") равен 48 по определению биномиального коэффициента.

### источники

1 [Вступление в Википедию](https://en.wikipedia.org/wiki/Combination)