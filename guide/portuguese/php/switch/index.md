---
title: Switch
localeTitle: Interruptor
---
## Interruptor (Switch)

No PHP, a instrução `Switch` é muito parecida com a instrução `Switch` do Javascript (veja o [Guia de Comutação Javascript](/javascript/switch-statements) para comparar e contrastar). Ela permite testes rápidos de casos com várias condições possíveis, o código também é mais legível.

### Sintaxe

```php
<?php 
    // Exemplo de instrução Interruptor (switch)
    switch ($i) { 
        case "free": 
            echo "i é free"; 
            break; 
        case "code": 
            echo "i é code"; 
            break; 
        case "camp": 
            echo "i é camp"; 
            break; 
        default: 
            echo "i é freecodecamp"; 
    } 
```

### Pausa (Break)

A instrução `break;` sai do Interruptor (switch) e passa a executar o restante do código do aplicativo. Se você não usar a instrução `break;` você pode acabar executando vários casos e declarações. As vezes isso pode ser um caso desejado em que você não deve incluir a instrução `break;`.

#### Mais Informações:

*   [php.net docs Switch](https://secure.php.net/manual/en/control-structures.switch.php)
