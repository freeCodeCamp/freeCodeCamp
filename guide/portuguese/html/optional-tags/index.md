---
title: Optional Tags
localeTitle: Tags opcionais
---
## Tags opcionais em HTML5

Em HTML5, você pode omitir determinadas tags de abertura e fechamento sob condições específicas. Por exemplo, o seguinte código HTML…

```html

<!DOCTYPE html> 
 <p>Hello World. 
```

Irá avaliar automaticamente para…

```html

<!DOCTYPE html> 
 <html> 
  <head></head> 
  <body> 
    <p>Hello world. 
    </p> 
  </body> 
 </html> 
```

As especificações de tag opcionais para as tags HTML5 mais comuns são as seguintes:

*   A tag inicial de um elemento `html` pode ser omitida se a primeira coisa dentro do elemento `html` não for um comentário.
*   A tag final de um elemento `html` pode ser omitida se o elemento `html` não for imediatamente seguido por um comentário.
*   A tag inicial de um elemento `head` pode ser omitida se o elemento estiver vazio ou se a primeira coisa dentro do elemento `head` for um elemento.
*   A tag final do elemento `head` pode ser omitida se o elemento `head` não for imediatamente seguido por um caractere de espaço ou um comentário.
*   A tag inicial do elemento `body` pode ser omitida se o elemento estiver vazio, ou se a primeira coisa dentro do elemento `body` não for um caractere de espaço ou um comentário, exceto se a primeira coisa dentro do elemento `body` for `meta` , `link` , `script` , `style` ou elemento de `template` .
*   A tag final do elemento `body` pode ser omitida se o elemento body não for imediatamente seguido por um comentário.

### Mais Informações

Para saber mais sobre as tags opcionais em HTML5, visite ![Recomendações do World Wide Web Consortium](https://www.w3.org/TR/html5/syntax.html#optional-tags) .