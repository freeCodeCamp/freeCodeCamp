---
title: Go Methods
localeTitle: Vá métodos
---## Vá métodos

Tipos de Golang podem ter métodos. Um método é uma função com um argumento especial, o _receptor_ .

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

Aqui, o tipo `Rectangle` tem um método chamado `getArea` que retorna a área do retângulo. O receptor aqui é `r` .

Este código é equivalente a:

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

Agora, o método getArea recebe `r` como um argumento, em vez de um receptor. A funcionalidade é equivalente.

### Receptor de ponteiro

Você pode passar um ponteiro como um receptor:

```go
type MyInt int64 
 
 func (m *MyInt) setToZero() { 
  *m = MyInt(0) 
 } 
 
 m := MyInt(10) 
 m.setToZero() // m == 0 
```

### Métodos de extensão

Se você quiser criar um método em um tipo definido em outro pacote, por exemplo, `int` você pode usar um simples invólucro como este:

```go
type MyInt int64 
 
 func (m MyInt) add10() int64 { 
  return m + 10 
 } 
 
 m := MyInt(10) 
 m.add10() // 20 
```

#### Mais Informações:

https://tour.golang.org/methods/1