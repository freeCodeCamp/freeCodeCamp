---
title: Height and Width Dimensions
localeTitle: Dimensões de altura e largura
---
## Dimensões de altura e largura

### Definição

Os programadores podem usar as propriedades height e width para alterar a altura e a largura de elementos específicos. Para que suas dimensões sejam alteradas, o valor da propriedade de `display` desses elementos deve ser definido como `block` ou `inline-block` .

### Sintaxe

#### Altura:

*   `height: auto|length|initial|inherit;`
*   `min-height: length|initial|inherit;`
*   `max-height: none|length|initial|inherit;`

#### Largura:

*   `width: auto|value|initial|inherit;`
*   `min-width: length|initial|inherit;`
*   `max-width: none|length|initial|inherit;`

### Uso e Exemplos

Todas as propriedades mencionadas acima só podem ter **um** valor.

#### Altura:

A propriedade `height` define a altura exata de um elemento. O valor `auto` é o padrão e permite que o navegador defina automaticamente a altura. Isso geralmente é determinado pela quantidade de espaço vertical que o conteúdo de um elemento ocupa. O comprimento da altura pode ser definido como fixo em `px` , relativo à altura do elemento pai mais próximo usando a unidade `%` , ou relativo à altura da janela de visualização usando a unidade `vh` . O valor `initial` terá o mesmo efeito que o valor `auto` enquanto o valor `inherit` dará ao elemento a mesma altura que o elemento pai mais próximo.

**Exemplo:**

```html

<p id="red">Example text</p> 
```

```css
p#red { 
    margin: 0; 
  background-color: red; 
  height: 50vh; 
    line-height: 50vh; 
    text-align:center; 
 } 
```

**Resultado:** ![Exemplo um](https://image.prntscr.com/image/dbKSQofTThGZRD7FJLyjJQ.png) O exemplo acima usa a unidade `vh` para definir a altura. Esta unidade é usada para definir a altura de um elemento em relação à altura da janela de visualização. Nesse caso, o parágrafo vermelho recebe uma altura de metade da altura da viewport, de modo que ocupa 50% da tela. _Nota: Todas as margens padrão devem ser removidas do corpo para que o resultado apareça como deveria._

A propriedade `min-height` define a altura mínima que um elemento deve ter. Essa propriedade é útil ao redimensionar verticalmente uma página, pois o programador pode impedir que um elemento diminua demais e não apareça bem. O valor padrão da `min-height` de um elemento é definido como 0. O código CSS abaixo impediria que o parágrafo com um `ID` de **exemplo** fosse reduzido para menos de 400 px de altura.

**Exemplo:**

```css
p#example { 
  min-height: 400px; 
 } 
```

A propriedade `max-height` define a altura máxima que um elemento pode alcançar. Isso pode ser útil quando você não deseja que um elemento seja maior que um tamanho específico. Se o conteúdo do elemento tiver uma altura maior que o valor de `max-height` , o conteúdo será excedido.

**Exemplo:**

```css
p { 
  max-height: 40px; 
  background-color: red; 
 } 
```

**Resultado:** ![Exemplo 3](https://image.prntscr.com/image/eRdqazdUSWO2rdVfcUb5rQ.png)

#### Largura:

As explicações da propriedade de largura CSS são exatamente as mesmas que as propriedades de altura, exceto que alteram a largura de um elemento. Portanto, mostrarei apenas alguns exemplos do uso dessas propriedades abaixo.

**Exemplo:**

```css
p { 
  width: 150px; 
  background-color: red; 
 } 
```

**Resultado:** ![Exemplo 4](https://image.prntscr.com/image/x1_khU6TQsmZQznt7YU9qw.png)

_Nota: O conteúdo não transborda para a direita, apenas ocupa a largura especificada e, em seguida, interrompe a próxima linha._

**Exemplo:**

```css
p { 
  min-width: 50px; 
 } 
```

O código acima simplesmente não permitirá que um elemento de parágrafo encolha horizontalmente para menos de 50 px.

**Exemplo:**

```css
p { 
  max-width: 300px; 
  background-color: red; 
 } 
```

O código acima não permitirá que a largura de um elemento seja maior que 300px.

Espero que este artigo tenha ajudado você a se familiarizar com as dimensões de altura e largura do CSS. Eu incluí alguns links abaixo, se você quiser ler mais sobre essas propriedades.

#### Mais Informações:

*   Dimensões de altura e largura CSS: https://www.w3schools.com/css/css\_dimension.asp
*   Propriedade de altura do CSS: https://www.w3schools.com/cssref/pr _dim_ height.asp
*   Propriedade de largura do CSS: https://css-tricks.com/almanac/properties/w/width/
*   Comprimentos de CSS: https://developer.mozilla.org/pt-BR/docs/Web/CSS/length