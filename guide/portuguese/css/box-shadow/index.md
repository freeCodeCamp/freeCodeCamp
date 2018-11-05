---
title: Box Shadow
localeTitle: Sombra da caixa
---
## Sombra da caixa

A propriedade `box-shadow` anexa uma ou mais sombras ao redor do quadro de um elemento (pode estar dentro). É uma opção que lhe dá o poder de criar facilmente maravilhosos efeitos de sombra. As sombras de caixa são uma ótima maneira de elevar o visual da sua página da web.

Uma sombra de caixa pode ser descrita com várias propriedades, incluindo:

*   Deslocamentos X e Y do elemento
*   borrão e raio de propagação
*   cor

### Sintaxe:

```css
  div { 
    box-shadow: none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]# 
    } 
  ``` 
 * #### inset (default: none) 
 se não especificada, a sombra é considerada como uma sombra externa (como se o elemento estivesse sobre o conteúdo)
 A presença da propriedade `inset`muda a sombra para dentro do elemento.

 
 * #### offset-x offset-y 
 Existem dois valores `length` para definir a posição da sombra. <offset-x> especifica a distancia horizontal. Valores negativos colocam a sombra à esquerda do elemento. `offset-y` especifica a distancia vertical. Valores engativos colocam a sombra acima do elemento. Veja `length` para possíveis unidades.
 
 * #### blur-radius (default: 0) 
 This is a third `length` value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be 0 (the shadow's edge is sharp). 
 
 * #### spread-radius (default: 0) 
 This is a fourth <length> value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be 0 (the shadow will be the same size as the element). 
 
 * #### color 
 This value is used to set the color of the shadow, usually defined with hex `#000000`, rgba value `rgba(55,89,88,0.8)` or rgb value `rgb(55,89,88)` 
 
 #### Extended 
 
 To maximize compatibility, it is recommended that you declare box shadow property for `moz-appearance` and `webkit`, this extends the normal syntax to: 
```

css div { box-shadow: none | \[inserir? && \[ ? ? ? \]\] # -moz-box-shadow: none | \[inserir? && \[ ? ? ? \]\] # -webkit-box-shadow: none | \[inserir? && \[ ? ? ? \]\] # }
```
However, this step can be ignored if it is creating confusion, as moz property and webkit property will only work in specific applications such as Firefox, and are not on a standards track. 
 
 ### Examples 
 
 #### Basic use 
```

css div { largura: 200px; altura: 50 px; cor de fundo: # 333; box-shadow: 10px 10px 5px #ccc; }
```
10px - offset-x 
 10px - offset-y 
 5px -  blur 
 #ccc - light gray color 
 
 It will display 
 
 ![image](https://raw.githubusercontent.com/krzysiekh/images/master/box-shadow1.png) 
 
 #### Inside box shadow 
```

css div { largura: 200px; altura: 50 px; cor de fundo: # 333; box-shadow: inserção 10px 10px 5px #ccc; }
```
It uses very similar code, but with inset value, which displays shadow inside the div element 
 
 ![image](https://raw.githubusercontent.com/krzysiekh/images/master/box-shadow2.png) 
 
 
 #### Multiple box shadows 
```

css div { largura: 200px; altura: 50 px; cor de fundo: # 333; box-shadow: inserção 10px 10px 5px #ccc, 10px 10px 5px #ccc; } \`\` \`

Você pode combinar as duas peças anteriores de sombras de caixa usando uma vírgula para obter várias sombras de caixa no mesmo div

#### Mais Informações

*   Documentos: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
