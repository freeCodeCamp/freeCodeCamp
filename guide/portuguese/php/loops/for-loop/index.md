---
title: For Loop
localeTitle: Para loop
---
## Para loop

O PHP `for` instrução consiste em três expressões e uma instrução:

`for ((initialization); (condition); (final-expression)) statement`

### Descrição

*   inicialização
    *   Corra antes da primeira execução no loop.
    *   Esta expressão é comumente usada para criar contadores.
    *   As variáveis ​​criadas aqui estão no escopo do loop. Uma vez que o loop tenha terminado, a execução é destruída.
*   condição
    *   Expressão que é verificada antes da execução de cada iteração.
    *   Se omitido, esta expressão será avaliada como `true` .
*   expressão final
    *   Expressão executada após cada iteração.
    *   Geralmente usado para incrementar um contador.
    *   Mas pode ser usado para executar qualquer expressão.
*   declaração
    *   Código a ser repetido em cada iteração de loop.

Qualquer uma dessas três expressões ou a declaração pode ser omitida.

As expressões podem conter várias expressões separadas por vírgula.

Na expressão (condição), todas as expressões separadas por vírgulas serão avaliadas.

O resultado é obtido a partir do último.

For loops são comumente usados ​​para contar um certo número de iterações para repetir uma instrução.

### Armadilhas Comuns

#### Ultrapassando os limites de um array

Ao indexar em um array muitas vezes é fácil exceder os limites do array (ex. Tentar referenciar o 4º elemento de um array de 3 elementos).

```php
// This will cause an error. 
 // The bounds of the array will be exceeded. 
 $arr = array(1,2,3); 
 
 for ($i = 0; $i <= count($arr); $i++) { 
    var_dump($arr[$i]); 
 } 
```

Isto irá produzir:

```shell
int(1) int(2) int(3) NULL 
```

Existem maneiras de corrigir esse código.

Defina a condição como `$i < count($arr)` ou `$i <= count($arr) - 1` .

#### Problemas de desempenho

O código acima pode ficar lento, porque o tamanho da matriz é buscado em cada iteração.

Para corrigir esse problema, é possível colocar o tamanho da matriz em uma variável.

```php
//create the $size variable with a second expression comma separated 
 for ($i = 0, $size = count($arr); $i < $size; ++$i) { 
```

### Mais Informações

*   [PHP.net - Estruturas de Controle](https://secure.php.net/manual/en/control-structures.for.php)