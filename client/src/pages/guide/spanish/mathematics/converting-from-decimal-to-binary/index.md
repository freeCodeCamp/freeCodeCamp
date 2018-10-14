---
title: Converting from Decimal to Binary
localeTitle: Convertir de decimal a binario
---
## Convertir de decimal a binario

Puedes usar los restos para convertir números decimales en números binarios.

### Método general

1) Divida el número decimal original entre 2 y registre el cociente y el resto. 2) Repita el primer paso reemplazando el número decimal original con el último cociente que encontró hasta que obtenga un cociente que sea igual a 0. 3) Tome el último resto que grabó como su MSB (bit más significativo) y el primer resto que grabó como su LSB (bit menos significativo). Escriba los residuos en el reverso del orden de cómo los generó.

### Ejemplos

Convertir el número decimal 30 a binario.
```
30 / 2 = 15 r 0 
 15 / 2 = 7 r 1 
 7 / 2 = 3 r 1 
 3 / 2 = 1 r 1 
 1 / 2 = 0 r 1 
 
 Writing out the remainders bottom to top gives you the bit pattern: 
 
 11110 
 
 Checking your answer by converting the binary number back to decimal: 
 
 (1*2^4)+(1*2^3)+(1*2^2)+(1*2^1)+(0*2^0) = 30 
 
 So your answer is correct. 
```

Convertir el número decimal 116 a binario.
```
116 / 2 = 58 r 0 
 58 / 2 = 29 r 0 
 29 / 2 = 14 r 1 
 14 / 2 = 7 r 0 
 7 / 2 = 3 r 1 
 3 / 2 = 1 r 1 
 1 / 2 = 0 r 1 
 
 Writing out the remainders bottom to top gives you the bit pattern: 
 
 1110100 
 
 Checking your answer by converting the binary number back to decimal: 
 
 (1*2^6)+(1*2^5)+(1*2^4)+(0*2^3)+(1*2^2)+(0*2^1)+(0*2^0) = 116 
 
 So your answer is correct. 

```