---
title: PHP Syntax
localeTitle: Sintaxe PHP
---
# Sintaxe Básica do PHP

### Começar

Todos os arquivos PHP são salvos pela extensão `.php` . Scripts PHP podem ser adicionados em qualquer lugar no documento. Um script PHP começa com `<?php` e termina com `?>` .

`<?php //PHP code goes here ?>`

### Impressão

Para imprimir qualquer instrução em PHP, usamos o comando `echo` .

#### Amostra de código
```
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <h1>My first PHP page</h1> 
 
 <?php 
 echo "Hello World!"; 
 ?> 
 
 </body> 
 </html> 
```

##### NOTA: As instruções do PHP terminam com ponto `;` vírgula `;`

### Declarando Variáveis

Nós declaramos variáveis ​​em PHP adicionando `$` dollar sign antes deles.
```
<?php 
 $x = 5; 
 echo $x; 
 ?> 
```

### Comentários em PHP

Para escrever um comentário de linha única no PHP, colocamos a hashtag `#` ou colocamos `//` antes do comentário.
```
<?php 
 # This is a single line comment 
 // This is also a single line comment 
 ?> 
```

Para escrever um comentário de linha dupla, começamos o comentário com `/*` e terminamos com `*/` .
```
<?php 
 /* This is a 
 Double line comment. */ 
 ?> 
```

Também podemos comentar algumas partes da linha de código.

#### Amostra de código
```
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // You can also use comments to leave out parts of a code line 
 $x = 5 /* + 15 */ + 5; 
 echo $x; 
 ?> 
 
 </body> 
 </html> 
```

Você pode ver mais sobre isso no [PHP Manual](http://php.net/manual/en/)