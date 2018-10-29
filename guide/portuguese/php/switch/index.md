---
title: Switch
localeTitle: Interruptor
---
## Interruptor

No PHP, a instrução `Switch` é muito parecida com a instrução Javascript `Switch` (veja o [Guia de Comutação Javascript](/javascript/switch-statements) para comparar e contrastar). Ele permite testes rápidos de casos com várias condições possíveis, o código também é mais legível.

### Sintaxe

```php
<?php 
    // Switch Statement Example 
    switch ($i) { 
        case "free": 
            echo "i is free"; 
            break; 
        case "code": 
            echo "i is code"; 
            break; 
        case "camp": 
            echo "i is camp"; 
            break; 
        default: 
            echo "i is freecodecamp"; 
    } 
```

### Pausa

O `break;` A instrução sai do comutador e passa a executar o restante do código do aplicativo. Se você não usar o `break;` declaração você pode acabar executando vários casos e declarações, às vezes isso pode ser desejado caso em que você não deve incluir a `break;` declaração.

#### Mais Informações:

*   [php.net docs Switch](https://secure.php.net/manual/en/control-structures.switch.php)