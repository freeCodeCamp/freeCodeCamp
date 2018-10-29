---
title: Border Property
localeTitle: Propriedade Border
---
## Propriedade Border

## Borda CSS

Nosso atributo CSS favorito, permite que você personalize completamente as bordas que aparecem em torno dos elementos HTML. Com o HTML, costumava ser impossível colocar uma borda em torno de um elemento, exceto a tabela. As bordas de CSS permitem criar estilos de borda nítidos e personalizados com muito pouco trabalho, em comparação com os métodos antiquados de HTML.

A propriedade abreviada de `border` define todas as propriedades da borda em uma declaração. \`\` \`css borda: 1px sólido # 000;
```
As propriedades que podem ser definidas, são em (ordem): 
 1. `border-style` 
 2. `border-width` 
 3. `border-color` 
 4. `border-radius` 
 
 Não importa se uma das propriedades acima não forem definidas, por exemplo: 
```

css borda: vermelho sólido;
```
The above code is also valid CSS. 
 
 ### Border Styles 
 
 The `border-style` property sets a wide range of different types of borders. 
 
 The various values are: 
 - `dotted` - Define uma borda pontilhada. 
 - `dashed` - Define uma borda tracejada. 
 - `solid` - Define uma borda sólida. 
 - `double` - Define uma borda dupla. 
 - `groove` - Define uma borda com estilo 3D. 
 - `ridge` - Define uma borda sulcada 3D. 
 - `inset` - Define uma borda interior em 3D. 
 - `outset` - Define uma borda de exterior 3D. 
 - `none` - Não define borda. 
 - `hidden` - Define uma borda oculta. 
 
 Com base na propriedade escolhida, esses estilos podem ser incompatíveis.
 Você pode estilizar cada lado separadamente: 
```

css border-top-style: sólido; border-left-style: pontilhado; border-right-style: tracejado; border-bottom-style: duplo;
```
Ou você pode estilizá-los todos de uma vez: 
```

css estilo de borda: sólido pontilhado duplo;
```
Como mostrado, a propriedade border permite que você selecione seções diferentes dela. [superior, inferior, esquerda, direita] 
 
 ### Border Width 
 
 Para alterar a espessura da sua borda, use o atributo border-width. Você pode usar termos-chave ou valores exatos para definir a largura da borda. Nota: você deve
 definir um estilo de borda para a borda aparecer. A largura pode ser definida como um tamanho específico (em px, pt, cm, em, etc) ou usando um dos três tamanhos pré-definidos.
 valores: fino, médio ou grosso. 
 
 Example: 
```

css

table { border-width: 7px; border-style: outset; } td { border-width: medium; border-style: outset; } p { border-width: thick; border-style: solid; }
```
### Border Color 
 
 Agora, para o aspecto criativo das bordas CSS! Com o uso do atributo border-color, você poderá criar bordas personalizadas para ajustar-se ao fluxo e ao layout
 do seu site. As cores da borda podem ter qualquer cor definida por termos RGB, hexadecimais ou chave. Abaixo está um exemplo de cada um desses tipos. 
 
 Example: 
```

css

table { border-color: rgb( 100, 100, 255); border-style: dashed; } td { border-color: #FFBD32; border-style: ridge; } p { border-color: blue; border-style: solid; }
```
### Border-Radius 
 A propriedade `border-radius` permite que os cantos da borda sejam redondos. 
 The `border-radius` property allows the corners of a border to be rounded. Isso é feito fornecendo o tamanho que a borda deve ser arredondada. O tamanho pode ser em px ou %. 
```

css raio de fronteira: 25 px;
```
Cada canto do `border-radius` pode ser ajustado. A ordem é topo, baixo, esquerda e direita. 
```

css raio de fronteira: 15% 10px 30% 5px;
```
### Border: All in One 
 
Embora seja bom que o CSS permita que um desenvolvedor Web seja muito específico na criação de uma borda personalizada, às vezes é mais fácil criar uma borda uniforme, tudo em uma única linha de código CSS. 
 
 Examplo: 
```

css

p { border: 20px outset blue; } h4 { border: 5px solid; } h5 { border: dotted; }

\`\` \`

### Mais Informações:

*   [Documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
*   [Raio da Borda CSS3](https://guide.freecodecamp.org/css/css3-borders-rounded-corners)

### Outros atributos de borda

*   'border-radius' - Isso pode definir o raio da borda.
*   'border-espaçamento' - Isso pode definir o espaçamento entre o texto e a borda.
*   'border-image' - Isto define uma imagem como borda.

Suporte ao Navegador: IE6 +
