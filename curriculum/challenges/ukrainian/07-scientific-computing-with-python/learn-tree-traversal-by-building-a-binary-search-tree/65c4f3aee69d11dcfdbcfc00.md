---
id: 65c4f3aee69d11dcfdbcfc00
title: Крок 18
challengeType: 20
dashedName: step-18
---

# --description--

Тепер в межах методу `insert` потрібно викликати допоміжний метод `_insert()`, який ми визначили раніше. `_insert` інкапсулює реалізацію логіки вставки. Це корисно для рекурсії та для того, щоб приховати деталі реалізації від користувача.

Видаліть `pass` і призначте `self._insert(self.root, key)` до `self.root`.

Зверніть увагу:

- `self.root` передає кореневий вузол дерева як перший аргумент. Це перший крок для процесу вставки.
- `key` передає значення `key`, яке потрібно вставити як другий аргумент.

# --hints--

Видаліть ключове слово `pass` з методу `insert`.

```js
({
  test: () => {
    assert.isFalse(
      runPython(
        `_Node(_code).find_class("BinarySearchTree").find_function("insert").has_pass()`
      )
    );
  },
});

```

Рекурсивно викличте метод `_insert()` за допомогою `self._insert()`

```js
({ test: () =>
  {
    const transformedCode = code.replace(/\r/g, "");        
    const ins = __helpers.python.getDef("\n"+transformedCode, "insert");
    const {function_body} = ins;    
    assert(function_body.match(/self\._insert\s*\([^(]*\)/));
  }
})
```

Передайте `self.root` та `key` до виклику `_insert()`.

```js
({ test: () =>
  {
    const transformedCode = code.replace(/\r/g, "");        
    const ins = __helpers.python.getDef("\n"+transformedCode, "insert");
    const {function_body} = ins;    
    assert(function_body.match(/self\._insert\s*\(\s*self\.root\s*,\s*key\s*\)/));
  }
})
```

Призначте значення, яке повертає виклик `_insert()`, до `self.root`.

```js
({ test: () =>
  {
    const transformedCode = code.replace(/\r/g, "");        
    const ins = __helpers.python.getDef("\n"+transformedCode, "insert");
    const {function_body} = ins;    
    assert(function_body.match(/^\s{8}self\.root\s*=\s*self\._insert\s*\(\s*self\.root\s*,\s*key\s*\)/m));
  }
})
```

# --seed--

## --seed-contents--

```py

class TreeNode:

    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None


class BinarySearchTree:

    def __init__(self):
        self.root = None

--fcc-editable-region--
    def _insert(self, node, key):
        if node is None:
            return TreeNode(key)

        if key < node.key:
            node.left = self._insert(node.left, key)
        elif key > node.key:

            node.right = self._insert(node.right, key)
        return node

    def insert(self, key):
        pass


--fcc-editable-region--
```
