---
title: Object Fit
localeTitle: Ajuste de objetos
---
# Ajuste de objetos

A propriedade de `object-fit` especifica como um elemento responde à largura / altura de sua caixa pai.

Esta propriedade pode ser usada para imagem, vídeo ou qualquer outra mídia. Ele também pode ser usado com a propriedade de `object-position` do `object-position` para obter mais controle sobre como a mídia é exibida.

Basicamente, usamos a propriedade de `object-fit` para definir como ela estica ou esmaga uma mídia embutida.

## Sintaxe

```css
.element { 
    object-fit: fill || contain || cover || none || scale-down; 
 } 
```

## Valores

*   `fill` : **este é o valor padrão** . Redimensione o conteúdo para corresponder à sua caixa pai, independentemente da proporção.
    
*   `contain` : Redimensione o conteúdo para preencher sua caixa pai usando a proporção correta.
    
*   `cover` : semelhante a `contain` mas muitas vezes cortando o conteúdo.
    
*   `none` : exibe a imagem no tamanho original.
    
*   `scale-down` : compara a diferença entre `none` e `contain` para encontrar o menor tamanho de objeto concreto.
    

## Compatibilidade do Navegador

O `object-fit` é suportado pela maioria dos navegadores modernos, para as informações mais atualizadas sobre compatibilidade, você pode verificar isso http://caniuse.com/#search=object-fit

Também há um polyfill para navegador não suportado (principalmente IE). https://github.com/anselmh/object-fit

## Mais Informações

https://developer.mozilla.org/pt-BR/docs/Web/CSS/object-fit https://drafts.csswg.org/css-images-3/#the-object-fit