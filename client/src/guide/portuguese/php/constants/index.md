---
title: Constants
localeTitle: Constantes
---
## Constantes

Constantes são um tipo de variável no PHP. A função `define()` para definir uma constante leva três argumentos - o nome da chave, o valor da chave e um valor booleano (verdadeiro ou falso) que determina se o nome da chave não diferencia maiúsculas de minúsculas (falso por padrão). O valor de uma constante não pode ser alterado depois de definido. Ele é usado para valores que raramente mudam (por exemplo, uma senha de banco de dados OU uma chave de API).

### Escopo

É importante saber que, ao contrário das variáveis, as constantes SEMPRE têm um escopo global e podem ser acessadas de qualquer função no script.

### Exemplo

```PHP
<?php 
 define("freeCodeCamp", "Learn to code and help nonprofits", false); 
 echo freeCodeCamp; 
```

**Saída:**

```text
Learn to code and help nonprofits 
```

#### Mais Informações:

*   [Manual de constantes php.net](https://secure.php.net/manual/en/language.constants.php)
*   [php.net define () manual](https://secure.php.net/manual/en/function.define.php)