---
title: Default Parameters
localeTitle: Parâmetros Padrão
---
## Parâmetros Padrão

Se você estiver familiarizado com outras linguagens de programação, como o Ruby, o Python, os parâmetros padrão não são novidade para você.

Parâmetros padrão são parâmetros que são dados por padrão ao declarar uma função. Mas seu valor pode ser alterado ao chamar a função.

Exemplo
```
let Func = (a, b = 10) => { 
 return a + b; 
 } 
 Func(20); // 20 + 10 = 30 
```

No exemplo acima, estamos passando apenas um parâmetro. A função faz uso do parâmetro padrão e executa a função.

Considere outro exemplo:
```
Func(20, 50); // 20 + 50 = 70 
```

No exemplo acima, a função usa dois parâmetros e o segundo parâmetro substitui o parâmetro padrão.

Considere outro exemplo:
```
let NotWorkingFunction = (a = 10, b) => { 
 return a + b; 
 } 
 NotWorkingFunction(20); // NAN. Not gonna work. 
```

Quando você está chamando a função com parâmetros, eles são atribuídos na ordem. (isto é) o primeiro valor é atribuído ao primeiro parâmetro e o segundo valor é atribuído ao segundo parâmetro e assim por diante.

No exemplo acima, o valor 20 é atribuído ao parâmetro 'a' e 'b' não tem nenhum valor. Portanto, não estamos obtendo nenhuma saída.

Mas,
```
NotWorkingFunction(20, 30); // 50; 
```

Funciona bem.