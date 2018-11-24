---
title: Box Model
localeTitle: Modelo de caixa
---
## Modelo de caixa

Entender o Modelo de Caixas de CSS é crucial para poder planejar corretamente uma página da web.

Quando um navegador renderiza (desenha) uma página da web, cada elemento, por exemplo, um pedaço de texto ou uma imagem, é desenhado como uma caixa retangular seguindo as regras do Modelo de Caixa do CSS.

No centro da caixa está o conteúdo em si, que ocupa uma certa altura e largura. Esta região é conhecida como a **área de conteúdo** . O tamanho da área de conteúdo pode ser determinado automaticamente ou você pode definir explicitamente o tamanho da altura e da largura. (veja a nota abaixo sobre o `box-sizing` )

![Imagem da área de conteúdo](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/content%20area.jpg)

Em torno da área de conteúdo, esta é uma região conhecida como **área de preenchimento** . O tamanho do preenchimento pode ser o mesmo ao redor (definido com `padding` ) ou você pode definir individualmente para os `padding` superior, direito, inferior e esquerdo (com `padding-top` , `padding-right` , `padding-bottom` e `padding-left` ) .

![Imagem da área de preenchimento](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/padding%20area.jpg)

Em seguida, há uma **área de fronteira** . Isso cria uma borda ao redor do elemento e seu preenchimento. Você pode definir espessura ( `border-width` ), cor (cor da `border-color` ) e estilo ( `border-style` ) da borda. As opções de estilo incluem `none` (sem borda), `solid` , `dashed` , `dotted` e várias outras. Além disso, você pode definir as bordas nos 4 lados individualmente; por exemplo, a borda superior com `border-top-width` , `border-top-color` e `border-top-style` pela sua espessura, cor e estilo. (Veja a nota abaixo sobre `box-sizing` .)

![Imagem da área de fronteira](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/border%20area.jpg)

Finalmente, há a **área de margem** . Isso cria um espaço livre ao redor do elemento, preenchimento e borda. Novamente, você pode definir individualmente as margens superior, direita, inferior e esquerda (com `margin-top` , `margin-right` , `margin-bottom` e `margin-left` ). Sob certas circunstâncias, o colapso da margem ocorre e as margens entre os elementos adjacentes podem ser compartilhadas.

![Imagem da área de margem](https://raw.githubusercontent.com/johnkennedy9147/Resources/master/CSS%20Box%20Model%20Images/margin%20area2.jpg)

**Propriedade de `box-sizing`** O padrão para essa propriedade é `content-box` . Se você usar o padrão, o modelo de caixa permitirá que o autor especifique o tamanho da área de conteúdo. No entanto, é possível usá-los para especificar o tamanho da área da borda. Isso é feito alterando `box-sizing` propriedade de `box-sizing` `border-box` . Isso às vezes pode tornar os layouts mais fáceis. Você pode definir a propriedade de `box-sizing` por elemento, conforme desejado.

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model)