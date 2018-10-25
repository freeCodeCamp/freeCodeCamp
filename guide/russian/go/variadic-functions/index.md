---
title: Variadic Functions
localeTitle: Вариадические функции
---
## Вариадические функции

Вариадические функции - это функции, которые можно вызывать с любым числом возвращающих аргументов.

Это полезная функция, когда мы работаем над веб-приложениями.

Иногда нам не так много элементов, которые нам нужно будет передать движку HTML-шаблонов.

Вот основные сведения о том, как работают варидические функции:

```go
package main 
 import "fmt" 
 
 func printFruits(fruits ...string) { 
    for _, fruit := range fruits{ 
        fmt.Println(fruit) 
    } 
 } 
 
 func main() { 
   printFruits("apple", "bannana") 
   printFruits("papaya", "coconut", "pear", "pineapple") 
   berries := []string{"blueberry", "strawberry", "raspberry"} 
   printFruits(berries...) 
 } 
```

Во-первых, в printFruits мы определили количество аргументов с \[... string\].

Это говорит Go, что эта функция принимает любое количество строковых аргументов.

Первые два вызова printFruits показывают, что функция будет печатать каждую строку, даже если мы передаем другое количество аргументов.

```text
apple 
 bannana 
 ... 
 papaya 
 coconut 
 pear 
 ... 
```

Это также будет работать для срезов.

Чтобы использовать функцию vardiac со срезом, мы добавляем точки тренировки к вызову.

```go
printFruits(berries...) 
```

```text
blueberry 
 strawberry 
 raspberry 

```