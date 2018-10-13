---
title: Map the Debris
localeTitle: Mapeie os detritos
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

A primeira coisa a fazer é se familiarizar com o programa, sabendo exatamente o período orbital. Você deve retornar uma nova matriz que transforma a altitude média do elemento em seus períodos orbitais. As partes geralmente encontradas com dificuldade estão encontrando a fórmula, implementando-a e, para algumas pessoas, modificando objetos pela chave. No entanto, algo que não é muito claro é o fato de que seu programa deve ser capaz de verificar qualquer número de objetos na matriz; Isto é o que é testado na segunda parte.

#### Links Relevantes

*   [Período orbital](https://en.wikipedia.org/wiki/Orbital_period)
*   [Objetos JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
*   [Math.PI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
*   [JS Math Pow](http://forum.freecodecamp.com/t/javascript-math-pow/14685)
*   [Math.sqrt ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
*   [Math.round ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

A fórmula necessária é:

![](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e212370f07c55165ff69f318ee1eed24779c7532.png)

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Use `Math.round()` para arredondar para o próximo número inteiro conforme solicitado. O uso do `Math.ceil()` permitirá que você passe no primeiro teste, mas falhe no segundo.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Descubra como remover e adicionar chave a um objeto JavaScript.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:
```
function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
  var a = 2 * Math.PI; 
  var newArr = []; 
  var getOrbPeriod = function(obj) { 
    var c = Math.pow(earthRadius + obj.avgAlt, 3); 
    var b = Math.sqrt(c / GM); 
    var orbPeriod = Math.round(a * b); 
    delete obj.avgAlt; 
    obj.orbitalPeriod = orbPeriod; 
    return obj; 
  }; 
 
  for (var elem in arr) { 
    newArr.push(getOrbPeriod(arr[elem])); 
  } 
 
  return newArr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLow/0)

### Explicação do código:

*   **GM** e **earthRadius** são ambos dados para nós.
*   Para tornar o código mais fácil de editar e ler, cada parte da equação é escrita separadamente.
*   Crie **newArr** para armazenar o `orbPeriod` 's.
*   **a** é 2 vezes pi. A parte que é uma constante está no escopo global, enquanto o restante é parte de uma função.
*   Crie uma função, `gerOrbPeriod()` que fará o trabalho necessário para qualquer quantidade de objetos.
*   **c** é ( **earthRadius** + **avgAlt** ) para o cubo.
*   **b** é a raiz quadrada de **c** dividido por **GM** .
*   Criar **orbPeriod** para armazenar o produto de **a** e **b,** com a `Math.round()` função aplicada para arredondar para o número inteiro seguinte.
*   Em seguida, **excluímos** a chave **avgAlt** e adicionamos a nova chave e seu valor.

#### Links Relevantes

*   [JS For In Loop](http://forum.freecodecamp.com/t/javascript-for-in-loop/14665)
*   [Push de protótipo de matriz JS](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:
```
function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
 
  //Looping through each key in arr object 
  for(var prop in arr) { 
    //Rounding off the orbital period value 
    var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)); 
    //deleting the avgAlt property 
    delete arr[prop].avgAlt; 
    //adding orbitalPeriod property 
    arr[prop].orbitalPeriod = orbitalPer; 
  } 
 
  return arr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLoy/0)

### Explicação do código:

*   **GM** e **earthRadius** são ambos dados para nós.
*   Um loop `for..in` é usado para percorrer cada valor em uma determinada matriz **arr** .
*   **orbitalPer** detém o valor do período orbital para cada iteração calculada usando a fórmula.
*   A chave **avgAlt** é excluída e **orbitalPer** encontrada é atribuída em **arr** .

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:
```
function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
 
  // Loop through each item in the array arr 
  arr.forEach(function(item) { 
    // Calculate the Orbital period value 
    var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)); 
    //Delete the avgAlt property 
    delete item.avgAlt; 
    //Add orbitalPeriod property 
    item.orbitalPeriod = tmp; 
  }); 
  return arr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLoz/0)

### Explicação do código:

*   **GM** e **earthRadius** são ambos dados para nós.
*   O método `forEach()` é usado para executar a função uma vez por elemento ( **item** ) em **arr** .
*   **tmp** mantém o valor do período orbital para cada elemento calculado usando a fórmula.
*   A chave **avgAlt** é excluída e o período orbital ( **tmp** ) encontrado é atribuído à chave **orbitalPeriod** .

#### Links Relevantes

*   [Protótipo JS Array ForEach](http://forum.freecodecamp.com/t/javascript-array-prototype-foreach/14290)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.