---
title: PHP strings
localeTitle: Strings PHP
---
Eles são sequências de caracteres, como "o PHP suporta operações de string".

OBSERVAÇÃO - As funções de string incorporadas são fornecidas na referência de função Funções de string PHP

A seguir estão exemplos válidos de string

$ string _1 = "Esta é uma string entre aspas duplas"; $ string_ 2 = "Esta é uma string um pouco mais longa e simples"; $ string _39 = "Esta cadeia tem trinta e nove caracteres"; $ string_ 0 = ""; // uma string com zero caracteres As strings citadas individualmente são tratadas quase literalmente, enquanto as strings duplamente citadas substituem variáveis ​​por seus valores, assim como especialmente interpretam certas seqüências de caracteres.
```
<?php 
   $variable = "name"; 
   $literally = 'My $variable will not print!\\n'; 
 
   print($literally); 
   print "<br />"; 
 
   $literally = "My $variable will print!\\n"; 
 
   print($literally); 
 ?> 
```

Isso produzirá o seguinte resultado -
```
My $variable will not print!\n 
 My name will print 
```

Não há limites artificiais no tamanho da string - dentro dos limites da memória disponível, você deve ser capaz de fazer strings arbitrariamente longas.

Strings que são delimitadas por aspas duplas (como em "this") são pré-processadas nas duas maneiras a seguir pelo PHP -

Determinadas seqüências de caracteres começando com barra invertida () são substituídas por caracteres especiais

Nomes de variáveis ​​(começando com $) são substituídos por representações de string de seus valores.

As substituições da sequência de escape são -

\\ n é substituído pelo caractere de nova linha \\ r é substituído pelo caractere de retorno de carro \\ t é substituído pelo caractere de tabulação \\ $ é substituído pelo próprio cifrão ($) \\ "é substituído por um único aspas duplas (") \\ é substituído por uma única barra invertida ()

### Operador de Concatenação de Cordas

Para concatenar duas variáveis ​​de string juntas, use o operador dot (.) -
```
<?php 
   $string1="Hello World"; 
   $string2="1234"; 
 
   echo $string1 . " " . $string2; 
 ?> 
```

Isso produzirá o seguinte resultado -
```
Hello World 1234 
```

Se olharmos para o código acima, você verá que usamos o operador de concatenação duas vezes. Isso é porque nós tivemos que inserir uma terceira string.

Entre as duas variáveis ​​string adicionamos uma string com um único caractere, um espaço vazio, para separar as duas variáveis.

### Usando a função strlen ()

A função strlen () é usada para encontrar o tamanho de uma string.

Vamos encontrar o tamanho da nossa string "Hello world!":
```
<?php 
   echo strlen("Hello world!"); 
 ?> 
```

Isso produzirá o seguinte resultado -
```
12 
```

O comprimento de uma string é freqüentemente usado em loops ou outras funções, quando é importante saber quando a string termina. (ou seja, em um loop, gostaríamos de interromper o loop após o último caractere na string)

### Usando a função strpos ()

A função strpos () é usada para procurar por uma string ou caractere dentro de uma string.

Se uma correspondência for encontrada na string, essa função retornará a posição da primeira correspondência. Se nenhuma correspondência for encontrada, ela retornará FALSE.

Vamos ver se podemos encontrar a string "world" na nossa string -
```
<?php 
   echo strpos("Hello world!","world"); 
 ?> 
```

Isso produzirá o seguinte resultado -
```
 6 
```

Como você vê, a posição da string "world" em nossa string é a posição 6. A razão que é 6, e não 7, é que a primeira posição na string é 0, e não 1.