---
title: Polynomial Factorization
localeTitle: Полиномиальная факторизация
---
## Полиномиальная факторизация

Факторинговые полиномы во многом похожи на факторинговые регулярные числа. Цель состоит в том, чтобы найти числа или многочлены, которые равномерно делятся на многочлен. В отличие от факторинга, вы можете упростить такое выражение:

![7 (x + 4) = 7x + 28](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img1.png?raw=true)

Вы можете думать о факторинге как о противоположном, как в этом примере, где мы сначала находим наибольший общий коэффициент (GCF) членов (9), а затем переписываем многочлен:

![9x ^ 2 + 72 = 9 (x ^ 2 + 8)](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img2.png?raw=true)

Давайте сделаем еще несколько примеров.

![2x - 10](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img3.png?raw=true)

Вы можете определить первый член в (2) (x), а второй - в (-5) (2). Единственным распространенным фактором является 2. Переместите общий множитель в начало нашего переписанного многочлена.

![2x - 10 = 2 (](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img4.png?raw=true)

Когда вы разделите 2 из 2x, вы останетесь с x

![2x - 10 = 2 (x](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img5.png?raw=true)

Когда вы разделите 2 из -10, вы останетесь с -5.

![2x - 10 = 2 (x - 5)](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img6.png?raw=true)

### Распространенные ошибки

![x ^ 6y ^ 5 + xy = xy (x ^ 5y ^ 4 + 1)](https://github.com/codersc/freeCodeCamp-article-images/blob/master/art6img7.png?raw=true)

Когда вы делаете факторинг, часто вы получаете деление, которое приводит к 1. Обязательно включите его в круглые скобки.