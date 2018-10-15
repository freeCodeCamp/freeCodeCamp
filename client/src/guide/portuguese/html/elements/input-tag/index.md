---
title: Input Tag
localeTitle: Tag de Entrada
---
## Entrada

A tag de entrada HTML pode ser incluída em um documento HTML como este:

```html

<input type="text"> 
```

Isso cria uma área na qual um usuário pode inserir informações facilmente. Esta informação é então enviada para um banco de dados de back-end e armazenada ou usada mais abaixo no site ou aplicativo.

Uma entrada com "type = 'text'" produzirá um campo de linha única onde qualquer informação pode ser inserida. Outros tipos comuns de entradas incluem, mas não estão limitados a: botão, caixa de seleção, cor, email e senha.

### Os tipos mais comuns usados

*   `text` : um campo de texto de linha única.
    
*   `button` : um botão sem comportamento padrão.
    
*   `submit` : um botão que envia o formulário.
    
*   `checkbox` : Uma caixa de seleção que permite que os valores sejam selecionados / desmarcados.
    
*   `date` : para inserir uma data (ano, mês e dia).
    
*   `email` : para editar um endereço de e-mail.
    
*   `file` : permite que o usuário selecione um arquivo.
    
*   `hidden` : não exibido, mas seu valor é enviado ao servidor.
    
*   `number` : para inserir um número.
    
*   `password` : um campo de texto de linha única cujo valor é obscurecido.
    
*   `radio` : Um botão de opção, permitindo que um único valor seja selecionado dentre várias opções.
    
*   `range` : um controle para inserir um número.
    
*   `url` : para inserir um URL.
    

Exemplo:

```html

<input type="button"> 
 <input type="checkbox"> 
 <input type="color"> 
 <input type="email"> 
 <input type="password"> 
```

As entradas vêm com muitos atributos predeterminados.

Alguns atributos comumente encontrados incluem autocomplete, checked e placeholder.

```html

<input type="text" placeholder="This is a placeholder"> 
```

No exemplo acima, uma área dentro da qual entrada pode ser inserida é processada, com o espaço reservado afirmando "Este é um espaço reservado". Uma vez que a linha de entrada é clicada e uma tecla é pressionada, o espaço reservado desaparece e é substituído por sua própria entrada.

```html

<input type="checkbox" checked> 
```

Nesse caso, uma caixa de seleção é exibida e é marcada por padrão devido ao atributo "verificado".

Existem muitos tipos diferentes de entradas e atributos associados que podem ser encontrados no link abaixo.

#### Mais Informações:

https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input

https://www.w3schools.com/tags/tag\_input.asp