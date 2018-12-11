---
title: Python from X Import Y
localeTitle: Python do X Import Y
---
Se você leu o wiki de `import statements` , você teria me visto usar essa declaração em um dos exemplos. Hoje, vamos tentar entender o que ele faz

Então, pegando o mesmo exemplo:
```
>>> from math import ceil, sqrt 
 >>> # here it would be 
 >>> sqrt(36) 
 <<< 6 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CS5t/1)

Ou podemos usar isso:
```
>>> import math 
 >>> # here it would be 
 >>> math.sqrt(36) 
 <<< 6 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CS5u)

Então nosso código seria parecido com `math.sqrt(x)` invés de `sqrt(x)` . Isso acontece porque quando usamos `import x` , um namespace `x` é criado para evitar conflitos de nome. Você tem que acessar todos os objetos do módulo como `x.<name>` . Mas quando usamos `from x import y` concordamos em adicionar `y` ao namespace global principal. Então, ao usar isso, temos que ter certeza de que não temos um objeto com o mesmo nome em nosso programa.

> **Nunca use `from x import y` se já existir um objeto chamado `y`**

Por exemplo, no módulo `os` há um método `open` . Mas nós até temos uma função `open` chamada `open` . Então, aqui devemos evitar o uso `from os import open` .

Podemos até usar o `form x import *` , isso importaria todos os métodos, classes desse módulo para o namespace global do programa. Esta é uma prática de programação ruim. Por favor, evite isso.

Em geral, você deve evitar `from x import y` simplesmente por causa dos problemas que pode causar em programas de grande escala. Por exemplo, você nunca sabe se um colega programador pode querer fazer uma nova função que seja o nome de uma das funções existentes. Você também não sabe se o Python alterará a biblioteca da qual você está importando as funções. Embora esses problemas não existam com tanta frequência em projetos solo, como foi dito antes, é uma prática ruim de programação e deve ser evitada.