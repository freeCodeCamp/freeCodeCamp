---
title: A simple web server in Go
localeTitle: Um servidor web simples em Go
---A linguagem de programação Go é bem conhecida por ter um servidor da Web integrado. Neste artigo, você aprenderá como pode facilmente criar seu próprio servidor da Web com o Go. Você não precisará de nenhum outro pacote além daqueles que já foram construídos!

Primeiro, entre no seu editor de texto. Em seguida, crie um arquivo chamado `webserver.go` e digite o seguinte código:

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

Vamos quebrar o bloco de código acima. Nós importamos o pacote `net/http` : este pacote contém o próprio servidor web. Então nós também importamos o pacote `io` , nós usaremos isso mais tarde para realmente servir algo para o cliente.

Na função `main` , fazemos duas coisas. Em primeiro lugar, instruímos o servidor para permitir que a função chamada `servePage` todo o tráfego de entrada para `/` - neste caso, significa que ele manipula solicitações para _qualquer_ `URL` . A segunda coisa que fazemos é realmente ativar o servidor. Fazemos isso usando uma função chamada `ListenAndServe` . Essa função requer dois parâmetros: a `port` (como `string` ), neste caso é `8080` , e o `handler` (como `Handler` ) - no entanto, o último ainda não é importante. Vamos apenas tornar `nil` e tudo vai funcionar bem.

Na `servePage` , fazemos apenas uma coisa simples, por enquanto. Usando o pacote `io` e a função `WriteString` que ele contém, podemos responder à solicitação dos clientes com o texto `Hello world!` (ou qualquer outra string, claro). Você também deve ter notado que a função `servePage` possui dois argumentos: o `writer` e a `request` . Com o escritor, você pode responder a uma solicitação `HTTP` e, com a `request` pode obter mais informações sobre a solicitação em si.

Parabéns! Você acabou de criar seu primeiro servidor web! Se você quiser testá-lo: apenas execute `go run webserver.go` , `go run webserver.go` um navegador e navegue até `http://localhost:8080` !