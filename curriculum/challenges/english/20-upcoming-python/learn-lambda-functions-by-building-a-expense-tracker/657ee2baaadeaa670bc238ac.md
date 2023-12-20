---
id: 657ee2baaadeaa670bc238ac
title: Step 25
challengeType: 20
dashedName: step-25
---

# --description--

After getting the category, we filter the expenses and print the filtered list. The `filter_expenses_by_category` function will be used for this.

These two lines are already added to the code:

```py
print(f"\nExpenses for {category}:")
expenses_from_category = filter_expenses_by_category(expenses, category)
```

- The first line prints the category heading, using an f-string to insert the user-chosen category into the message.
- The second line calls a function to filter the expenses list, returning only those in the specified category. The result is stored in `expenses_from_category`.

Using the `print_expenses` function, write the code to output the filtered expenses. Pass the `expenses_from_category` as an argument. Your task is to correctly implement this as one line in your code.

# --hints--

Ensure the filtered expenses are printed using the `print_expenses` function.

```js
({
    test: () => assert.match(code, /expenses_from_category\s*=\s*filter_expenses_by_category\([^)]*\)\s*.*print_expenses\s*\(\s*expenses_from_category\s*\)/s,)
})

```

# --seed--

## --seed-contents--

```py
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

--fcc-editable-region--
        elif choice == '4':
            category = input("Enter category to filter: ")
            print(f"\nExpenses for {category}:")
            expenses_from_category = filter_expenses_by_category(expenses, category)

--fcc-editable-region--
```
