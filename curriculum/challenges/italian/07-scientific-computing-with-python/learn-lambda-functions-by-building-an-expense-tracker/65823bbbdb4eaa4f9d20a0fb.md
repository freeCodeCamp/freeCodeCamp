---
id: 65823bbbdb4eaa4f9d20a0fb
title: Step 17
challengeType: 20
dashedName: step-17
---

# --description--

In the `total_expenses` function, you'll now integrate a lambda function. Replace `pass` with a lambda function that has `expense` as its parameter.

`expense` is expected to be a dictionary, and your lambda function should return the value of the `'amount'` key in the `expense` dictionary.

# --hints--

You should create a `lambda` function that uses the parameter `expense` and returns `expense['amount']` in your `total_expenses` function.

```js
({ test: () => assert(runPython(`_Node(_code).find_function("total_expenses").has_stmt("lambda expense: expense['amount']")`)) })
```

You should not have `pass` in your `total_expenses` function.

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
