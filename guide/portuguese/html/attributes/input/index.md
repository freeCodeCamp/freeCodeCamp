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
            <input type = "text" name = "first_name" value = "" maxlength = "100" /> 
            <br /> 
 
         Last name: 
            <input type = "text" name = "last_name" value = "" maxlength = "100" /> 
         <input type = "submit" value = "Submit" /> 
      </form> 
   </body> 
 
 </html> 
```

No exemplo acima, existem dois campos de entrada que solicitam ao usuário que insira seus nomes e sobrenomes de acordo com as etiquetas especificadas. O envio `<button type="submit">` é outro tipo de entrada que é usado para levar os dados inseridos pelo usuário no formulário e enviá-los para algum outro local especificado no código.

#### Mais Informações:

[Youtube](https://www.youtube.com/watch?v=qJ9ZkxmVf5s)

## Entrada

A tag HTML `<input>` é de vários tipos para inserir dados. Alguns deles são: Tipo: Texto (Este é o tipo mais comum que é usado para criar caixas de texto gerais) Tipo: Senha (Esse tipo é usado para criação de campos de senha) Tipo: Oculto (Esse é um tipo especial de Entrada que não é mostrado para o usuário, mas é usado para passar informações de uma página para outra enquanto usa a tag)