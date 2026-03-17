---
id: 69ae96daa9e6da4eb0d5f7f4
title: Getting Started with Classes
challengeType: 11
videoId: _066KcCuaYM
dashedName: getting-started-with-classes
---

# --description--

In this video, you will learn the basics of OOP by getting started working with classes in Python.

# --transcript--

Now to explain why you should write object-oriented programs, I will explain the concepts based on a store management system that we will start developing together. So starting to think about how to take our first steps with such a program, we could first think about tracking after the items that we have right now in our store. So one way we could get started, we could create those four variables to start tracking after our items.

So as you can see, we have our first variable `item1` equals to `'Phone'`. And then we have three more variables that are intentionally starting with the prefix of `item1`, so that we could describe that those four variables are related to each other by following the correct naming conventions. 

Now you might think that those four variables are related to each other only because it uses the same prefix of `item1` for Python. Those are just four variables with different data types.

So if we were to print the type for each of those four variables now, we would receive their types with no surprises, right, we will receive string and integer for `price`, `quantity` and `price_total`. 

Now I want to focus on those specific outputs right now. Because as you can see, for each of the types, we also see the keyword of `class`.

Now, this means that those data types are actually instances of strings or integers. So in Python programming language, each data type is an object that has been instantiated earlier by some class. And for the `item1` variable, that has been instantiated from a `'str'` type of `class`.

And for the `price`, `quantity` and `price_total`, those have been instantiated from a `class` that is named `'int'` meaning integer. So it could have been nicer if we could tell Python that we want to create a data type of our own, it will allow us to write a code that we can reuse in the future easily if needed. 

Now each instance could have attributes to describe related information about it. And we can think about at least some good candidates for attributes we could have for our `item` data type, like its `name`, `price` or `quantity`. 

Alright, so let's go ahead and start creating our first class. So I will clean everything from here and we'll go ahead with it.

So it is going to be divided into two parts. The first one will be the creation of the class. And the second one will be the part that I will instantiate some objects of this class.

Now when I say creating an instance, or creating an object, basically, I mean to the same thing. So you might hear me saying one of those. Alright, so let's go ahead and say class.

And then this needs to be followed by the name of the class that you want to create. So we would like to give it the name of `Item`. And then inside of this class, in the future, we are going to write some code that will be very beneficial and very useful for us. So we won't repeat ourselves every time that we like to take similar actions. But for now, temporarily, I'm going to say here `pass` so we will not receive any arrows inside this class definition. 

Alright, so now that we have created our class, then we are allowed to create some instances of this class.

So let's go ahead and say `item1` is equal to `Item()`. And that action is equivalent to creating an instance of a class, just like if you were to create a random string, then you will say something like the following. This is equivalent to this one as well.

So it is very important to understand how classes are working in Python. So I will delete this line because this was just for an example. And now I said that we are allowed to assign some attributes to instances of a class.

So let's go ahead and start creating attributes and that will be achievable by using the dot(`.`) sign right after the instance of a class. And here you can say that you want to give it an attribute like a name that will be equal to `phone` and `item1.price` could be equal to `100`. And `item1.quantity` could be equal to `five`, for example.

Now in that stage, you might ask yourself, what is the difference between the random variables that we have created to those four lines? Well, here we actually have a relationship between those four lines because each one of the attributes are assigned to one instance of the class. And I could prove you this by going ahead and try to print the types of `item1` now, and as well as the types of the attributes of `name`, `price` and `quantity`.

Now with `name`, `price` and `quantity`, we are not going to have any surprises because we assigned string type attributes to the `Item` object. But if we were to print that, then check out the result if I was to run this program. So you can see that now we have a data type of `item` here. And that is the big difference between what we have seen previously to this thing that we have just created. 

So now we understand how we can create our own data types. Now let's go ahead and see what are the rest of the benefits using object-oriented programming.

Okay, so until now we understood how to assign attributes to instances. We should also understand now how we can create some methods and execute them on our instances. Now if we will take as an example, the built in class of `'string'`, then you know that we have some methods that we can go ahead and execute for each of our strings. And for this example, you can see that I grab an instance of a string that I named `random_str`.

And then I go ahead in the next line and execute the `upper()` method, which if you remember is responsible to grab all the letters and turn them to uppercase. Now the biggest question here is how we can go ahead and design some methods that are going to be allowed to execute on our instances. Well, the answer is inside our class.

So we could go inside our class and write some methods that will be accessible from our instances. So we could go ahead and say `def`, and give our method a name. Now a good candidate for a method that we'd like to create now is actually `calculate_total_price`. Because as we understand, it could have been nice if we were to have a method that will go ahead and calculate the result, multiplying `item1.price` with `item1.quantity` so we can get the total price for that specific item.

Now before we go ahead and complete this function, then I'm going to just create one more instance of this item by also deleting those two lines because we understood the example. So I'm just going to change those two item to like that. And I'm going to use something like `'Laptop'` and change the price to `1000` and say that we have three of those.

Now just a quick side note, when you will hear me say methods, then I basically mean two functions that are inside the classes. Because in terms of Python or in any programming language, when you have isolated definitions with this keyword, then those are considered to be called functions. But when you go ahead and create those functions inside classes, then those are called methods.

So that is an important point that you should understand, because I'm going to call those methods from now. Okay, so now if I was to continue by opening up and closing those parentheses, then you are going to see one parameter that is auto generated that Python wants us to receive intentionally. Now the reason that this happens, Python passes the object itself as a first argument when you go ahead and call those methods.

Now if I was to go here and say `item1.calculate_total_price`, then the action that we are doing now is calling this method. But when you go ahead and call a method from an instance, then Python passes the object itself as a first argument every time. So that is why we are not allowed to create methods that will never receive parameters.

Now you will see this if I was to remove the first parameter and say something like `pass`. Now if I was to execute this program now, then you are going to see `TypeError: calculate_total_price() takes zero positional arguments, but one was given`. So in simple words, what this exception says is that Python tries to pass one argument, and you are not receiving any parameter.

So that is very problematic. And that is why you always have to receive at least one parameter when you go ahead and create your methods. Now since we always receive this parameter, then it is just a common approach to call this `self`, it was okay if I was to call it something like `myparam`, or I don't know something else, but you never want to mess up with common conventions across different Python developers. So that is why just make sure that you leave it as `self` every time. 

Now if I was to go ahead and run this problem, then you're gonna see that we are not going to receive any errors. So this means that this method has been implemented correctly.

Now let's see how we are going to benefit from creating this method, because it should go ahead and create a calculation for us using `price` and `quantity`. So I will intentionally receive here two more parameters, which we could name just `x` and `y` for now. And we could just say return `x` multiplied by `y`.

And now I will go ahead and pass in here two additional arguments. And it will be `item1.price`. The second one will be `quantity`.

So that is going to work because when you call this method in the background, Python passes this as an argument. And then it passes the second argument. And then this has been passed as a third argument.

So that is perfect. And if I was to run that, and actually print this, so excuse me for running this before printing it. So I will surround this expression with this `print` built in function and I will run that and you're gonna see `500` as expected. 

Now I could do the exact same thing for calculating the total price of our second item. So if I was to grab this and paste this in in this line, and actually change this to item two, and change this one to item two and as well as this one, then I will receive `3000` as expected. And that is how you can create a method. 

All right, so until that point, we understood that we can assign attributes and as well as creating some methods that we can go ahead and use them from our instances directly, like those two examples in that line, and as well as in that line. 

Now in that episode, we are going to solve some more problems that we have in terms of best practices in object-oriented programming, and things that you are going to see in each project that is based on OOP.

# --questions--

## --text--

Which of the following is the correct way to add a method to a class?

## --answers--

```py
class Dog:
    set bark(self):
        print("Woof!")
```

---

```py
class Dog:
    def bark(self):
        print("Woof!")
```

---

```py
class Dog:
    method bark(self):
        print("Woof!")
```

---

```py
class Dog:
    def bark:
        print("Woof!")
```

## --video-solution--

2


