---
title: Jump Search
localeTitle: Прыжковый поиск
---
## Перейти к поиску

Прыжковый поиск обнаруживает элемент в отсортированном массиве, перескакивая k ячеек и затем проверяя, находится ли элемент между предыдущим значением и новым.

# Сложность Худший случай

O (√N)

# Работает

1.  Определите значение k, число прыжков: оптимальный размер перехода - √N, где N - длина массива
2.  Перейдите в массив k-by-k, `Array[i] < valueWanted < Array[i+k]` поиск по условию `Array[i] < valueWanted < Array[i+k]`
3.  Сделайте линейный поиск между `Array[i]` и `Array[i + k]`

![Прыжки с поиском 1](https://i1.wp.com/theoryofprogramming.com/wp-content/uploads/2016/11/jump-search-1.jpg?resize=676%2C290)

# Код

Реализация алгоритма на псевдокоде:
```
Algorithm JumpSearch
  Input: An ordered list L, its length n and a search key s.
  Output: The position of s in L, or nothing if s is not in L.

  a ← 0
  b ← ⌊√n⌋

  while Lmin(b,n)-1 < s do
    a ← b
    b ← b + ⌊√n⌋
    if a ≥ n then
      return nothing

  while La < s do
    a ← a + 1
    if a = min(b,n)
      return nothing

  if La = s then
    return a
  else
    return nothing
```

Чтобы просмотреть примеры реализации кода этого метода, перейдите по этой ссылке ниже:

[Блочный поиск - OpenGenus / космос](https://github.com/OpenGenus/cosmos/tree/master/code/search/jump_search)

# Источник

[Алгоритм](http://theoryofprogramming.com/2016/11/10/jump-search-algorithm/)
