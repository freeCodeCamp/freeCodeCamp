---
title: Converting Directly from Binary to Hexadecimal
localeTitle: Convertir directamente de binario a hexadecimal
---
## Convertir directamente de binario a hexadecimal

Puedes dividir tus números binarios para convertirlos en números hexadecimales.

### Método general

1.  Corta tu cadena de números binarios en grupos de cuatro, comenzando desde la derecha.
2.  Agregue ceros adicionales al frente del primer número si no son cuatro dígitos.
3.  Convierte un grupo de 4 dígitos a la vez.

Puedes usar esta tabla de conversión:

Se pueden usar dos puntos para alinear las columnas.

| Binario Hexadecimal | | ------ | ----------: | | 0000 | 0 | | 0001 | 1 | | 0010 | 2 | | 0011 | 3 | | 0100 | 4 | | 0101 | 5 | | 0110 | 6 | | 0111 | 7 | | 1000 | 8 | | 1001 | 9 | | 1010 | Un | | 1011 | B | | 1100 | C | | 1101 | D | | 1110 | E | | 1111 | F |

### Ejemplo

Convertir el número binario 01101000000001 a hexadecimal.
```
1. 01101000000001 => 01|1010|0000|0001 
 2. 01|1010|0000|0001 => 0001|1010|0000|0001 
 3. 0001|1010|0000|0001 => 1A01 
```

#### Más información:

Más información con ilustraciones se puede encontrar [aquí.](https://www.wikihow.com/Convert-Binary-to-Hexadecimal#Converting_Long_Binary_Strings_sub)