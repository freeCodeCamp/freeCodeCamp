---
id: 6aeaec9c8f05dde6a77e511f
title: How Do Shared Lists Behave in Python?
challengeType: 19
dashedName: how-do-shared-lists-behave-in-python
---

# --description--

You have learned that names refer to objects and that lists are mutable. Let's look at what happens when more than one name refers to the same list.

## Comparing Equal Lists and Aliases

Two lists can contain equal values without being the same object. Recall that `==` checks equality, while `is` checks identity:

```py
items = ['milk']
equal_items = ['milk']
alias = items

print(items == equal_items) # True
print(items is equal_items) # False
print(items is alias) # True
```

Each `['milk']` expression creates a separate list. However, `alias = items` does not create a copy. It binds another name to the existing list. We call this other name an alias.

Changing the list through either name is visible through the other:

```py
items = ['milk']
equal_items = ['milk']
alias = items

alias.append('eggs')
print(items) # ['milk', 'eggs']
print(alias) # ['milk', 'eggs']
print(equal_items) # ['milk']
```

The separate `equal_items` list is unchanged.

## Mutating a List through a Function Parameter

Arguments are passed by assignment. A parameter is a local name initially bound to the object supplied by the caller. Python does not automatically copy that object.

Here, the parameter `items` and the caller's variable `groceries` refer to the same list:

```py
def add_item(items):
    items.append('eggs')

groceries = ['milk']
add_item(groceries)
print(groceries) # ['milk', 'eggs']
```

Calling `append()` mutates the shared list. The function has no `return` statement, so it returns `None`, but the change to the list is still visible to the caller.

Reassigning the local parameter has a different effect:

```py
def replace_items(items):
    items = ['bread']

groceries = ['milk']
replace_items(groceries)
print(groceries) # ['milk']
```

The assignment makes the local name `items` refer to a new list. It does not change the original list or reassign the caller's variable `groceries`.

## Returning a New List

A function can create and return a new list instead of mutating the supplied one. The `+` operator concatenates lists, creating a new outer list containing their elements:

```py
def with_extra_item(items):
    return items + ['eggs']

groceries = ['milk']
alias = groceries

groceries = with_extra_item(groceries)
print(groceries) # ['milk', 'eggs']
print(alias) # ['milk']
print(groceries is alias) # False
```

The caller assigns the returned list to `groceries`. The name `alias` still refers to the original list. Calling the function without assigning or otherwise using its return value would leave `groceries` referring to that original list too.

Concatenation creates a new outer list, but does not copy any nested objects. If an element is itself a list, the new outer list contains a reference to that same inner list.

## Comparing `+` and `+=` for Lists

For built-in lists, `items = items + [...]` creates a new list and reassigns `items`. In contrast, `items += [...]` extends the existing list in place:

```py
def add_with_plus(items):
    items = items + ['eggs']

def add_with_plus_equals(items):
    items += ['eggs']

groceries = ['milk']
alias = groceries

add_with_plus(groceries)
print(groceries) # ['milk']
print(alias) # ['milk']

add_with_plus_equals(groceries)
print(groceries) # ['milk', 'eggs']
print(alias) # ['milk', 'eggs']
```

In the first function, only the local name refers to the new list. In the second, the shared list is mutated, and the local name still refers to it. This is why list `+=` is not interchangeable with addition followed by assignment when other references to the list exist.

## Using a List as a Default Argument

A default argument supplies a value when the caller omits that argument. If you use an empty list as a default, Python creates that list once, when the function is defined. Calls that omit the argument reuse the same list:

```py
def add_item(item, items=[]):
    items.append(item)
    return items

print(add_item('milk')) # ['milk']
print(add_item('eggs')) # ['milk', 'eggs']
```

The second call receives the list changed by the first call. Although each call has its own local parameter name, that name refers to the same default object. The list does not become empty again between calls.

If each call should start with a fresh list when no list is supplied, use `None` as the default and create the list inside the function:

```py
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item('milk')) # ['milk']
print(add_item('eggs')) # ['eggs']
```

Here, `items = []` runs each time the argument is omitted or explicitly passed as `None`, creating a new list for that call.

You can still pass an existing list to be mutated:

```py
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

groceries = []
add_item('milk', groceries)
add_item('eggs', groceries)
print(groceries) # ['milk', 'eggs']
```

The check `items is None` distinguishes a missing list from an empty list supplied by the caller. Using `if not items` would also match an empty list and replace it with a new one, so the caller's empty list would not receive the added item.

## Repeating References to Nested Lists

You have seen how list repetition can create a list such as `[0] * 3`. Repetition creates a new outer list, but repeats references to its elements rather than copying those elements.

This matters when the element is mutable:

```py
rows = [[]] * 3
print(rows) # [[], [], []]
print(rows[0] is rows[1]) # True

rows[0].append('hello')
print(rows) # [['hello'], ['hello'], ['hello']]
```

The expression `[[]]` creates one inner list. Repeating it places references to that same inner list in all three positions. Mutating it through `rows[0]` is visible through every position.

With `numbers = [0] * 3`, assigning `numbers[0] = 1` replaces one element reference; it does not mutate the immutable integer `0`. That is why the other positions remain `0`.

If you need separate inner lists, create each one separately:

```py
rows = [[], [], []]
print(rows[0] is rows[1]) # False

rows[0].append('hello')
print(rows) # [['hello'], [], []]
```

Later in this module, you will learn how list comprehensions can create a chosen number of separate inner lists.

# --questions--

## --text--

What will the following code print?

```py
def update(items):
    items.append('b')
    items = ['c']

letters = ['a']
update(letters)
print(letters)
```

## --answers--

`['a']`

### --feedback--

Appending changes the shared list, while reassignment changes only the local name.

---

`['c']`

### --feedback--

Appending changes the shared list, while reassignment changes only the local name.

---

`['a', 'b']`

---

`['a', 'b', 'c']`

### --feedback--

Appending changes the shared list, while reassignment changes only the local name.

## --video-solution--

3

## --text--

After `items = ['milk']` and `alias = items`, which statement adds `'eggs'` to the list that `alias` refers to?

## --answers--

`items = items + ['eggs']`

### --feedback--

Think about which operation extends the existing list in place.

---

`items += ['eggs']`

---

`items = ['milk', 'eggs']`

### --feedback--

Think about which operation extends the existing list in place.

---

`items + ['eggs']`

### --feedback--

Think about which operation extends the existing list in place.

## --video-solution--

2

## --text--

Why does appending to `rows[0]` after `rows = [[]] * 3` make all three positions display the new item?

## --answers--

Each position refers to the same inner list.

---

Python automatically copies each change to separate inner lists.

### --feedback--

List repetition repeats references to the elements without copying the elements themselves.

---

The `append()` method always changes every list in a program.

### --feedback--

List repetition repeats references to the elements without copying the elements themselves.

---

The multiplication operator runs `append()` three times.

### --feedback--

List repetition repeats references to the elements without copying the elements themselves.

## --video-solution--

1
