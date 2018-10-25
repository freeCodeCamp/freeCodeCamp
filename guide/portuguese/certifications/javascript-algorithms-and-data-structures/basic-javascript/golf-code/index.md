---
title: Golf Code
localeTitle: Código de Golfe
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

No jogo de golfe, cada buraco tem um **par que** significa o número médio de **golpes que** um golfista deve fazer para afundar a bola em um buraco para completar a jogada. Dependendo de quão longe acima ou abaixo do **par** seus **traços** são, há um apelido diferente.

Sua função receberá argumentos **par** e **strokes** . Você deve retornar a string correta de acordo com essa tabela, que lista os traços em ordem de prioridade; topo (maior) para baixo (menor):

Strokes | Retorna  
: --------- | : -------------  
1 | "Buraco-em-um!"  
<= par - 2 | "Águia"  
par - 1 | "Passarinho"  
par | "Par"  
par + 1 | "Bogey"  
par + 2 | "Bogey Duplo" > par + 3 | "Ir para casa!"

**par** e **traços** serão sempre numéricos e positivos.

*   Altere o código abaixo `// Only change code below this line` e acima `// Only change code above this line` .
*   Certifique-se de que você está editando o interior da função `golfScore` .
*   Você terá que fazer com que a função retorne exatamente a mesma string mostrada na tabela, dependendo do valor dos parâmetros **par** e **traços** que são passados ​​para sua função.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

`+number -number` pode ser usado para aumentar ou diminuir um parâmetro em sua condição.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Você usa `if / else if` cadeias para retornar diferentes valores em diferentes cenários.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Controle o fluxo de sua função com base na ordem de prioridade das tabelas - superior (maior) para inferior (menor) para retornar os valores de string correspondentes.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function golfScore(par, strokes) { 
  // Only change code below this line 
  if (strokes == 1){ 
    return "Hole-in-one!"; 
  } else if (strokes <= par -2){ 
    return "Eagle"; 
  } else if (strokes == par -1) { 
    return "Birdie"; 
  } else if (strokes == par) { 
    return "Par"; 
  } else if (strokes == par +1) { 
    return "Bogey"; 
  } else if (strokes == par +2) { 
    return "Double Bogey"; 
  } else { 
    return "Go Home!"; 
  } 
  // Only change code above this line 
 } 
 // Change these values to test 
 golfScore(5, 4); 
```

### Explicação do código:

*   Compare os parâmetros **par** e **strokes** para retornar os valores de string apropriados.
*   `if / else if` cadeia for usada para controle de fluxo.
*   String "Vá para casa!" é retornado para todas as condições em que os **traços** são maiores ou iguais a **par + 3** .

## Solução alternativa de código:

```javascript
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]; 
 function golfScore(par, strokes) { 
  // Only change code below this line 
  if (strokes == 1){ 
    return names[0]; 
  } 
  else if (strokes <= par-2){ 
    return names[1]; 
  } 
  else if (strokes == par -1){ 
    return names[2]; 
  } 
  else if (strokes == par){ 
    return names[3]; 
  } 
  else if (strokes == par +1){ 
    return names[4]; 
  } 
  else if (strokes == par +2){ 
    return names[5]; 
  } 
  else {return names[6];} 
  // Only change code above this line 
 } 
 
 // Change these values to test 
 golfScore(5, 4); 
```

· Corra no [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Golf-code)

\## Explicação do código Como já temos uma matriz definida nos `names` das variáveis, podemos aproveitá-la e usá-la para nossas instruções de retorno usando índices (por exemplo: `names[0] is the first one` ). Dessa forma, se você precisar alterar um resultado específico, não precisaria procurá-lo dentro da função, seria no início, na sua matriz.

### Recursos

*   [Golfe](https://en.wikipedia.org/wiki/Golf)
*   [Desafio: Encadeamento Se Mais Declarações](http://www.freecodecamp.com/challenges/chaining-if-else-statements)
*   [Desafio: Comparação com o Maior que Igual ao Operador](http://www.freecodecamp.com/challenges/comparison-with-the-greater-than-equal-to-operator)
*   [Desafio: Comparação com o Menos de Igual ao Operador](http://www.freecodecamp.com/challenges/comparison-with-the-less-than-equal-to-operator)
*   ["Array" - _Referência do MDN JavaScript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)