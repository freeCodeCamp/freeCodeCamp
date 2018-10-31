---
title: PHP Variables
localeTitle: Variáveis ​​PHP
---
## Variáveis

Variáveis ​​são "contêineres" para armazenar informações. As variáveis ​​são declaradas usando o sinal de dólar ($) seguido imediatamente pelo nome da variável. Por exemplo, o bloco de código abaixo criaria uma variável chamada `myVariable` e designaria a string `Hello World` a ela.

```php
<?php 
 $myVariable = "Hello World"; 
 $x = 5; 
 $y = 10.5; 
 $z = '42'; 
 ?> 
```

Após a execução das instruções acima, a variável `$myVariable` conterá uma string com um valor de Hello world !, a variável `$x` conterá um inteiro com um valor de 5, e a variável `$y` conterá um float com um valor de 10.5, e a variável `$z` irá conter uma string com um valor de 42.

# Nomeando Variáveis

Como em qualquer linguagem de programação, o PHP possui certas regras que se aplicam a variáveis ​​de nomenclatura. Nomes de variáveis ​​válidos seguirão as seguintes regras

*   Uma variável deve começar com o sinal $, seguido pelo nome da variável
*   Um nome de variável deve começar com uma letra ou o caractere de sublinhado
*   Um nome de variável não pode começar com um número
*   Um nome de variável só pode conter caracteres alfanuméricos e sublinhados (Az, 0-9 e \_)
*   Os nomes das variáveis ​​diferenciam maiúsculas e minúsculas ($ age e $ AGE são duas variáveis ​​diferentes)

# Variáveis ​​Predefinidas

O PHP tem várias palavras-chave especiais que, embora sejam nomes de variáveis ​​"válidas", não podem ser usadas para suas variáveis. A razão para isso é que a própria linguagem já definiu essas variáveis ​​e elas são usadas para propósitos especiais. Vários exemplos estão listados abaixo, para uma lista completa, consulte o [site de documentação](https://secure.php.net/manual/en/language.variables.predefined.php) do [PHP](https://secure.php.net/manual/en/language.variables.predefined.php) .

*   `$this`
*   `$_GET`
*   `$_POST`
*   `$_SERVER`
*   `$_FILES`

# Atribuindo Valores a Variáveis

Para atribuir um valor a uma variável, basta digitar a variável seguida pelo operador de igual (=) seguido pelo valor. Por exemplo

`PHP $myVariable = "Hello World"; $number1 = 5; $number2 = 10; $total = $number1 + $number2;`

Você pode ter notado várias coisas importantes sobre o exemplo acima. A primeira variável eu declarei igual a **Hello World** , cercado por aspas. Isso ocorre porque o **Hello World** é uma string de texto e as strings devem estar entre aspas. A segunda linha eu declarei `$number1` para ser igual ao valor de 5. Eu poderia ter declarado `$number1` para ser igual a `"5"` , o que diria PHP eu quero que o 5 seja armazenado como uma string, nao um valor real. A diferença é que você não pode realizar cálculos (como eu fiz na quarta linha) em strings. A quarta linha eu declaro `$total` para ser igual aos valores de `$number1` mais `$number2` . Isso é chamado de declarar um valor por referência.

# PHP é uma linguagem fracamente tipada

No exemplo acima, observe que não precisávamos informar ao PHP qual tipo de dados a variável é. O PHP converte automaticamente a variável para o tipo de dados correto, dependendo do seu valor. Em outras linguagens como C, C ++ e Java, o programador deve declarar o nome e o tipo da variável antes de usá-la.

# Conclusão

O PHP facilita o trabalho com variáveis ​​e você deve pensar em variáveis ​​como contêineres para armazenar informações. Para mais informações, confira estes recursos:

*   [Documentação Variável do PHP](http://php.net/manual/en/language.variables.php)
*   [Variáveis ​​do PHP W3Schools](https://www.w3schools.com/php/php_variables.asp)
*   [Tipos de dados PHP](https://guide.freecodecamp.org/php/data-types)