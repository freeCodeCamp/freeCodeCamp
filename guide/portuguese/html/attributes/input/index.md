---
title: Input
localeTitle: Entrada
---
## Entrada

A tag HTML `<input>` é usada em um formulário para declarar um elemento de entrada. Permite ao usuário inserir dados.

## Exemplo

```html

<!DOCTYPE html> 
 <html> 
 
   <head> 
      <title>HTML input Tag</title> 
   </head> 
 
   <body> 
      <form action = "/cgi-bin/hello_get.cgi" method = "get"> 
         First name: 
            <input type = "text" name = "first_name" value = "" maxlength = "100" /> <!--Input do tipo text, cria um campo de texto-->
            <br /> 
 
         Last name: 
            <input type = "text" name = "last_name" value = "" maxlength = "100" />  <!--Input do tipo text, cria um campo de texto-->
         <input type = "submit" value = "Submit" /> <!--Input do tipo submit, cria um botão que envia o formulário-->
      </form> 
   </body> 
 
 </html> 
```

No exemplo acima, existem dois campos de entrada que solicitam ao usuário que insira seus nomes e sobrenomes de acordo com as etiquetas especificadas. O envio `<button type="submit">` é outro tipo de entrada que é usado para levar os dados inseridos pelo usuário no formulário e enviá-los para algum outro local especificado no código.

#### Mais Informações:

[Youtube](https://www.youtube.com/watch?v=qJ9ZkxmVf5s)

## Entrada

A tag HTML `<input>` é de vários tipos para inserir dados. Alguns deles são: Tipo: Texto(text) (Este é o tipo mais comum que é usado para criar caixas de texto gerais) Tipo: Senha(password) (Esse tipo é usado para criação de campos de senha) Tipo: Oculto(hidden) (Esse é um tipo especial de Entrada que não é mostrado para o usuário, mas é usado para passar informações de uma página para outra enquanto usa a tag) Tipo: e-mail (tipo especial que valida um e-mail direto pelo html) Tipo: numero(number) (Este tipo gera um campo que só aceita números)
