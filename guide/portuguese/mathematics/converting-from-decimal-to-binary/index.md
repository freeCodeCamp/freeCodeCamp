---
title: Converting from Decimal to Binary
localeTitle: Convertendo de Decimal para Binário
---
## Convertendo de Decimal para Binário

Você pode usar restos para converter números decimais em números binários.

### Método geral

1) Divida o número decimal original por 2 e registre o quociente e o resto. 2) Repita o primeiro passo, substituindo o número decimal original pelo último quociente, até obter um quociente igual a 0. 3) Leve o último resto que você gravou para ser seu MSB (bit mais significativo) e o primeiro resto que você gravou para ser seu LSB (bit menos significativo). Anote os remanescentes no verso do pedido de como você os gerou.

### Exemplos

Convertendo o número decimal 30 em binário.
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

Convertendo o número decimal 116 em binário.
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