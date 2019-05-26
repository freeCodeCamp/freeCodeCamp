---
title: CSS3 Gradients
localeTitle: Gradientes CSS3
---
## Gradientes CSS3

Os gradientes CSS3 permitem exibir transições suaves entre duas ou mais cores especificadas.

Antes, você tinha que usar imagens para esses efeitos. No entanto, usando gradientes CSS3, você pode reduzir o tempo de download e o uso de largura de banda. Além disso, os elementos com gradientes parecem melhores quando ampliados, porque o gradiente é gerado pelo navegador.

CSS3 define dois tipos de gradientes:

*   Gradientes Lineares (desce / sobe / esquerda / direita / diagonalmente)
*   Gradientes radiais (definidos pelo centro)

### Gradientes Lineares CSS3

Para criar um gradiente linear, você deve definir pelo menos duas paradas de cor. As paradas de cores são as cores que você deseja renderizar transições suaves entre. Você também pode definir um ponto de partida e uma direção (ou um ângulo) junto com o efeito de gradiente.

#### Sintaxe
```
background: linear-gradient(direction, color-stop1, color-stop2, ...); 
```

##### Gradiente linear - de cima para baixo (este é o padrão)

O exemplo a seguir mostra um gradiente linear que começa no topo. Começa vermelho, fazendo a transição para amarelo: ![gradiente linear padrão](https://cdn-media-1.freecodecamp.org/imgr/2uGfleD.jpg)

#### Exemplo
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(red, green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(red, green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Top to Bottom</h3> 
 <p>This linear gradient starts at the top. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
```

![gradiente linear padrão](https://cdn-media-1.freecodecamp.org/imgr/CvtXCMd.jpg)

##### Gradiente Linear - da esquerda para a direita

O exemplo a seguir mostra um gradiente linear que começa a partir da esquerda. Começa vermelho, fazendo a transição para amarelo: ![esquerda para a direita](https://cdn-media-1.freecodecamp.org/imgr/e4dRvZR.jpg)

#### Exemplo
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(left, red , green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(right, red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(right, red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(to right, red , green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Left to Right</h3> 
 <p>This linear gradient starts at the left. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
```

![esquerda para a direita](https://cdn-media-1.freecodecamp.org/imgr/k4FSyXz.jpg)

#### Gradiente Linear - Diagonal

Você pode fazer um gradiente na diagonal, especificando as posições iniciais horizontal e vertical.

O exemplo a seguir mostra um gradiente linear que começa no canto superior esquerdo (e vai para o canto inferior direito). Começa vermelho, fazendo a transição para amarelo:

![diagonal](https://cdn-media-1.freecodecamp.org/imgr/YvtbUBH.jpg)

#### Exemplo
```
<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(left top, red, green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(bottom right, red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(bottom right, red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(to bottom right, red, green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Diagonal</h3> 
 <p>This linear gradient starts at top left. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
```

![diagonal-exp](https://cdn-media-1.freecodecamp.org/imgr/8gKRhAp.jpg)

#### Mais Informações:

[Documentação do MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) || [w3schools](https://www.w3schools.com/css/css3_gradients.asp)