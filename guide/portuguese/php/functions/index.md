---
title: Functions
localeTitle: Funções
---
## Introdução às Funções PHP

Uma função é um bloco de instruções que podem ser usadas repetidamente em um programa.

### Função Simples + Chamada

```php
function say_hello() { 
  return "Hello!"; 
 } 
 
 echo say_hello(); 
```

### Função Simples + Parâmetro + Chamada

```php
function say_hello($friend) { 
  return "Hello " . $friend . "!"; 
 } 
 
 echo say_hello('Tommy'); 
```

### strtoupper - Torna todos os Chars MAIORES E MAIORES!

```php
function makeItBIG($a_lot_of_names) { 
  foreach($a_lot_of_names as $the_simpsons) { 
    $BIG[] = strtoupper($the_simpsons); 
  } 
  return $BIG; 
 } 
 
 $a_lot_of_names = ['Homer', 'Marge', 'Bart', 'Maggy', 'Lisa']; 
 var_dump(makeItBIG($a_lot_of_names)); 
```

#### Mais Informações:

*   [manual de funções definidas pelo usuário do php.net](https://secure.php.net/manual/en/functions.user-defined.php)