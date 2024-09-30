---
id: 65c4f3aee69d11dcfdbcfc00
title: Step 18
challengeType: 20
dashedName: step-18
---

# --description--

Now, inside the `insert` method, you need to call the helper method `_insert()` that we defined earlier. 
Here, `_insert` has encapsulated the implementation of the insertion logic. This is useful for recursion and for keeping the implementation details hidden from the user.

Delete `pass` and assign `self._insert(self.root, key)` to `self.root`.

Note that:

- `self.root` passes the root node of the tree as the first argument. This is the starting point for the insertion process.
- `key`: passes the `key` value you want to insert as the second argument.

# --hints--

You should remove the `pass` keyword from the `insert` method.

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

You should recursively call the `_insert()` method using `self._insert()`

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

You should pass `self.root` and `key` to your `_insert()` call.

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

You should assign the return value of your `_insert()` call to `self.root`.

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
