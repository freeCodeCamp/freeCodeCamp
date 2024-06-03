---
id: 6564d2eeb36ebe7dd9bd1ee9
title: Крок 40
challengeType: 20
dashedName: step-40
---

# --description--

Додайте третій кортеж до списку `constraints`. Використайте параметр `uppercase` як перший елемент та шаблон регулярного виразу, який відповідає одній великій літері, як другий елемент.

# --hints--

Додайте третій кортеж до списку `constraints`, використовуючи `uppercase` як перший елемент та символьний клас, який відповідає одній великій літері, як другий елемент.

```js
({ test: () => assert.match(code, /constraints\s*=\s*\[\s*\(\s*nums\s*,\s*("|')\[0-9\]\1\s*\)\s*,\s*\(\s*lowercase\s*,\s*("|')\[a-z\]\2\s*\)\s*,\s*\(\s*uppercase\s*,\s*("|')\[A-Z\]\3\s*\)\s*,?\s*\]/) })
```

# --seed--

## --seed-contents--

```py
import re
import secrets
import string


def generate_password(length, nums, special_chars, uppercase, lowercase):
    # Define the possible characters for the password
    letters = string.ascii_letters
    digits = string.digits
    symbols = string.punctuation

    # Combine all characters
    all_characters = letters + digits + symbols

    while True:
        password = ''
        # Generate password
        for _ in range(length):
            password += secrets.choice(all_characters)
--fcc-editable-region--        
        constraints = [
            (nums, '[0-9]'),
            (lowercase, '[a-z]')
        ]        
--fcc-editable-region--
    return password

# new_password = generate_password(8)
# print(new_password)

pattern = '[^a-z]t'
quote = 'Not all those who wander are lost.'
# print(re.findall(pattern, quote))

```
