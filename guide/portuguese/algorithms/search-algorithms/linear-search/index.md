---
title: Linear Search
localeTitle: Pesquisa Linear
---
## Pesquisa Linear

Suponha que você receba uma lista ou uma matriz de itens. Você está procurando por um item em particular. Como você faz isso?

Encontre o número 13 na lista dada.

![Pesquisa Linear 1](https://i.imgur.com/ThkzYEV.jpg)

Você apenas olha para a lista e aí está!

![Pesquisa Linear 2](https://i.imgur.com/K7HfCly.jpg)

Agora, como você diz a um computador para encontrá-lo?

Um computador não pode olhar mais do que o valor em um determinado instante de tempo. Então, é preciso um item da matriz e verifica se é o mesmo que você está procurando.

![Pesquisa Linear 3](https://i.imgur.com/ZOSxeZD.jpg)

O primeiro item não coincidiu. Então, mude para o próximo.

![Pesquisa Linear 4](https://i.imgur.com/SwKsPxD.jpg)

E assim por diante…

Isso é feito até que uma correspondência seja encontrada ou até que todos os itens tenham sido verificados.

![Pesquisa Linear 5](https://i.imgur.com/3AaViff.jpg)

Neste algoritmo, você pode parar quando o item é encontrado e, em seguida, não há necessidade de procurar mais.

Então, quanto tempo levaria para fazer a operação de busca linear? Na melhor das hipóteses, você poderia ter sorte e o item que você está olhando talvez na primeira posição na matriz! Mas, na pior das hipóteses, você teria que olhar para cada item antes de encontrar o item no último lugar ou antes de perceber que o item não está na matriz.

A complexidade, portanto, da pesquisa linear é: O (n).

Se o elemento a ser pesquisado preside o primeiro bloco de memória, a complexidade seria: O (1).

O código para uma função de pesquisa linear em JavaScript é mostrado abaixo. Esta função retorna a posição do item que estamos procurando no array. Se o item não estiver presente na matriz, a função retornará null.

### Exemplo em Javascript

```javascript
function linearSearch(arr, item) { 
  // Go through all the elements of arr to look for item. 
  for (var i = 0; i < arr.length; i++) { 
    if (arr[i] === item) { // Found it! 
      return i; 
    } 
  } 
 
  // Item not found in the array. 
  return null; 
 } 
```

### Exemplo em Ruby

```ruby
def linear_search(target, array) 
  counter = 0 
 
  while counter < array.length 
    if array[counter] == target 
      return counter 
    else 
      counter += 1 
    end 
  end 
  return nil 
 end 
```

### Exemplo em C ++

```cpp
int linear_search(int arr[],int n,int num) 
 { 
    for(int i=0;i<n;i++){ 
        if(arr[i]==num) 
            return i; 
   } 
   // Item not found in the array 
   return -1; 
 } 
```

### Exemplo em Python

```python
def linear_search(array, num): 
    for i in range(len(array)): 
        if (array[i]==num): 
            return i 
    return -1 
```

## Pesquisa Linear Global

E se você estiver pesquisando as várias ocorrências de um elemento? Por exemplo, você quer ver quantos 5 estão em uma matriz.

Alvo = 5

Matriz = \[1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 5\]

Este array tem 3 ocorrências de 5s e queremos retornar os índices (onde estão no array) de todos eles. Isso é chamado de pesquisa linear global e você precisará ajustar seu código para retornar uma matriz dos pontos de índice nos quais ele encontra o elemento de destino. Quando você encontrar um elemento de índice que corresponda ao seu destino, o ponto de índice (contador) será adicionado na matriz de resultados. Se não corresponder, o código continuará a avançar para o próximo elemento da matriz, adicionando 1 ao contador.

```ruby
def global_linear_search(target, array) 
  counter = 0 
  results = [] 
 
  while counter < array.length 
    if array[counter] == target 
      results << counter 
      counter += 1 
    else 
      counter += 1 
    end 
  end 
 
  if results.empty? 
    return nil 
  else 
    return results 
  end 
 end 
```

## Por que a pesquisa linear não é eficiente

Não há dúvida de que a busca linear é simples, mas porque compara cada elemento um a um, consome tempo e, portanto, não é muito eficiente. Se tivermos que encontrar um número, digamos, o número e número de 1000000 estiver no último local, a técnica de busca linear se tornará bastante entediante. Então, aprenda também sobre bubble sort, quick sort etc.

#### Vídeo relevante:

#### Outros recursos

[Pesquisa Linear - CS50](https://www.youtube.com/watch?v=vZWfKBdSgXI)