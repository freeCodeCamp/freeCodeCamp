---
id: 6ad9de339abadcbe48e5ef62
title: Step 6
challengeType: 20
dashedName: step-6
---

# --description--

At the end of the `_insert` method, return `node`.

This way, each call returns the subtree it received, so that the caller can assign it back to `node.left` or `node.right`, all the way up to the root.

# --hints--

Your `_insert` method should return `node` at the end.

```js
({
  test: () =>
    runPython(`
    assert _Node(_code).find_class("BinarySearchTree").find_function("_insert")[-1].is_equivalent("return node")
  `)
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

    def _insert(self, node, key):
        if key < node.key:
            node.left = self._insert(node.left, key)
        elif key > node.key:
            node.right = self._insert(node.right, key)
--fcc-editable-region--
        
--fcc-editable-region--
```
