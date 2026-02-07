---
id: 6908d38f7cccc31602743340
title: How to Handle Object Attributes Dynamically?
challengeType: 19
dashedName: how-to-handle-object-attributes-dynamically
---

# --description--

In a previous lesson, you learned about attributes being the variables that belong to an object. That means they hold data that describes the state or behavior of the object.

For example, a car would normally have a brand and model. The brand and model could make attributes for a `Car` class:

```python
class Car: 
    def __init__(self, brand, model): 
        self.brand = brand 
        self.model = model 

my_car = Car('Lamborghini', 'Gallardo') 
print(my_car.brand) # Lamborghini 
print(my_car.model) # Gallardo 
```

But sometimes, you might not know which attributes you need until your program is running. Imagine you're writing a script that receives attribute names from a user or a configuration file. Those are not attributes you can hardcode ahead of time.

That's where handling attributes dynamically comes in. This way, you can access, modify, check, or even delete attributes using their names as variables, and not as fixed names in your code. This gives your program the flexibility to respond to different data or user input on the fly.

Python gives you four handy built-in functions to dynamically work with object attributes. They are `getattr()`, `setattr()`, `hasattr()`, and `delattr()`.

They let you access, create, check, and remove attributes using variable names. Let's take a look at each one in action. 

`getattr()` makes it possible to read an attribute from an object when you don't know its name until runtime. If the attribute doesn't exist, it raises an `AttributeError`, unless you provide a default value.

To use it, you pass in the object, attribute name, and an optional default value: 

```python
getattr(object, attribute_name, default_value) 
```

Here's an example:

```python
class Person: 
    def __init__(self, name, age): 
        self.name = name 
        self.age = age 

person = Person('John Doe', 30) 
 
print(getattr(person, 'name')) # John Doe 
print(getattr(person, 'age')) # 30 
print(getattr(person, 'city', 'Milano')) # Milano
```

In the example above, `Milano` is a default value because `city` doesn't exist in the `Person` class. 

As we said earlier, the real power of `getattr()` is apparent when the attribute name comes from a variable, such as from user input or some file.

In that case, you can't use the regular `object.attribute_name` syntax because the attribute name is not fixed.

```python
class Person: 
    def __init__(self, name, age): 
        self.name = name 
        self.age = age 

person = Person('John Doe', 30)

attr_name = input('Enter the attribute you want to see: ')
print(getattr(person, attr_name, 'Attribute not found'))
```

In this case, if the user types in `name`, they see `John Doe`, and if they type in `age`, they see `30`. And if they type something that doesn't exist in the class like `email`, they see `Attribute not found`.

This is exactly where dynamic attribute handling shines. It lets your code respond to input and data it hasn't seen before.

In addition, you might want to look through all the attributes an object has, not just the ones you already know. The built-in `dir()` function lets you do that. It returns a list of all attribute names on the object. Here's how to use it:

```python
class Person: 
    def __init__(self, name, age): 
        self.name = name 
        self.age = age 

person = Person('John Doe', 30)

# Loop through all attributes of the person object with dir() function
for attr in dir(person):
    # Ignore dunder methods like __init__ or __str__ and regular methods
    if not attr.startswith('__') and not callable(getattr(person, attr)): 
        value = getattr(person, attr)
        print(f'{attr}: {value}')

# Output
# age: 30
# name: John Doe
```

The `setattr()` function lets you create a new attribute or update an existing one dynamically. The syntax looks like this: 

```python
setattr(object, attribute_name, value) 
```

Here's an example that sets config attributes based on data from some config or environment variable file: 

```python
class Configuration:
    pass

# Data loaded at runtime (like from a config or env file)
settings_data = {
    'server_url': 'https://api.example.com',
    'timeout_sec': 30,
    'max_retries': 5
}

config_obj = Configuration()

# Dynamically set attributes using dictionary keys and values
for attr_name, attr_value in settings_data.items():
    setattr(config_obj, attr_name, attr_value)

print(config_obj.server_url) # https://api.example.com
print(config_obj.timeout_sec) # 30
```

There is also `hasattr()`. Before you do something with an attribute or delete it, it's a good practice to check if it exists. That's what `hasattr()` lets you do. It checks if an attribute exists and returns `True` or `False` based on the result. 

Here's the basic syntax:

```python
hasattr(object, attribute_name)  
```

And here's an example that dynamically checks for the existence of attributes in a `Product` class instance:

```python
class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

product_a = Product('T-Shirt', 25)

required_attributes = ['name', 'price', 'inventory_id']

for attr in required_attributes:
    if not hasattr(product_a, attr):
        print(f"ERROR: Product is missing the required attribute: '{attr}'")
    else:
        # Access the attributes dynamically once their existence is confirmed
        print(f'{attr}: {getattr(product_a, attr)}')

# Output:
# name: T-Shirt
# price: 25
# ERROR: Product is missing the required attribute: 'inventory_id'
```

The ERROR output occurred because `inventory_id` is missing from the `Product` class and its instance.

Lastly, `delattr()` lets you remove an attribute dynamically: 

```python
delattr(object, attribute_name) 
```

For example, imagine an object has been fully processed, then you decide to clean up any sensitive or temporary attributes that might exist before saving the final version. After that, you can use `dir()` to loop through the remaining attributes:

```python
class UserSession:
    def __init__(self, user_id, token):
        self.user_id = user_id
        self.auth_token = token # sensitive
        self.temp_counter = 0 # temporary

session = UserSession(101, 'a1b2c3d4e5')

# List of attributes to remove dynamically before "saving" the session
attributes_to_clean = ['auth_token', 'temp_counter']

# Dynamically remove specified attributes
for attr in attributes_to_clean:
    if hasattr(session, attr):
        delattr(session, attr)
        print(f'Removed attribute: {attr}')

print('\nFinal attributes remaining:')

# Loop through the remaining attributes with dir()
for attr in dir(session):
    # Ignore dunder methods like __init__ or __str__ and regular methods
    if not attr.startswith('__') and not callable(getattr(session, attr)):
        print(f' - {attr}: {getattr(session, attr)}')

# Output:
# Removed attribute: auth_token
# Removed attribute: temp_counter

# Final attributes remaining:
#  - user_id: 101
```

And that's how you can handle attributes dynamically!

# --questions--

## --text--

**What does the** `getattr()` **function in Python allow you to do?**

## --answers--

Read an attribute from an object when its name is unknown until runtime.

---

Delete an attribute from an object.

### --feedback--

Think about which function helps you *retrieve* an attribute dynamically.

---

Set a new attribute on an object.

### --feedback--

Think about which function helps you *retrieve* an attribute dynamically.

---

Check if an attribute exists in an object.

### --feedback--

Think about which function helps you *retrieve* an attribute dynamically.

## --video-solution--

1

## --text--

Why would you want to handle object attributes dynamically in Python?

## --answers--

To convert attributes to a list automatically.

### --feedback--

Think about responding to user input or external data dynamically.

---

To make attributes read-only during runtime.

### --feedback--

Think about responding to user input or external data dynamically.

---

To reduce the number of class attributes created.

### --feedback--

Think about responding to user input or external data dynamically.

---

To work with attributes whose names aren't known until runtime.

## --video-solution--

4

## --text--

What is the correct syntax for checking if an object has a specific attribute in Python?

## --answers--

`checkattr(object, attribute_name)`

### --feedback--

Think about which function name literally suggests "has attribute."

---

`hasattr(object, attribute_name)`

---

`setattr(object, attribute_name)`

### --feedback--

Think about which function name literally suggests "has attribute."

---

`getattr(object, attribute_name)`

### --feedback--

Think about which function name literally suggests "has attribute."

## --video-solution--

2
