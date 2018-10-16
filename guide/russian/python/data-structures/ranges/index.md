---
title: The Python Range
localeTitle: Диапазон Python
---
## Диапазоны Python

Вместо того, чтобы быть функцией, диапазон фактически является [неизменным типом последовательности](https://docs.python.org/3/library/stdtypes.html#immutable-sequence-types) и обычно используется для циклического цикла определенного цикла для циклов.

**Создание:**

`ranges` создаются с использованием конструктора `range` . Параметры для конструктора:

*   `start` : Включить первое значение диапазона (необязательно целое, по умолчанию - 0).
*   `stop` : Исключительное значение остановки, диапазон останавливается, когда это значение или больше будет предоставлено (требуется целое число).
*   `step` : сумма добавлена ​​к текущему значению, чтобы получить следующее значение (необязательное целое, по умолчанию - 1).

```python
>>> range(10)          # Only the stop parameter is required. 
 range(0, 10) 
 >>> range(0, 10)       # Default for start parameter is 0. 
 range(0, 10) 
 >>> range(0, 10, 1)    # Default for step is 1\. Start parameter is required if 
 step is needed. 
 range(0, 10) 
```

**Примеры:**

Поскольку `ranges` являются итерабельными, они могут быть переданы в конструкторы `list` и `tuple` для создания этих типов последовательностей. Используя этот факт, мы можем представить несколько примеров:

```python
>>> list(range(10))     # range as argument for list constructor. 
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
 >>> tuple(range(10))    # range as argument for tuple constructor. 
 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) 
```

`ranges` нулевой длины:

```python
>>> list(range(10, 0))        # start greater than stop with postive step. 
 [] 
 >>> list(range(10, 10))       # start equal to stop with postive step. 
 [] 
 >>> list(range(10, 10, -1))   # start equal to stop with negative step. 
 [] 
 >>> list(range(0, 10, -1))    # start less than stop with negative step. 
 [] 
```

`ranges` с шаговыми аргументами:

```python
>>> list(range(0, 10, 2))       # next value would be 10, stops at 8. 
 [0, 2, 4, 6, 8] 
 >>> list(range(0, 10, 3))       # next value would be 12, stops at 9. 
 [0, 3, 6, 9] 
 >>> list(range(0, 10, 4))       # next value would be 12, stops at 8. 
 [0, 4, 8] 
 >>> list(range(10, 0, -1))      # negative step makes decreasing ranges. 
 [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] 
 >>> list(range(-5, -30, -3))    # negative integers are valid arguments. 
 [-5, -8, -11, -14, -17, -20, -23, -26, -29] 
```

**Выгоды:**

Преимущество использования `range` заключается в том, что независимо от того, насколько велика указанная область, для хранения `range` требуется только небольшой объем памяти, значения для начала, остановки и шага. Отдельные значения `ranges` рассчитываются на итерации.

```python
>>> import sys 
 >>> a_range = range(1000000) 
 >>> a_list = list(a_range) 
 >>> a_tuple = tuple(a_range) 
 >>> sys.getsizeof(a_range) 
 48 
 >>> sys.getsizeof(a_list) 
 9000112 
 >>> sys.getsizeof(a_tuple) 
 8000048 
```

### Больше информации:

[Python Doc - Диапазоны](https://docs.python.org/3/library/stdtypes.html#ranges)

**TODO: `ranges` методов выполняются и не реализуются**