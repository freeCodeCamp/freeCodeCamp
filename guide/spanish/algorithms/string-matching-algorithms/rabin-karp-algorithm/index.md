---
title: Rabin Karp Algorithm
localeTitle: Algoritmo de Rabin Karp
---
## Algoritmo de Rabin-Karp

*   Un algoritmo de búsqueda / búsqueda de cadenas desarrollado por Michael O. Rabin y Richard M. Karp.
*   Utiliza la técnica de **_hash_** y **_la fuerza bruta_** para comparación.

#### Términos importantes

*   **_patrón_** es la cadena a buscar. Considere la longitud del patrón como **_M_** caracteres.
*   **_texto_** es el texto completo desde el que se busca el patrón. Considere la longitud del texto como **_N_** caracteres.

#### ¿Qué es la comparación de fuerza bruta?

En la comparación de fuerza bruta, cada carácter del patrón se compara con cada carácter del texto hasta que se encuentran caracteres no coincidentes.

#### Trabajo del algoritmo de Rabin-Karp

1.  Calcular el valor de hash del _patrón_
2.  Calcular el valor hash de los primeros _M_ caracteres del _texto_
3.  Compara ambos valores hash
4.  Si son desiguales, calcule el valor de hash para los siguientes _M_ caracteres del _texto_ y compare nuevamente.
5.  Si son iguales, realice una comparación de fuerza bruta.
```
hash_p = hash value of pattern 
 hash_t = hash value of first M letters in body of text 
 do 
    if (hash_p == hash_t) 
        brute force comparison of pattern and selected section of text 
    hash_t= hash value of next section of text, one character over 
 while (end of text or brute force comparison == true) 
```

#### Ventaja sobre el algoritmo de emparejamiento de cadenas ingenuas

Esta técnica produce solo una comparación por secuencia de texto y la fuerza bruta solo se requiere cuando los valores de hash coinciden.

#### Aplicaciones

*   **_Detección de plagio_**

#### Más información:

[Rabin-Karp en Wikipedia](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm/)