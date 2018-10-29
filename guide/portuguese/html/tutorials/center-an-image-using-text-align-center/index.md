---
title: Center an Image Using Text Align Center
localeTitle: Centralizar uma imagem usando o centro de alinhamento de texto
---
## Centralizar uma imagem usando o centro de alinhamento de texto

Um elemento `<img>` é um elemento embutido (valor de exibição do `inline-block` ). Ele pode ser facilmente centralizado adicionando o `text-align: center;` Propriedade CSS para o elemento pai que contém.

Para centralizar uma imagem usando `text-align: center;` você deve colocar o `<img>` dentro de um elemento de nível de bloco, como um `div` . Como a propriedade `text-align` só se aplica a elementos no nível de bloco, você coloca `text-align: center;` no elemento de nível de bloco de acondicionamento para alcançar um `<img>` horizontalmente centrado.

### Exemplo

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Center an Image using text align center</title> 
    <style> 
      .img-container { 
        text-align: center; 
      } 
    </style> 
  </head> 
  <body> 
    <div class="img-container"> <!-- Block parent element --> 
      <img src="user.png" alt="John Doe"> 
    </div> 
  </body> 
 </html> 
```

**Nota:** O elemento pai deve ser um elemento de bloco. Se não for um elemento de bloco, você deve adicionar `display: block;` Propriedade CSS junto com a propriedade `text-align` .

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Center an Image using text align center</title> 
    <style> 
      .img-container { 
        text-align: center; 
        display: block; 
      } 
    </style> 
  </head> 
  <body> 
    <span class="img-container"> <!-- Inline parent element --> 
      <img src="user.png" alt=""> 
    </span> 
  </body> 
 </html> 
```

**Demonstração:** [Codepen](https://codepen.io/aravindio/pen/PJMXbp)

## Documentação

[**text-align** - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

[**\\ ** - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)