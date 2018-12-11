---
title: Array.prototype.reduce
localeTitle: Array.prototype.reduce
---
## Array.prototype.reduce

O método `reduce()` reduz uma matriz de valores para apenas um valor.

O valor único que é retornado pode ser de qualquer tipo.

### Exemplo 1

Transforme uma matriz de inteiros na soma de todos os inteiros na matriz.

```js
    var numbers = [1,2,3]; 
    var sum = numbers.reduce(function(total, current){ 
        return total + current; 
    }); 
    console.log(sum); 
```

Isto irá gerar `6` para o console.

### Descrição

O método `reduce()` tem sido chamado de canivete suíço, ou multi-ferramenta, de métodos de transformação de array. Outros, como `map()` e `filter()` , fornecem transformações mais específicas, enquanto `reduce()` pode ser usado para transformar arrays em qualquer saída desejada.

### Sintaxe

```js
    arr.reduce(callback[, initialValue]) 
```

*   O argumento de `callback` é uma função que será chamada uma vez para cada item na matriz. Essa função leva quatro argumentos, mas geralmente apenas os dois primeiros são usados.
    *   _acumulador_ - o valor retornado da iteração anterior
    *   _currentValue_ - o item atual na matriz
    *   _índice_ - o índice do item atual
    *   _array_ - o array original no qual reduzir foi chamado
*   O argumento `initialValue` é opcional. Se fornecido, ele será usado como o valor inicial do acumulador na primeira chamada para a função de retorno de chamada (consulte o Exemplo 2 abaixo).

### Exemplo 2

Transforme uma matriz de strings em um único objeto que mostra quantas vezes cada string aparece na matriz. Observe que essa chamada para reduzir passa um objeto vazio `{}` como o parâmetro `initialValue` . Isso será usado como o valor inicial do acumulador (o primeiro argumento) passado para a função de retorno de chamada.

```js
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit']; 
 
 var petCounts = pets.reduce(function(obj, pet){ 
    if (!obj[pet]) { 
        obj[pet] = 1; 
    } else { 
        obj[pet]++; 
    } 
    return obj; 
 }, {}); 
 
 console.log(petCounts); 
```

Saída: `js { dog: 2, chicken: 3, cat: 1, rabbit: 1 }`

## Mais Informações:

*   [Como o método Reduce do JavaScript funciona, quando usá-lo e algumas das coisas legais que ele pode fazer](https://medium.freecodecamp.org/reduce-f47a7da511a9)
*   [Reduzir Avançado](https://www.youtube.com/watch?v=1DMolJ2FrNY)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)