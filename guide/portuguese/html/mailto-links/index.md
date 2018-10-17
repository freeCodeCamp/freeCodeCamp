---
title: Mailto Links
localeTitle: Links Mailto
---
## Links Mailto

Um link mailto é um tipo de hiperlink ( `<a href=""></a>` ) com parâmetros especiais que permite especificar destinatários adicionais, uma linha de assunto e / ou um corpo de texto.

### A sintaxe básica com um destinatário é:

```html

<a href="mailto:friend@something.com">Some text</a> 
```

### Mais personalização!

#### Adicionando um assunto a esse email:

Se você quiser adicionar um assunto específico a esse e-mail, tenha cuidado para adicionar `%20` ou `+` todos os lugares em que haja um espaço na linha de assunto. Uma maneira fácil de garantir que seja formatado corretamente é usar um [decodificador / codificador de URL](https://meyerweb.com/eric/tools/dencoder/) .

#### Adicionando o corpo do texto:

Da mesma forma, você pode adicionar uma mensagem específica na parte do corpo do email: Novamente, os espaços devem ser substituídos por `%20` ou `+` . Após o assunto, qualquer parâmetro adicional deve ser precedido por `&`

Exemplo: Digamos que você queira que os usuários enviem um email para os amigos sobre o progresso deles no Free Code Camp:

Endereço: vazio

Assunto: Boas notícias

Body: Estou me tornando um desenvolvedor

Seu link de html agora:

```html

<a href="mailto:?subject=Great%20news&body=I%20am%20becoming%20a%20developer">Send mail!</a> 
```

Aqui, deixamos o mailto vazio (mailto :?). Isso abrirá o cliente de e-mail do usuário e o usuário adicionará o endereço do destinatário.

#### Adicionando mais destinatários:

Da mesma maneira, você pode adicionar parâmetros CC e bcc. Separe cada endereço por uma vírgula!

Parâmetros adicionais devem ser precedidos por `&` .

```html

<a href="mailto:firstfriend@something.com?subject=Great%20news&cc=secondfriend@something.com,thirdfriend@something.com&bcc=fourthfriend@something.com">Send mail!</a> 
```

#### Mais Informações:

[MDN - links de e-mail](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#E-mail_links)