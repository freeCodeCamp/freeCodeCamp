---
title: CSS Syntax and Selectors
localeTitle: Sintaxe CSS e Seletores
---
## Sintaxe CSS e Seletores

Quando falamos sobre a sintaxe do CSS, estamos falando sobre como as coisas são apresentadas. Existem regras sobre o que vai onde, tanto para que você possa escrever CSS de forma consistente e um programa (como um navegador) pode interpretá-lo e aplicá-lo à página corretamente.

Existem duas maneiras principais de escrever CSS.

### CSS Inline

Detalhes sobre especificidade de CSS: [truques de CSS](https://css-tricks.com/specifics-on-css-specificity/)

O CSS inline aplica o estilo a um único elemento e seus filhos, até que outro estilo que substitua o primeiro seja encontrado.

Para aplicar CSS inline, adicione o atributo "style" a um elemento HTML que você gostaria de modificar. Citações internas, incluem uma lista delimitada por ponto-e-vírgula de pares de chave / valor (cada um por sua vez separados por dois pontos) indicando os estilos a serem definidos.

Aqui está um exemplo de CSS inline. As palavras "One" e "Two" terão uma cor de fundo de amarelo e cor de texto de vermelho. A palavra "Três" tem um novo estilo que substitui o primeiro, e terá uma cor de fundo de cor verde e texto de ciano. No exemplo, estamos aplicando estilos a tags `<div>` , mas você pode aplicar um estilo a qualquer elemento HTML.

```html

<div style="color:red; background:yellow"> 
  One 
  <div> 
    Two 
  </div> 
  <div style="color:cyan; background:green"> 
    Three 
  </div> 
 </div> 
```

### CSS interno

Enquanto escrever um estilo inline é uma maneira rápida de alterar um único elemento, há uma maneira mais eficiente de aplicar o mesmo estilo a vários elementos da página de uma só vez.

O CSS interno tem seus estilos especificados na tag `<style>` e está incorporado na tag `<head>` .

Aqui está um exemplo que tem um efeito semelhante ao exemplo "inline" acima, exceto que o CSS foi extraído para sua própria área. As palavras "um" e "dois" irá coincidir com a `div` seletor e ser um texto vermelho em um fundo amarelo. As palavras "Três" e "Quatro" irá coincidir com a `div` selector também, mas eles também coincidir com o `.nested_div` selector que se aplica a qualquer elemento HTML que faz referência a essa classe. Esse seletor mais específico substitui o primeiro e eles acabam aparecendo como texto ciano em um plano de fundo verde.

```html

<style type="text/css"> 
  div { color: red; background: yellow; } 
  .nested_div { color: cyan; background: green; } 
 </style> 
 
 <div> 
  One 
  <div> 
    Two 
  </div> 
  <div class="nested_div"> 
    Three 
  </div> 
  <div class="nested_div"> 
    Four 
  </div> 
 </div> 
```

Os seletores mostrados acima são extremamente simples, mas podem ser bastante complexos. Por exemplo, é possível aplicar estilos somente a elementos aninhados; isto é, um elemento que é filho de outro elemento.

Aqui está um exemplo em que estamos especificando um estilo que só deve ser aplicado a elementos `div` que são um filho direto de outros elementos `div` . O resultado é que "Dois" e "Três" aparecerão como texto vermelho em um fundo amarelo, mas "Um" e "Quatro" permanecerão inalterados (e provavelmente texto preto em um fundo branco).

```html

<style type="text/css"> 
  div > div { color: red; background: yellow; } 
 </style> 
 
 <div> 
  One 
  <div> 
    Two 
  </div> 
  <div> 
    Three 
  </div> 
 </div> 
 <div> 
  Four 
 </div> 
```

### CSS externo

Todo o estilo tem seu próprio documento que está vinculado na tag `<head>` . A extensão do arquivo vinculado é `.css`

#### Mais Informações:

*   [Sintaxe CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax) @ MDN
*   [Seletores de CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) @ MDN
*   [Referência de Seletores CSS](https://www.w3schools.com/cssref/css_selectors.asp)
*   [Especificidade de Seletores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)