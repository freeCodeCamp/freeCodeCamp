---
title: String Replace Method
---
## String Replace Method

The `str.replace(old, new, max)` method is used to replace the substring `old` with the string `new` for a total of `max` times. This method returns a new copy of the string with the replacement. The original string `str` is unchanged.

#### Examples

1. Replace all occurrences of `"is"` with `"WAS"`

```python
string = "This is nice. This is good."
newString = string.replace("is","WAS")
print(newString)
```

Output
```python
ThWAS WAS nice. ThWAS WAS good.
```

2. Replace the first 2 occurrences of `"is"` with `"WAS"`

```python
string = "This is nice. This is good."
newString = string.replace("is","WAS", 2)
print(newString)
```

Output
```python
ThWAS WAS nice. This is good.
```

#### More Information:
Read more about string replacement in the <a href='https://docs.python.org/2/library/string.html#string.replace' target='_blank' rel='nofollow'>Python docs</a>

