---
title: Use Destructuring Assignment to Assign Variables from Arrays
localeTitle: Utilice la asignación de destrucción para asignar variables de matrices
---
## Utilice la asignación de destrucción para asignar variables de matrices

Tenemos que tomar alguna precaución en este caso.

1.  No hay necesidad de const \[b, a\] ya que mantendrá el efecto de la asignación local.
    
2.  const \[b, a\] = \[a, b\] dará como resultado el valor de a, b como indefinido (regla de asignación simple de izquierda a derecha).
    

De ahí que la solución a este problema sea \[b, a\] = \[a, b\]