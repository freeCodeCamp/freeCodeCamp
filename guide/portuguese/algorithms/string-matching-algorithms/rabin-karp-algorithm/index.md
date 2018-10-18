---
title: Rabin Karp Algorithm
localeTitle: Algoritmo de Rabin Karp
---
## Algoritmo de Rabin-Karp

*   Um algoritmo de correspondência / busca de strings desenvolvido por Michael O. Rabin e Richard M. Karp.
*   Usa técnicas de **_hashing_** e **_força bruta_** para comparação.

#### Termos importantes

*   **_pattern_** é a string a ser pesquisada. Considere o comprimento do padrão como **_M_** caracteres.
*   **_text_** é todo o texto do qual o padrão deve ser pesquisado. Considere o tamanho do texto como **_N_** caracteres.

#### O que é comparação de força bruta?

Na comparação de força bruta, cada caractere de padrão é comparado com cada caractere de texto, até que caracteres não correspondentes sejam encontrados.

#### Trabalhando no Algoritmo Rabin-Karp

1.  Calcular o valor de hash do _padrão_
2.  Calcular o valor de hash dos primeiros _M_ caracteres do _texto_
3.  Compare os dois valores de hash
4.  Se forem desiguais, calcule o valor de hash para os próximos _M_ caracteres do _texto_ e compare novamente.
5.  Se eles forem iguais, faça uma comparação de força bruta.
```
hash_p = hash value of pattern 
 hash_t = hash value of first M letters in body of text 
 do 
    if (hash_p == hash_t) 
        brute force comparison of pattern and selected section of text 
    hash_t= hash value of next section of text, one character over 
 while (end of text or brute force comparison == true) 
```

#### Vantagem sobre Algoritmo de Correspondência de Cordas Naive

Essa técnica resulta em apenas uma comparação por subseqüência de texto e a força bruta é necessária apenas quando os valores de hash coincidem.

#### Aplicações

*   **_Detecção de plágio_**

#### Mais Informações:

[Rabin-Karp na Wikipédia](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm/)