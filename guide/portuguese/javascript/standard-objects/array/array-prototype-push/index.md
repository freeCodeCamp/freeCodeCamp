---
title: Array.prototype.push
localeTitle: Array.prototype.push
---
O método `push()` é usado para adicionar um ou mais novos elementos ao final de um array. Também retorna o novo comprimento da matriz.

### Sintaxe

```javascript
arr.push([element1[, ...[, elementN]]]) 
```

### Parâmetros

*   **elementN** Os elementos para adicionar ao final da matriz.

### Valor de retorno

O novo comprimento da matriz na qual o método foi chamado.

## Descrição

O método `push()` irá _empurrar_ elementos para o final de um array. Pode levar zero ou mais argumentos. Se nenhum argumento for fornecido, ele simplesmente retornará o comprimento atual da matriz. Se fornecido um ou mais argumentos, ele adicionará esses argumentos ao array na ordem em que estão escritas.

Esse método também retorna o novo comprimento da matriz após o (s) elemento (s) ser (ão) empurrado (s) para ela.

## Exemplo:

```javascript
var myStarkFamily = ['John', 'Robb', 'Sansa', 'Bran']; 
```

Suponha que você tenha uma matriz dos filhos da Casa Stark de Game of Thrones. No entanto, um dos membros, **Arya** , está faltando. Sabendo o código acima, você poderia adicioná-lo atribuindo `'Arya'` ao array no índice após o último índice assim:

```javascript
myStarkFamily[4] = 'Arya'; 
```

O problema com essa solução é que ela não pode lidar com casos gerais. Se você não sabia de antemão qual é o comprimento do array, você não pode adicionar novos elementos dessa maneira. Isso é o que `push()` é para. Nós não precisamos saber quanto tempo o array é. Nós apenas adicionamos nosso elemento até o final da matriz.

```javascript
myStarkFamily.push('Arya'); 
 console.log(myStarkFamily);  // ['John', 'Robb', 'Sansa', 'Bran', 'Arya'] 
 
 var newLength = myStarkFamily.push('Rickon');  // oops! forgot Rickon 
 console.log(newLength);  // 6 
 console.log(myStarkFamily);  // ['John', 'Robb', 'Sansa', 'Bran', 'Arya', 'Rickon'] 
```

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)