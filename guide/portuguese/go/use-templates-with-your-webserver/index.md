---
title: Using templates with your web server
localeTitle: Usando modelos com seu servidor da web
---Quando você tem um servidor da Web, talvez queira inserir dados em suas respostas. Vamos ver algum código:

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
  page.NAME = "Mark" 
  http.HandleFunc("/", servePage) 
  http.ListenAndServe(":8080", nil) 
 } 
 
 func servePage(writer http.ResponseWriter, reqest *http.Request) { 
  template := template.New("sayHello") 
  template, _ = template.Parse("Hello {{.NAME}}!") 
  template.Execute(writer, page) 
 } 
```

Agora inicie este programa e navegue em seu navegador para:
```
http://localhost:8080/ 
```

A resposta será:
```
Hello Mark! 
```

Mas como isso funciona e o que o código faz? Bem, em primeiro lugar, importamos o pacote `net/http` para que possamos executar um servidor web. Em seguida, importamos o pacote `html/template` . Isso habilita um recurso chamado de template; e é aí que este artigo é sobre.

Também criamos um tipo chamado `PAGE` , que possui um campo chamado `NAME` como `string` tipo. Também criamos uma variável global chamada `page` do tipo `PAGE` , a estrutura que acabamos de criar. Na função `main` , damos ao campo `NAME` da `page` um valor de `Mark` - meu nome, mas fique à vontade para usar seu próprio nome!

A função `servePage` é um pouco difícil no começo. Vamos desmontar:

```go
func servePage(writer http.ResponseWriter, reqest *http.Request) { 
 
  // 1. Creating a template 
  template := template.New("sayHello") 
 
  // 2. Filling the template 
  template, _ = template.Parse("Hello {{.NAME}}!") 
 
  // 3. Executing the template 
  template.Execute(writer, page) 
 } 
```

O que fazemos aqui? Vamos ver passo a passo:

1.  Nós criamos um _modelo_ . Você precisa digitar um nome, mas não importa qual nome você escolher. Aqui eu escolhi dizer `sayHello` .
2.  Em seguida, preenchemos o modelo com algum texto. Por favor, tome nota do `{{.NAME}}` .
3.  Finalmente, nós _executamos_ o modelo. Isso significa que o modelo é preenchido e enviado ao cliente.

Mas como vamos de `{{.NAME}}` para `Mark` ? Bem, lembre-se que usamos a variável de `page` como um parâmetro para o método `Execute` ? Este método analisa os dados no modelo e vê `{{.NAME}}` . O `.NAME` indica que ele deve procurar por um campo chamado `NAME` dentro da variável que foi especificada como um parâmetro quando `Execute` foi chamado. Nesse caso, ele encontra esse campo e toma nota de que o valor é `Mark` . O `{{` e `}}` estão dizendo `Execute` que ele deve substituir `{{.NAME}}` pelo valor encontrado. Então o resultado final se tornará `Hello Mark!` .

Você pode ter vários campos e vários `{{.XXX}}` . Essa é uma maneira muito fácil de inserir dados em respostas e agora você sabe como modelar no Go!