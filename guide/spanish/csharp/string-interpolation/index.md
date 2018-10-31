---
title: String Interpolation
localeTitle: Interpolación de cuerdas
---
# Interpolación de cuerdas

En C #, normalmente para concatenar cadenas, utilizaría el operador “+” o el formato compuesto con un método como String.Format. Por formato compuesto, me refiero a una cadena de formato con marcadores de posición indexados (elementos de formato) y una lista de objetos que se utilizarán en los marcadores de posición.

# #
```
string message = "Hello " + firstName + " " + lastName + "!"; 
 
 string message2 = string.Format("Hello {0} {1}!", firstName, lastName); 
```

Con las expresiones de cadena interpoladas, tiene una cadena con expresiones contenidas que se reemplazan con los resultados de las expresiones. Tiene que prefijar su cadena literal con un signo de dólar ($). Las expresiones que desea incluir en la cadena se colocan en línea entre corchetes. El mensaje anterior ahora se vería así:

# #
```
string message = $"Hello {firstName} {lastName}!"; 
```

**Poco de información útil** En la interpolación de cadenas, tiene la capacidad de llamar a funciones, propiedades y operadores ternarios:
```
int a = 3; 
 int b = 454; 
 string result = $"{a}+{b} = {a+b}"; 

```