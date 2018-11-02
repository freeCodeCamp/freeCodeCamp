---
title: Converting Integer to String in Python
localeTitle: Convertir un entero a una cadena en Python
---
## Convertir un entero a una cadena en Python

A diferencia de muchos otros idiomas, Python no encadena implícitamente números enteros (o flotantes) a cadenas cuando concatena con cadenas. Afortunadamente, Python tiene una función incorporada práctica `str()` que convertirá el argumento pasado a un formato de cadena.

#### La forma incorrecta

Los programadores que vienen de otros lenguajes pueden intentar hacer la siguiente concatenación de cadenas que produce un error:

```py
age = 18 
 
 string = "Hello, I am " + age + " years old" 
```

[Ejecutar código en repl.it](https://repl.it/JyYH/0)

El error que aparece es
```
Traceback (most recent call last): 
  File "python", line 3, in <module> 
 TypeError: must be str, not int 
```

`TypeError: must be str, not int` indica que el entero se debe convertir primero en una cadena para concatenar.

#### El camino correcto

Ejemplo de concatenación simple:

```py
age = 18 
 
 print("Hello, I am " + str(age) + " years old") 
 
 # Output 
 # Hello, I am 18 years old 
```

[Ejecutar código en repl.it](https://repl.it/Jz8Q/0)

Imprima `1 2 3 4 5 6 7 8 9 10` usando una sola cadena

```py
result = "" 
 
 for i in range(1, 11): 
    result += str(i) + " " 
 
 print(result) 
 
 # Output 
 # 1 2 3 4 5 6 7 8 9 10 
```

[Ejecutar código en repl.it](https://repl.it/KBLB/0)

#### Línea por línea explicación del código anterior

1.  En primer lugar, se asigna una variable 'resultado' a una cadena vacía.
2.  For loop se está utilizando para iterar sobre una lista de números.
3.  Esta lista de números se genera utilizando la función de rango.
4.  así que el rango (1,11) generará una lista de números del 1 al 10.
5.  En cada iteración de bucle for, esta variable 'i' tomará valores del 1 al 10.
6.  En la primera iteración cuando la variable i = 1, luego la variable \[resultado = resultado + str (i) + "(carácter de espacio)"\], str (i) convierte la 'i' que es un valor entero a un valor de cadena.
7.  Como i = 1, en la primera iteración finalmente resulta = 1.
8.  Y el mismo proceso continúa hasta que i = 10 y finalmente después de la última iteración resultado = 1 2 3 4 5 6 7 8 9 10.
9.  Por lo tanto, cuando finalmente imprimimos el resultado después del bucle for, la salida en la consola es '1 2 3 4 5 6 7 8 9 10'.

#### Más información:

[Documentación oficial de Python para `str()`](https://docs.python.org/3/library/stdtypes.html#str)