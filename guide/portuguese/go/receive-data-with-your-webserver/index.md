---
title: Receive data with your web server
localeTitle: Receba dados com seu servidor da web
---Depois de configurar seu servidor da web e garantir que ele possa exibir algum conteúdo útil, convém torná-lo mais interativo, permitindo que ele aceite dados. Vamos começar escrevendo um código:

```go
package main 
 
 import ( 
  "net/http" 
  "html/template" 
 ) 
 
 type PAGE struct { 
  NAME string 
 } 
 
 var page PAGE 
 
 func main() { 
  http.HandleFunc("/", servePage) 
  http.ListenAndServe(":8080", nil) 
 } 
 
 func servePage(writer http.ResponseWriter, reqest *http.Request) { 
  page.NAME = request.FormValue("name") 
  template := template.New("sayHello") 
  template, _ = template.Parse("Hello {{.NAME}}!") 
  template.Execute(writer, page) 
 } 
```

Vamos quebrar esse código. Primeiramente, começamos importando `net/http` para o servidor web e `html/template` para o modelo. Este artigo pressupõe que você já saiba como criar um modelo no Go. Se você ainda não sabe, leia primeiro o artigo sobre o modelo.

Então criamos um tipo chamado `PAGE` , com um slot chamado `NAME` (isso é uma `string` ). Também criamos uma variável global chamada `page` que é do tipo `PAGE` : a estrutura que acabamos de criar.

Na função `servePage` , há uma coisa realmente importante para este artigo: o método `FormValue` que executamos na `request` .

Antes de continuar, primeiro você precisa saber como um `URL` é criado. Vamos pegar o seguinte `URL` como um exemplo:
```
https://google.com/search?q=free+code+camp 
```

Se você inserir o `URL` acima no seu navegador, ele realizará uma pesquisa no Google por `free code camp` . O `URL` é construído assim:

1.  `https://` - este é o protocolo
2.  `google.com` - este é o nome de domínio e porta (neste caso não há porta mencionada - então o navegador usa a porta padrão para o protocolo)
3.  `/search` - este é o caminho
4.  `q=free+code+camp` - esta é a `query`

A consulta é a parte sobre a qual falamos neste artigo. O servidor do Google vê esse `URL` e, por causa do atributo `q` na consulta e do valor de `q` - nesse caso, `free+code+camp` - ele sabe onde deve procurar.

Também podemos aplicar isso ao nosso servidor. Vamos acionar o programa e navegar no navegador para:
```
http://localhost:8080/?name=world 
```

A resposta será:
```
Hello world! 
```

Como é que isso funciona? Bem, nós demos ao `FormValue` um parâmetro de `name` . Desta forma, `FormValue` sabe que queremos o valor do atributo `name` na consulta. Neste caso, isso é `world` , então o método retorna ao `world` . Essa sequência é então colocada na variável de `page` e o modelo faz o resto.

Esta é, obviamente, uma implementação realmente simples dessa função, mas você pode fazer muitas coisas com ela. Por exemplo: você pode aceitar endereços de e-mail e deixar o programa armazená-los em um arquivo.