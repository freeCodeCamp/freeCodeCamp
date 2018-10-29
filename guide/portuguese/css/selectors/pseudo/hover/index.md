---
title: Hover
localeTitle: Flutuar
---
## Flutuar

O `selector:hover` pseudo-class é acionado quando você interage com o elemento (seletor) com um dispositivo apontador geralmente um ponteiro do mouse. Os estilos do elemento passados ​​serão sobrepostos pelo estilo definido em `selector:hover` pseudo-class. Para estilizar links / elementos adequadamente, as regras devem ser definidas na ordem: - : link -: visited -: hover -: ativo

**Sintaxe:**

```css
 selector:hover { 
    css declarations; 
 } 
```

## Mais exemplos

Abaixo estão alguns exemplos mais complexos do que você pode fazer com a pseudo-classe `:hover` . Tenha em mente que o `.second` div **deve** vir após o `.first` div em todos esses exemplos.

1.  Quando você passa o mouse sobre um elemento, altera um irmão adjacente.

```html

<style> 
  .first:hover + .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first">First</div> 
 <div class="second">Second</div> 
```

O código acima irá alterar a cor de `.second` plano de `.second` para azul quando você passa o mouse sobre `.first` .

2.  Quando você passa o mouse sobre um elemento, muda um irmão geral.

```html

<style> 
  .first:hover ~ .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first">First</div> 
 <div class="middle">Middle</div> 
 <div class="second">Second</div> 
```

Este exemplo dá um pouco mais de flexibilidade, pois os dois elementos não precisam mais estar diretamente adjacentes.

3.  Quando você passa o mouse sobre um elemento, altera um descendente direto.

```html

<style> 
  .first:hover > .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first"> 
  First 
  <div class="second">Second</div> 
 </div> 
```

O código acima irá alterar a cor de `.second` plano de `.second` para azul quando você passa o mouse sobre `.first` .

4.  Quando você passa o mouse sobre um elemento, altera um descendente geral.

```html

<style> 
  .first:hover .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first"> 
  First 
  <div class="container"> 
    Container 
    <div class="second">Second</div> 
  </div> 
 </div> 
```

Como no exemplo 2, isso também dá mais flexibilidade, pois os dois elementos não precisam mais ficar diretamente adjacentes. Você notará que a área flutuante é maior nos exemplos 3 e 4. Isso acontece porque você ainda está pairando sobre `.first` desde que o cursor esteja sobre um de seus filhos.

#### Mais Informações:

[Documento Web do MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahover) [w3schools](https://www.w3schools.com/cssref/sel_hover.asp)