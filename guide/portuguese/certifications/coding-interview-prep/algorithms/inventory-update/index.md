---
title: Inventory Update
localeTitle: Atualização de Inventário
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "triangular_flag_on_post:") Lembre-se de usar **`Read-Search-Ask`** se você ficar preso. Tente emparelhar o programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") e escreva seu próprio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápis:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": checkered_flag:") Explicação do Problema:

Nesse problema, você deve comparar e atualizar o inventário armazenado em uma matriz 2D em relação a uma segunda matriz 2D de uma entrega nova. Atualize as quantidades atuais de itens de estoque existentes (em `arr1` ). Se um item não puder ser encontrado, adicione o novo item e a quantidade à matriz de estoque. A matriz de inventário retornada deve estar em ordem alfabética por item.

O estoque atual e o novo estoque estarão neste formato: `[[2, "item-0"], [3, "item-1"], [67, "item-2"], [7, "item-3"]]` .

#### Links Relevantes

*   [Matriz JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugestão: 1

Você precisa trabalhar com cada item do novo inventário para ver se ele existe no estoque atual ou não. Lembre-se que o nome do produto é armazenado como o segundo elemento de cada sub-array: `array[0][1] = "item-name"` .

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 2

Se o item existir, você precisará adicionar a quantidade do novo estoque. Se o item não existir, você precisará adicionar o item inteiro.

> _tente resolver o problema agora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Dica: 3

Retorne o inventário completo em ordem alfabética.

> _tente resolver o problema agora_

## Alerta de Spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução à frente!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solução básica de código:

```javascript
    function updateInventory(arr1, arr2) { 
 
        // Variable for location of product 
        var index; 
 
        // A helper method to return the index of a specified product (undefined if not found) 
        var getProductIndex = function (name) { 
            for (var i = 0; i < this.length; i++) { 
                if (this[i][1] === name) { 
                    return i; 
                } 
            } 
            return undefined; 
        } 
 
        // For each item of the new Inventory 
        for (var i = 0; i < arr2.length; i++) { 
 
            // Invoke our helper function using arr1 as this 
            index = getProductIndex.call(arr1, arr2[i][1]); 
 
            // If the item doesn't exist 
            if (index === undefined) { 
                // Push the entire item 
                arr1.push(arr2[i]); 
            } else { 
                // Add the new quantity of the current item 
                arr1[index][0] += arr2[i][0]; 
            } 
 
        } 
 
        // Sort alphabetically, by the product name of each item 
        arr1.sort(function (a, b) { 
            if (a[1] > b[1]) { 
                return 1; 
            } 
            if (a[1] < b[1]) { 
                return -1; 
            } 
            return 0; 
        }); 
 
        return arr1; 
    } 
 
    // test here 
    // Example inventory lists 
    var curInv = [ 
        [21, "Bowling Ball"], 
        [2, "Dirty Sock"], 
        [1, "Hair Pin"], 
        [5, "Microphone"] 
    ]; 
 
    var newInv = [ 
        [2, "Hair Pin"], 
        [3, "Half-Eaten Apple"], 
        [67, "Bowling Ball"], 
        [7, "Toothpaste"] 
    ]; 
 
    updateInventory(curInv, newInv); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLok/0)

### Explicação do código:

*   O **índice** variável armazena a localização (índice) de um produto.
*   A função auxiliar `getProductIndex()` retorna o índice de um produto especificado. Ele itera através de cada elemento da matriz que é chamado até encontrar o parâmetro name. Se o produto não for encontrado no inventário, o `undefined` será retornado.
*   Então, cada item no novo inventário (entrega) é trabalhado através de:
*   **index** é definido como o resultado de chamar a função auxiliar, ou seja, pesquisar o novo inventário para esse nome de produto e retornar seu índice.
*   Se o item for encontrado, a quantidade do produto é adicionada à quantidade do mesmo produto no estoque atual.
*   Se o item não for encontrado, todo o produto (nome e quantidade) será adicionado ao estoque atual.
*   O inventário atualizado, **arr1** , é então classificado pelo nome do produto (mantido em `arr1[x][1]` ).
*   A matriz final atualizada e ordenada é então retornada.

#### Links Relevantes

*   [JS esta](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
*   [JS Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JS Array.prototype.push ()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Array.prototype.sort ()](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girassol:") Solução de Código Intermediário:

```javascript
    function updateInventory(arr1, arr2) { 
      // All inventory must be accounted for or you're fired! 
 
      var index; 
      var arrCurInvName = []; // Names of arr1's items 
      var arrNeInvName = []; // Names of arr2's items 
 
      // Same as using two for loops, this takes care of increasing the number of stock quantity. 
      arr1.map(function(item1) { 
        return arr2.map(function(item2) { 
          if (item1[1] === item2[1]) { 
            item1[0] = item1[0] + item2[0]; //Increase number of stock 
          } 
        }); 
      }); 
 
      // Get item's name for new Inventory 
      arr2.map(function(item) { 
        arrNeInvName.push(item[1]); 
      }); 
 
      // Get item's name for Current Inventory 
      arr1.map(function(item) { 
        arrCurInvName.push(item[1]); 
      }); 
 
      // Add new inventory items to current inventory. 
      arrNeInvName.map(function(item) { 
        if (arrCurInvName.indexOf(item) === -1) { 
          index = arrNeInvName.indexOf(item); 
          arr1.push(arr2[index]); 
        } 
      }); 
 
      // Sort the array alphabetically using the second element of the array as base. 
      arr1.sort(function(currItem, nextItem) { 
 
        //Ternary function to avoid using if else 
        return currItem[1] > nextItem[1] ? 1 : -1; 
      }); 
 
      return arr1; 
    } 
 
    // test here 
    // Example inventory lists 
    var curInv = [ 
        [21, "Bowling Ball"], 
        [2, "Dirty Sock"], 
        [1, "Hair Pin"], 
        [5, "Microphone"] 
    ]; 
 
    var newInv = [ 
        [2, "Hair Pin"], 
        [3, "Half-Eaten Apple"], 
        [67, "Bowling Ball"], 
        [7, "Toothpaste"] 
    ]; 
 
    updateInventory(curInv, newInv); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/CLol/0)

### Explicação do código:

*   O **índice** variável armazena a localização (índice) de um produto.
*   **arrCurInvName** tem os nomes dos itens **arr1** .
*   **arrNeInvName** tem os nomes dos **itens** de **arr2** .
*   `arr1.map(function(item1))` cuida dos itens já existentes no estoque, ou seja, aumenta a quantidade no estoque.
*   Em seguida, `arr2.map(function(item))` e `arr1.map(function(item))` obtêm os nomes dos itens para o inventário novo e atual, respectivamente.
*   `arrNeInvName.map(function(item))` manipula itens que ainda não existem no inventário, isto é, adiciona novos itens ao inventário.
*   O array atualizado **arr1** é então classificado em ordem alfabética pelo nome do produto (mantido em `arr1[x][1]` ) e retornado.

#### Links Relevantes

*   [JS Array.prototype.map ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [JS Array.prototype.indexOf ()](http://forum.freecodecamp.com/t/javascript-array-prototype-indexof/14291)
*   [Operador Ternário JS](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") Solução avançada de código:

```javascript
    function updateInventory(arr1, arr2) { 
      // All inventory must be accounted for or you're fired! 
 
      // convert current inventory (arr1) to an one-dimensional array 
      const inventory = Array.prototype.concat.apply([], arr1); 
 
      // loop through new delivery (arr2) 
      for (let i = 0; i < arr2.length; i++) { 
 
        // extract item properties for easy reference 
        const item = arr2[i][1]; 
        const quantity = arr2[i][0]; 
 
        // check if item already exists in inventory 
        const position = inventory.indexOf(item); 
 
        // exsisting item: update quantity 
        if (position !== -1) { 
          const row = Math.floor(position / 2); 
          arr1[row][0] += quantity; 
          continue; 
        } 
 
        // alien item: add to inventory 
        arr1.push([quantity, item]); 
 
      } 
 
      // sort inventory in alphabetical order 
      arr1.sort((previous, next) => (previous[1] > [next[1]]) ? 1 : -1); 
 
      return arr1; 
 
    } 
 
 
    // test here 
    // Example inventory lists 
    var curInv = [ 
        [21, "Bowling Ball"], 
        [2, "Dirty Sock"], 
        [1, "Hair Pin"], 
        [5, "Microphone"] 
    ]; 
 
    var newInv = [ 
        [2, "Hair Pin"], 
        [3, "Half-Eaten Apple"], 
        [67, "Bowling Ball"], 
        [7, "Toothpaste"] 
    ]; 
 
    updateInventory(curInv, newInv); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":foguete:") [Executar código](https://repl.it/MQvv/latest)

### Explicação do código:

*   Converta a matriz de inventário atual **arr1** em uma matriz unidimensional para que o método `indexOf()` possa ser usado para verificar a existência de novos itens de entrega no estoque atual.
*   Verifique se o item já existe no inventário atual usando `indexOf()` .
*   Se o item existir, atualize a quantidade e continue a execução do loop.
*   Outro item de acréscimo ao inventário.
*   Por fim, classifique a matriz em ordem alfabética e retorne o inventário atualizado.

#### Links Relevantes

*   [JS Function.prototype.apply ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
*   [JS continua](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
*   [JS Array.prototype.sort ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":prancheta:") NOTAS PARA CONTRIBUIÇÕES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **NÃO** adicione soluções semelhantes às soluções existentes. Se você acha que é **_semelhante, mas melhor_** , tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - **Básica** , **Intermediária** e **Avançada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer **conteúdo principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":Aviso:") **_NÃO_** _remova nenhum nome de usuário existente_ )

> Vejo ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referência.
