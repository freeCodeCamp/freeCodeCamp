---
title: PHP 5 echo and print Statements
localeTitle: Declarações de eco (echo) e imprimir (print) do PHP 5
---
No PHP, existem duas maneiras básicas de obter saída: `echo` e `print`.

Neste tutorial, usamos `echo` (eco) e `print` (imprimir) em quase todos os exemplos. Portanto, este capítulo contém um pouco mais de informação sobre essas duas declarações de saída.

### Instruções `echo` e `print` do PHP

`echo` e `print` são mais ou menos os mesmos. Ambos são usados para enviar dados para a tela.

As diferenças são pequenas: o `echo` não tem valor de retorno enquanto o `print` tem um valor de retorno de 1, portanto, ela pode ser usada em expressões. O `echo` pode ter vários parâmetros (embora esse uso seja raro) enquanto o `print` pode receber um argumento. O `echo` é ligeiramente mais rápido que o `print`.

### A declaração PHP `echo`

A instrução `echo` (eco) pode ser usada com ou sem parênteses: `echo` ou `echo()`.

#### Exibir texto

O exemplo a seguir mostra como enviar o texto com o comando `echo` (observe que o texto pode conter marcação HTML):

#### Exemplo

```php
<?php 
 echo "<h2>PHP é Legal!</h2>"; 
 echo "Olá Mundo!<br>"; 
 echo "Estou aprendendo PHP!<br>"; 
 echo "Esta ", "string ", "foi ", "feita ", "usando múltiplos parâmetros."; 
 ?> 
```

#### Exibir variáveis

O exemplo a seguir mostra como gerar texto e variáveis com a instrução `echo`:

#### Exemplo

```php
<?php 
 $txt1 = "Aprenda PHP"; 
 $txt2 = "W3Schools.com"; 
 $x = 5; 
 $y = 4; 
 
 echo "<h2>" . $txt1 . "</h2>"; 
 echo "Estude PHP em " . $txt2 . "<br>"; 
 echo $x + $y; 
 ?> 
```

### A declaração PHP `print`

A declaração de `print` (imprimir) pode ser feita com ou sem parênteses: `print` ou `print()`.

#### Exibir texto

O exemplo a seguir mostra como gerar texto com o comando `print` (observe que o texto pode conter marcação HTML):

#### Exemplo

```php
<?php 
 print "<h2>PHP é Legal!</h2>"; 
 print "Olá Mundo!<br>"; 
 print "Estou aprendendo PHP!"; 
 ?> 
```

#### Exibir variáveis

O exemplo a seguir mostra como gerar texto e variáveis com a instrução `print`:

#### Exemplo

```php
<?php 
 $txt1 = "Aprenda PHP"; 
 $txt2 = "W3Schools.com"; 
 $x = 5; 
 $y = 4; 
 
 print "<h2>" . $txt1 . "</h2>"; 
 print "Estude PHP em " . $txt2 . "<br>"; 
 print $x + $y; 
 ?> 
```
