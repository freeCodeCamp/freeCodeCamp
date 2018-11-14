---
title: Learn About Python Sets
localeTitle: Узнайте о наборах Python
---
`Set` s в Python - это тип изменяемой, но неупорядоченной структуры данных, которая может содержать только _уникальные_ элементы.

**Создание:**

`set` literal:

Кулистые скобки `{}` _не_ могут использоваться для создания пустого набора:

```python
>>> not_set = {}     # set constructor must be used to make empty sets. 
 >>> type(not_set)    # Empty curly brackets create empty dictionaries. 
 <class 'dict'> 
```

Вы можете создать пустой набор с помощью метода `set()` .

```python
>>> example_set = set() 
 >>> type(example_set) 
 <class 'set'> 
```

Однако, если элементы включены в фигурные скобки, тогда было бы приемлемым синтаксисом для создания набора.

```python
>>> example_set_2 = {1, 2, 3} 
 >>> type(example_set_2) 
 <class 'set'> 
```

\`