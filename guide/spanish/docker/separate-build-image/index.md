---
title: Separate Build Image
localeTitle: Imagen de construcción separada
---
## Visión de conjunto

Hacer imágenes livianas de la ventana acoplable es clave para tener un desarrollo rápido / desarrollo de tuberías. Para el código compilado, construir el binario dentro de un contenedor docker tiene la ventaja de ser un proceso de compilación repetible y estandarizado. Sin embargo, esto puede crear imágenes muy grandes que pueden convertirse en un problema en el futuro.

## Nuestro codigo

En este ejemplo, usaremos un servidor web simple escrito en [Go](https://golang.org/) . El siguiente código es solo un servidor web de hello world que escucha en el puerto `8080` .

```go
package main 
 
 import ( 
    "fmt" 
    "log" 
    "net/http" 
 ) 
 
 func handler(w http.ResponseWriter, r *http.Request) { 
    fmt.Fprint(w, "Hello world!") 
 } 
 
 func main() { 
    http.HandleFunc("/", handler) 
    log.Fatal(http.ListenAndServe(":8080", nil)) 
 } 
```

### Dockerfile

El Dockerfile para este código podría verse algo como esto
```
FROM golang:1.11 
 
 ADD . /app 
 
 WORKDIR /app 
 
 RUN go build -o /myserver . 
 
 EXPOSE 8080 
 
 CMD [ "/myserver" ] 
```

¡¡La construcción de esta imagen da como resultado una imagen con un tamaño de 783MB !! Con una imagen de ese tamaño para una aplicación simple, es fácil ver cómo esto puede ralentizar las cosas cuando se implementa.

## Una mejor solucion

Una mejor solución sería utilizar una imagen de compilación separada para compilar el binario y luego copiarla en la imagen final. Como Go genera un binario autónomo, podemos utilizar la imagen de la `scratch` acoplable virtual como una base que es casi tan pequeña como es posible.

### Dockerfile

El siguiente Dockerfile primero construirá el binario dentro de la imagen de golang y luego construirá una nueva imagen desde cero, copiando el binario de la primera imagen en la segunda.
```
FROM golang:1.11 as build 
 
 ADD . /app 
 
 WORKDIR /app 
 
 RUN go build -o /myserver . 
 
 
 FROM scratch 
 
 COPY --from=build /myserver /myserver 
 
 EXPOSE 8080 
 
 CMD [ "myserver" ] 
```

¡La construcción a partir de este archivo docker da como resultado un tamaño de imagen final de solo 6.55MB! ¡Eso es **100 veces más pequeño** que nuestro primer intento, lo que lo hace 100 veces más rápido para bajar la imagen de un registro!

### Beneficio extra

Ahora no solo tenemos una pequeña imagen acoplable para nuestra aplicación, sino que también tenemos que preocuparnos por la seguridad de nuestra aplicación, ya que no hay ningún otro software ejecutándose dentro del contenedor.