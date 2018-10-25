---
title: Hello World in Go
localeTitle: Hola mundo en go
---
Para instalar Go en su computadora, descargue su instalador desde [aquí](https://golang.org/dl/) e instálelo siguiendo estas [instrucciones de instalación](https://golang.org/doc/install) .

## Programa First Go

Cree un archivo llamado `main.go` y agregue el siguiente código en él:

```go
package main // Package declaration 
 
 import "fmt" // Importing packages 
 
 // Function declaration 
 func main() { 
    fmt.Println("Hello, World!") 
 } 
```

Ahora, ejecute el programa anterior desde Terminal / Línea de comandos. Para hacer esto, abra Terminal / Línea de comandos y vaya al directorio en el que `main.go` está presente. Primero compile el programa y ejecute `go build main.go` A continuación, ejecute el comando `go run main.go` para ejecutar el programa. Debería ver la salida similar a la siguiente salida:
```
$ go build main.go 
 $ go run main.go 
 Hello, World! 
```

## Análisis

### Declaración del paquete

```go
package main 
```

En marcha, cada programa está asociado con un "paquete", o una colección de programas asociados. Una excepción notable es el paquete especial "main", que indica a los cumplidores que deben ejecutar el siguiente programa.

### Importaciones
```
import “fmt” 
```

Si desea utilizar funciones de otros paquetes, debe importarlos. Hay ciertos paquetes desarrollados por los mantenedores de go (llamados "biblioteca estándar") y se pueden encontrar en https://golang.org/pkg/. En este caso, necesitamos el paquete "fmt" para nuestra declaración de impresión (a continuación).

### Declaración de funciones

```go
func main() { 
 } 
```

Las funciones son el corazón de cualquier programa en ir. Pueden tener argumentos y valores de retorno, pero la función `main` no hace ninguno de estos. Actúa como el "punto de entrada", o donde se ve primero para ejecutar su programa. Queremos que se imprima nuestro programa Hello World, por lo que queremos poner nuestro código aquí.

### Imprimir declaración

```go
fmt.Println("Hello, world!") 
```

Go no requiere punto y coma al final de las líneas, ya que el compilador las agrega automáticamente. El paquete `fmt` (que `fmt` arriba) tiene la función `Println` , que invocamos usando el `.` sintaxis. Pasamos argumentos a la función entre los parens. En este caso, el argumento es la cadena que queremos imprimir ( `"Hello, world!"` ). Tenga en cuenta que la cadena está entre comillas.

¡Ahora que tiene las herramientas necesarias, salga y cree sus propios programas Go! La mejor manera de aprender es experimentar. Si alguna vez necesita ayuda, pruebe la excelente documentación de go: https://golang.org/doc/