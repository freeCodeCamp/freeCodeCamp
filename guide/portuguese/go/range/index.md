---
title: Range
localeTitle: Alcance
---
## Alcance

Para iterar uma coleção no Go, podemos usar o intervalo.

Intervalo difere de for-loops como o item em uma coleção não é acessado por um índice.

Se você quiser acessar um elemento específico em uma coleção, um loop for provavelmente as melhores opções.

Aqui está um exemplo:

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

Saída:
```
apple 
 orange 
 pear 
```

Você deve ter notado o identificador em branco que foi usado.

O identificador em branco (ou a primeira variável retornada do intervalo) é o índice do item.

Isso é mais adequado quando você percorre um mapa, para obter a chave e o valor:

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

ir

Saídas:
```
a -> apple 
 b -> banana 

```