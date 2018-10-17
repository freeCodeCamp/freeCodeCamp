---
title: Random Method
localeTitle: Método aleatório
---
## Método aleatório

O método JavaScript `Math.random()` é um excelente método integrado para produzir números aleatórios. Quando `Math.random()` é executado, ele retorna um número aleatório que pode estar em qualquer lugar entre 0 e 1. O 0 é incluído e 1 é excluído.

### Gerando um número de ponto flutuante aleatório entre 0 e 1

O método `Math.random()` retornará um número de ponto flutuante (decimal) maior ou igual a 0 e menor que (mas nunca igual a) 1. Em outras palavras, `0 <= x < 1` . Por exemplo:

```JavaScript
console.log(Math.random()); 
 // 0.7069207248635578 
 
 console.log(Math.random()); 
 // 0.765046694794209 
 
 console.log(Math.random()); 
 // 0.14069121642698246 
```

(É claro que os números retornados serão diferentes a cada vez. Isso será assumido para todos os exemplos a seguir - resultados diferentes acontecerão em cada passagem.)

Para obter um número aleatório entre um intervalo maior, multiplique o resultado de `Math.random()` por um número.

### Gerando um número de ponto flutuante aleatório entre 0 e um máximo especificado

Normalmente você não precisa de números aleatórios entre 0 e 1 - você precisa de números maiores ou até inteiros.

Por exemplo, se você quiser um número de ponto flutuante aleatório entre 0 e 10, você pode usar:

```JavaScript
var x = Math.random()*10; 
 
 console.log(x); 
 // 4.133793901445541 
```

### Gerando um número de ponto flutuante aleatório dentro de um intervalo

Se você precisa de um número de ponto flutuante aleatório que varia entre dois números específicos, você poderia fazer algo parecido com isto:

```JavaScript
var min = 83.1; 
 var max = 193.36; 
 
 var x = Math.random()*(max - min)+min; 
 
 console.log(x); 
 // 126.94014012699063 
```

### Gerando um inteiro aleatório entre 0 e um máximo

Muitas vezes você precisa de números inteiros. Para fazer isso, você terá que usar alguns outros métodos do objeto `Math` , `Math.floor()` (arredondado para baixo até o inteiro mais próximo) e `Math.ceil()` (arredonda para o inteiro mais próximo).

Por exemplo, se você precisar selecionar aleatoriamente de uma matriz de 10 elementos, precisará de um número aleatório entre 0 e 9 inclusive (lembre-se de que as matrizes são indexadas como zero).

```JavaScript
var x = Math.floor(Math.random()*10); 
 
 console.log(x); 
 // 7 
```

(Lembre-se que `Math.random()` nunca retornará exatamente 1, então `Math.random()*10` nunca retornará exatamente 10. Isso significa que após o arredondamento, o resultado será sempre 9 ou menos.)

### Gerando um inteiro aleatório entre 1 e um máximo

Se você precisar de um número aleatório com o número mínimo de 1 (por exemplo, escolhendo um dia aleatório em janeiro), você pode usar o método `Math.ceil()` .

```JavaScript
var x = Math.ceil(Math.random()*31); 
 
 console.log(x); 
 // 23 
```

Outra maneira seria usar a função anterior (usando `Math.floor()` ) e adicionar 1 a ela:

```JavaScript
var x = Math.floor(Math.random()*31)+1; 
 
 console.log(x); 
 // 17 
```

### Gerando um inteiro aleatório dentro de um intervalo

Por fim, ocasionalmente, você precisa de um inteiro aleatório entre dois inteiros específicos. Por exemplo, se você estiver tentando comprar bilhetes de rifa e souber os números do menor e do maior número:

```JavaScript
var min = 1718; 
 var max = 3429; 
 
 var x = Math.floor(Math.random()*(max-min+1)+min); 
 
 console.log(x); 
 //2509 
```

### Quão aleatório é Math.random ()?

Pode-se notar que o número retornado por `Math.random()` é um número pseudo-aleatório, pois nenhum computador pode gerar um número verdadeiramente aleatório, que exiba aleatoriedade em todas as escalas e em todos os tamanhos de conjuntos de dados. No entanto, o número pseudo-aleatório gerado por `Math.random()` é geralmente suficiente para as necessidades de praticamente qualquer programa que você possa escrever. A não-verdadeiramente-aleatoriedade só se torna aparente em conjuntos de números astronomicamente grandes ou quando decimais incomumente precisos são necessários.

### Mais Informações:

*   Documentação: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)