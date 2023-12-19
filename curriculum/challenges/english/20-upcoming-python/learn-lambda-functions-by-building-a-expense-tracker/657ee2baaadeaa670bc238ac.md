---
id: 657ee2baaadeaa670bc238ac
title: Step 25
challengeType: 20
dashedName: step-25
---

# --description--

After getting the category, we filter the expenses and print the filtered list. The `filter_expenses_by_category` function returns an iterator, so we convert it to a list before printing.

These two lines are already added to the code:
```py
print(f"\nExpenses for {category}:")
expenses_from_category = filter_expenses_by_category(expenses, category)
```

- The first line prints the category heading, using an f-string to insert the user-chosen category into the message.
- The second line calls a function to filter the expenses list, returning only those in the specified category. The result is stored in `expenses_from_category`.

Using the `print_expenses` function, write the code to output the filtered expenses. Pass the `expenses_from_category` as an argument, ensuring it's converted into a list. Your task is to correctly implement this as one line in your code.

# --hints--

Ensure the filtered expenses are printed using the `print_expenses` function.

```js
({
  test: () => {
    const main_func = __helpers.python.getDef(e.code.original["main.py"], "main");
    const { function_body } = main_func;
    assert(function_body.match(/print_expenses\(/ms) && !function_body.match(/print_expensesss\(/ms),);
  }
})

```

Make sure the `expenses_from_category` parameter is converted to a list.

```js
({
  test: () => {
    const main_func = __helpers.python.getDef(e.code.original["main.py"], "main");
    const { function_body } = main_func;
    assert(function_body.match(/list\(expenses_from_category\)/ms),);
  }
})

```
# --seed--

## --seed-contents--

```py
--fcc-editable-region--
def add_expense(expenses, amount, category):
    expenses.append({"amount": amount, "category": category})

def print_expenses(expenses):
    for expense in expenses:
        print(f"Amount: {expense['amount']}, Category: {expense['category']}")

def total_expenses(expenses):
    return sum(map(lambda expense: expense['amount'], expenses))

def filter_expenses_by_category(expenses, category):
    return filter(lambda expense: expense['category'] == category, expenses)

def main():
    expenses = []  # Create a new expenses list for each instance
    while True:
        print("\nExpense Tracker")
        print("1. Add an expense")
        print("2. List all expenses")
        print("3. Show total expenses")
        print("4. Filter expenses by category")
        print("5. Exit")

        choice = input("Enter your choice: ")

        if choice == '1':
            amount = float(input("Enter amount: "))
            category = input("Enter category: ")
            add_expense(expenses, amount, category)

        elif choice == '2':
            print("\nAll Expenses:")
            print_expenses(expenses)
            
        elif choice == '3':
            print("\nTotal Expenses: ", total_expenses(expenses))

        elif choice == '4':
            category = input("Enter category to filter: ")
            print(f"\nExpenses for {category}:")
            expenses_from_category = filter_expenses_by_category(expenses, category)

--fcc-editable-region--
```
