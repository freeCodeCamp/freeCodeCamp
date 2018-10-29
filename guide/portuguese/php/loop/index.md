---
title: Loop
localeTitle: Loop
---
# Loop PHP

Quando você precisa repetir a mesma tarefa várias vezes, você pode usar o loop em vez de continuar adicionando o mesmo código repetidas vezes. No PHP tem as seguintes instruções de loop:

*   para - percorre um bloco de código com um número específico de vezes.
*   while - percorra um bloco de código se a condição for verdadeira.
*   do… while - faça um loop através de um bloco de código um e continue o loop se a condição for verdadeira.
*   foreach - faça um loop através de um bloco de código para cada valor dentro de um array.

Usar uma `break` dentro do loop pode interromper a execução do loop.

# Para loop

Faça um loop por meio de um bloco de código com um número específico de vezes.

## Sintaxe
```
for (init counter; condition; counter increment or decrement) 
 { 
    // Code to be executed 
 } 
```

## Exemplo

```php
<?php 
 for($index = 0; $index < 5; $index ++) 
 { 
    echo "Current loop counter ".$index.".\n"; 
 } 
 ?> 
```

## Saída
```
> Current loop counter 0. 
 > Current loop counter 1. 
 > Current loop counter 2. 
 > Current loop counter 3. 
 > Current loop counter 4. 
```

# Enquanto loop

Faça um loop por um bloco de código se a condição for verdadeira.

## Sintaxe
```
while (condition) 
 { 
    // Code to be executed 
 } 
```

## Exemplo

```php
<?php 
 $index = 10; 
 while ($index >= 0) 
 { 
    echo "The index is ".$index.".\n"; 
    $index--; 
 } 
 ?> 
```

## Saída
```
> The index is 10. 
 > The index is 9. 
 > The index is 8. 
 > The index is 7. 
 > The index is 6. 
 > The index is 5. 
 > The index is 4. 
 > The index is 3. 
 > The index is 2. 
 > The index is 1. 
 > The index is 0. 
```

# Do… While loop

Faça um loop por meio de um bloco de código um e continue o loop se a condição for verdadeira.

## Sintaxe
```
do 
 { 
    // Code to be executed 
 } 
 while (condition); 
```

## Exemplo

```php
<?php 
 $index = 3; 
 do 
 { 
    // execute this at least 1 time 
    echo "Index: ".$index.".\n"; 
    $index --; 
 } 
 while ($index > 0); 
 ?> 
```

## Saída
```
> Index: 3. 
 > Index: 2. 
 > Index: 1. 
```

# Loop foreach

Faça um loop por meio de um bloco de código para cada valor em uma matriz.

## Sintaxe
```
foreach ($array as $value) 
 { 
    // Code to be executed 
 } 
```

## Exemplo

```php
<?php 
 $array = ["Ali", "Ah Kao", "Muthu", "Gwen", "Lucida", "Cecily", "Arthur", "Flora"]; 
 foreach ($array as $name) 
 { 
    echo "Hi, my name is ".$name.".\n"; 
 
    if ($name == "Cecily") 
    { 
        echo "\"Hello, ".$name."!\""; 
 
        // stop the loop if name is Cecily 
        break; 
    } 
 } 
 ?> 
```

## Saída
```
> Hi, my name is Ali. 
 > Hi, my name is Ah Kao. 
 > Hi, my name is Muthu. 
 > Hi, my name is Gwen. 
 > Hi, my name is Lucida. 
 > Hi, my name is Cecily. 
 > "Hello, Cecily!" 

```