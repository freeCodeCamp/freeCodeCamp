---
title: Border Property
localeTitle: Propriedade Border
---
## Propriedade Border

## Borda CSS

Nosso atributo CSS favorito, permite que você personalize completamente as bordas que aparecem em torno dos elementos HTML. Com o HTML, costumava ser impossível colocar uma borda em torno de um elemento, exceto a tabela. As bordas de CSS permitem criar estilos de borda nítidos e personalizados com muito pouco trabalho, em comparação com os métodos antiquados de HTML.

A propriedade abreviada de `border` define todas as propriedades da borda em uma declaração.

```css 
  border: 1px solid #000;
```

As propriedades que podem ser definidas, são (em ordem):
 1. `border-style` 
 2. `border-width` 
 3. `border-color` 
 4. `border-radius` 
 
 Não importa se um dos valores acima estiver faltando, por exemplo: 

```css
 border: solid red;
```
O código acima e valido em CSS.

Outros atributos de Borda
`border-radius` - Isso pode definir o raio da borda.
`border-espaçamento` - Isso pode definir o espaçamento entre o texto e a borda.
`border-image` - Isto define uma imagem como borda.
Suporte ao Navegador: IE6 +
 
 ### Estilos de Borda 
 
 A propriedade `border-style` tem um amplo range de diferentes tipos de bordas
 
 Os diferentes valores são: 
 - `dotted` - Define uma borda pontilhada. 
 - `dashed` - Define uma borda traçada. 
 - `solid` - Define uma borda solida. 
 - `double` - Define uma borda dupla. 
 - `groove` - Define uma borda 3D ranhurada. 
 - `ridge` - Define uma borda 3D ridged. 
 - `inset` - Define uma borda 3D inset. 
 - `outset` - Define uma borda 3D outset. 
 - `none` - Define sem borda. 
 - `hidden` - Define uma borda escondida. 
 
 Baseado na propriedade que você escolher, esses estilos podem ser incompatíveis.
 E possível estilizar cada lado separadamente: 

```css
  border-top-style: solid;
  border-left-style: dotted;
  border-right-style: dashed;
  border-bottom-style: double;
```
Ou você pode estilizar todos de uma vez:
```css
  border-style: solid dashed double dotted;
```
Como demonstrado, a propriedade border possibilita que você selecione diferentes sessões dela. [top, bottom, left, right]

### Espessura da Borda 

Para modificar a espessura da borda você pode usar o atributo `border-width`. Você pode usar valores chave ou específicos para definir a espessura da borda. PS: Você deve definir o `border-style` para que a borda seja mostrada. A espessura pode ser definida com um valor especifico (em px, pt, cm, em, etc.) ou usando um dos três valores pré-definidos: thin, medium, ou thick.

Exemplo:

```css
<style type="text/css">
table {
	border-width: 7px;
	border-style: outset;
}
td {
	border-width: medium;
	border-style: outset;
}
p {
	border-width: thick;
	border-style: solid;
}
</style>
```
### Cor da Borda 
 
Agora para a parte criativa da Borda em CSS! Com o use do atributo `border-color`, você pode criar bordas customizadas para encaixar no layout do seu site. As cores da borda podem ser definidas por RGB, hexadecimal, ou valores chave. Abaixo um exemplo de cada um desses tipos.
Exemplo:
```css
<style type="text/css">
table {
	border-color: rgb( 100, 100, 255);
	border-style: dashed;
}

td {
	border-color: #FFBD32;
	border-style: ridge;
}

p {
	border-color: blue;
	border-style: solid;
}
</style>
```
### Borda arredondada 
 A propriedade `border-radius` possibilita que os cantos da borda sejam arredondados. Isso pode ser feito provendo o tamanho para o quanto a borda será arredondada. O tamanho pode ser em px ou %
```css 
  border-radius: 25px;
```
Cada canto `border-radius` pode ser ajusato. A ordem e: cima, baixo, esquerda, direita. 
```css 
  border-radius: 15% 10px 30% 5px;
```
### Border: All in One 
 
 Mesmo que as vezes seja legal que o CSS permite que o desenvolvedor web seja muito especifico ao criar a borda, as vezes e mais fácil e da menos dor de cabeça criar uma borda uniforme, tudo em uma única linha de código CSS
 
 Exemplo: 
```css
<style type="text/css">
p { border: 20px outset blue; } 
h4 { border: 5px solid; } 
h5 { border: dotted; }
</style>
```

### Mais Informações:

*   [Documentação MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
*   [Raio da Borda CSS3](https://guide.freecodecamp.org/css/css3-borders-rounded-corners)

### Outros atributos de borda

*   'border-radius' - Isso pode definir o raio da borda.
*   'border-espaçamento' - Isso pode definir o espaçamento entre o texto e a borda.
*   'border-image' - Isto define uma imagem como borda.

Suporte ao Navegador: IE6 +
