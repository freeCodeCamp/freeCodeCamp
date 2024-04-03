---
id: 5e44413e903586ffb414c94e
title: 預算應用
challengeType: 23
forumTopicId: 462361
dashedName: budget-app
---

# --description--

Complete the `Category` class. 它應該能夠根據不同的預算類別實例化對象，例如 *食物* 、 *服裝* 和 *娛樂* 。 創建對象時，它們以類別的名稱傳遞。 該類應該有一個名爲 `ledger` 的實例變量，它是一個列表。 該類還應包含以下方法：

- 接受金額和描述的 `deposit` 方法。 如果沒有給出描述，它應該默認爲一個空字符串。 該方法應以 `{"amount": amount, "description": description}` 的形式將對象附加到賬本列表。
- `withdraw` 方法類似於 `deposit` 方法，但傳入的金額應作爲負數存儲在賬本中。 如果沒有足夠的資金，則不應向賬本添加任何內容。 如果取款發生，此方法應返回 `True`，否則返回 `False`。
- `get_balance` 方法，根據發生的存款和取款返回預算類別的當前餘額。
- `transfer` 方法，它接受一個金額和另一個預算類別作爲參數。 該方法應添加帶有金額和描述 “Transfer to [目的地預算類別]”的提款。 然後，該方法應將存款添加到其他預算類別，其金額和描述爲 “Transfer from [來源預算類別]”。 如果沒有足夠的資金，則不應向任一賬本添加任何內容。 如果轉賬發生，此方法應返回 `True`，否則返回 `False`。
- 接受金額作爲參數的 `check_funds` 方法。 如果金額大於預算類別的餘額，則返回 `False`，否則返回 `True`。 `withdraw` 方法和 `transfer` 方法都應該使用此方法。

打印預算對象時，它應顯示：

- 30 個字符的標題行，類別名稱居中在一行 `*` 字符中。
- 賬本中的項目列表。 每行應顯示描述和金額。 應顯示描述的前 23 個字符，然後是金額。 金額應右對齊，包含兩位小數，最多顯示 7 個字符。
- 一行顯示類別總數。

Here is an example usage:

```py
food = Category("Food")
food.deposit(1000, "deposit")
food.withdraw(10.15, "groceries")
food.withdraw(15.89, "restaurant and more food for dessert")
clothing = Category("Clothing")
food.transfer(50, clothing)
print(food)
```

And here is an example of the output:

```bash
*************Food*************
initial deposit        1000.00
groceries               -10.15
restaurant and more foo -15.89
Transfer to Clothing    -50.00
Total: 923.96
```

除了 `Category` 類之外，創建一個名爲 `create_spend_chart` 的函數（在類之外），它將類別列表作爲參數。 它應該返回一個作爲條形圖的字符串。

該圖表應顯示在傳遞給函數的每個類別中花費的百分比。 花費的百分比應該只計算取款而不是存款。 圖表左側應該是標籤 0 - 100。 條形圖中的“條”應由“o”字符組成。 每個條形的高度應四捨五入到最接近的 10。 條形圖下面的水平線應該超過最後一個條形圖再多兩個空格。 每個類別名稱應垂直寫在欄下方。 頂部應該有一個標題，上面寫着“Percentage spent by category”。

此功能將使用最多四個類別進行測試。

仔細查看下面的示例輸出，並確保輸出的間距與示例完全匹配。

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

# --hints--

The `deposit` method should create a specific object in the ledger instance variable.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")

    def test_deposit(self):
        self.food.deposit(900, "deposit")
        actual = self.food.ledger[0]
        expected = {"amount": 900, "description": "deposit"}
        self.assertEqual(actual, expected, 'Expected "deposit" method to create a specific object in the ledger instance variable.')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Calling the `deposit` method with no description should create a blank description.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")

    def test_deposit_no_description(self):
        self.food.deposit(45.56)
        actual = self.food.ledger[0]
        expected = {"amount": 45.56, "description": ""}
        self.assertEqual(actual, expected, 'Expected calling "deposit" method with no description to create a blank description.')        
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

The `withdraw` method should create a specific object in the `ledger` instance variable.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")

    def test_withdraw(self):
        self.food.deposit(900, "deposit")
        self.food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
        actual = self.food.ledger[1]
        expected = {"amount": -45.67, "description": "milk, cereal, eggs, bacon, bread"}
        self.assertEqual(actual, expected, 'Expected "withdraw" method to create a specific object in the ledger instance variable.')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Calling the `withdraw` method with no description should create a blank description.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")

    def test_withdraw_no_description(self):
        self.food.deposit(900, "deposit")
        good_withdraw = self.food.withdraw(45.67)
        actual = self.food.ledger[1]
        expected = {"amount": -45.67, "description": ""}
        self.assertEqual(actual, expected, 'Expected "withdraw" method with no description to create a blank description.')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

The `withdraw` method should return `True` if the withdrawal took place.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")

    def test_withdraw_no_description(self):
        self.food.deposit(900, "deposit")
        good_withdraw = self.food.withdraw(45.67)
        self.assertEqual(good_withdraw, True, 'Expected "withdraw" method to return "True".')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Calling `food.deposit(900, "deposit")` and `food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")` should return a balance of `854.33`.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")

    def test_get_balance(self):
        self.food.deposit(900, "deposit")
        self.food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
        actual = self.food.get_balance()
        expected = 854.33
        self.assertEqual(actual, expected, 'Expected balance to be 854.33')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Calling the `transfer` method on a category object should create a specific ledger item in that category object.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")
        self.entertainment = budget.Category("Entertainment")

    def test_transfer(self):
        self.food.deposit(900, "deposit")
        self.food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
        transfer_amount = 20
        good_transfer = self.food.transfer(transfer_amount, self.entertainment)
        actual = self.food.ledger[2]
        expected = {"amount": -transfer_amount, "description": "Transfer to Entertainment"}
        self.assertEqual(actual, expected, 'Expected "transfer" method to create a specific ledger item in food object.')
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

The `transfer` method should return `True` if the transfer took place.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")
        self.entertainment = budget.Category("Entertainment")

    def test_transfer(self):
        self.food.deposit(900, "deposit")
        self.food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
        transfer_amount = 20 
        good_transfer = self.food.transfer(transfer_amount, self.entertainment)        
        self.assertEqual(good_transfer, True, 'Expected "transfer" method to return "True".')        
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Calling `transfer` on a category object should reduce the balance in the category object.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")
        self.entertainment = budget.Category("Entertainment")

    def test_transfer(self):
        self.food.deposit(900, "deposit")
        self.food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
        transfer_amount = 20
        food_balance_before = self.food.get_balance()        
        good_transfer = self.food.transfer(transfer_amount, self.entertainment)
        food_balance_after = self.food.get_balance()
        self.assertEqual(food_balance_before - food_balance_after, transfer_amount, 'Expected "transfer" method to reduce balance in food object.')
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

The `transfer` method should increase the balance of the category object passed as its argument.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")
        self.entertainment = budget.Category("Entertainment")

    def test_transfer(self):
        self.food.deposit(900, "deposit")
        self.food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
        transfer_amount = 20        
        entertainment_balance_before = self.entertainment.get_balance()
        good_transfer = self.food.transfer(transfer_amount, self.entertainment)        
        entertainment_balance_after = self.entertainment.get_balance()        
        self.assertEqual(entertainment_balance_after - entertainment_balance_before, transfer_amount, 'Expected "transfer" method to increase balance in entertainment object.')  
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

The `transfer` method should create a specific ledger item in the category object passed as its argument.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")
        self.entertainment = budget.Category("Entertainment")

    def test_transfer(self):
        self.food.deposit(900, "deposit")
        self.food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
        transfer_amount = 20        
        good_transfer = self.food.transfer(transfer_amount, self.entertainment)
        actual = self.entertainment.ledger[0]
        expected = {"amount": transfer_amount, "description": "Transfer from Food"}
        self.assertEqual(actual, expected, 'Expected "transfer" method to create a specific ledger item in entertainment object.')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

The `check_funds` method should return `False` if the amount passed to the method is greater than the category balance.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")

    def test_check_funds(self):
        self.food.deposit(10, "deposit")
        actual = self.food.check_funds(20)
        expected = False
        self.assertEqual(actual, expected, 'Expected "check_funds" method to be False')   
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

The `check_funds` method should return `True` if the amount passed to the method is not greater than the category balance.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")

    def test_check_funds(self):
        self.food.deposit(10, "deposit")
        actual = self.food.check_funds(10)
        expected = True
        self.assertEqual(actual, expected, 'Expected "check_funds" method to be True')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

The `withdraw` method should return `False` if the withdrawal didn't take place.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")

    def test_withdraw_no_funds(self):
        self.food.deposit(100, "deposit")
        good_withdraw = self.food.withdraw(100.10)
        self.assertEqual(good_withdraw, False, 'Expected "withdraw" method to return "False".')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

The `transfer` method should return `False` if the transfer didn't take place.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")
        self.entertainment = budget.Category("Entertainment")

    def test_transfer_no_funds(self):
        self.food.deposit(100, "deposit")
        good_transfer = self.food.transfer(200, self.entertainment)
        self.assertEqual(good_transfer, False, 'Expected "transfer" method to return "False".')    
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

Printing a `Category` instance should give a different string representation of the object.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")
        self.entertainment = budget.Category("Entertainment")

    def test_to_string(self):
        self.food.deposit(900, "deposit")
        self.food.withdraw(45.67, "milk, cereal, eggs, bacon, bread")
        self.food.transfer(20, self.entertainment)
        actual = str(self.food)
        expected = "*************Food*************\\ndeposit                 900.00\\nmilk, cereal, eggs, bac -45.67\\nTransfer to Entertainme -20.00\\nTotal: 834.33"
        self.assertEqual(actual, expected, 'Expected different string representation of object.')
`);
    const testCode = `
from unittest import main
from importlib import reload
import test_module

reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

`create_spend_chart` should print a different chart representation. Check that all spacing is exact.

```js
({
  test: () => {
    pyodide.FS.writeFile('/home/pyodide/budget.py', code);
    pyodide.FS.writeFile('/home/pyodide/test_module.py',`
import unittest
import budget
from importlib import reload

reload(budget)
class UnitTests(unittest.TestCase):
    maxDiff = None
    def setUp(self):
        self.food = budget.Category("Food")
        self.entertainment = budget.Category("Entertainment")
        self.business = budget.Category("Business")

    def test_create_spend_chart(self):
        self.food.deposit(900, "deposit")
        self.entertainment.deposit(900, "deposit")
        self.business.deposit(900, "deposit")
        self.food.withdraw(105.55)
        self.entertainment.withdraw(33.40)
        self.business.withdraw(10.99)
        actual = budget.create_spend_chart([self.business, self.food, self.entertainment])
        expected = "Percentage spent by category\\n100|          \\n 90|          \\n 80|          \\n 70|    o     \\n 60|    o     \\n 50|    o     \\n 40|    o     \\n 30|    o     \\n 20|    o  o  \\n 10|    o  o  \\n  0| o  o  o  \\n    ----------\\n     B  F  E  \\n     u  o  n  \\n     s  o  t  \\n     i  d  e  \\n     n     r  \\n     e     t  \\n     s     a  \\n     s     i  \\n           n  \\n           m  \\n           e  \\n           n  \\n           t  "
        self.assertEqual(actual, expected, 'Expected different chart representation. Check that all spacing is exact.')
`);

    const testCode = `
from unittest import main
from importlib import reload
import test_module
reload(test_module)
t = main(module='test_module', exit=False)
t.result.wasSuccessful()
`;
    const out = __pyodide.runPython(testCode);
    assert(out);
  }
})
```

# --seed--

## --seed-contents--

```py
class Category:
    pass

def create_spend_chart(categories):
    pass
```

# --solutions--

```py
class Category:

    def __init__(self, name):
        self.name = name
        self.ledger = []
        self.balance = 0
        self.spent = 0

    def __str__(self):
        first_line = f'{self.name.center(30, "*")}\n'
        lines = ''
        total = f'Total: {format(self.balance, ".2f")}'

        for n in range(len(self.ledger)):
            descr = self.ledger[n]["description"][:23]
            am = format(float(self.ledger[n]["amount"]), ".2f")[:7]
            lines = lines + f'{descr:<23}{am:>7}\n'

        return f'{first_line}{lines}{total}'

    def deposit(self, amount, description=''):
        self.ledger.append({
            'amount': float(amount),
            'description': description
        })
        self.balance = self.balance + float(amount)

    def withdraw(self, amount, description=''):
        if self.check_funds(amount):
            self.ledger.append({
                'amount': -float(amount),
                'description': description
            })
            self.balance = self.balance - float(amount)
            self.spent = self.spent + float(amount)
            return True
        else:
            return False

    def get_balance(self):
        return self.balance

    def transfer(self, amount, category):
        if self.check_funds(amount):
            # withdraw
            self.ledger.append({
                'amount': -float(amount),
                'description': f'Transfer to {category.name}'
            })
            self.balance = self.balance - float(amount)
            # deposit
            category.deposit(amount, f'Transfer from {self.name}')

            return True
        else:
            return False

    def check_funds(self, amount):
        if float(amount) > self.balance:
            return False
        else:
            return True


def create_spend_chart(categories):
    total_expenses = 0
    obj = {}
    col1 = []
    str = []
    final_str = 'Percentage spent by category\n'
    label_max_length = 0
    label_strings = []

    for category in categories:
        total_expenses = total_expenses + category.spent
        obj[category.name] = {'expenses': category.spent}
        obj[category.name]['label'] = list(category.name)
        if len(obj[category.name]['label']) > label_max_length:
            label_max_length = len(obj[category.name]['label'])

    for category in categories:
        obj[category.name]['percent'] = (
            (category.spent / total_expenses * 100) // 10) * 10
        obj[category.name]['column'] = []
        for i in range(0, 110, 10):
            if obj[category.name]['percent'] >= i:
                obj[category.name]['column'].insert(0, 'o')
            else:
                obj[category.name]['column'].insert(0, ' ')

    for i in range(0, 110, 10):
        col1.insert(0, i)

    for i in range(11):
        str.append("")
        for key in obj:
            str[i] += (f'{obj[key]["column"][i]}  ')
        final_str += f'{col1[i]:>3}| {str[i]}\n'
    final_str += f'    {"-"*(1+3*len(obj))}\n   '

    for i in range(label_max_length):
        label_strings.append('  ')
        for k in obj:
            if len(obj[k]['label']) < label_max_length:
                obj[k]['label'].extend(
                    f'{" "*(label_max_length-len(obj[k]["label"]))}')

            label_strings[i] += f'{obj[k]["label"][i]}  '
        if i < label_max_length - 1:
            label_strings[i] += '\n   '
        final_str += label_strings[i]

    print(final_str)
    return (final_str)

```
