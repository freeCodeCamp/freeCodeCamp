---
title: Enumerations
localeTitle: Enumeraciones
---
# Enumeraciones

Una enumeración es un conjunto de constantes enteras nombradas que se declaran usando la palabra clave `enum` .

## Ejemplo
```
enum Gender 
 { 
  Male, 
  Female 
 } 
```

De forma predeterminada, los valores enteros comienzan en 0 y aumentan en 1, para cada nombre de enumeración, es decir, Hombre = 0, Mujer = 1, etc.

Estos pueden anularse especificando un valor entero para cualquiera de los nombres de enumeración.

## Ejemplo
```
enum Gender 
 { 
  Male = 1, 
  Female 
 } 
```

En este caso, los valores enteros comenzarán en 1 y aumentarán desde allí.

Para utilizar una enumeración, puede declarar una variable de su tipo y asignarle un valor:

`Gender myVar = Gender.Male;`

También puede emitir un valor de nombre de enumeración a su valor entero subyacente y viceversa:
```
Console.WriteLine($"Male: {(int)Gender.Male}"); 
 Console.WriteLine($"Female: {(int)Gender.Female}"); 
```

## Salida:
```
Male: 1 
 Female: 2 

```