---
id: 6565a536ba1f9f25bd30e88c
title: Step 100
challengeType: 20
dashedName: step-100
---

# --description--

step 100 instructions

# --hints--

Test 0

```js

```

# --seed--

## --seed-contents--

```python
--fcc-editable-region--
def verify_card_number(card_number):
    # Numbers are mutable
    sum_of_odd_digits = 0

    # List range syntax: [start:stop:step]
    card_number_reversed = card_number[::-1]

    for digit in card_number_reversed[::2]:
        # `int` function and `+=` operator
        sum_of_odd_digits += int(digit)

    sum_of_even_digits = 0
    for digit in card_number_reversed[1::2]:
        # Multiplication operator
        number = int(digit) * 2
        # Logical >= operator
        if number >= 10:
            # Integer division and modulus operators
            number = (number // 10) + (number % 10)
        sum_of_even_digits += number

    total = sum_of_odd_digits + sum_of_even_digits

    # Equality operator
    return total % 10 == 0


def main():
    card_number = '4111-1111-4555-1142'

    # `translate` and `maketrans` methods
    card_number = card_number.translate(str.maketrans({'-': '', ' ': ''}))

    if verify_card_number(card_number):
        print('VALID!')
    else:
        print('INVALID!')


if __name__ == '__main__':
    main()
--fcc-editable-region--
```
