---
title: Set Default Parameters for Your Functions
localeTitle: Definir parâmetros padrão para suas funções
---
## Definir parâmetros padrão para suas funções

: _bandeira_ triangular no _post: Lembre-se de usar Read-Search-Ask se você ficar preso. Tente parear programa:_ bust in\_silhouette: e escreva seu próprio código: pencil:

### : checkered\_flag: Explicação do problema:

```javascript
const increment = (function() { 
  "use strict"; 
  return function increment(number, value) { 
    return number + value; 
  }; 
 })(); 
 console.log(increment(5, 2)); // returns 7 
 console.log(increment(5)); // returns NaN 
```

Modificaremos a função de incremento para que o parâmetro **numérico** seja incrementado em 1 por padrão, definindo o **valor** como 1 se um valor para o **valor** não for passado para a função de incremento.

### : speech\_balloon: Dica: 1

Vamos identificar onde o **valor** do parâmetro está na função JS

tente resolver o problema agora

### : speech\_balloon: Dica: 2

Definir **valor** igual a algo para que seja esse valor por padrão

tente resolver o problema agora

### Alerta de Spoiler!

![Spoiler](http://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

Solução à frente!

## : beginner: Basic Code Solution:

```javascript
const increment = (function() { 
  "use strict"; 
  return function increment(number, value = 1) { 
    return number + value; 
  }; 
 })(); 
 console.log(increment(5, 2)); // returns 7 
 console.log(increment(5)); // returns NaN 
```

: rocket: [Run Code](https://repl.it/@RyanPisuena/PleasingFumblingThings)

## Explicação do código

*   Esta seção é bem direta. Passe esta seção definindo o parâmetro **valor** igual a 1. Quando a função se deparar com casos de teste em que o **valor** não foi transmitido, o **valor** será atribuído a um por padrão.

Links Relevantes:

[Parâmetros padrão de JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

# : clipboard: NOTAS PARA CONTRIBUIÇÕES:

*   : aviso: NÃO adicione soluções semelhantes às soluções existentes. Se você acha que é semelhante, mas melhor, tente mesclar (ou substituir) a solução semelhante existente.
*   Adicione uma explicação da sua solução.
*   Categorize a solução em uma das seguintes categorias - Básica, Intermediária e Avançada. :semáforo:
*   Por favor, adicione seu nome de usuário somente se você adicionou qualquer conteúdo principal relevante. (: aviso: NÃO remova nenhum nome de usuário existente)

Veja: point\_right: [Modelo de Solução de Desafio do Wiki](https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-template-guide/14272) para referência.