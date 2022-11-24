---
id: 5e44413e903586ffb414c94e
title: Додаток для ведення бюджету
challengeType: 10
forumTopicId: 462361
dashedName: budget-app
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-budget-app" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

-   Start by importing the project on Replit.
-   Next, you will see a `.replit` window.
-   Select `Use run command` and click the `Done` button.


# --instructions--

Завершіть клас `Category` у `budget.py`. Він повинен опрацьовувати об'єкти, базуючись на різних категоріях, наприклад *їжа*, *одяг* та *розваги*. Коли об'єкти створені, вони передаються в назву категорії. Клас повинен мати поле класу під назвою `ledger`, яке є списком. Клас також повинен містити наступні методи:

- A `deposit` method that accepts an amount and description. If no description is given, it should default to an empty string. The method should append an object to the ledger list in the form of `{"amount": amount, "description": description}`.
- A `withdraw` method that is similar to the `deposit` method, but the amount passed in should be stored in the ledger as a negative number. If there are not enough funds, nothing should be added to the ledger. This method should return `True` if the withdrawal took place, and `False` otherwise.
- A `get_balance` method that returns the current balance of the budget category based on the deposits and withdrawals that have occurred.
- A `transfer` method that accepts an amount and another budget category as arguments. The method should add a withdrawal with the amount and the description "Transfer to [Destination Budget Category]". The method should then add a deposit to the other budget category with the amount and the description "Transfer from [Source Budget Category]". If there are not enough funds, nothing should be added to either ledgers. This method should return `True` if the transfer took place, and `False` otherwise.
- A `check_funds` method that accepts an amount as an argument. It returns `False` if the amount is greater than the balance of the budget category and returns `True` otherwise. This method should be used by both the `withdraw` method and `transfer` method.

Якщо бюджетний об'єкт надрукований, він повинен відображатися:

- A title line of 30 characters where the name of the category is centered in a line of `*` characters.
- A list of the items in the ledger. Each line should show the description and amount. The first 23 characters of the description should be displayed, then the amount. The amount should be right aligned, contain two decimal places, and display a maximum of 7 characters.
- A line displaying the category total.

Ось приклад виводу:

```bash
*************Food*************
initial deposit        1000.00
groceries               -10.15
restaurant and more foo -15.89
Transfer to Clothing    -50.00
Total: 923.96
```

Окрім класу `Category` створіть функцію під назвою `create_spend_chart` (за межами класу), яка приймає список категорій як аргумент. Вона повинна повертати рядок зі стовпчиковою діаграмою.

Діаграма повинна показувати відсотки, витрачені в кожній категорії, переданій до функції. Відсоток витраченого повинен бути розрахований лише за рахунок зняття, але не з депозитів. Внизу лівої частини графіку повинні бути мітки 0 - 100. Стовпчики у стовпчиковій діаграмі повинні бути створені із символу «o». Висота кожного стовпчика повинна бути округлена до найближчого 10. Горизонтальна лінія під стовпчиками повинна розташовуватись в двох пробілах від кінцевого стовпчика. Назва кожної категорії повинна бути написана вертикально під стовпчиком. Вгорі повинен бути заголовок "Percentage spent by category" (відсоток, витрачений у категорії).

Ця функція буде тестуватися чотирма категоріями.

Уважно розгляньте приклад виводу нижче і переконайтеся, що інтервал виводу повністю відповідає прикладу.

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

Модульні тести для цього проєкту знаходяться в `test_module.py`.

## Розробка

Запишіть свій код у `budget.py`. Для розробки ви можете використати `main.py`, щоб протестувати свій клас `Category`. Натисніть кнопку «run» і `main.py` запуститься.

## Тестування

Ми імпортували тести з `test_module.py` до `main.py` для вашої зручності. Тести запустяться автоматично, коли ви натиснете на кнопку «run».

## Надсилання

Скопіюйте URL-адресу свого проєкту та відправте її до freeCodeCamp.

# --hints--

Проєкт повинен створити клас Category та пройти тестування.

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
