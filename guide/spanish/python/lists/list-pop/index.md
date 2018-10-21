---
title: List Pop Method
localeTitle: Método de lista pop
---
# Función pop

El método pop () elimina y devuelve el último elemento de la lista. Hay un parámetro opcional, índice del elemento que se eliminará de la lista. Si no se especifica ningún índice, a.pop () elimina y devuelve el último elemento de la lista. Si el índice pasado al método pop () no está en el rango, arroja IndexError: el índice de pop fuera de la excepción de rango.

#### Ejemplo de uso

\`\` \`py ciudades = \['Nueva York', 'Dallas', 'San Antonio', 'Houston', 'San Francisco'\];

Imprimir "Ciudad emergida es:", cities.pop () Imprimir "Ciudad en el índice 2 es:", cities.pop (2) \`\` \`

\#### Salida `City popped is : San Francisco City at index 2 is : San Antonio`

#### Funcionalidad de pila básica

El método `pop()` se usa a menudo junto con `append()` para implementar la funcionalidad de pila básica en una aplicación Python.

```py
stack = [] 
 
 for i in range(5): 
    stack.append(i) 
 
 while len(stack): 
    print(stack.pop()) 
```

\#### Más información: La documentación oficial de `pop()` se puede encontrar [aquí.](https://docs.python.org/3.6/tutorial/datastructures.html)