---
title: Cash Register
localeTitle: Caixa registradora
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

*   Você precisa criar um programa que retornará um objeto contendo uma chave de `status` e uma chave de `change` . O valor do `status` é a cadeia `INSUFFICIENT_FUNDS` , `CLOSED` ou `OPEN` , e o valor da `change` é uma matriz 2D da alteração devida.

#### Links Relevantes

*   Matrizes de estrutura de dados

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

*   É mais fácil quando você sabe quanto dinheiro está em seu cadastro antecipadamente. Para isso, recomenda-se ter uma função para atribuir essas informações a uma variável. Então você pode ver se tem dinheiro suficiente para concluir a transação e retornar a mudança ou se deve fechar o registro.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

*   Esse problema é mais fácil quando você sabe o valor de cada conta ou moeda com a qual está trabalhando, em vez de apenas a soma de cada uma no registro. Por exemplo, é útil saber que um níquel vale 0,05, juntamente com o fato de você ter US $ 2,05 em níquel na caixa registradora.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

*   Você terá que obter tanta mudança de um tipo de conta ou moeda antes de passar para o próximo, de maior para menor valor. Continue até calcular todas as alterações devidas.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução de código iniciante:
```
// Create an array of objects which hold the denominations and their values 
 var denom = [ 
  { name: 'ONE HUNDRED', val: 100.00}, 
  { name: 'TWENTY', val: 20.00}, 
  { name: 'TEN', val: 10.00}, 
  { name: 'FIVE', val: 5.00}, 
  { name: 'ONE', val: 1.00}, 
  { name: 'QUARTER', val: 0.25}, 
  { name: 'DIME', val: 0.10}, 
  { name: 'NICKEL', val: 0.05}, 
  { name: 'PENNY', val: 0.01} 
 ]; 
 
 function checkCashRegister(price, cash, cid) { 
  var output = { status: null, change: [] }; 
  var change = cash - price; 
 
  // Transform CID array into drawer object 
  var register = cid.reduce(function(acc, curr) { 
    acc.total += curr[1]; 
    acc[curr[0]] = curr[1]; 
    return acc; 
  }, { total: 0 }); 
 
  // Handle exact change 
  if (register.total === change) { 
    output.status = 'CLOSED'; 
    output.change = cid; 
    return output; 
  } 
 
  // Handle obvious insufficient funds 
  if (register.total < change) { 
    output.status = 'INSUFFICIENT_FUNDS'; 
    return output; 
  } 
 
  // Loop through the denomination array 
  var change_arr = denom.reduce(function(acc, curr) { 
    var value = 0; 
    // While there is still money of this type in the drawer 
    // And while the denomination is larger than the change remaining 
    while (register[curr.name] > 0 && change >= curr.val) { 
      change -= curr.val; 
      register[curr.name] -= curr.val; 
      value += curr.val; 
 
      // Round change to the nearest hundreth deals with precision errors 
      change = Math.round(change * 100) / 100; 
    } 
    // Add this denomination to the output only if any was used. 
    if (value > 0) { 
        acc.push([ curr.name, value ]); 
    } 
    return acc; // Return the current change_arr 
  }, []); // Initial value of empty array for reduce 
 
  // If there are no elements in change_arr or we have leftover change, return 
  // the string "Insufficient Funds" 
  if (change_arr.length < 1 || change > 0) { 
    output.status = 'INSUFFICIENT_FUNDS'; 
    return output; 
  } 
 
  // Here is your change, ma'am. 
  output.status = 'OPEN'; 
  output.change = change_arr; 
  return output; 
 } 
 
 // test here 
 checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/@scissorsneedfoo/cash-register-example)

### Explicação do código:

Primeiro, crie uma matriz de objetos com o valor de cada denominação de conta ou moeda, juntamente com um objeto de saída com o status e as chaves de alteração. Em seguida, transforme a matriz CID em um objeto de gaveta. Em seguida, lide com as condições de mudança exata e fundos insuficientes. Faça o loop através da matriz `denom` e atualize a alteração e os valores enquanto ainda houver dinheiro de cada tipo na gaveta e enquanto a denominação for maior que a alteração restante. Adicione esta denominação ao acumulador de `change_arr` se algum desse tipo foi usado. Após o loop, `change_arr` é uma matriz 2D da mudança devida, classificada da mais alta para a mais baixa denominação. Se não houver elementos em `change_arr` ou você ainda deve alterar, retorne o objeto de saída com um status `INSUFFICIENT_FUNDS` . Finalmente, você pode dar a alteração correta. Retorna o objeto de saída com um status de `OPEN` e `change_arr` como o valor da mudança.

#### Links Relevantes

*   [JS Array Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [JS Reduzir Made Easy](http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687)
*   [Loops JS](http://forum.freecodecamp.com/t/javascript-loops/14681)
*   [JS Array Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.