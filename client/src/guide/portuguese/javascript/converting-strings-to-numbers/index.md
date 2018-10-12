---
title: Converting Strings to Numbers
localeTitle: Convertendo Strings em Números
---
## Convertendo Strings em Números

A função `parseInt()` analisa um argumento de string e retorna um inteiro da base especificada (a base em sistemas numéricos matemáticos).

```js
    parseInt(string, radix); 
```

### Parâmetros
```
string 
```

O valor a analisar. Se o argumento `string` não for uma string, ele será convertido em uma string (usando a operação abstrata `ToString` ). O espaço em branco inicial no argumento da cadeia é ignorado. radix Um inteiro entre 2 e 36 que representa a raiz (a base em sistemas numéricos matemáticos) da cadeia acima mencionada. Especifique `10` para o sistema de numeração decimal comumente usado por humanos. Sempre especifique esse parâmetro para eliminar a confusão do leitor e garantir um comportamento previsível. Diferentes implementações produzem resultados diferentes quando uma base não é especificada, geralmente padronizando o valor para 10. Valor de retorno Um número inteiro analisado a partir da string dada. Se o primeiro caractere não puder ser convertido em um número, `NaN` será retornado.

### Descrição

A função `parseInt` converte seu primeiro argumento em uma string, analisa e retorna um inteiro ou `NaN` . Se não for `NaN` , o valor retornado será o inteiro que é o primeiro argumento tomado como um número na base especificada (base). Por exemplo, uma raiz de 10 indica a conversão de um número decimal, 8 octal, 16 hexadecimal e assim por diante. Para radices acima de `10` , as letras do alfabeto indicam numerais maiores que 9. Por exemplo, para números hexadecimais (base 16), `A` a `F` é usado.

Se `parseInt` encontrar um caractere que não seja um numeral na base especificada, ele o ignorará e todos os caracteres subsequentes e retornará o valor inteiro analisado até esse ponto. `parseInt` trunca números para valores inteiros. Espaços à esquerda e à esquerda são permitidos.

Como alguns números incluem o caractere `e` em sua representação de string (por exemplo, `6.022e23` ), usar `parseInt` para truncar valores numéricos produzirá resultados inesperados quando usado em números muito grandes ou muito pequenos. `parseInt` não deve ser usado como um substituto para `Math.floor()` .

Se radix é `undefined` ou 0 (ou ausente), o JavaScript assume o seguinte:

*   Se a `string` entrada começar com "0x" ou "0X", o radical é 16 (hexadecimal) e o restante da cadeia é analisado.
*   Se a `string` entrada começar com "0", a base é oito (octal) ou 10 (decimal). Exatamente qual radix é escolhido depende da implementação. O ECMAScript 5 especifica que 10 (decimal) é usado, mas nem todos os navegadores suportam isso ainda. Por esse motivo, sempre especifique um radical ao usar parseInt.
*   Se a `string` entrada começar com qualquer outro valor, a raiz é 10 (decimal).
*   Se o primeiro caractere não puder ser convertido em um número, parseInt retornará NaN.

Para fins aritméticos, o valor NaN não é um número em nenhuma raiz. Você pode chamar a função isNaN para determinar se o resultado de parseInt é NaN. Se NaN é passado para operações aritméticas, os resultados da operação também serão NaN.

Para converter o número em seu literal de string em uma determinada raiz, use intValue.toString (radix).

### Exemplos

Usando `parseInt` Todos os exemplos a seguir retornam `15` :

```js
    parseInt(' 0xF', 16); 
    parseInt(' F', 16); 
    parseInt('17', 8); 
    parseInt(021, 8); 
    parseInt('015', 10);   // parseInt(015, 10); will return 15 
    parseInt(15.99, 10); 
    parseInt('15,123', 10); 
    parseInt('FXX123', 16); 
    parseInt('1111', 2); 
    parseInt('15 * 3', 10); 
    parseInt('15e2', 10); 
    parseInt('15px', 10); 
    parseInt('12', 13); 
```

Todos os exemplos a seguir retornam `NaN` :

```js
    parseInt('Hello', 8); // Not a number at all 
    parseInt('546', 2);   // Digits are not valid for binary representations 
```

Todos os exemplos a seguir retornam `-15` :

```js
    parseInt('-F', 16); 
    parseInt('-0F', 16); 
    parseInt('-0XF', 16); 
    parseInt(-15.1, 10) 
    parseInt(' -17', 8); 
    parseInt(' -15', 10); 
    parseInt('-1111', 2); 
    parseInt('-15e1', 10); 
    parseInt('-12', 13); 
```

Todos os exemplos a seguir retornam `4` :

```js
    parseInt(4.7, 10); 
    parseInt(4.7 * 1e22, 10); // Very large number becomes 4 
    parseInt(0.00000000000434, 10); // Very small number becomes 4 
```

O exemplo a seguir retorna `224` :

```js
    parseInt('0e0', 16); 
```

#### Mais Informações:

[parseInt on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

*   [parseInt ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) e [parseFloat ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) tentam converter a string em um número, se possível. Por exemplo, `var x = parseInt("100"); // x = 100`
*   [Number ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) irá converter para um número pelo qual o valor pode ser representado. Isso inclui datas no número de milissegundos desde meia-noite de 1 de janeiro de 1970, UTC, valores booleanos para 1 ou 0 e valores que não podem ser convertidos em um número reconhecível se tornarão NaN. Isso significa não um número e também é tecnicamente um número!