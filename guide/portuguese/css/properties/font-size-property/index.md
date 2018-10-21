---
title: Font Size Property
localeTitle: Propriedade do tamanho da fonte
---
## Propriedade do tamanho da fonte

### Definição e Uso

A propriedade `font-size` é usada para definir o tamanho da fonte de um elemento. Abaixo está a sintaxe padrão para essa propriedade.

```css
font-size:medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit; 
```

Como mostrado acima, essa propriedade pode levar vários valores. O valor padrão é _médio_ e os valores de _xx-small_ a _xx-large_ definem o tamanho da fonte de muito pequeno para muito grande (como tamanhos de roupas). Os valores _menores_ e _maiores_ definem o tamanho da fonte como menor que o tamanho da fonte do elemento pai e maior que o tamanho da fonte do elemento pai, respectivamente. Apesar da disponibilidade dos valores acima mencionados, o tipo mais comum de valor usado é uma unidade de comprimento. Unidades de comprimento podem incluir: **px** , **%** , **em** , **rem** e **pt** .

### Unidades de comprimento explicadas

#### px

Você pode usar a unidade \* _px_ para definir um tamanho de fonte fixo para um elemento em pixels. Um pixel é um ponto na tela do usuário. Como os pixels fornecem um tamanho de fonte fixo, o tamanho da fonte não pode ser responsivo. Isso é negativo porque os tamanhos das fontes podem não aparecer bem em diferentes dimensões da tela e você teria que usar consultas de mídia para fazer a escala da fonte.

**Exemplo:**

```css
p { 
  font-size: 20px; 
 } 
```

**Resultado:** ![Exemplo um](https://image.prntscr.com/image/TI_29z3FRO20dJD2Dc7JJA.png)

#### %

Você pode usar a porcentagem **%** unit para definir o tamanho da fonte em relação ao tamanho da fonte do elemento do corpo. O padrão é 16px, então 100% seria igual a 16px. Se o tamanho da fonte do corpo for alterado, o tamanho da fonte de qualquer elemento contido no corpo que tenha um valor como porcentagem também será alterado. Esta unidade permite que a fonte seja dimensionada em vários tamanhos de tela.

**Exemplo:**

```css
p { 
  font-size: 120%; 
 } 
```

**Resultado:** ![Exemplo dois](https://image.prntscr.com/image/P9HTpWbETeyjZhxzf9z-SA.png) O código acima altera o tamanho da fonte para 120% do tamanho da fonte padrão, que é 16px.

#### em

Outra unidade que pode ser usada para o tamanho da fonte é a unidade **em** . Uma unidade **em** é igual ao tamanho de fonte padrão do elemento pai mais próximo. Isso significa que 2em seria o dobro do tamanho da fonte e 4em seria 4 vezes o tamanho da fonte. A unidade **em** está se tornando mais popular, já que pode escalar e é compatível com dispositivos móveis.

**Exemplo:**

```css
p { 
  font-size: 1.4em; 
 } 
```

**Resultado:** ![Exemplo três](https://image.prntscr.com/image/AeCJ0TCbRHqOTAFJ9CYNUQ.png) O código acima define o tamanho da fonte do parágrafo para 1,4 vezes o tamanho da fonte de seu pai mais próximo, que é o elemento body. O elemento body tem um tamanho de fonte padrão de 16px, portanto, esse parágrafo teria um tamanho de fonte de 1,4 \* 16 = 22,4px.

#### rem

A unidade **rem** é muito semelhante à unidade **em** , mas o tamanho da fonte é relativo ao tamanho da fonte padrão do elemento-raiz. O elemento-raiz é o elemento `<html>` .

**Exemplo:**

```css
html { 
    font-size: 12px; 
 } 
 p { 
    font-size: 1.4rem; 
 } 
```

**Resultado:** ![Exemplo quatro](https://image.prntscr.com/image/V5bn69UmSPOHSVM5YSAcyw.png) O parágrafo acima tem um tamanho de fonte de 1,4em. Desta vez, o tamanho da fonte do elemento raiz foi alterado para 12px, então a fonte do parágrafo agora é 12 \* 1,4 = 16.8px. A unidade **rem** não considera a fonte do elemento body, apesar do fato de ainda ser 16px.

#### pt

A unidade final para tamanhos de fonte é o valor do ponto ( **pt** ). Este valor é relativo aos tamanhos reais do texto. Um **pt** é igual a 1/72 polegadas no papel, então 72pt é igual a 1 polegada. Os valores dos pontos são precisos no papel, mas podem parecer diferentes em diferentes navegadores. Esta unidade só é útil quando você precisa imprimir páginas com um tamanho de fonte preciso. A unidade **pt** não é escalável.

**Exemplo:**

```css
p { 
  font-size: 16pt; 
 } 
```

**Resultado:** ![Exemplo cinco](https://image.prntscr.com/image/IyOOr_WCT963wa0DoWyoOg.png) O tamanho da fonte acima é 16pt.

Anexei alguns links de artigos abaixo se quiser ler mais sobre esse tópico.

#### Mais Informações:

*   https://css-tricks.com/css-font-size/
*   https://www.w3schools.com/cssref/pr _font_ font-size.asp
*   https://css-tricks.com/confused-rem-em/
*   https://kyleschaeffer.com/development/css-font-size-em-vs-px-vs-pt-vs/