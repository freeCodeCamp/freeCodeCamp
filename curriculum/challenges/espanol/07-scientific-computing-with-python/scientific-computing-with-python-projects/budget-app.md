---
id: 5e44413e903586ffb414c94e
title: Aplicación de presupuesto
challengeType: 10
forumTopicId: 462361
dashedName: budget-app
---

# --description--

Estarás [trabajando en este proyecto con nuestro código inicial de Replit](https://replit.com/github/freeCodeCamp/boilerplate-budget-app).

# --instructions--

Complete la clase `Category` en `budget.py`. Debería poder instanciar objetos en función de diferentes categorías presupuestarias como *comida*, *ropa* y *entretenimiento*. Cuando se crean objetos, se pasan en el nombre de la categoria. La clase debe tener como instancia una variable llamada `ledger` (esta es una lista). La clase debe contener también los siguientes metodos:

- Un metodo `deposit` que acepte una catidad y una descripción. Si no se le ha dado una descripción, se debe pasar por defecto una cadena de texto vacía. El metodo debe agregar un objeto a la lista de contadores en la forma de `{"amount": amount, "description": description}`.
- Un método `withdraw` similar al método `deposit`, pero la cantidad pasada debe ser almacenada en el libro de valores como un número negativo. Si no hay fondos suficientes, no hay nada que añadir a la plantilla. Este método debe retornar `True` si el retiro tuvo lugar, y `False` de otra manera.
- Un método `get_balance` que devuelve el saldo actual de la categoría de presupuesto basado en los depósitos y retiros que han ocurrido.
- Un método de `transfer` que acepta un importe y otra categoría presupuestaria como argumentos. El método debe agregar un retiro con la cantidad y la descripción "Transferir a [Categoría de presupuesto de destino]". El método debe entonces añadir un depósito a la otra categoría de presupuesto con la cantidad y la descripción "Transferir de la [Categoría del Presupuesto Fuente]". Si no hay fondos suficientes, no hay nada que añadir a ninguno de los agentes financieros. Este método debe retornar `True` si la transferencia tuvo lugar, y `False` de otra manera.
- Un método `check_funds` que acepta una cantidad como argumento. Devuelve `False` si la cantidad es mayor que el saldo de la categoría de presupuesto y devuelve `True` de lo contrario. Este método debe ser utilizado tanto por el método `withdraw` como por el método `transfer`.

Cuando el objeto de presupuesto se imprime, debe mostrar:

- Una línea de título de 30 caracteres donde el nombre de la categoría está centrado en una línea de `*` caracteres.
- Una lista de los elementos en el contador. Cada línea debe mostrar la descripción y la cantidad. Los primeros 23 caracteres de la descripción deben mostrarse, luego la cantidad. La cantidad debe estar alineada correctamente, contener dos decimales y mostrar un máximo de 7 caracteres.
- Una línea que muestra el total de las categorías.

Aquí hay un ejemplo de salida:

```bash
*************Food*************
initial deposit        1000.00
groceries               -10.15
restaurant and more foo -15.89
Transfer to Clothing    -50.00
Total: 923.96
```

Además de la clase `Category`, crear una función (fuera de la clase) llamada `create_spend_chart` que toma una lista de categorías como argumento. Debe devolver una cadena que es un gráfico de barras.

El gráfico debe mostrar el porcentaje gastado en cada categoría pasado a la función. El porcentaje gastado debe calcularse únicamente con retiros y no con depósitos. Debajo del lado izquierdo del gráfico debe estar la etiqueta 0 - 100. Las "barras" en el gráfico de barras deben estar hechas del carácter "o". La altura de cada barra debe ser redondeada hacia abajo al 10 más cercano. La línea horizontal debajo de las barras debe ir dos espacios más allá de la barra final. Cada nombre de categoría debe ser escrito verticalmente debajo de la barra. Debería haber un título en la parte superior que diga "Porcentaje gastado por categoría".

Esta función se probará con hasta cuatro categorías.

Mire el output del ejemplo a continuación muy de cerca y asegúrese de que el espaciado coincida exactamente con el ejemplo.

```bash
Percentage spent by category
100|          
 90|          
 80|          
 70|          
 60| o        
 50| o        
 40| o        
 30| o        
 20| o  o     
 10| o  o  o  
  0| o  o  o  
    ----------
     F  C  A  
     o  l  u  
     o  o  t  
     d  t  o  
        h     
        i     
        n     
        g     
```

Las pruebas unitarias para este proyecto están en `test_module.py`.

## Desarrollo

Escribe tu código en `budget.py`. Para el desarrollo, puedes usar `main.py` para probar tu clase `Category`. Haz clic en el botón "run" y se ejecutará `main.py`.

## Pruebas

Importamos las pruebas de `test_module.py` a `main.py` para tu comodidad. Las pruebas se ejecutarán automáticamente cada vez que pulses el botón "run".

## Envío

Copie la URL de su proyecto y envíelo a freeCodeCamp.

# --hints--

Debes crear una clase de categoría y pasar todas las pruebas.

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
