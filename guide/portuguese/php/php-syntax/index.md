---
title: PHP Syntax
localeTitle: Sintaxe PHP
---
# Sintaxe Básica do PHP

### Começar

Todos os arquivos PHP são salvos pela extensão `.php`. Scripts PHP podem ser adicionados em qualquer lugar no documento. Um script PHP começa com `<?php` e termina com `?>` .

`<?php //O código PHP fica aqui ?>`

### Impressão

Para imprimir qualquer instrução em PHP, usamos o comando `echo` ou `print`.

#### Amostra de código
```
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <h1>Minha primeira página PHP</h1> 
 
 <?php 
 echo "Olá Mundo!"; 
 ?> 
 
 </body> 
 </html> 
```

##### NOTA: As instruções do PHP terminam com ponto e vírgula `;`

### Declarando Variáveis

Nós declaramos variáveis em PHP adicionando o símbolo dolar `$` antes.
```
<?php 
 $x = 5; 
 echo $x; 
 ?> 
```

### Comentários em PHP

Para escrever um comentário de linha única no PHP, colocamos o caractere hashtag `#` ou colocamos `//` antes do comentário.
```
<?php 
 # Este é um comentário de uma linha
 // Este também é um comentário de uma linha 
 ?> 
```

Para escrever um comentário de várias linhas, começamos o comentário com `/*` e terminamos com `*/` .
```
<?php 
 /* Este é um comentário
 de várias linhas. */ 
 ?> 
```

Também podemos comentar algumas partes da linha de código.

#### Amostra de código
```
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // Você também pode usar comentários para ignorar partes de uma linha de código 
 $x = 5 /* + 15 */ + 5; 
 echo $x; 
 ?> 
 
 </body> 
 </html> 
```

Você pode ver mais sobre isso no [Manual do PHP](http://php.net/manual/pt_BR/)
