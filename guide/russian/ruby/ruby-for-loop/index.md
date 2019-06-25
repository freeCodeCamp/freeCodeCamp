---
title: Ruby For Loops
localeTitle: Цикл For в Ruby
---
## Цикл For в Ruby

Цикл for в Ruby используется для повторения блока кода несколько раз. Этот цикл часто используются для перебора элементов массива. См. Раздел « [Массивы в Ruby»](https://github.com/freeCodeCamp/guides/blob/master/src/pages/ruby/ruby-arrays/index.md) .

Перебор элементов массива это всего лишь один из примеров использования цикла for:
```
for element in array do
  puts element
 end
```

В Ruby сучетсвют другие циклы и итераторы которыми можно заменить for. Например:
```
array.each do |element|
  puts element
 end
```

Результат выполнения этого блока кода будет идентичен примеру с циклом for, но выглядит более аккуратно так как использует встроенный метод Array.

Также этот пример можно переписать в одну строку:
```
array.each do |element| puts element end

```
