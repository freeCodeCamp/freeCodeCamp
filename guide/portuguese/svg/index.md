---
title: SVG
localeTitle: SVG
---
## SVG

O SVG ou Scalable Vector Graphics é um padrão da Web para definir gráficos baseados em vetores em páginas da Web. Com base no XML, o padrão SVG fornece marcação para descrever caminhos, formas e texto em uma janela de visualização. A marcação pode ser incorporada diretamente no HTML para exibição ou salva em um arquivo `.svg` e inserida como qualquer outra imagem. Você pode escrever SVG à mão, mas gráficos mais complicados podem ser criados em editores gráficos vetoriais, como Illustrator ou InkScape, e exportados para arquivos SVG ou código.

## Noções básicas sobre SVG

Os desenvolvedores iniciam um gráfico SVG com a tag `<svg>` e o namespace XML da seguinte forma:

```svg
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"> 
 
 </svg> 
```

A amostra também inclui um atributo de `version` . O atributo `version` é opcional, mas é recomendado para reclamar especificações XML.

Este exemplo não exibirá nada, apenas estabeleceu uma viewport. Você pode adicionar atributos de `height` e `width` para definir um tamanho de exibição para a janela de visualização. Isso basicamente estabelece uma tela para você trabalhar.

Com uma janela de visualização, você pode adicionar gráficos básicos, texto e elementos de caminho.

```svg
<svg 
     version="1.1" 
     width="100%" 
     viewbox="0 0 600 300" 
     xmlns="http://www.w3.org/2000/svg"> 
  <rect x="10" y="10" width="100" height="100" fill="#f7b2c1" /> 
  <circle cx="240" cy="60" r="50" fill="#c1b2f7" stroke="#b2c1f7" stroke-width="15"/> 
  <text x="450" y="70" font-size="20" text-anchor="middle">SVG Text is browser readable!</text> 
  <g stroke="#b2c1f7"> <!-- g is for group --> 
    <path stroke-width="2" d="M10 170 l590 0" /> 
    <path stroke-width="4" d="M10 190 l590 0" /> 
    <path stroke-width="6" d="M10 210 l590 0" /> 
  </g> 
 </svg> 
```

Você pode ver a saída e brincar com o código [neste código](https://codepen.io/SgiobairOg/pen/OxbNpW) .

Na tag `svg` abertura, adicionamos um atributo de largura para definir a largura da viewport para 100% da largura do contêiner, você pode usar porcentagens ou larguras de pixels. A tag svg de abertura também possui o atributo `viewbox` que define uma janela através da qual os elementos do seu svg são visíveis, neste caso, a viewbox vai de (0,0) a (600,300). No espaço SVG, o eixo X começa com zero à esquerda e aumenta para a direita; o eixo Y começa com zero no topo e aumenta em direção ao fundo.

A primeira nova tag é a tag `<rect />` que define um retângulo na viewport do SVG. Neste caso, definimos um quadrado que é de 10 unidades do topo e da esquerda e 100 unidades de altura e largura. O atributo de `fill` define a cor de preenchimento da forma.

Em seguida, definimos um círculo ou oval com a tag `<circle />` . A amostra define um círculo centrado em (240,60) com um raio de 50 unidades. Os `stroke` e `stroke-width` atributos definir uma cor de traço e uma dimensão para o acidente vascular cerebral.

Você pode adicionar texto ao gráfico com a marca de `text` . O texto de exemplo é ancorado do meio do texto a um ponto em (450, 70) e tem um tamanho de fonte de 20 unidades. O bom do texto no SVG é que ele será dimensionado com o resto do gráfico, mas ainda é legível pelo navegador e pelos robôs da web.

Quando você deseja aplicar os mesmos atributos ou estilos CSS a vários elementos SVG, é possível agrupá-los com a tag `<g>` . Atributos atribuídos à tag `<g>` , como o atributo `stroke` no exemplo, serão aplicados a todos os elementos do grupo. Neste caso, três elementos `<path />` .

O elemento `<path />` define um caminho de vetor na viewport. O caminho é definido pelo atributo `d` . No primeiro exemplo, a definição lê 'move para a coordenada absoluta (10, 170) _e_ desenha uma linha para as coordenadas relativas 590 na direção X e 0 na direção Y.

Os seguintes comandos podem ser usados ​​para criar seu caminho:

M = mudar para L = linha para H = linha horizontal para V = linha vertical para Z = caminho fechado C = (bezier cúbico) curva para S = curva suave para Q = curva de bezier quadrática para T = curva de bezier quadrática lisa para A = arco

### O elemento da tela

Gráficos de tela podem ser desenhados em um

elemento. Você pode dar atributos de largura e altura do elemento suchan para determinar seu tamanho em pixels. Uma nova tela está vazia, o que significa que é totalmente transparente e aparece como espaço vazio no documento. o

A tag destina-se a suportar diferentes estilos de desenho.Para obter acesso a uma interface de desenho real, primeiro precisamos criar um contexto, que é um objeto cujos métodos fornecem a interface de desenho.Há atualmente dois estilos de desenho amplamente suportados: "2d" para gráficos bidimensionais e "webgl" para gráficos tridimensionais através da interface OpenGL.

Um contexto é criado através do método getContext no

elemento.
```
<p > Before canvas . </p > 
 < canvas width ="120" height ="60" > </ canvas > 
 <p > After canvas . </p > 
 < script > 
 var canvas = document . querySelector (" canvas ") ; 
 var context = canvas . getContext ("2 d ") ; 
 context . fillStyle = " red "; 
 context . fillRect (10 , 10 , 100 , 50) ; 
 </ script > 
```

![](http://www.crwflags.com/fotw/images/s/sly@stt.gif)

Depois de criar o objeto de contexto, o exemplo desenha um retângulo vermelho 100 pixels de largura e 50 pixels de altura, com seu canto superior esquerdo nas coordenadas (10,10).

### Desenhando um gráfico de pizza

A variável de resultados contém uma matriz de objetos que representam o respostas da pesquisa.
```
var results = [ 
 { name : " Satisfied " , count : 1043 , color : " lightblue "} , 
 { name : " Neutral " , count : 563 , color : " lightgreen "} , 
 { name : " Unsatisfied " , count : 510 , color : " pink "} , 
 { name : " No comment " , count : 175 , color : " silver "} 
 ]; 
```

Para desenhar um gráfico de pizza, desenhamos várias fatias de pizza, cada uma composta de um arco e um par de linhas para o centro desse arco. Podemos calcular o ângulo assumido por cada arco, dividindo um círculo completo (2 π) pelo número total de respostas e, em seguida, multiplicando esse número (o ângulo por resposta) pelo número de pessoas que escolheram uma determinada opção.
```
< canvas width ="200" height ="200" > </ canvas > 
 < script > 
 var cx = document . querySelector (" canvas ") . getContext ("2 d ") ; 
 var total = results . reduce ( function ( sum , choice ) { 
 return sum + choice . count ; 
 } , 0) ; 
 
 // Start at the top 
 
 var currentAngle = -0.5 * Math . PI ; 
 results . forEach ( function ( result ) { 
 var sliceAngle = ( result . count / total ) * 2 * Math . PI ; 
 cx . beginPath () ; 
 // center =100 ,100 , radius =100 
 // from current angle , clockwise by slice ' s angle 
 cx . arc (100 , 100 , 100 , 
 currentAngle , currentAngle + sliceAngle ); 
 currentAngle += sliceAngle ; 
 cx . lineTo (100 , 100) ; 
 cx . fillStyle = result . color ; 
 cx . fill () ; 
 }) ; 
 </ script > 
```

Isso desenha o seguinte gráfico: ![](https://pbs.twimg.com/media/CTDvkA8UwAAdJg5.png)

### Suporte de Navegador

[O suporte do navegador para SVG](https://caniuse.com/#feat=svg) está disponível em todos os navegadores modernos. Existem alguns problemas com o dimensionamento no IE 9 a 11, no entanto, eles podem ser superados com o uso da `width` , `height` , `viewbox` e CSS.

## Editores

*   [Vectr](https://vectr.com) - ferramenta web e de desktop para criar e editar gráficos SVG, gratuitamente

## Ferramentas para criar SVG

Existem poucas ferramentas disponíveis para criar SVG na forma de programa de desenho.

*   [Inkscape](https://www.inkscape.org/) - É uma ferramenta de código aberto para desenho vetorial de última geração com uma interface gráfica fácil de usar.
*   [Adobe Illustrator](https://www.adobe.com/products/illustrator/) - O Adobe Illustrator é uma ferramenta comercial para imagens vetoriais.

Para mais ferramentas, consulte a [lista de ferramentas do W3C que suporta SVG](https://https://www.w3.org/Graphics/SVG/WG/wiki/Implementations)

## Por que você deve usar SVGs

Como um formato de imagem vetorial, permite redimensionar uma imagem sem perda de qualidade e um peso particularmente leve. Como um formato XML, ele permite que você se beneficie do poder total do JavaScript e especialmente do CSS.

## Recursos

*   [W3C, Scalable Vector Graphics (SVG) 1.1 (segunda edição)](https://www.w3.org/TR/SVG/)
*   [Rede de desenvolvedores Mozilla, SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)