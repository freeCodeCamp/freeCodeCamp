---
title: Textarea Tag
localeTitle: Tag Textarea
---
## Tag Textarea

A tag textarea HTML permite inserir uma caixa que conterá texto para comentários ou interação do usuário. Na maioria dos casos, é comum ver a área de texto usada como parte de um formulário.

Os programadores usam a tag textarea para criar um campo de múltiplas linhas para a entrada do usuário (útil especialmente no caso de o usuário poder colocar o texto mais longo no formulário). Os programadores podem especificar atributos diferentes para tags textarea.

Código de amostra:

```html

    <form> 
      <textarea name="comment" rows="8" cols="80" maxlength="500" placeholder="Enter your comment here..." required></textarea> 
    </form> 
```

Atributos mais comuns: atributos `row` e `cols` determinam a altura e a largura da área de texto `placeholder` atributo `placeholder` especifica o texto que é visível para o usuário, ajuda o usuário a entender quais dados devem ser digitados `maxlength` atributo `maxlength` determina o tamanho máximo do texto que pode ser digitado na área de texto, o usuário não pode enviar mais caracteres atributo `required` significa que este campo deve ser preenchido antes do envio do formulário

Para obter mais informações sobre a tag textarea e seus atributos, visite MDN ou w3schools .