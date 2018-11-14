---
title: String.prototype.substr
localeTitle: String.prototype.substr
---
## String.prototype.substr

O método substr () extrai partes de uma cadeia, iniciando no caractere na posição especificada e retorna o número especificado de caracteres.

#### Sintaxe

```JavaScript
  string.substr(start, length); 
```

#### Valores de Parâmetros

| Parâmetro | Descrição | | : ------------- | : ------------- | | começar | **Requeridos.** A posição onde começar a extração. O primeiro caractere está no índice 0. Se _start_ for positivo e maior que, ou igual, ao comprimento da string, substr () retornará uma string vazia. Se _start_ for negativo, substr () o usará como um índice de caractere no final da string. Se _start_ for negativo ou maior que o comprimento da string, start é definido como 0 | | comprimento | **Opcional** O número de caracteres para extrair. Se omitido, extrai o resto da string |

#### Exemplos:

```JavaScript
let str = "Hello world!"; 
 let res = str.substr(1, 4); 
```

O resultado da res será:
```
ello 
```

#### Mais Informações:

[JavaScript String Método substr ()](https://www.w3schools.com/jsref/jsref_substr.asp) .