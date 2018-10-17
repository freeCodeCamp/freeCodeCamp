---
title: Python Mutability and Variable Assignments
localeTitle: Mutabilidad Python y asignaciones de variables
---
> Cada objeto tiene una identidad, un tipo y un valor. La identidad de un objeto nunca cambia una vez que ha sido creado; usted puede pensar en ello como la dirección del objeto en la memoria. [fuente](https://docs.python.org/3/reference/datamodel.html#data-model)

Una vez `object` se crea un `object` , el tipo y la identidad no se pueden cambiar. Si los valores del objeto pueden cambiar o no después de la creación, se determina si el objeto es mutable (puede cambiar) o inmutable (no puede cambiar).

Hasta ahora hemos aprendido sobre algunos tipos de objetos y sus subclases: `string` y objetos numéricos (enteros, de punto flotante, complejos y booleanos). Todos estos son objetos **inmutables** .

Este concepto puede ser confuso al principio porque lo bueno es un objeto si no puede modificarlo. Lo que hace que estos objetos sean utilizables es la capacidad de asignar y reasignar variables. Las funciones y los operadores pueden devolver nuevos objetos que pueden asignarse a variables.

Usando la [función de identificación integrada](https://docs.python.org/3/library/functions.html#id) , que devuelve la identidad de un objeto, podemos ver cómo funciona esto.

Aquí hay algunas cosas a tener en cuenta:

*   Asignar una variable no significa que la _variable_ sea ​​el _objeto_ . Utilizamos un lenguaje muy específico que indica que las _instrucciones de asignación_ **unen** un **nombre** (identificador) a un _objeto_ . Las variables pueden ser reasignadas:

\`pitón

> > > a = 1 # Unir a un objeto.  
> > > id (a)  
> > > 140355241530152  
> > > a = 2 # Rebindir a otro objeto.  
> > > id (a)  
> > > 140355241530128  
> > > \`

*   Asignar dos variables diferentes a _objetos inmutables_ con el mismo valor puede resultar (no garantizado) en que estén vinculados al mismo _objeto_

\`pitón

> > > a = 1  
> > > b = 1  
> > > id (a)  
> > > 140355241530152  
> > > id (b) # En este caso a y b están vinculados al mismo objeto.  
> > > 140355241530152  
> > > \`

*   Asignar dos variables diferentes a _objetos imutables_ con valores diferentes siempre dará como resultado que estén vinculados a _objetos_ diferentes:

\`pitón

> > > a = 1  
> > > b = 2  
> > > id (a)  
> > > 140355241530152  
> > > id (b) # a y b están vinculados a diferentes objetos.  
> > > 140355241530128  
> > > \`

*   La reasignación de variables no cambia el objeto original, las vincula a un objeto diferente.

\`pitón

> > > a = 1  
> > > b = 1  
> > > id (a)  
> > > 140355241530152  
> > > id (b)  
> > > 140355241530152  
> > > a = 2  
> > > id (a) # a es rebote a un objeto diferente.  
> > > 140355241530128  
> > > id (b) # b todavía está vinculado al objeto original.  
> > > 140355241530152  
> > > \`