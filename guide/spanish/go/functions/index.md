---
title: Go Functions
localeTitle: Ir funciones
---
## Ir funciones

Una función toma cero o más parámetros de cualquier tipo, hace algo de lógica con ellos y puede devolver uno o más valores. La sintaxis de la función de Golang es:

```go
func sum(parameter1 int64, parameter2 int64) int64 { 
  return parameter1+parameter2 
 } 
```

Aquí, el nombre de la función es `add` . Lleva a los parámetros, `parameter1` y `parameter2` de tipo `int64` y devuelve otro int64, la suma de los dos parámetros.

### Regreso

Una `return` se alcanza un `return` , la función sale sin ejecutar más código.

```go
func sum(parameter1 int64, parameter2 int64) int64 { 
  return parameter1+parameter2 
  // Unreachable code 
  fmt.Printf("Don't print me") 
 } 
```

### Llamando a una función

La función anterior se llamaría así:

```go
sum(4, 5) 
```

El valor de esta expresión es 9.

### Omitir tipo de parámetro

Si dos o más parámetros consecutivos son del mismo tipo, puede indicarse solo una vez.

```go
function foo(x, y, z int64, name string) { 
  fmt.Printf("%d %d %d %s", x, y, z, name) 
 } 
```

Aquí `x` , `y` , `z` son de tipo `int64` , y `name` es una cadena.

### Devolviendo múltiples valores

Una función puede devolver cero o más valores. Para no devolver nada, omita el tipo de retorno:

```go
function helloWorld() { 
  fmt.Printf("Hello world!") 
 } 
```

Para devolver un valor especifique su tipo:

```go
function getHelloWorld() string { 
  return "Hello world!" 
 } 
```

Para devolver más de un valor, especifique sus tipos, envueltos en `()` y separados por comas:

```go
function getHelloWorldAndBestLanguage() (string, string) { 
  return "Hello world!", "Golang" 
 } 
```

Para recibir estos valores, simplemente declare las variables separadas por comas como esta:

```go
helloWorld, bestLanguage := getHelloWorldAndBestLanguage() 
 // helloWorld == "Hello world!" 
 // bestLanguage == "Golang" 
```

### Devoluciones desnudas

Puede nombrar los tipos de retorno para que no tenga que pasar la variable a la declaración de retorno:

```go
func duplicate(s string) (first, second string) { 
  first = s 
  last = s 
    return 
 } 
 
 func main() { 
    fmt.Println(split("Hello world!")) // ("Hello world!", "Hello world!") 
 } 
```

#### Más información:

https://tour.golang.org/basics/4