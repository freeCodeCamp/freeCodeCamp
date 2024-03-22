---
id: 65823bbbdb4eaa4f9d20a0fb
title: Крок 16
challengeType: 20
dashedName: step-16
---

# --description--

Замініть `pass` на функцію `lambda` в межах функції `total_expenses`. Використайте `expense` як параметр та поверніть значення ключа `'amount'` в словнику `expense`.

# --hints--

Функція `total_expenses` повинна містити `lambda expense: expense['amount']`.

```js
({ test: () =>
  {
    const transformedCode = code.replace(/\r/g, "");        
    const foo = __helpers.python.getDef("\n"+transformedCode, "total_expenses");
    const {function_body} = foo;    
    assert(function_body.match(/^\s+lambda\s+expense\s*:\s*expense\s*\[\s*("|')amount\1\s*\]/m));
  }
})
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
