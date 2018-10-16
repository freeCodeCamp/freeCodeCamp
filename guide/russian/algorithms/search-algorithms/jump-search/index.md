---
title: Jump Search
localeTitle: Перейти к поиску
---
## Перейти к поиску

Поиск по скачкам обнаруживает элемент в отсортированном массиве, перескакивая k itens и затем проверяя, нужен ли элемент между предыдущий прыжок и текущий прыжок.

# Сложность Худший случай

O (√N)

# Работает

1.  Определите значение k, число прыжков: оптимальный размер перехода - √N, где N - длина массива
2.  Перейдите в массив k-by-k, `Array[i] < valueWanted < Array[i+k]` поиск по условию `Array[i] < valueWanted < Array[i+k]`
3.  Сделайте линейный поиск между `Array[i]` и `Array[i + k]`

![Прыжки с поиском 1](https://i1.wp.com/theoryofprogramming.com/wp-content/uploads/2016/11/jump-search-1.jpg?resize=676%2C290)

# Код

Чтобы просмотреть примеры реализации кода этого метода, перейдите по этой ссылке ниже:

[Поиск по прыжкам - OpenGenus / космос](https://github.com/OpenGenus/cosmos/tree/master/code/search/jump_search)

# кредиты

[Изображение массива логики](http://theoryofprogramming.com/2016/11/10/jump-search-algorithm/)