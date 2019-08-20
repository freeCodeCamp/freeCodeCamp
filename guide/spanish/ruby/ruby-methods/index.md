---
title: Ruby Methods
localeTitle: Métodos de rubí
---
## Introducción

¿Alguna vez has oído hablar de lenguajes de programación referidos a funciones? Si has codificado en JavaScript, deberías estar muy familiarizado con ellos. Ruby también tiene funciones, pero nos referimos a ellos como métodos. Los métodos son solo bloques de código agrupados que reciben un nombre por su facilidad de uso y accesibilidad y son cruciales para el enfoque DRY (no se repita) en la programación.

## Creación y uso de métodos.

Los métodos siempre deben definirse como minúsculas (puede separar las palabras con un guión bajo si lo desea), de lo contrario, pueden confundirse como constantes. Los métodos también deben definirse antes de intentar llamarlos, de modo que la regla de oro sería crear sus métodos al comienzo de su archivo y llamarlos cuando sea necesario. Siempre intente y evite los nombres de los métodos de una sola palabra cuando sea necesario; desea poder saber más o menos lo que hace el método sin tener que excavar en el interior.

## Sintaxis

Los métodos son bastante fáciles de crear, se pueden crear sin la capacidad de aceptar parámetros, con parámetros e incluso con parámetros predefinidos si no se proporciona ninguno.

#### Método simple
```
def my_method 
  code goes here 
end 
```

#### Método de aceptación de parámetros
```
def my_method (param1, param2) 
  param1 + param2 
end 
```

#### Método de parámetro predefinido (los parámetros predefinidos se usan cuando no se dan)
```
def my_method (param1 = parameter1, param2 = parameter2) 
  parm1 + parm2 
end 
```

## Volver en Métodos

El valor devuelto de un método siempre será la última expresión evaluada en el método. Sin embargo, puede usar la palabra clave return para devolver más de un valor si es necesario.
