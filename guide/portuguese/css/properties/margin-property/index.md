---
title: Margin Property
localeTitle: Propriedade de Margem
---
## Propriedade de Margem

A propriedade margin é o espaço em torno de um elemento, em oposição ao preenchimento, que é o espaço dentro do elemento. A margem é transparente e é o elemento mais externo no modelo de caixa (veja o diagrama abaixo).

![Diagrama de modelo de caixa](https://css-tricks.com/wp-content/csstricks-uploads/thebox.png)

Fonte: https://css-tricks.com/the-css-box-model/

### Definindo Margem

Existem várias maneiras de definir a margem de um elemento.

O caminho mais simples ...

```css
  margin: 10px; 
```

Isso colocará 10 pixels de espaço completamente ao redor do elemento.

Você também pode colocar diferentes quantidades de espaço em cada lado de um elemento. Por exemplo:

```css
  margin-top: 10px; 
  margin-bottom: 15px; 
  margin-left: 20px; 
  margin-right: 25px; 
```

No entanto, existe uma abreviatura que pode ser usada ao definir diferentes lados de um elemento. Ele começa no topo e vai no sentido horário ao redor do elemento (superior, direita, inferior, esquerda). Por exemplo, o código sobre seria escrito de forma semelhante:

```css
  margin: 10px 25px 15px 25px; 
```

Além disso, se as margens inferior e superior forem as mesmas e as margens esquerda e direita forem as mesmas, pode ser escrito assim:

```css
  margin: 10px 20px; 
```

onde as margens superior e inferior são 10 pixels e as margens esquerda e direita são 20 pixels.

### Outros valores de propriedade

auto - o navegador calcula as margens.

initial - define a propriedade para seu valor inicial

inherit - element herda a margem do seu elemento pai

### Espaço de medição

Assim como há várias maneiras de definir a margem, também há várias maneiras de medir a margem.

px - Medição em pixels, a unidade padrão de medição do espaço da tela.

% - Porcentagem da tela. Isso fará com que o elemento diminua e cresça com o navegador e é uma das unidades de medida recomendadas para o design da Web responsivo.

em tamanho unidade em relação ao tamanho da fonte do elemento atual.

rem - size unit em relação ao tamanho da fonte do elemento raiz da página.

[Aqui](https://www.w3schools.com/CSSref/css_units.asp) está um guia sobre unidades CSS.

[Este guia de estilo rápido ajudará a garantir que sua solicitação de recebimento seja aceita](https://github.com/freecodecamp/guides/blob/master/README.md) .

#### Mais Informações:

*   [Escolas W3](https://www.w3schools.com/CSSref/pr_margin.asp)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
*   [Truques CSS](https://css-tricks.com/almanac/properties/m/margin/)