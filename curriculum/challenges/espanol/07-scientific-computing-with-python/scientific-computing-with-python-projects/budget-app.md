---
id: 5e44413e903586ffb414c94e
title: Aplicación de presupuesto
challengeType: 10
forumTopicId: 462361
dashedName: budget-app
---

# --description--

Estarás <a href="https://replit.com/github/freeCodeCamp/boilerplate-budget-app" target="_blank" rel="noopener noreferrer nofollow">trabajando en este proyecto con nuestro código inicial en Replit</a>.

-   Comienza importando el proyecto en Replit.
-   A continuación verás una ventana `.replit`
-   Selecciona `Use run command` y presiona el botón `Done`


# --instructions--

Complete la clase `Category` en `budget.py`. Debería poder instanciar objetos en función de diferentes categorías presupuestarias como *comida*, *ropa* y *entretenimiento*. Cuando se crean objetos, se pasan en el nombre de la categoria. La clase debe tener como instancia una variable llamada `ledger` (esta es una lista). La clase debe contener también los siguientes metodos:

- A `deposit` method that accepts an amount and description. If no description is given, it should default to an empty string. The method should append an object to the ledger list in the form of `{"amount": amount, "description": description}`.
- A `withdraw` method that is similar to the `deposit` method, but the amount passed in should be stored in the ledger as a negative number. If there are not enough funds, nothing should be added to the ledger. This method should return `True` if the withdrawal took place, and `False` otherwise.
- A `get_balance` method that returns the current balance of the budget category based on the deposits and withdrawals that have occurred.
- A `transfer` method that accepts an amount and another budget category as arguments. The method should add a withdrawal with the amount and the description "Transfer to [Destination Budget Category]". The method should then add a deposit to the other budget category with the amount and the description "Transfer from [Source Budget Category]". If there are not enough funds, nothing should be added to either ledgers. This method should return `True` if the transfer took place, and `False` otherwise.
- A `check_funds` method that accepts an amount as an argument. It returns `False` if the amount is greater than the balance of the budget category and returns `True` otherwise. This method should be used by both the `withdraw` method and `transfer` method.

Cuando el objeto de presupuesto se imprime, debe mostrar:

- A title line of 30 characters where the name of the category is centered in a line of `*` characters.
- A list of the items in the ledger. Each line should show the description and amount. The first 23 characters of the description should be displayed, then the amount. The amount should be right aligned, contain two decimal places, and display a maximum of 7 characters.
- A line displaying the category total.

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
