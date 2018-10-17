---
title: Selection Sort
localeTitle: Выбор Сортировка
---
## Выбор Сортировка

Выбор Сортировка - один из самых простых алгоритмов сортировки. Он работает следующим образом,

1.  Найдите наименьший элемент. Поменяйте его первым элементом.
2.  Найдите второй наименьший элемент. Поменяйте его на второй элемент.
3.  Найдите третий наименьший элемент. Поменяйте его третьим элементом.
4.  Повторите поиск следующего наименьшего элемента и переместите его в соответствующее правильное положение до сортировки массива.

Как вы можете догадаться, этот алгоритм называется Selection Sort, потому что он многократно выбирает следующий наименьший элемент и меняет его на свое место.

Но как бы вы написали код для поиска индекса второго наименьшего значения в массиве?

*   Легкий способ заметить, что наименьшее значение уже было заменено на индекс 0, поэтому проблема сводится к поиску наименьшего элемента в массиве, начиная с индекса 1.

### Реализация в C / C ++

```C
for(int i = 0; i < n; i++) 
 { 
    int min_index = i; 
    int min_element = a[i]; 
 
    for(int j = i +1; j < n; j++) 
    { 
        if(a[j] < min_element) 
        { 
            min_element = a[j]; 
            min_index = j; 
        } 
    } 
 
    swap(&a[i], &a[min_index]); 
 } 
```

### Реализация в Javascript

\`\` \`Javascript _сортировка_ функции _(A) { var len =_ длина _массива_ (A); для (var i = 0; i <len - 1; i = i + 1) { var j _min = i; для (var j = i + 1; j <len; j = j + 1) { если (A \[j\] <A \[j_ min\]) { j _min = j; } else {} } if (j_ min! == i) { swap (A, i, j\_min); } else {} } }

функция swap (A, x, y) { var temp = A \[x\]; A \[x\] = A \[y\]; A \[y\] = temp; }
```
### Implementation in Python 
```

питон def seletion _sort (arr): если не обр: return arr для i в диапазоне (len (arr)): min_ i = i для j в диапазоне (i + 1, len (arr)): если arr \[j\] <arr \[min _i\]: min_ i = j arr \[i\], arr \[min _i\] = arr \[min_ i\], arr \[i\] \`\` \`

### свойства

*   Космическая сложность: **O (n)**
*   Сложность времени: **O (n 2 )**
*   Сортировка на месте: **Да**
*   Стабильный: **Нет**

### Визуализация

*   [USFCA](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
*   [HackerEarth](https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/)

### Рекомендации

*   [Википедия](https://en.wikipedia.org/wiki/Selection_sort)
*   [Академия Хана](https://www.khanacademy.org/computing/computer-science/algorithms#sorting-algorithms)