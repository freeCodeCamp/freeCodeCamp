---
title: How to Create an HTML Button That Acts Like a Link
localeTitle: Como criar um botão HTML que atua como um link
---
## Como criar um botão HTML que atua como um link

Às vezes, você pode querer usar um botão para vincular a outra página ou site, em vez de enviar um formulário ou algo assim. Isso é bastante simples de se fazer e pode ser alcançado de várias maneiras.

Uma maneira é simplesmente envolver sua tag `<button>` em uma tag `<a>` :

```html

<a href='https://www.freecodecamp.org/'><button>Link To freeCodeCamp</button></a> 
```

Isso transforma seu botão inteiro em um link.

Uma segunda opção é criar seu link como você faria normalmente com sua tag `<a>` e, em seguida, estilizá-lo via CSS:

```html

<a href='https://www.freecodecamp.org/'>Link To freeCodeCamp</a> 
```

Depois de criar seu link, você pode usar o CSS para parecer um botão. Por exemplo, você pode adicionar uma borda, uma cor de plano de fundo, alguns estilos para quando o usuário estiver passando o link…

Outra maneira de adicionar um botão é envolver uma `input` dentro de tags de `form` . Especifique o URL de destino desejado no atributo de ação do formulário.

```html

<form action="http://google.com"> 
    <input type="submit" value="Go to Google" /> 
 </form> 
```

#### Mais Informações:

*   [Guia FreeCodeCamp - botões de estilo](https://guide.freecodecamp.org/css/css-buttons/)
*   [Como criar um botão HTML que atue como um link?](https://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link)