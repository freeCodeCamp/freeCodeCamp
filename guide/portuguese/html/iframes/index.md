---
title: Iframes
localeTitle: Iframes
---
## Iframes

O elemento HTML `<iframe>` representa um quadro embutido, que permite incluir um documento HTML independente no documento HTML atual. O `<iframe>` é normalmente usado para incorporar mídia de terceiros, sua própria mídia, widgets, snippets de código ou incorporação de miniaplicativos de terceiros, como formulários de pagamento.

### Atributos

Abaixo estão listados alguns dos atributos do `<iframe>` :

| Atributo | Descrição | | --- | --- | | `allowfullscreen` | Defina como true para permitir que o quadro seja colocado no modo de tela inteira | | `frameborder` | Diz ao navegador para desenhar uma borda ao redor do quadro (definido como 1 por padrão) | | `height` | A altura do quadro em pixels CSS | | `name` | Um nome para o quadro | | `src` | O URL da página da web para incorporar | | `width` | A largura do quadro em pixels CSS |

### Exemplos

Incorporando um vídeo do YouTube com um `<iframe>` :

```html

<iframe width="560" height="315" src="https://www.youtube.com/embed/v8kFT4I31es" 
 frameborder="0" allowfullscreen></iframe> 
```

Incorporando o Google Maps com um `<iframe>` :

```html

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774386.2436462595!2d-74.53874786161381!3d40.69718109704434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sau!4v1508405930424" 
 width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> 
```

### Texto Alternativo

O conteúdo entre as tags `<iframe>` abertura e fechamento é usado como texto alternativo, para ser exibido se o navegador do visualizador não suportar iframes.

```html

<iframe width="560" height="315" src="https://www.youtube.com/embed/v8kFT4I31es" frameborder="0"> 
  <p>Your browser does not support iframes.</p> 
 </iframe> 
```

### Como segmentar um iframe em um link

Qualquer link `<a>` pode direcionar o conteúdo de um elemento `<iframe>` . Em vez de redirecionar a janela do navegador para a página da Web vinculada, ela redirecionará o `<iframe>` . Para que isso funcione, o atributo `target` do elemento `<a>` deve corresponder ao atributo `name` do `<iframe>` .

```html

<iframe width="560" height="315" src="about:blank" frameborder="0" name="iframe-redir"></iframe> 
 
 <p><a href="https://www.youtube.com/embed/v8kFT4I31es" target="iframe-redir">Redirect the Iframe</a></p> 
```

Este exemplo mostrará inicialmente um `<iframe>` branco, mas quando você clicar no link acima, ele redirecionará o `<iframe>` para exibir um vídeo do YouTube.

### Javascript e Iframes

Os documentos incorporados em um `<iframe>` podem executar o JavaScript em seu próprio contexto (sem afetar a página da Web pai) normalmente.

Qualquer interação de script entre a página da Web pai e o conteúdo do `<iframe>` incorporado está sujeita à política de mesma origem. Isso significa que, se você carregar o conteúdo do `<iframe>` de um domínio diferente, o navegador bloqueará qualquer tentativa de acessar esse conteúdo com JavaScript.

### Mais Informações:

Veja o [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) .