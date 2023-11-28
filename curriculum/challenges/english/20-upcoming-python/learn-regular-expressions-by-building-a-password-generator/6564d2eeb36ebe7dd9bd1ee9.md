---
id: 6564d2eeb36ebe7dd9bd1ee9
title: Step 30
challengeType: 20
dashedName: step-30
---

# --description--

If you want to ability of modifying the constraints at need, your function should have more arguments.

Modify your function declaration so that your function accepts `nums`, `special_chars`, `uppercase`, and `lowercase` in addition to the existent `length` argument.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
import re
import secrets
import string

def generate_password(length):
    
    # Define the possible characters for the password
    letters = string.ascii_letters
    digits = string.digits
    symbols = string.punctuation

    # Combine all characters
    all_characters = letters + digits + symbols

    password = ''
    # Generate password
    for _ in range(length):
        password += secrets.choice(all_characters)
        
    return password
    

#new_password = generate_password(8)
#print(new_password)

--fcc-editable-region--
```
