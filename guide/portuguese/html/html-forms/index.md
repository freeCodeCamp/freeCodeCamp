---
title: HTML Forms
localeTitle: Formulários HTML
---
## Formulários HTML

Basicamente, os formulários são usados ​​para coletar dados inseridos por um usuário, que são então enviados ao servidor para processamento adicional. Eles podem ser usados ​​para diferentes tipos de entradas do usuário, como nome, email etc.

Formulário contém elementos de controle que são agrupados em tags `<form></form>` , como `input` , que podem ter tipos como:

*   `text`
*   `email`
*   `password`
*   `checkbox`
*   `radio`
*   `submit`
*   `range`
*   `search`
*   `date`
*   `time`
*   `week`
*   `color`
*   `datalist`

Exemplo de código:

```html

<form> 
    <label for="username">Username:</label> 
    <input type="text" name="username" id="username"> 
    <label for="password">Password:</label> 
    <input type="password" name="password" id="password"> 
    <input type="radio" name="gender" value="male">Male<br> 
    <input type="radio" name="gender" value="female">Female<br> 
    <input type="radio" name="gender" value="other">Other 
    <input list="Options"> 
    <datalist id="Options"> 
      <option value="Option1"> 
      <option value="Option2"> 
      <option value="Option3"> 
    </datalist> 
    <input type="submit" value="Submit"> 
    <input type="color"> 
    <input type="checkbox" name="correct" value="correct">Correct 
 </form> 
```

Outros elementos que formam podem conter:

*   `textarea` - é uma caixa de várias linhas que é usada com mais freqüência para adicionar algum texto, por exemplo. Comente. O tamanho da área de texto é definido pelo número de linhas e colunas.
*   `select` - juntamente com a tag `<option></option>` cria o menu suspenso de seleção.
*   `button` - O elemento de botão pode ser usado para definir um botão clicável.

MAIS INFORMAÇÕES SOBRE FORMULÁRIOS HTML.

Formulários HTML são necessários quando você deseja coletar alguns dados do visitante do site. Por exemplo, durante o registro do usuário, você gostaria de coletar informações como nome, endereço de e-mail, cartão de crédito etc.

Um formulário receberá informações do visitante do site e, em seguida, publicará em um aplicativo de backend como CGI, script ASP ou script PHP etc. O aplicativo de back-end executará o processamento necessário nos dados transmitidos com base na lógica de negócios definida dentro a aplicação.

Existem vários elementos de formulário disponíveis, como campos de texto, campos de texto, menus suspensos, botões de opção, caixas de seleção, etc.

A tag HTML `<form>` é usada para criar um formulário HTML e segue a sintaxe -

`html <form action = "Script URL" method = "GET|POST"> form elements like input, textarea etc. </form>`

Se o método de formulário não for definido, o padrão será "GET".

A tag de formulário também pode ter um atributo chamado "target", que especifica onde o link será aberto. Pode abrir na guia do navegador, um quadro ou na janela atual.

O atributo action define a ação a ser executada quando o formulário é submetido. Normalmente, os dados do formulário são enviados para uma página da Web no URL do Script quando o usuário clica no botão de envio. Se o atributo action for omitido, a ação será definida para a página atual.