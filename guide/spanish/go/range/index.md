---
title: Range
localeTitle: Distancia
---
## Distancia

Para iterar sobre una colección en Go, podemos usar el rango.

El rango difiere de los bucles for porque el ítem de una colección no es accedido por un índice.

Si desea acceder a un elemento específico en una colección, probablemente un bucle for sea la mejor opción.

Aquí hay un ejemplo:

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

Saldrá:
```
apple 
 orange 
 pear 
```

Es posible que haya notado el identificador en blanco que se utilizó.

El identificador en blanco (o la primera variable devuelta desde el rango) es el índice del elemento.

Esto es más adecuado cuando se extiende sobre un mapa, para que pueda obtener la clave y el valor:

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

Salidas:
```
a -> apple 
 b -> banana 

```