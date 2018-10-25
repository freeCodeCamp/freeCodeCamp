---
title: Separate Build Image
localeTitle: Imagem de compilação separada
---
## Visão geral

Fazer imagens docker leves é fundamental para ter um pipeline de desenvolvimento / implementação rápido. Para código compilado, construir o binário dentro de um contêiner docker tem o benefício de ser um processo de compilação repetido e padronizado. No entanto, isso pode criar imagens muito grandes que podem se tornar um problema no final da linha.

## Nosso código

Neste exemplo, usaremos um simples servidor web escrito em [Go](https://golang.org/) . O código a seguir é apenas um simples hello world webserver escutando na porta `8080` .

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

O Dockerfile para este código pode ser algo parecido com isto
```
FROM golang:1.11 
 
 ADD . /app 
 
 WORKDIR /app 
 
 RUN go build -o /myserver . 
 
 EXPOSE 8080 
 
 CMD [ "/myserver" ] 
```

Construir esta imagem resulta em uma imagem com um tamanho de 783MB !! Com uma imagem desse tamanho para um aplicativo simples, é fácil ver como isso pode atrasar as coisas ao implantar.

## Uma solução melhor

Uma solução melhor seria usar uma imagem de construção separada para construir o binário e copiá-lo para a imagem final. Como Go gera um binário autônomo, podemos usar o `scratch` imagem janela de encaixe como uma base que é quase tão pequeno quanto ele ganha!

### Dockerfile

O Dockerfile a seguir irá primeiro construir o binário dentro da imagem do golang e então construir uma nova imagem a partir do zero, copiando o binário da primeira imagem para a segunda.
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

Construir a partir deste dockerfile resulta em um tamanho final de imagem de apenas 6,55MB! Isso é **100 vezes menor do** que a nossa primeira tentativa, o que faz com que seja 100 vezes mais rápido retirar a imagem de um registro!

### Benefício bônus

Não apenas agora temos uma pequena imagem de janela de encaixe para nosso aplicativo, mas também temos apenas que nos preocupar com a segurança de nosso aplicativo, já que não há outro software em execução no contêiner.