---
id: 657efdcf7fe23b76c0cff9ec
title: Step 7
challengeType: 20
dashedName: step-7
---

# --description--

You need to handle the characters that are already in lowercase by adding them to the list of converted characters.

Right after the `if` statement within the `for` loop, add an `else` clause and use the `.append()` method to add `char` to the `snake_cased_char_list` variable.

# --hints--

You should add an `else` clause inside the `for` loop. Don't forget the colon at the end.

```js
({
    test: () => {
        const transformedCode = code.replace(/\r/g, "");
        const convert_to_snake_case = __helpers.python.getDef("\n" + transformedCode, "convert_to_snake_case");
        const { function_body } = convert_to_snake_case;

        assert.match(function_body, / +else:/);
    }
})
```

You should use the `.append()` method to add `char` to the `snake_cased_char_list` variable.

```js
({
    test: () => {
        const transformedCode = code.replace(/\r/g, "");
        const convert_to_snake_case = __helpers.python.getDef("\n" + transformedCode, "convert_to_snake_case");
        const { function_body } = convert_to_snake_case;

        assert.match(function_body, / +snake_cased_char_list.append\(\s*char\s*\)/);
    }
})
```

# --seed--

## --seed-contents--

```py
def convert_to_snake_case(pascal_or_camel_cased_string):
    snake_cased_char_list = []
    for char in pascal_or_camel_cased_string:
--fcc-editable-region--
        if char.isupper():
            converted_character = '_' + char.lower()
            snake_cased_char_list.append(converted_character)
--fcc-editable-region--
```
