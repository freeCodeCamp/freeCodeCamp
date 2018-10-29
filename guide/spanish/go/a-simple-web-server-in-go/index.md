---
title: A simple web server in Go
localeTitle: Un servidor web simple en Go
---El lenguaje de programación Go es conocido por tener un servidor web incorporado. En este artículo aprenderá cómo puede hacer fácilmente su propio servidor web con Go. ¡No necesitarás ningún otro paquete además de los que ya están incorporados!

Primero, entra en tu editor de texto. Luego cree un archivo llamado `webserver.go` e ingrese el siguiente código:

```go
package main 
 
 import ( 
  "net/http" 
  "io" 
 ) 
 
 func main() { 
  http.HandleFunc("/", servePage) 
    http.ListenAndServe(":8080", nil) 
 } 
 
 func servePage(writer http.ResponseWriter, reqest *http.Request) { 
  io.WriteString(writer, "Hello world!") 
 } 
```

Vamos a romper el bloque de código de arriba. Importamos el paquete `net/http` : este paquete contiene el propio servidor web. Luego, también importamos el paquete `io` , haremos uso de esto más adelante para realmente servir algo al cliente.

En la función `main` hacemos dos cosas. En primer lugar, le indicamos al servidor que permita que la función llamada `servePage` maneje todo el tráfico entrante a `/` - en este caso, significa que maneja las solicitudes a _cualquier_ `URL` . Lo segundo que hacemos es activar el servidor. Hacemos esto usando una función llamada `ListenAndServe` . Esta función requiere dos parámetros: el `port` (como `string` ), en este caso es `8080` , y el `handler` (como `Handler` ), sin embargo, el último aún no es importante. Solo lo haremos `nil` y todo funcionará bien.

En `servePage` solo hacemos una cosa simple, por ahora. Usando el paquete `io` y la función `WriteString` que contiene, podemos responder a la solicitud de los clientes con el texto `Hello world!` (o cualquier otra cadena, por supuesto). También es posible que haya notado que la función `servePage` tiene dos argumentos: el `writer` y la `request` . Con el escritor, realmente puede responder a una solicitud `HTTP` y con la `request` puede obtener más información sobre la solicitud en sí.

¡Felicidades! ¡Acabas de crear tu primer servidor web! Si desea probarlo: simplemente ejecute `go run webserver.go` , `go run webserver.go` un navegador y navegue hasta `http://localhost:8080` !