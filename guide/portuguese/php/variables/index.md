---
title: Variables
localeTitle: Variáveis
---
## Variáveis

# Criando (declarando) variáveis ​​PHP

Variáveis ​​são "contêineres" para armazenar informações.

**Sintaxe:**

```php
<?php 
 $txt = "Hello world!"; 
 $x = 5; 
 $y = 10.5; 
 ?> 
```

Após a execução das declarações acima, a variável $ txt manterá o valor Hello world !, a variável $ x manterá o valor 5 e a variável $ y manterá o valor 10.5.

##### Nota: Quando você atribui um valor de texto a uma variável, coloque aspas ao redor do valor.

##### Nota: Ao contrário de outras linguagens de programação, o PHP não possui comando para declarar uma variável. É criado no momento em que você atribui um valor a ele pela primeira vez.

# Regras para variáveis ​​PHP:

*   Uma variável começa com o sinal $, seguido pelo nome da variável
*   Um nome de variável deve começar com uma letra ou o caractere de sublinhado
*   Um nome de variável não pode começar com um número
*   Um nome de variável só pode conter caracteres alfanuméricos e sublinhados (Az, 0-9 e \_)
*   Os nomes das variáveis ​​diferenciam maiúsculas e minúsculas ($ age e $ AGE são duas variáveis ​​diferentes)

# Variáveis ​​de Saída

A instrução echo do PHP é freqüentemente usada para enviar dados para a tela.

O exemplo a seguir mostrará como enviar texto e uma variável:

```php
<?php 
 $txt = "github.com"; 
 echo "I love $txt!"; 
 ?> 
```

O exemplo a seguir produzirá a mesma saída do exemplo acima:

```php
<?php 
 $txt = "github.com"; 
 echo "I love " . $txt . "!"; 
 ?> 
```

O exemplo a seguir produzirá a soma de duas variáveis:

```php
<?php 
 $x = 5; 
 $y = 4; 
 echo $x + $y; 
 ?> 
```

# PHP é uma linguagem fracamente tipada

No exemplo acima, observe que não precisávamos informar ao PHP qual tipo de dados a variável é. O PHP converte automaticamente a variável para o tipo de dados correto, dependendo do seu valor. Em outras linguagens como C, C ++ e Java, o programador deve declarar o nome e o tipo da variável antes de usá-la.

#### Mais Informações: