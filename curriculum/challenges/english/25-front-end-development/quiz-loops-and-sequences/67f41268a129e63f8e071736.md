---
id: 67f41268a129e63f8e071736
title: Loops and Sequences Quiz
challengeType: 8
dashedName: quiz-loops-and-sequences
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Which of the following is the correct syntax for a list?

#### --distractors--

```py
cities = //'Los Angeles', 'London', 'Tokyo'\\
```

---

```py
cities = {'Los Angeles', 'London', 'Tokyo'}
```

---

```py
cities = <'Los Angeles', 'London', 'Tokyo'>
```

#### --answer--

```py
cities = ['Los Angeles', 'London', 'Tokyo']
```

### --question--

#### --text--

What will be printed to the console?

```py
cities = ['Los Angeles', 'London', 'Tokyo']
print(cities[-1])
```

#### --distractors--

`'None'`

---

`'Los Angeles'`

---

`'London'`

#### --answer--

`'Tokyo'`

### --question--

#### --text--

What is an iterable?

#### --distractors--

It is a special type of string that can hold a large amount of characters.

---

It is a special type of number used to represent really large values.

---

It is a special data type mainly used in classes and special functions.

#### --answer--

It is a special type of object that can be looped over one item at a time.

### --question--

#### --text--

What will the following print to the console?

```py
developer = 'Jessica'

print(list(developer))
```

#### --distractors--

`'J', 'e', 's', 's', 'i', 'c', 'a'`

---

`{'J', 'e', 's', 's', 'i', 'c', 'a'}`

---

`<'J', 'e', 's', 's', 'i', 'c', 'a'>`

#### --answer--

`['J', 'e', 's', 's', 'i', 'c', 'a']`

### --question--

#### --text--

Which of the following is used to get the number of elements in a list?

#### --distractors--

`list()`

---

`long()`

---

`length()`

#### --answer--

`len()`

### --question--

#### --text--

What happens if you try to pass in an index (either positive or negative) that is out of bounds for a list?

#### --distractors--

You will receive a `SyntaxError`.

---

You will receive a `RangeError`.

---

You will receive a `TypeError`.

#### --answer--

You will receive an `IndexError`.

### --question--

#### --text--

What will be printed to the console?

```py
desserts = ['Cake', 'Cookies', 'Ice Cream', 'Pie']
print(desserts[1:3])
```

#### --distractors--

`['Cake', 'Cookies', 'Ice Cream', 'Pie']`

---

`['Cake', 'Cookies']`

---

`['Cake', 'Cookies', 'Cookies', 'Ice Cream']`

#### --answer--

`['Cookies', 'Ice Cream']`

### --question--

#### --text--

Which of the following methods is used to add an item to the end of a list?

#### --distractors--

`add()`

---

`pop()`

---

`push()`

#### --answer--

`append()`

### --question--

#### --text--

What will be printed to the console?

```py
numbers = [1, 2, 3, 4, 5]
even_numbers = [6, 8, 10]

numbers.extend(even_numbers)
print(numbers)
```

#### --distractors--

`[2, 3, 4, 5, 6, 8, 10]`

---

`[5, 6, 8, 10]`

---

`[1, 2, 3, 4]`

#### --answer--

`[1, 2, 3, 4, 5, 6, 8, 10]`

### --question--

#### --text--

Which of the following methods is used to insert an element at a specific index in a list?

#### --distractors--

`push()`

---

`add()`

---

`place()`

#### --answer--

`insert()`

### --question--

#### --text--

What will be printed to the console?

```py
numbers = [1, 2, 3, 4, 5, 5, 5]
numbers.remove(5)

print(numbers)
```

#### --distractors--

`[1, 2, 3, 4]`

---

`[1, 2, 3, 4, 5, 5, 5]`

---

`[1, 2, 3, 4, 5]`

#### --answer--

`[1, 2, 3, 4, 5, 5]`

### --question--

#### --text--

Which of the following methods is used to empty a list?

#### --distractors--

`pop()`

---

`empty()`

---

`remove()`

#### --answer--

`clear()`

### --question--

#### --text--

What is a tuple?

#### --distractors--

It is a mutable data type of a random sequence of values.

---

It is a special data type used to represent large numbers.

---

It is a method used to add elements to a list.

#### --answer--

It is an immutable ordered sequence of values.

### --question--

#### --text--

Which of the following is the correct way to unpack items from a tuple?

#### --distractors--

```py
developer = ('Alice', 34, 'Rust Developer')
(name, age, job) <= developer
```

---

```py
developer = ('Alice', 34, 'Rust Developer')
<<name, age, job>> = developer
```

---

```py
developer = ('Alice', 34, 'Rust Developer')
name, age, job == developer
```

#### --answer--

```py
developer = ('Alice', 34, 'Rust Developer')
name, age, job = developer
```

### --question--

#### --text--

What will be the result of the following code?

```py
developer = ('Jane Doe', 23, 'Python Developer')
del developer[1]
```

#### --distractors--

It will produce a `RangeError`.

---

Nothing will happen.

---

It will create an infinite loop.

#### --answer--

It will produce a `TypeError`.

### --question--

#### --text--

What will be the result for the following code?

```py
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust', 'Python')
programming_languages.index('Python', 3)
```

#### --distractors--

`2`

---

`6`

---

`0`

#### --answer--

`5`

### --question--

#### --text--

Which of the following functions is used to create a new list of the sorted values?

#### --distractors--

`has_sort()`

---

`sort()`

---

`is_sorted()`

#### --answer--

`sorted()`

### --question--

#### --text--

Which of the following is the correct way to use a `for` loop?

#### --distractors--

```py
programming_languages = ['Rust', 'Java', 'Python', 'C++']

for language in programming_languages [
    print(language)
]
```

---

```py
programming_languages = ['Rust', 'Java', 'Python', 'C++']

for language of programming_languages:
    print(language)
```

---

```py
programming_languages = ['Rust', 'Java', 'Python', 'C++']

for language in programming_languages {
    print(language)
}
```

#### --answer--

```py
programming_languages = ['Rust', 'Java', 'Python', 'C++']

for language in programming_languages:
    print(language)
```

### --question--

#### --text--

Which of the following functions is used to generate a sequence of integers?

#### --distractors--

`for()`

---

`int()`

---

`sequence()`

#### --answer--

`range()`

### --question--

#### --text--

Which of the following functions is used to iterate over multiple iterables in parallel?

#### --distractors--

`map()`

---

`filter()`

---

`reduce()`

#### --answer--

`zip()`

