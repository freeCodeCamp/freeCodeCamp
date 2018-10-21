---
title: String Strip Method
localeTitle: Método de Faixa de Cordas
---
## Método de Faixa de Cordas

Existem três opções para separar caracteres de uma string em Python, `lstrip()` , `rstrip()` e `strip()` .

Cada um retornará uma cópia da string com os caracteres removidos, desde o início, o final ou o início e o fim. Se nenhum argumento for dado, o padrão é retirar os caracteres do espaço em branco.

Exemplo:

```py
>>> string = '   Hello, World!    ' 
 >>> strip_beginning = string.lstrip() 
 >>> strip_beginning 
 'Hello, World!    ' 
 >>> strip_end = string.rstrip() 
 >>> strip_end 
 '   Hello, World!' 
 >>> strip_both = string.strip() 
 >>> strip_both 
 'Hello, World!' 
```

Um argumento opcional pode ser fornecido como uma string contendo todos os caracteres que você deseja remover.

```py
>>> url = 'www.example.com/' 
 >>> url.strip('w./') 
 'example.com' 
```

No entanto, observe que apenas o primeiro `.` foi retirado da string. Isso ocorre porque a função `strip` apenas retira os caracteres de argumento que ficam à esquerda ou à direita. Desde que vem antes do primeiro `.` eles ficam despojados juntos, enquanto 'com' está presente na extremidade direita antes do `.` depois de descascar `/`

#### Mais Informações:

[Documentação de](https://docs.python.org/3/library/stdtypes.html#string-methods) métodos de string.