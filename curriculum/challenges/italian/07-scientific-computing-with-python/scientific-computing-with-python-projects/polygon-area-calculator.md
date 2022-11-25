---
id: 5e444147903586ffb414c94f
title: Calcolatore dell'area dei poligoni
challengeType: 10
forumTopicId: 462363
dashedName: polygon-area-calculator
---

# --description--

Lavorerai a <a href="https://replit.com/github/freeCodeCamp/boilerplate-polygon-area-calculator" target="_blank" rel="noopener noreferrer nofollow">questo progetto con il nostro codice d'inizio su Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


# --instructions--

In questo progetto utilizzerai la programmazione orientata agli oggetti per creare una classe Rettangolo (Rectangle) e una classe Quadrato (Square). La classe Square dovrebbe essere una sottoclasse di Rectangle ed ereditare metodi ed attributi.

## Classe Rectangle

Quando viene creato un oggetto Rectangle, dovrebbe essere inizializzato con attributi `width` (larghezza) e `height` (altezza). La classe dovrebbe anche contenere i seguenti metodi:

- `set_width`
- `set_height`
- `get_area`: Returns area (`width * height`)
- `get_perimeter`: Returns perimeter (`2 * width + 2 * height`)
- `get_diagonal`: Returns diagonal (`(width ** 2 + height ** 2) ** .5`)
- `get_picture`: Returns a string that represents the shape using lines of "\*". The number of lines should be equal to the height and the number of "\*" in each line should be equal to the width. There should be a new line (`\n`) at the end of each line. If the width or height is larger than 50, this should return the string: "Too big for picture.".
- `get_amount_inside`: Takes another shape (square or rectangle) as an argument. Returns the number of times the passed in shape could fit inside the shape (with no rotations). For instance, a rectangle with a width of 4 and a height of 8 could fit in two squares with sides of 4.

Inoltre, se un'istanza di Rectangle è rappresentata come una stringa, dovrebbe apparire come: `Rectangle(width=5, height=10)`

## Classe Square

La classe Square dovrebbe essere una sottoclasse di Rectangle. Quando viene creato un oggetto Square, viene passata la lunghezza di un singolo lato. Il metodo `__init__` dovrebbe memorizzare la lunghezza del lato sia nell'attributo `width` che in `height` della classe Rectangle.

La classe Square dovrebbe essere in grado di accedere ai metodi della classe Rectangle, ma dovrebbe anche contenere un metodo `set_side`. Se un'istanza di un quadrato è rappresentata come una stringa, dovrebbe apparire come `Square(side=9)`

Inoltre, i metodi `set_width` e `set_height` della classe Square dovrebbero impostare sia la larghezza che l'altezza.

## Esempio di utilizzo

```py
rect = shape_calculator.Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = shape_calculator.Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))
```

Tale codice deve restituire:

```bash
50
26
Rectangle(width=10, height=3)
**********
**********
**********

81
5.656854249492381
Square(side=4)
****
****
****
****

8
```

I test unitari per questo progetto sono in `test_module.py`.

## Sviluppo

Scrivi il tuo codice in `shape_calculator.py`. Per lo sviluppo, puoi usare `main.py` per testare la tua funzione `shape_calculator()`. Usa il bottone "run" e `main.py` sarà eseguito.

## Test

Abbiamo importato i test da `test_module.py` in `main.py` per tua convenienza. I test saranno eseguiti automaticamente quando usi il bottone "run".

## Invio

Copia l'URL del tuo progetto e consegnalo nell'input qua sotto.

# --hints--

Dovrebbe creare una classe Rectangle e una classe Square e superare tutti i test.

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
