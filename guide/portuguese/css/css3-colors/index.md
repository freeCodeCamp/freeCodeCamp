---
title: CSS3 Colors
localeTitle: CSS3 Colors
---
## CSS3 Colors

Cores em CSS são usadas para colorir elementos em nossas páginas da web. Há muitas maneiras de atribuir cores aos elementos. Você pode usar os nomes reais das cores, seus valores RGB ou os valores hexadecimais. Em CSS3, o hsl (matiz-saturação-luminosidade) foi adicionado à especificação.

### Nomes de cores

Atualmente, existem 140 nomes de cores suportados em HTML, que podem ser atribuídos em regras de CSS apenas digitando seu nome. Por exemplo:

### Sintaxe
```
p { 
  color: green; 
 } 
```

Esta regra muda toda a cor da fonte para todos

elementos para verde. Para a lista completa de 140 cores, veja aqui: https://www.w3schools.com/colors/colors\_names.asp

### Valores RGB

RGB significa "Vermelho", "Verde" e "Azul" e também podemos atribuir cores digitando seus valores RGB em nossas regras. Um valor RGB seria assim: rgb (255,0,0), onde cada número define quanto de cada cor estará na mixagem final.

Os valores variam de 0 a 255 e, no nosso exemplo, vemos que apenas o primeiro valor é 255, enquanto os outros dois são definidos como 0. Isso significa que há apenas vermelho em nosso valor e o respectivo elemento será colorido em vermelho. Um valor RGB de (0, 0, 0) daria preto e um valor de (255, 255, 255) daria branco.

É impossível tentar memorizar cada código de cores e, por esse motivo, há inúmeras ferramentas on-line para escolher as cores desejadas para seus projetos. Por exemplo: https://www.w3schools.com/colors/colors\_picker.asp ou http://htmlcolorcodes.com/color-picker/.

```css
p { 
  color: rgb(0, 255, 0); 
 } 
```

Essa regra altera a cor da fonte de todos os elementos p para verde, como acima.

### Valores Hexadecimais

Valores hexadecimais são outra forma de definir cores em CSS e funcionam de forma bastante semelhante aos valores RGB.

Um código hexadecimal aleatório seria o seguinte: `#29432b` , em que os dois primeiros caracteres após o hash representam a quantidade de RED na mistura, os dois segundos representam a quantidade de Green e os dois últimos representam a quantidade de Blue.

Os valores de `#000000` e `#ffffff` significam preto e branco, respectivamente. Você pode encontrar as cores hexadecimais específicas necessárias usando as mesmas ferramentas mencionadas para os valores RGB.

### Sintaxe
```
p { 
  color: #00fe00; 
 } 
```

Essa regra novamente altera a cor da fonte de todos os elementos p para verde.

### HSL

O HSL possui três valores. O primeiro é **Hue,** que é medido em graus. Então 0 (ou 360) representa cor vermelha, em 120 é verde e 240 é azul. O segundo é **Saturação,** que tem um valor percentual com variação de 0 a 100%. O terceiro é a **leveza,** que também tem um valor percentual entre 0 e 100%. 0% é preto escuro, 50% médio, 100% é branco.

### Sintaxe
```
p { 
  color: hsl(0, 100%, 50%); 
 } 
```

### Saída

[JSfiddle](https://jsfiddle.net/qcw2n145/)

### Por que usar valores RGB ou HEX?

Nomes de cores levam apenas 140 valores, enquanto os valores RGB e HEX têm 16.777.216 combinações possíveis. Portanto, se você quiser que seus projetos sejam exatamente como você os imaginou, você deve usar as duas últimas opções e manter os valores de nomes de cores para fins de testes e simulações.

#### Mais Informações:

[w3schools](https://www.w3schools.com/colors/default.asp)

[Documentação do rascunho W3](https://drafts.csswg.org/css-color-3/#color)

[MDN | Cores CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color)