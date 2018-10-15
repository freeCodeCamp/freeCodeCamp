---
title: Algoritmo De Argumentos Opcionales
localeTitle: Algoritmo de Argumentos Opcionais
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/f/ff2fd8ffa014eea28587a8ef4933340d3dcc4b09.jpg)

### Explicação:

Pode ser um pouco complicado entender o que deve ser feito. Quando nós programamos, existem maneiras diferentes de fazer alguma coisa. Independentemente do algoritmo usado, precisamos criar uma função que faça o seguinte:

*   Você tem que adicionar dois números recebidos como parâmetros e retornar o resultado.
*   Você tem que verificar se ambos os números são realmente números, caso contrário, retorne **indefinido** e pare a função no momento.
*   Você precisa verificar se os argumentos recebidos são um ou dois. Se houver mais, eles devem ser ignorados.
*   Se apenas um argumento for recebido, uma função que aceita outro argumento deve ser retornada e, em seguida, a adição deve ser feita.

## Dica: 1

Toda vez que você trabalha um argumento, você deve verificar se é realmente um número ou não. Para evitar a repetição do código, você deve criar uma função que lide com essa tarefa.

## Dica: 2

Quando for necessário retornar a função, é aconselhável verificar se o primeiro e único argumento é um novo número e basear o código nele.

## Dica: 3

No caso de apenas um argumento ser recebido, não se preocupe em como solicitar o segundo, simplesmente faça a definição da função corretamente e tudo funcionará como deveria.

## Alerta de spoiler!

![sinal de aviso](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solução abaixo!**

## Solução de código:
```
function addTogether() { 
  // Función para comprobar si un número es realmente un número 
  // y retornar undefined en caso contrario. 
  var checkNum = function(num) { 
    if (typeof num !== 'number') { 
      return undefined; 
    } else 
      return num; 
  }; 
 
  // Comprobar si tenemos dos parámetros y si ambos son números 
  // En caso que no lo sean retornamos undefined 
  // retornamos la suma 
  if (arguments.length > 1) { 
    var a = checkNum(arguments[0]); 
    var b = checkNum(arguments[1]); 
    if (a === undefined || b === undefined) { 
      return undefined; 
    } else { 
      return a + b; 
    } 
  } else { 
    // Si solo es encontrado un parámetro retornamos una nueva función para solicitar un segundo parámetro 
    // Guardamos el primer argumento antes de entrar al scope de la nueva función 
    var c = arguments[0]; 
 
    // Comprobamos que sea número de nuevo, debe ser fuera del objeto que retornaremos 
    // en lugar de undefined. 
    if (checkNum(c)) { 
      // // Retornamos la función que espera el segundo parámetro. 
      return function(arg2) { 
        // Comprobamos que no sean números. 
        if (c === undefined || checkNum(arg2) === undefined) { 
          return undefined; 
        } else { 
          // Si lo son, sumamos. 
          return c + arg2; 
        } 
      }; 
    } 
  } 
 } 
 
 // realizamos el test 
 addTogether(2,3); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "foguete:") [Na REPL!](https://repl.it/CLnz/0)

### Explicação do código:

*   Primeiro, criamos uma função com o único propósito de verificar se um número é realmente um número e retornamos indefinidos, se não for. Use **typeof** para verificar.
*   Verificamos se temos dois parâmetros, se tivermos, verificamos se são números ou não usando a função **checkNum** .
*   Se os parâmetros não forem **indefinidos,** nós os adicionamos e retornamos a soma. Se um deles é indefinido, retornamos indefinidos.
*   No caso de termos apenas um argumento, retornamos uma nova função que espera dois parâmetros. Para isso, armazenamos o segundo parâmetro antes de inserir a função para evitar sobrescrever o argumento.
*   Mesmo dentro do primeiro _,_ precisamos verificar se o argumento salvo é um número, se for, retornaremos a função esperando pelo segundo argumento.
*   Agora dentro da função que vamos retornar, temos que verificar se o novo parâmetro é um número usando **checkNum** , se ele estiver indefinido, retornaremos isso e, caso contrário, adicionaremos os números e retornamos o resultado.

## Segunda solução:
```
function addTogether() { 
  var args = new Array(arguments.length); 
  // Almacenamos los argumentos en un array. 
  for(var i = 0; i < args.length; ++i) { 
    args[i] = arguments[i]; 
  } 
  // Comprobamos la cantidad de argumentos. 
  if(args.length == 2){ 
    // Si hay dos argumentos, comprobamos el tipo de ambos 
    // Utiliza typeof para comprobar el tipo de argumentos. (ambos deben ser números) 
    if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){ 
      return undefined; 
    } 
    return args[0]+args[1]; 
  } 
  // Cuando solo un argumento es provisto. 
  if(args.length == 1){ 
    a = args[0]; 
    // Comprobamos el tipo utilizando typeof. 
    if(typeof a!=='number'){ 
      return undefined; 
    } 
    else{ 
      // Hacemos uso de las funciones internas. 
      return function(b){ 
      // Comprobamos el segundo parámetro. 
      if(typeof b !=='number'){ 
        return undefined; 
      } 
      else 
        return a+b; 
      }; 
    } 
  } 
 } 
 
 // realizamos el test 
 addTogether(2,3); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "foguete:") [Na REPL!](https://repl.it/CLoA/0)

## Terceira solução:
```
//jshint esversion: 6 
 function addTogether() { 
  var args = Array.from(arguments); 
  return args.some(n => typeof n !== 'number') ? 
    undefined: 
    args.length > 1 ? 
      args.reduce((acc, n) => acc += n, 0): 
      (n) => typeof n === "number" ? 
        n + args[0]: 
        undefined; 
 } 
 
 // realizamos el test 
 addTogether(2,3); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "foguete:") [Na REPL!](https://repl.it/CLoB/0)

### Explicação do código:

*   Primeiro nós iteramos os argumentos e verificamos que são números e, se não forem, retornamos indefinidos.
*   Então nós verificamos se a quantidade de argumentos é maior que 1, se é que adicionamos os argumentos usando `Array.prototype.reduce`
*   Caso contrário, retornamos uma função que verifica se o parâmetro recebido é um número e o adiciona, se não retornarmos indefinidos.

> **NOTA:** Por favor, adicione seu nome de usuário somente se você adicionou **conteúdo relevante** ao artigo. (Por favor, não remova nenhum nome existente.)