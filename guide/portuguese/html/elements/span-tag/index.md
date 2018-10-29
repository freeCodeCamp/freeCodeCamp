---
title: Span Tag
localeTitle: Dia do período
---
## Tag Span

A tag `<span>` é um elemento contêiner de propósito geral semelhante a `<div>` . Os navegadores não fazem alterações visuais em `<span>` s por padrão, mas você pode estilizá-los com CSS ou manipulá-los com JavaScript.

### Exemplo

```html

<html> 
  <head> 
    <title>The Span Tag</title> 
  </head> 
  <body> 
    <div> 
      <p>This is a normal paragraph without any changes.</p> 
      <p>This paragraph has <span style="color:red">red span styling</span> inside it without affecting the rest of the document.</p> 
    </div> 
  </body> 
 </html> 
```

O código para o parágrafo com texto vermelho se parece com isto:

```html

<p>This paragraph has <span style="color:red">red span styling</span> inside it without affecting the rest of the document.</p> 
```

#### Diferenças entre `<span>` e `<div>`

A principal diferença é que `<span>` é um elemento in-line, enquanto `<div>` é um elemento de bloco. Isso significa que um `<span>` pode aparecer dentro de uma frase ou parágrafo (como no exemplo acima), enquanto um `<div>` iniciará uma nova linha de conteúdo. Observe que a propriedade de `display` CSS pode alterar esse comportamento padrão, mas isso está muito além do escopo deste artigo!

#### Mais Informações:

*   [Referência do elemento HTML MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)