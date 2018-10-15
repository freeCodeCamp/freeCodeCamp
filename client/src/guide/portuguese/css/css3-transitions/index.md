---
title: CSS3 Transitions
localeTitle: Transições CSS3
---
## Transições CSS3

O uso de CSS3 **Transitions** pode ser útil se você quiser que seu aplicativo ou sua página da Web seja mais dinâmico e bonito.

De fato, as transições permitem que você altere os valores de propriedade ( `width` , `color` ,…) de forma **suave** .

A propriedade de `transition` é uma propriedade abreviada para propriedade de `transition-property` , `transition-duration` `transition-timing-function` , `transition-timing-function` `transition-delay` , a sintaxe é a seguinte:

```css
transition: transition-property transition-duration transition-timing-function transition-delay 
```

Por exemplo :
```
transition: width 2s ease-in-out 1s; 
```

### Descrição das propriedades

#### `transition-property`

Especifique o **nome** da propriedade para a qual você deve aplicar uma transição:

*   `background-color`
*   `color`
*   `width`
*   `height`
*   `margin`
*   `border-radius`
*   E assim por diante !

Por exemplo :
```
transition-property: width; /* means the transition applies on the width */ 
```

#### `transition-duration`

Especifique o **número de segundos ou milissegundos que** a transição deve **demorar** :

Por exemplo :
```
transition-duration: 2s /* means the transition effect last 2s */ 
```

#### `transition-timing-function`

Especifique a **curva** de **velocidade** do efeito de transição. Assim, você pode alterar **a velocidade da** sua **transição ao longo de sua duração** .

Aqui estão os valores mais usados:

*   `linear`
*   `ease`
*   `ease-in`
*   `ease-out`
*   `ease-in-out`
*   `cubic-bezier(n, n, n, n)`

Por exemplo :

```css
transition-timing-function: linear 
```

NB: Todos os valores acima são de fato específicos `cubic-bezier` . `linear` , por exemplo, é equivalente a `cubic-bezier(0.25,0.1,0.25,1)`

Você pode experimentar e aprender mais sobre _Cubic Bezier_ [aqui](http://cubic-bezier.com/)

#### `transition-delay`

Especifique em **segundos ou milissegundos** quando a transição será **iniciada** .

Por exemplo :
```
transition-delay: 1s /* means wait 1s before the transition effect start */ 
```

### Como usar transições?

Você pode escrever uma transição de duas maneiras:

#### Usando a propriedade abreviada ( `transition` )

```css
div { 
  width: 200px; 
  transition: all 1s ease-in-out; 
 } 
 
 div:hover { 
  width: 300px; 
 } 
```

#### Dando a todas as propriedades de transição um valor

```css
div { 
  width: 200px; 
  transition-property: width; 
  transition-duration: 1s; 
  transition-timing-function: ease-in-out; 
 } 
```

NB: Ambos os exemplos são **equivalentes**

### Exemplos

Aqui estão algumas canetas simples contendo transições simples:

*   [Transições básicas](https://codepen.io/thomlom/pen/gGqzNp)
*   [Transições + JavaScript](https://codepen.io/thomlom/pen/JrxZKz?editors=1111)

#### Mais Informações:

*   [w3schools: Transições CSS3](https://www.w3schools.com/css/css3_transitions.asp)
*   [Documentos da Web do MDN: usando transições de CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
*   [DevTips: Transição CSS](https://www.youtube.com/watch?v=8kK-cA99SA0)