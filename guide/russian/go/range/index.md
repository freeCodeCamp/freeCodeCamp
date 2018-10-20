---
title: Range
localeTitle: Спектр
---
## Ассортимент

Чтобы перебрать коллекцию в Go, мы можем использовать диапазон.

Диапазон отличается от for-loops, поскольку элемент в коллекции не получает доступ по индексу.

Если вы хотите получить доступ к элементу specificc в коллекции, скорее всего, это лучший вариант для цикла.

Вот пример:

```go
package main 
 
 import "fmt" 
 
 func main() { 
  fruits := []string{"apple", "orange", "pear"} 
 
  for _, fruit := range fruits { 
    fmt.Println(fruit) 
   } 
 } 
```

Вывод:
```
apple 
 orange 
 pear 
```

Возможно, вы заметили пустой идентификатор, который использовался.

Пустое идентификатор (или первая переменная, возвращаемая из диапазона) - это индекс элемента.

Это лучше всего подходит для карт, поэтому вы можете получить ключ и значение:

```go
package main 
 
 import "fmt" 
 
 func main() { 
    kvs := map[string]string{"a": "apple", "b": "banana"} 
    for k, v := range kvs { 
        fmt.Printf("%s -> %s\n", k, v) 
 
   } 
 } 
```

идти

Выходы:
```
a -> apple 
 b -> banana 

```