# Python AST Helper

This document describes how to use the Python AST helper when writing tests for FreeCodeCamp Python challenges.

The helper allows curriculum authors to analyze learner code and assert the presence or absence of specific syntax elements.

---

## Detecting function calls

To assert that a learner has used a specific function call:

```python
assert _Node(_code).has_call("print")
assert _Node(_code).block_has_call("print")
