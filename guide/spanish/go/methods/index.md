---
title: Go Methods
localeTitle: Ir metodos
---## Ir metodos

Los tipos de golang pueden tener métodos. Un método es una función con un argumento especial, el _receptor_ .

```go
type Rectangle struct { 
  height, width int64 
 } 
 
 func (r Receiver) getArea() int64 { 
  return r.height * r.height 
 } 
 
 r := Rectangle{10, 20} 
 r.getArea() // 200 
```

Aquí, el tipo `Rectangle` tiene un método llamado `getArea` que devuelve el área del rectángulo. El receptor aquí es `r` .

Este código es equivalente a:

```go
type Rectangle struct { 
  height, width int64 
 } 
 
 func getArea(r Receiver) int 64{ 
  return r.height * r.height 
 } 
 
 r := Rectangle{10, 20} 
 getArea(r) // 200 
```

Ahora el método getArea recibe `r` como un argumento, en lugar de un receptor. La funcionalidad es equivalente.

### Puntero receptor

Puede pasar un puntero como receptor:

```go
type MyInt int64 
 
 func (m *MyInt) setToZero() { 
  *m = MyInt(0) 
 } 
 
 m := MyInt(10) 
 m.setToZero() // m == 0 
```

### Metodos de extension

Si desea crear un método en un tipo definido en otro paquete, por ejemplo, `int` puede usar un envoltorio simple como este:

```go
type MyInt int64 
 
 func (m MyInt) add10() int64 { 
  return m + 10 
 } 
 
 m := MyInt(10) 
 m.add10() // 20 
```

#### Más información:

https://tour.golang.org/methods/1