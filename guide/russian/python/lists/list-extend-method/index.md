---
title: List Extend Method
localeTitle: Метод расширения списка
---
## Метод расширения списка

Существует множество методов для списков, вы можете изучить их все, набрав `help(list)` в вашей консоли python. Одна из них - это функция расширения, которая, как сказано в названии, расширяет список, добавляя все элементы списка (переданные как аргумент) до конца.

#### Пример использования

```py
cities = ["San Francisco", "Los Angeles", "New York"] 
 cities_in_texas = ["San Antonio", "Austin", "Dallas"] 
 cities.extend(cities_in_texas) 
 print(cities) 
```

#### Вывод
```
["San Francisco", "Los Angeles", "New York", "San Antonio", "Austin", "Dallas"] 
```

#### Дополнительная информация:

Официальную документацию для `extend()` можно найти [здесь](https://docs.python.org/3.6/tutorial/datastructures.html)