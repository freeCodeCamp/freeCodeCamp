---
title: Freecodecamp Algorithm Merge Sort Guide
localeTitle: Руководство по сортировке слияния алгоритмов Freecodecamp
---
Большинство современных языков имеют встроенную функцию sort (), которая автоматически сортирует входной массив или список. Вы когда-нибудь задумывались, как функция сортировки действительно работает внутри ?. Знание общих алгоритмов сортировки и их реализация является самой важной частью интервью по кодированию. В этой серии статей мы рассмотрим несколько важных алгоритмов сортировки. Как они реализованы, сложность времени и пространства и т. Д. Наш самый первый пост - в Merge Sort.

Чтобы узнать о Merge Sort, базовые знания о [Recursion](http://programmers.stackexchange.com/questions/25052/in-plain-english-what-is-recursion) являются предварительным условием. Merge Sort основан на принципе Divide и Conquer. Весь процесс сортировки массива из N целых чисел можно суммировать на три этапа:

*   Разделите массив на две половины.
*   Сортируйте левую половину и правую половину, используя тот же повторяющийся алгоритм.
*   Слейте отсортированные половинки.

Самое большое преимущество использования сортировки Merge заключается в том, что [временная сложность](https://www.youtube.com/watch?v=V42FBiohc6c&list=PL2_aWCzGMAwI9HK8YPVBjElbLbI3ufctn) - это только n \* log (n) для сортировки всего массива. Это намного лучше, чем n ^ 2 время работы сортировки пузыря или сортировки вставки.

Прежде чем писать код, давайте разобраться, как работает сортировка слияния с помощью диаграммы.

![Сортировка слиянием](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4712ef1a5d856dbb4af393fcc08a820a38787395.png)

*   Первоначально у нас есть массив из 6 несортированных целых чисел Arr (5, 8, 3, 9, 1, 2)
*   Мы разбиваем массив на две половины Arr1 = (5, 8, 3) и Arr2 = (9, 1, 2).
*   Опять же, мы делим их на две половины: Arr3 = (5, 8) и Arr4 = (3) и Arr5 = (9, 1) и Arr6 = (2)
*   Опять же, мы делим их на две половины: Arr7 = (5), Arr8 = (8), Arr9 = (9), Arr10 = (1) и Arr6 = (2)
*   Теперь мы сравним элементы в этих вспомогательных массивах, чтобы объединить их.

## Реализация

### Реализация C ++
```
void merge(int array[], int left, int mid, int right) 
 { 
    int i, j, k; 
 
    // Size of left sublist 
 int size_left = mid - left + 1; 
 
 // Size of right sublist 
 int size_right =  right - mid; 
 
 /* create temp arrays */ 
 int Left[size_left], Right[size_right]; 
 
 /* Copy data to temp arrays L[] and R[] */ 
 for(i = 0; i < size_left; i++) 
 { 
    Left[i] = array[left+i]; 
 } 
 
 for(j = 0; j < size_right; j++) 
 { 
    Right[j] = array[mid+1+j]; 
 } 
 
 // Merge the temp arrays back into arr[left..right] 
 i = 0; // Initial index of left subarray 
 j = 0; // Initial index of right subarray 
 k = left; // Initial index of merged subarray 
 
 while (i < size_left && j < size_right) 
 { 
    if (Left[i] <= Right[j]) 
    { 
        array[k] = Left[i]; 
        i++; 
    } 
    else 
    { 
        array[k] = Right[j]; 
        j++; 
    } 
    k++; 
 } 
 
 // Copy the remaining elements of Left[] 
 while (i < size_left) 
 { 
    array[k] = Left[i]; 
    i++; 
    k++; 
 } 
 
 // Copy the rest elements of R[] 
 while (j < size_right) 
 { 
    array[k] = Right[j]; 
    j++; 
    k++; 
 } 
 } 
 
 void mergeSort(int array[], int left, int right) 
 { 
    if(left < right) 
    { 
        int mid = (left+right)/2; 
 
        // Sort first and second halves 
    mergeSort(array, left, mid); 
    mergeSort(array, mid+1, right); 
 
    // Finally merge them 
    merge(array, left, mid, right); 
 } 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CYVc/1)

### Реализация Javascript

Давайте напишем MergeSort в JavaScript:
```
function mergeSort (arr) { 
  if (arr.length < 2) return arr; 
  var mid = Math.floor(arr.length /2); 
  var subLeft = mergeSort(arr.slice(0,mid)); 
  var subRight = mergeSort(arr.slice(mid)); 
  return merge(subLeft, subRight); 
 } 
```

Сначала мы проверяем длину массива. Если это 1, мы просто возвращаем массив. Это будет наш основной случай. Иначе мы выясним среднее значение и разделим массив на две половины. Теперь мы будем сортировать обе половины с рекурсивными вызовами функции MergeSort.
```
function merge (a,b) { 
    var result = []; 
    while (a.length >0 && b.length >0) 
        result.push(a[0] < b[0]? a.shift() : b.shift()); 
    return result.concat(a.length? a : b); 
 } 
```

Когда мы объединяем две половины, мы сохраняем результат в вспомогательном массиве. Мы сравним исходный элемент левого массива с исходным элементом правого массива. В зависимости от того, что меньше, будет помещено в массив результатов, и мы удалим его из соответствующих массивов с помощью оператора \[shift (). Если мы по-прежнему будем иметь значения в любом из левого или правого массива, мы просто конкатенируем его в конце результата. Вот отсортированный результат:
```
var test = [5,6,7,3,1,3,15]; 
 console.log(mergeSort(test)); 
 
 >> [1, 3, 3, 5, 6, 7, 15] 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CYVd)

Если у вас все еще есть проблемы с пониманием MergeSort, [объяснение видео](https://www.youtube.com/watch?v=TzeBrDU-JaY) сделает его еще более понятным.