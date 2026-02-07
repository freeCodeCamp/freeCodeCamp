---
id: 683ec8e8a2389f713380fca8
title: What Are Some Common Techniques to Loop Over a Dictionary?
challengeType: 19
dashedName: what-are-some-common-techniques-to-loop-over-a-dictionary
---

# --description--

You can loop over a dictionary if you need to access and process its key-value pairs. This is helpful for updating their values or applying some logic to them.

Let's take a look at some of the techniques you can use.

Let's say that we have a `products` dictionary that associates every product with its price:

```python
products = {
    'Laptop': 990,
    'Smartphone': 600,
    'Tablet': 250,
    'Headphones': 70,
}
```

If we want to offer a 20% discount on all our products, we can loop over all the key-value pairs and modify the prices.

The `.values()`, `.keys()`, and `.items()` methods are essential for these techniques. We covered them briefly in a previous lesson.

They return a view object with the values, keys, and key-value pairs of the dictionary. You can use these view objects in `for` loops to iterate over the elements.

For example, you can iterate over all the values of the dictionary like this.

You write `for`, the loop variable (`price` in this case), `products.values()` to get all the values of the `products` dictionary, a colon, and then the body of the loop, where you can apply any logic to the values. In this case, we are printing them.

The loop variable will take each one of the values, one per iteration:

```python
for price in products.values():
    print(price)
```

And here is the output. As you can see, each value is printed to the console, one by one:

```md
990
600
250
70
```

This works exactly the same for `.keys()` if you need to iterate over the keys of a dictionary. You just need to iterate over `products.keys()` or `products` directly, and assign a descriptive name for the loop variable:

```python
for product in products.keys():
    print(product)

# Or

for product in products:
    print(product)
```

This is the output. Each key is printed to the console, one at a time:

```md
Laptop
Smartphone
Tablet
Headphones
```

And this works exactly the same for key-value pairs if you need to iterate over the keys and their corresponding values simultaneously. You just need to iterate over `products.items()`:

```python
for product in products.items():
    print(product)
```

This is the output. Now you get individual tuples with the keys and their corresponding values:

```md
('Laptop', 990)
('Smartphone', 600)
('Tablet', 250)
('Headphones', 70)
```

If you want to store the key and the value in separate loop variables, you just need to define them and separate them with a comma. Then, you can use them in the body of the loop.

Here, we are defining a `product` loop variable and a `price` loop variable. Each one will hold its corresponding value. It's important to define them in order – the key first, and then the value:

```python
for product, price in products.items():
    print(product, price)
```

This is the output. We are printing them side by side, but you can use these values as you need them in your code.

```md
Laptop 990
Smartphone 600
Tablet 250
Headphones 70
```

Now that you know more about this, we can go back to our initial example. If we want to offer a 20% discount, we would multiply each price by `0.8` and reassign it as the value of that product key.

We could also round the result down if we want to work with integers:

```python
products = {
    'Laptop': 990,
    'Smartphone': 600,
    'Tablet': 250,
    'Headphones': 70,
}

for product, price in products.items():
    products[product] = round(price * 0.8)

print(products)
```

Then, if we print the dictionary, we would get these key-value pairs with the discounted prices:

```python
{
    'Laptop': 792, 
    'Smartphone': 480, 
    'Tablet': 200, 
    'Headphones': 56
}
```

And finally, if you need to iterate over the key-value pairs while keeping track of a counter, you can call the `enumerate()` function. This counter essentially acts as a sort of "index" or "count" for that element within the loop.

The function returns an `enumerate` object, which assigns an integer to each key-value pair, like a counter. You can start the counter from any number, but by default, it starts from 0.

Here, we are iterating over the keys of the `products` dictionary:

```python
for product in enumerate(products):
    print(product)
```

But the `enumerate()` function also assigns an integer to each key, so we get tuples with the integer and the key.

Here is the output:

```md
(0, 'Laptop')
(1, 'Smartphone')
(2, 'Tablet')
(3, 'Headphones')
```

If you need to, you can assign these values to separate loop variables. Here, we have two loop variables (`index` and `product`). This is what you will commonly see and use when you work with `enumerate()`:

```python
for index, product in enumerate(products):
    print(index, product)
```

If you need to iterate over the values, you can replace `products` by `products.values()`:

```python
for price in enumerate(products.values()):
    print(price)
```

The output will have the index and the price in each tuple:

```md
(0, 990)
(1, 600)
(2, 250)
(3, 70)
```

You can assign them to separate loop variables as well:

```python
for index, price in enumerate(products.values()):
    print(index, price)
```

This will be the output. You can use them as you need to in your code:

```md
0 990
1 600
2 250
3 70
```

And with `products.items()`, you can get the entire key-value pair in addition to the "index" or "counter":

```python
for index, product in enumerate(products.items()):
    print(index, product)
```

In this example, we get the index followed by a tuple that contains the key and the value of the corresponding key-value pair:

```md
0 ('Laptop', 990)
1 ('Smartphone', 600)
2 ('Tablet', 250)
3 ('Headphones', 70)
```

To customize the initial value of the count, you can pass a second argument to `enumerate()`. For example, here we are starting the count from 1:

```python
for index, product in enumerate(products.items(), 1):
    print(index, product)
```

You can see this change in the output. Now the first integer is 1 instead of 0:

```md
1 ('Laptop', 990)
2 ('Smartphone', 600)
3 ('Tablet', 250)
4 ('Headphones', 70)
```

This works with any variation we've seen so far. You just need to pass the initial number as the second argument.

There are many techniques to loop over a dictionary. These are some common ways, and you'll need to choose the best one for your project.

# --questions--

## --text--

Which dictionary method, when used in a loop, allows you to access the key-value pairs stored in the dictionary?

## --answers--

`.keys()`

### --feedback--

Think about which method returns a sequence with the keys and their corresponding values.

---

`.items()`

---

`.values()`

### --feedback--

Think about which method returns a sequence with the keys and their corresponding values.

---

`enumerate()`

### --feedback--

Think about which method returns a sequence with the keys and their corresponding values.

## --video-solution--

2

## --text--

When using the `enumerate()` function with `dictionary.items()`, what does the first loop variable represent?

## --answers--

The dictionary's keys

### --feedback--

Think about what `enumerate()` adds to the iterable for each iteration. 

---

The dictionary's values.

### --feedback--

Think about what `enumerate()` adds to the iterable for each iteration. 

---

The index or count of the key-value pair.

---

The key-value pair as a tuple.

### --feedback--

Think about what `enumerate()` adds to the iterable for each iteration. 

## --video-solution--

3

## --text--

Which method would you use if you need to iterate over a dictionary and access only the keys?

## --answers--

`.keys()`

---

`.values()`

### --feedback--

Think about which method gives you access to the keys of the dictionary.

---

`enumerate()`

### --feedback--

Think about which method gives you access to the keys of the dictionary.

---

`.items()`

### --feedback--

Think about which method gives you access to the keys of the dictionary.

## --video-solution--

1

