---
id: 65823bbbdb4eaa4f9d20a0fb
title: Крок 17
challengeType: 20
dashedName: step-17
---

# --description--

Зараз ви інтегруєте лямбда-функцію в межах функції `total_expenses`. Замініть `pass` на лямбда-функцію, яка має параметр `expense`.

Очікується, що `expense` буде словником, а лямбда-функція має повернути значення ключа `'amount'` зі словника `expense`.

# --hints--

В межах функції `total_expenses` створіть функцію `lambda`, яка використовує параметр `expense` та повертає `expense['amount']`.

```js
({ test: () => assert(runPython(`_Node(_code).find_function("total_expenses").has_stmt("lambda expense: expense['amount']")`)) })
```

Функція `total_expenses` не повинна містити `pass`.

```js
({ test: () => assert.isFalse(runPython(`_Node(_code).find_function("total_expenses").has_pass()`)) })
```

# --seed--

## --seed-contents--

```py
def add_expense(expenses, amount, category):
    expenses.append({'amount': amount, 'category': category})

def print_expenses(expenses):
    for expense in expenses:
        print(f'Amount: {expense["amount"]}, Category: {expense["category"]}')

--fcc-editable-region--
def total_expenses(expenses):
    pass
--fcc-editable-region--

expenses = []
```
