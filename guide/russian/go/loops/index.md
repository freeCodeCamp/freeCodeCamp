---
title: Loops
localeTitle: Loops
---
# Для цикла в Go

Go имеет только `for` цикла. Базовый `for` цикла имеет три компонента, разделенных `;` -

*   инструкция **init** : выполняется перед первой итерацией
    
*   выражение **условия** : оценивается перед каждой итерацией
    
*   **сообщение post** : выполняется в конце каждой итерации
    

Оператор **init** часто является коротким объявлением переменной. Объявленные там переменные видны только в области оператора `for` . Цикл прекращает итерацию после того, как логическое условие оценивается как false.

Пример цикла `for` приведен ниже:

**for.go**

```go
package main 
 
 import "fmt" 
 
 func main() { 
    sum := 0 
    for i := 0; i <= 10; i++ { 
        sum += i 
    } 
    fmt.Println("The sum of first 10 natural numbers is", sum) 
 } 
```

Выполнение вышеуказанной программы дает результат, похожий на следующий вывод - \`\` \`  
$ go run for.go Сумма первых 10 натуральных чисел равна 55
```
You can use `continue` and `break` to adjust the loops flow 
```

идти // этот код печатает любые нечетные числа до 5 для n: = 0; n <= 10; n ++ { если n% 2 == 0 { // если число равнозначно переходить к следующему n Продолжать } fmt.Println (п) // если число 5 выходит из цикла если n == 5 { перерыв } }
```
If you want to create an infinite loop just use `for { }` 
```

идти за { // Whill loop, пока условие не прерывает цикл break // выйти из цикла }
```
## Replacement for while-loop 
 To simulate while-loop of other languages, you can simply exclude the **init** and **post** statement: 
```

идти func main () { num: = 1 для num <= 1000 { num \* = 2 } fmt.Println («Наименьшая мощность 2 над 1000 равна», num) } \`\` \`