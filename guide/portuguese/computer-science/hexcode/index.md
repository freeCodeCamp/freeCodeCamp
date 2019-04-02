---
title: Hexadecimal Numbers
localeTitle: Números hexadecimais
---
## O sistema numérico hexadecimal

Números hexadecimais, muitas vezes abreviados para "números hexadecimais" ou "hexadecimais", são números representados na base 16 em oposição à base 10 que usamos para a aritmética e contagem diária.

Em termos práticos, isso significa que cada coluna de um número escrito em hexadecimal pode representar até 16 valores.

Os dígitos em hexadecimal usam os símbolos padrão 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9 para representar o valor correspondente, e use as seis primeiras letras do alfabeto para representar os valores de 10 a 15 (EG: A, B, C, D, E, F).

Na programação, prefixamos constantes hexadecimais com `0x` , com algumas exceções.

### Exemplos e explicação
```
0x1        ==        1 
 0xF        ==        15 
 0xFF       ==        255 
 0xFFF      ==        4095 
 0x1000     ==        4096 
```

No sistema padrão de base 10, cada coluna representa potências crescentes de 10, enquanto na base 16 cada coluna representa potências crescentes de 16.

Como visto no exemplo da tabela acima, com um dígito hexadecimal, podemos representar números até e inclusive 15. Adicione outra coluna e podemos representar números até 255, 4095 com outra coluna e assim por diante.

## Usos do Hexadecimal na Programação de Baixo Nível

Hexadecimal primeiro encontrou seu uso na Ciência da Computação como um recurso de conveniência.

Os dados em nossos computadores têm uma unidade de armazenamento comum mais baixa, o Byte. Cada byte contém 8 bits e é capaz de armazenar um número entre 0 e 255, inclusive.

O hexadecimal tem a vantagem de ser conciso e ter limites bem definidos.

Um único byte é sempre representado por dois dígitos hexadecimais de 0x00 para 0xFF, sendo este último o maior valor por byte de 255.

A natureza tersual e alinhada por bytes de números hexadecimais os torna uma escolha popular para engenheiros de software que trabalham em bases de código de baixo nível ou software incorporado.

## Usos de números hexadecimais em JavaScript

JavaScript suporta o uso de notação hexadecimal no lugar de qualquer inteiro, mas não decimais.

Por exemplo, o número 2514 em hexadecimal é 0x9D2, mas não há nenhum modo suportado por idioma de representar 25.14 como um número hexadecimal.

Usar hexadecimal no seu código é uma escolha pessoal e estilística e não tem efeito na lógica subjacente implementada pelo seu código.

## Usos de números hexadecimais em CSS

O CSS usa há muito tempo a notação hexadecimal para representar valores de cores. Considere o seguinte seletor:

```css
.my-container { 
    background-color: #112233; 
    color: #FFFFFF; 
 } 
```

O valor da `background-color` é, na verdade, três bytes hexadecimais.

O processador CSS trata estes como três bytes individuais, representando Vermelho, Verde e Azul.

Em nosso exemplo, 11 corresponde ao componente de cor vermelha, 22 corresponde ao componente de cor verde e 33 ao componente de cor azul.

Atualmente, não há como CSS3 definir uma cor com um componente alfa usando hexadecimal. O rascunho 1 proposto do CSS4 inclui uma proposta para permitir um byte extra para especificar valores alfa.

Por enquanto, o uso da função `rgba()` padrão é a maneira recomendada de adicionar um valor alfa às suas cores.

#### Mais Informações:

*   [Sistema Numeral Hexadecimal na Wikipédia](https://wikipedia.org/wiki/Hexadecimal_numeral_system)
*   [Cor CSS nos documentos da Web MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

#### Referências:

*   1 [Módulo de Cor CSS Nível 4 - 4.2. As notações hexadecimais RGB: #RRGGBB](https://www.w3.org/TR/css-color-4/#hex-notation)

#### Mais Informações:

*   [Como funcionam os códigos de cores HEX? (em 60 segundos)](https://www.youtube.com/watch?v=c56x1aj2CPA) - Good Video, que também explica um pouco sobre Números Hexadecimais.
*   [Códigos hexadecimais e teoria da cor](https://www.youtube.com/watch?v=xlRiLSDdqcY) - Um vídeo mais longo que investiga a teoria das cores (como o que são cores aditivas e quais são as cores subtrativas etc.) e também aponta para outros recursos para se aprofundar no tópico.
*   [Web Colors](https://en.wikipedia.org/wiki/Web_colors) - Wikipedia Artigo sobre como as cores são usadas na web.
*   [Artigo da Wikipedia sobre o código hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal)
*   [Artigo da Wikipedia sobre cores da web](https://en.wikipedia.org/wiki/Web_colors)
*   [Cores hexadecimais](http://www.color-hex.com/)
*   [Artigo médio sobre código de cores hexadecimal](https://medium.com/webkul-dev/hex-color-codes-27cd0a37c3ce)
*   [Mais informações sobre cores em CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
*   [Explore diferentes cores hexadecimais](http://www.colorhexa.com/)