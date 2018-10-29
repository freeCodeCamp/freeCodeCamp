---
title: PHP 5 echo and print Statements
localeTitle: Declarações de eco e impressão do PHP 5
---
No PHP, existem duas maneiras básicas de obter saída: echo e print.

Neste tutorial, usamos echo (e print) em quase todos os exemplos. Portanto, este capítulo contém um pouco mais de informação sobre essas duas declarações de saída.

### Instruções de echo e impressão do PHP

eco e impressão são mais ou menos os mesmos. Ambos são usados ​​para enviar dados para a tela.

As diferenças são pequenas: o eco não tem valor de retorno enquanto a impressão tem um valor de retorno de 1, portanto, ele pode ser usado em expressões. O echo pode ter vários parâmetros (embora esse uso seja raro) enquanto a impressão pode receber um argumento. O eco é ligeiramente mais rápido que o impresso.

### A declaração PHP echo

A instrução echo pode ser usada com ou sem parênteses: echo ou echo ().

#### Exibir texto

O exemplo a seguir mostra como enviar o texto com o comando echo (observe que o texto pode conter marcação HTML):

#### Exemplo

```php
<?php 
 echo "<h2>PHP is Fun!</h2>"; 
 echo "Hello world!<br>"; 
 echo "I'm about to learn PHP!<br>"; 
 echo "This ", "string ", "was ", "made ", "with multiple parameters."; 
 ?> 
```

#### Exibir variáveis

O exemplo a seguir mostra como gerar texto e variáveis ​​com a instrução echo:

#### Exemplo

```php
<?php 
 $txt1 = "Learn PHP"; 
 $txt2 = "W3Schools.com"; 
 $x = 5; 
 $y = 4; 
 
 echo "<h2>" . $txt1 . "</h2>"; 
 echo "Study PHP at " . $txt2 . "<br>"; 
 echo $x + $y; 
 ?> 
```

### A declaração de impressão do PHP

A declaração de impressão pode ser usada com ou sem parênteses: imprimir ou imprimir ().

#### Exibir texto

O exemplo a seguir mostra como gerar texto com o comando print (observe que o texto pode conter marcação HTML):

#### Exemplo

```php
<?php 
 print "<h2>PHP is Fun!</h2>"; 
 print "Hello world!<br>"; 
 print "I'm about to learn PHP!"; 
 ?> 
```

#### Exibir variáveis

O exemplo a seguir mostra como gerar texto e variáveis ​​com a instrução print:

#### Exemplo

```php
<?php 
 $txt1 = "Learn PHP"; 
 $txt2 = "W3Schools.com"; 
 $x = 5; 
 $y = 4; 
 
 print "<h2>" . $txt1 . "</h2>"; 
 print "Study PHP at " . $txt2 . "<br>"; 
 print $x + $y; 
 ?> 

```