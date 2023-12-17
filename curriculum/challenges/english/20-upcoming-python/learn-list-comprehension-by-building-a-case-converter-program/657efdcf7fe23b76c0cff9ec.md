---
id: 657efdcf7fe23b76c0cff9ec
title: Step 7
challengeType: 20
dashedName: step-7
---

# --description--

By the end of the loop, the `snake_cased_char_list` should contain all the characters formatted as necessary. You can use the `join()` string method to join the elements of the list into a string.

Start with an empty string by writing out an empty pair of quotes, followed by a dot, and a call to the `join()` method. The `join()` method accepts the list of characters as an input, so you can pass the `snake_cased_char_list` here.

You can put the joined string inside a variable called `snake_cased_string` as follows:

```py
snake_cased_string = ''.join(snake_cased_char_list)
```

This string is almost ready to be returned however you need to do some cleaning before that.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```py
def convert_to_snake_case(pascal_or_camel_cased_string):
    snake_cased_char_list = []
    for char in pascal_or_camel_cased_string:
        if char.isupper():
            snake_cased_char_list.append(f'_{char.lower()}')
        else:
            snake_cased_char_list.append(char)
--fcc-editable-region--


--fcc-editable-region--
```
