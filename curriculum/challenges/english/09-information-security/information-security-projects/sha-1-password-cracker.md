---
id: 5e46f983ac417301a38fb933
title: SHA-1 Password Cracker
challengeType: 10
forumTopicId: 462374
helpCategory: Python
dashedName: sha-1-password-cracker
---

# --description--

You will be <a href="https://replit.com/github/freeCodeCamp/boilerplate-SHA-1-password-cracker" target="_blank" rel="noopener noreferrer nofollow">working on this project with our Replit starter code</a>.

We are still developing the interactive instructional part of the Python curriculum. For now, here are some videos on the freeCodeCamp.org YouTube channel that will teach you everything you need to know to complete this project:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 hours)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Learn Python Basics in Depth</a> (4 hours)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Intermediate Python Course</a> (6 hours)

# --instructions--

Passwords should never be stored in plain text. They should be stored as hashes, just in case the password list is discovered. However, not all hashes are created equal.

For this project you will learn about the importance of good security by creating a password cracker to figure out passwords that were hashed using SHA-1.

Create a function that takes in a SHA-1 hash of a password and returns the password if it is one of the top 10,000 passwords used. If the SHA-1 hash is NOT of a password in the database, return "PASSWORD NOT IN DATABASE".

The function should hash each password from `top-10000-passwords.txt` and compare it to the hash passed into the function.

The function should take an optional second argument named `use_salts`. If set to true, each salt string from the file `known-salts.txt` should be appended AND prepended to each password from `top-10000-passwords.txt` before hashing and before comparing it to the hash passed into the function.

Here are some hashed passwords to test the function with:

- `b305921a3723cd5d70a375cd21a61e60aabb84ec` should return "sammy123"
- `c7ab388a5ebefbf4d550652f1eb4d833e5316e3e` should return "abacab"
- `5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8` should return "password"

Here are some hashed passwords to test the function with when `use_salts` is set to `True`:

- `53d8b3dc9d39f0184144674e310185e41a87ffd5` should return "superman"
- `da5a4e8cf89539e66097acd2f8af128acae2f8ae` should return "q1w2e3r4t5"
- `ea3f62d498e3b98557f9f9cd0d905028b3b019e1` should return "bubbles1"

What is hashing?
Hashing refers to the process of transforming a key or text (or in this case, password) into another value. This transformation occurs by using a hash function, which is a standardized algorithm that converts the key into a bit string of a fixed size. This transformed value is refered to as a hash and is unique to the original key. The hash is then usually displayed as a 40 digit long hexadecimal number. Hashing is an important concept in information security because it allows for a password to be verified and compared to the stored hash at the time of log-in so that the original password never needs to be stored.

What is SHA-1?
SHA-1 stands for secure hash algorithm 1, which takes a password and produces a 160-bit (or 20 byte hash value). The SHA-1 algorithm was developed by the United States National Security Agency but has not been considered to be secure since 2005. There are other hash algorithms, such as SHA-2, SHA-3, MD2, MD4, and MD5.

What is the purpose of a salt?
If multiple users have the same password, they will also have the same hash. This makes the pool of hashes smaller and more susceptible to an outsider who can now more easily figure out a common password. In order to increase security, we can add a salt. A salt is randomized data (in this case, a string of characters) that is added to the beginning and end of a password at the time of hashing. The action of salting then creates an even more unqiue input than the basic password, which will then result in a more secure hash.

The `hashlib` library has been imported for you. You should consider using it in your code. <a href="https://docs.python.org/3/library/hashlib.html" target="_blank" rel="noopener noreferrer nofollow">Learn more about "hashlib" here</a>.


## Development

Write your code in `password_cracker.py`. For development, you can use `main.py` to test your code. Click the "run" button and `main.py` will run.

## Testing

The unit tests for this project are in `test_module.py`. We imported the tests from `test_module.py` to `main.py` for your convenience. The tests will run automatically whenever you hit the "run" button.

## Submitting

Copy your project's URL and submit it to freeCodeCamp.

# --hints--

It should pass all Python tests.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
