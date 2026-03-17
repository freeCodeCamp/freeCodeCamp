---
id: 69ae96dfa9e6da4eb0d5f7f5
title: Using Constructors
challengeType: 11
videoId: CDFRHw4SACU
dashedName: using-constructors
---

# --description--

In this video, you will learn how to work with constructors in classes.

# --transcript--

All right, so let's get started. Now, one of the first problems that we have here is the fact that we don't have a set of rules for the attributes that you would like to pass in in order to instantiate an instance successfully. And what that means, it means that for each item that I want to go ahead and create, I need to hard code in the attribute name, like those in here.

And it could have been nicer, if we could somehow declare in the class that in order to instantiate an instance successfully, `name`, `price` and `quantity` must be passed. Otherwise, the instance could not have been created successfully. So what that means, it means that it could have been a great option if we could somehow execute something in the background, the second that we instantiate an instance, and there is a way that you can reach such a behavior.

And that is by creating a special method with a very unique name, which is called double underscore `init`, double underscore. Now, you might hear this term as well as called as constructor. Basically, that is a method with a unique name that you need to call it the way it is intentionally, in order to use its special features.

Now, the way that this is going to work is by creating it the following way. So it will be double underscore. And as you can see, I already have auto completion for some very special methods that are starting and ending with double underscore.

Now the collection of those methods are used to be called magic methods. And we are going to learn a lot of more magic methods that you have in OOP. But the first one that we are going to start with will be the `init` double underscore like that.

Alright, so now that we have created this method, then let's actually see what this method does in the background. So when you go ahead and create an instance of a class, then Python executes this double underscore `init` function automatically. So what that means, it means that now that we have declared our class, Python is going to run through this line.

And then since an instance has been created, and we have double underscore `init` method designed, then it is going to call the actions that are inside this double underscore `init` double underscore method. Now in order to prove you that, then I'm going to start with a very basic `print` here that will say I am created like that. Now we got here one instance and here we got another one. So we should see `'I am created twice'`. And in order to avoid confusions, then I'm going to delete those print lines from here so we can see a cleaner picture.

Alright, so if we were to run our program, then you can see that we have `'I am created twice'`. And that is because Python called this double underscore `init` double underscore method twice, thanks to those two instances that we have created. Alright, so now that we use the double underscore `init` function in this class, we should take benefit from it and solve some more problems in order to implement OOP best practices.

Now if you remember in the beginning of this tutorial, I said that one of the problems that we have till this point is the fact that we still hard code in the attributes in that way by saying dot name dot price dot quantity. And that is something that we can for sure avoid. Now let's see how we can start avoiding creating those attributes hard coded for each of the instances here.

So we can actually benefit from the double underscore `init` method that we have designed. And let's see how now we understand that for each instance that we will create, it will go ahead and call this double underscore `init` method automatically. So what that means, it means that not only we can allow ourselves to receive the `self` parameter, because this is a mandatory thing that we should do because Python in the background passes the instance itself as a first argument, we could in addition, take some more parameters and then do something with them.

So as a starter, let's say that we would like to receive one more parameter that we could name it name. And as you can see, automatically, Python is going to complain how the `name` argument is not filled in here. So now I could go ahead and pass in the argument of `'Phone'` for that one.

And for the second one, I can go ahead and pass in the argument of `'Laptop'`. Now once I have created this, then I can actually go ahead and change my print line a little bit. So it will be a unique print line where I can identify from where each print line came from.

So I can go ahead and say an instance created and use a colon here and then refer to the name like that. And now that we have created this, then if we were to run our program, then you're gonna see unique sentences and instance created for the phone and as well as for the laptop. Alright, so now that we have done this, then there is something that is still not quite perfect, because we still pass in the attribute of name here and here.

So now pay attention to how the `_init_` method has to receive the `self` as a parameter as well. And we already know the reason for that. And the fact that we have `self` as a parameter here could actually allow us to assign the attributes from the init method, so that we will not have to go ahead and assign the attribute of `name` for each of the instances we create.

So what that means, it means that I can dynamically assign an attribute to an instance from this magic method, which is called double underscore `init`. So if I was to say self dot name, so I'm assigning the attribute of `name` to each instance that is going to be created or created yet. And I'm making that to be equal to the name that is passed in from here.

So what that means, it means that now I can allow myself to delete this line. And then this line. So as you can see, now I have a dynamic attribute assignment, thanks to the `self.name` equals name that we have wrote here.

And to test that the attribute assignment work, then I can go down here and use two more lines that will look like the following. So I will print `item1.name`, and I will also print `item2.name`. And in order to avoid confusions, then I'm going to get rid of this line.

So we could only see the print lines from here. And now if I was to run that, then you can see that we receive `phone` and `laptop`. So it means that we were able to assign the attributes dynamically.

And that is perfect. And now that we get the idea of that, then we should also do the same for the rest of the attributes that we'd like to receive. So we also got the `price` and `quantity` to take care of.

So I'm going to go to my `_init_` method and I'm going to receive again `price` and `quantity`. And I'm going to do the exact same thing. So I'm going to assign the attribute of `price`.

And that will be equal to `price`. And the `quantity` will be equal to the `quantity`. And you can also see that again, Python complains about the `price` and the `quantity` not being passed in here.

So I can say 100, and then five, and then I can delete those. And then I can do the same here, I could pass in 1000, and then three, and delete those. And in order to prove you that this is going to work, then I'm going to copy myself a couple of times and change this to `quantity`.

I mean, `price`, this one will be price as well. This one will be `quantity`. And this one as well.

Now if I was to run that, then you can see that the results are as expected. So that is a way that you should work with the double underscore `init` method, you should always take care of the attributes that you want to assign to an object inside the double underscore `init` method, meaning inside the constructor. Now a couple of side notes that are quite important to remember when we work with classes.

Now, when we go ahead and use the double underscore `init` method, this doesn't mean that we cannot differentiate between mandatory parameters to non mandatory parameters. So say that you currently don't know how much you have from a specific item, then you can go ahead and by default, receive this quantity parameter as zero, because it is realistic situation that you currently don't know how much phones you have on your store. So we can directly go ahead and use a default value for that, for example, zero.

And then this will mean that you will not have to pass in those five and three here. And now in order to show you the results of that, if I was to run our program, then you can see that we receive zero twice for those two prints in here. So that is something that you want to remember.

And one more quite important point that I'd like to talk about now is the fact that you can assign attributes to specific instances individually. So say that you want to know if the laptop has `numpad` or not, because some laptops are not having the `numpad` on the right side of the keyboard. But this is not a realistic attribute that you would want to assign to a phone.

And that is why you can go ahead and let me delete those print lines, by the way. And that is why you can go ahead and say something like item to that has `numpad` equals to false like that. And that is something that you want to remember.

Because the fact that you use some attribute assignments in the constructor doesn't mean that you cannot add some more attributes that you'd like after you instantiate the instances that you would like to. All right, so now that we understood this, then there is still one small problem that is left that we need to solve. Now pay attention how the `calculate_total_price` still receives the `x` and `y` as parameters.

And the question that we ask now is, why it still receives those parameters? Well, we could for sure now not receive those parameters. Because as we know, for each method that we design in classes, then the object itself is passed in argument.

And I know that I repeated this couple of times, but this is where I fail to understand classes. So that is why it is very important to understand this behavior. And we already know that the object itself passed as an argument.

So that's why we receive self. And so this means that now we could just return `self.price` multiplied by `self.quantity`. And this will mean that we don't really have to receive those parameters, because we assign those attributes, once the instances has been created.

So this means that we have access to those attributes throughout the methods that we are going to add here in this class in the future. So in order to test that this works, then I'm going to the latest example for now. And I'm going to say print `item1.calculate_total_price`.

So we will be able to return the result here. And I will do the same for item two, and sorry, only this one. Now to show some real number other than zero, then I will go ahead and pass in here quantities.

So I will say one and three, for example, because I don't want to multiply a large number with a zero, and that could come from here. So I will run that. And you see that we receive the expected results.

So now we completely understand the big picture how to work with the constructors in classes. And what are the best practices that you should go ahead and implement. Alright, so now that we understood this, then we might think that we have done everything perfectly.

But actually, I want to show you what will happen if we were to pass in here a string besides an integer, and run our program. So if we were to run that, then you can see that we are screwing things up here, because this function, for example, thinks that it should print the string three times because you'll see we have 1000 multiplied by three that is being returned in here. So it shows us 1000 once 1000 twice, and then one more time.

So what that means, it means that we have to validate the data types of the values that we are passing in. So there are a couple of ways to achieve this. And one way is by using typings in the parameters that you're declaring inside here.

So a great starter will be, for example, to declare that a name must be a string. Now let me first take this back and change those two integer, and then go here and design those parameters. So in order to specify a typing, then you should go ahead and create a colon sign, followed by the type of the data type that you expect to receive here.

So if I was to pass in here only the object reference to the class of `str`, then it will mean that it will have to accept strings only. And I can prove you that by changing this to an integer. And you're going to see that we have a complaint here that says expected type `str` got `int` instead.

And that is perfect. So now that we have done this, then I'm going to do the same for the price itself. And price, we could actually do the same thing with it by passing in float.

Now when we pass float, it is okay to also pass integers. And that is something very unique with floats and integers together. So that is okay to use the typing of float.

And for the quantity, we don't need to specify a typing, because the fact that we passed a default value of integer already marked this parameter as to be integer always. So that is why, for example, if I was to leave this as it is, and change the quantity to a string, then you're gonna see that it is going to complain because the default value is already an integer. So it expects for an integer.

Alright, so those things are actually great setups to make our `_init_` function more powerful. But we might still want to validate the received values in the following way. So say that you never want to receive a negative number of quantity, and you never want to receive a negative number of price.

So that is something that you cannot achieve by the typings in here. But there's actually a great way to work this around. And that will be by using assert statements.

Now `assert` is a statement keyword that is used to check if there is a match between what is happening to your expectations. So let's see how we can get work with assert. So I'm actually going to delete this from here.

And I'm going to organize our `_init_` method a little bit. I'm going to say here a comment and I will say assign to `self` object. And I will say up top something like run validations to the received arguments.

Alright, so now it is a great idea to validate that the price and quantity are both greater than or equal to zero because we probably don't want to handle with those when they are negative numbers and we want to crash the program. So we could say assert and pay attention that I use it as a statement, not a built in function or something like that. And I can say here price is greater than or equal to zero.

Now once I set this, then I can also do the same for quantity actually. So let me do that quickly by this way. And then once we have this, then I can actually go ahead and run our program.

And you will see that I will not receive any errors. But the second that I change this quantity to negative one, for example, and this one being negative three, then I will have some arrows that will say assertion error. Now you can see that the fact that we see here assertion error is quite a general exception that doesn't mean anything.

Now what is so beautiful with assert, you can add your own exception messages right near of it as a second argument. So let's go up top here and go back to those two lines. So the first argument that is passed to this statement is the statement that we'd like to check.

But if we were to say here comma, and use a string to say actually a formatted string, and I can say price, and then refer to the value of it is not greater than zero like that. I can add an explanation mark here. And I can use the same thing, copy that with a comma and paste this in here and change this quantity.

And then refer to the value of it and say that it is not equal to I mean greater than or equal to zero. So we need to be actually changed to greater than or equal to like that. And same goes for here.

And I have some space here that should be deleted. All right, so now if I was to execute our program, then you can see that we receive assertion error quantity minus one is not greater or equal than zero. So I should delete this, then here for that.

And now it is perfect. So now we understand that using the `assert` statement could allow us to validate the arguments that we receive. And also it allows us to catch up the bugs as soon as possible, before going forward with the rest of the actions that we like to take within this program.

So let me actually change those back to valid values like that. And that is perfect. All right, so until this point, we learned about how to work with the constructor.

And we also learned about how to assign different attributes to instances that are going to be unique per instance, which means that you can go ahead and create as much as instances as you want. And you have the control to pass whatever values you'd like to for the `name`, `price` and `quantity`. Now consider a situation that you want to make use of an attribute that is going to be global or across all the instances.

Now a good candidate for example of this could be a situation that you want to apply a sale on your shop. So this means that you want to go ahead and having the control of applying some discount for each one of the items. And that is a good candidate for creating an attribute that is going to be shared across all the instances.

Now we call those kind of attributes class attributes, and the kind of attribute that we have learned till this point is actually called in a full name instance attributes. So about instance attributes, we know everything and we'll learn how to work with it. But we did not work it with the other kind of the attributes, which we will do in this tutorial, which is called again a class attribute.

So a class attribute is an attribute that is going to be belong to the class itself. But however, you can also access this attribute from the instance level as well. Let's go ahead and see a good candidate for a class attribute that you want to go ahead and create it.

So that's going to be going to our class here. And just in the first line inside our class, I can go ahead and create a class attribute. So let's go ahead and create an attribute like `pay_rate` equals to `0.8`.

And the reason that I'm doing this is because I said that there's going to be 20% of discount. So I probably want to store an attribute that will describe how much I still need to pay. So I will say here, the pay rate after 20% discount like that.

Okay, so now that we have created this, then let's see what are the ways that we can access this attribute. Now, if I was to go down and actually deleting one of those and say something inside this print line that will look like the following. So I will try to access to the reference of the class itself.

So I'm not going to create an instance like that. Besides, I'm just going to bring in the reference to the class level itself. And I'm going to try to access this attribute by saying pay underscore rate.

Now, if I was to run that, then you're gonna see that as expected, we see this class attribute, because that is a way that you can access those class attributes. Now, this might be confusing. But I said a minute ago that you can also access those class attributes from the instance level.

Well, let's see if that is true. So if I was to duplicate those lines twice by using the shortcut of control D, then let's go ahead and change those to `item1`. And this one to item two.

Now see how I try to access the `pay_rate` attribute from the instance, although we don't have such an instance attribute. Now if I was to run that, then you're gonna see that we still have the access to see that class attribute. Well, that might be confusing.

And that might be hard to understand why that is happening. Well, there is actually something that we need to understand when we work with instances in Python. So when we have an instance on our hand, then at first, this instance tries to bring the attribute from the instance level at first stage.

But if it doesn't find it there, then it is going to try to bring that attribute from the class level. So what that means, it means that `item1` did some thinking here and say to itself, okay, so I don't have this attribute right in here, because that is just not an attribute that assigned to me. So I'm going to try to search that from the instance level.

And then I'm going to find it and print it back. So that is exactly what is happening here. `item1` and `item2` are instances that could not find the `pay_rate` attribute on the instance level.

So both of them went ahead and try to bring this attribute from the class level. And since it really exists in the class level, then we were able to access those now to even give you a better idea of what is going on here, then I'm going to do one more additional thing. Now I will delete this first print line.

And I will go ahead and delete those attributes from here as well. Now there is a built in magic attribute, not a magic method that you can go ahead and see all the attributes that are belonging to that specific object. And that is achievable by using this double underscore di CT double underscore like that.

So this will go ahead and try to bring you all the attributes that are belonging to the object that you apply this attribute and want to see its content. So I will go ahead and copy this one and paste this in for the instance level as well. So this should give me all the attributes for class level.

And the second line should do this for the instance level. All right. And if I was to run that, then let's explore the results for a second.

Now you can see that at the first line, we see this `pay_rate` attribute. But in the second line, we never see it, we see name, `price` and `quantity`. And you can also pay attention that this magic attribute is actually responsible to take all the attributes and convert this to a dictionary.

And that is from where the `dict` keyword coming from it is just a shortened version of a dictionary. So that is a very useful magic attribute that you can go ahead and use. If you just want to see temporarily for debugging reasons, all the attributes that are belonging to some object.

All right, so now that we understood this, then let's take it to a real life example and come up with a method that will go ahead and apply a discount on our items price. So that will be by creating a method that will be belong to each of our instances. And that means that we can go ahead and come up with a method that we could name `apply_discount`.

So let's go ahead and start working on this. So I'm going to say `def` `apply_discount` and pay attention that I'm using a new method inside a class here. So right inside of this, then at first we need to figure out how we are going to override an attribute that is belonging to an instance.

And we already know that we can do that with the `self` keyword. So it will be `self.price`. And that will be equal to self dot price, meaning the older value of this attribute, multiplied by the `pay_rate`.

Now you might expect that we could access this directly like that. But if you remember, that is actually belonging to the `Item` class itself. Now this might be confusing because this method already inside this class.

So you might think already that you can access it directly by saying `pay_rate`, because it is already inside the class. But that is actually not going to work. Because you can either access it from the class level or the instance level as we understood previously.

So you can go ahead and say `item.pay_rate` like that. And there you have a method that can go ahead and basically override the `price` attribute for one of your items. Now to show you that this works, then I can only use one instance for now.

And I can go ahead and call this method by say, `apply_discount`. And I can also now try to print the attribute of `price` for this `item1`. And we should see AD, right?

So if we were to run that, then you're gonna see that we are going to receive AD point zero as expected. Now we should not forget the option that you might also want to have a different discount amount for a specific item. So say that one day you'll have 20 items.

And only for the laptop, you want to have a 30% discount. But it is going to be a bad idea changing the class attribute to 0.7, because it will affect all the items that you have right now on your hand. So what you can do instead is you can assign this attribute directly to one of the instances that you would like to have a different discount amount for.

So let's go ahead and see an example for this. So I will allow myself to bring back the item of laptop. And then what I can do to apply a 30% discount for this item is assigning the exact same attribute to the instance.

So I can go ahead and use a item to that pay on the score rate is equal to 0.7. Now what will happen here is that for item two, it will find the attribute of pay rate in the instance level. So item two does not really have to go ahead to the class level and bring back the value of pay rate.

Because at first look, it is going to find it in the instance level. But for `item1`, it is different. It is still going to read from the item level, which is going to be 0.8.

So now, if we were to try to use item two dot `apply_discount`, and as well as printing the price now, then let's see what will happen. So I will uncomment this line to not see this print for now. And I will go ahead and execute our program.

Now you can see that we still however receive 800. And what this means, this means that the discount that has been applied is still 20%. And where this is coming from?

Well, this is coming from this method here that no matter what we try to pull the `pay_rate` from the class level. So a best practice here would be to change this to self. And that way, if we override the pay rate for the instance level, then it is going to read from the instance level.

But for `item1`, if we try to access the pay rate from the instance level, then this is still great, because we did not assign a specific pay rate for `item1`. So it is going to pull that from the class level. Now if we were to try to run that, then you're going to see now that we have expected results.

And if we were to also uncomment the first print line for the `item1`, and rerun our program, then you can see that for `item1`, we had 20% discount. And for item two, we had 30% discount. So when it comes to accessing class attributes, you might want to reconsider how you want to access them when you come up with some methods.

And specifically for creating a method like `apply_discount`, it is a great idea to access it from the instance level. So you also allow the option of using a pay rate that is assigned to the instance level. Okay, so now that we understood completely about the differences between a class to an instance attribute, let's jump ahead to the next topic.

Now you see that I have deleted those print lines that I have down below. And I came up with five instances that I have created here. So you might also want to create those five instances immediately.

So that is why I will recommend you to go ahead to my repository, accessing this class attributes directory, and then code snippets, and then go ahead and copy the code from these `five_items.py` file. Okay, so considering a situation that your shop is going to be larger in the future, meaning that you are going to have more items, then the more items that you are going to have the more filtration like things that you want to do in the future. But what is problematic currently with our class is the fact that we don't have any resource where we can just access all the items that we have in our shop right now.

Now it could have been nicer if we could somehow have a list with all the item instances that have been created until this point. But currently there is not an approach that will give us a list with five elements where each element will represent an instance of a class. So in order to come up with such a design, then here is a wonderful candidate for creating a class attribute that we could name all.

And once we do this, then we're going to see how we are going to add our instances to that list. So I will go ahead and start by going here and use an old attribute. So it will be all equals to an empty list.

Now we need to figure out how we are going to add our instances for each time that we are going to go ahead and create an instance. Now if you remember, the double underscore `init` method is being called immediately once the instance has been created. So it might be a wonderful idea going down below inside this double underscore `init` method, and use a code that will be responsible to append to that list every time that we create an instance.

And that will be as easy as saying something like the following. So first, you could pay attention that I actually wrote some comments in this double underscore `init` function like run validations and assign to `self` object. So it might be a great idea to start with a comment here that will say actions to execute just to really have a great separation between the different things that we are doing.

So now inside here I can say `item.all` and you can see that I use the class object first. And then that is a list. So I can use dot append, and then I will just append the `self` object.

Now we know that `self` is actually the instance itself every time that it is being created. So once we go ahead and launch such a command inside the init function, then for each instance that is going to be created, this whole list is going to be filled with our instances. Now to show you that I can jump a line after we create the instances.

And we can say `print(item.all)`. And now if I was to run our program, then you are going to see that we are going to have a list with five instances. If I was to scroll right a bit, then you can see that I have exactly five elements.

And that is perfect. Now that's going to be extremely useful. If you want to do something with only one of the attributes of your instances, so say that you would like to print all the names for all of your instances, then you can use easily a for loop to achieve such a task.

So we can go ahead and say for instance in `item.all`, and you can say print instance dot name. And once we come up with this, then you can see that we have all the names for all the instances that we have created. So that is going to be useful here and there, especially if you know how to use the filter function, for example, to apply some special things on some of the instances that are matching your criteria.

Alright, so now that we understood this, then let's also take care of one problem that we saw previously. Now if I was to use a control Z couple of times, and still use this print item dot all, now you could see that the way that the object is being represented is not too friendly. Now it could have been nicer if we could somehow change the way that the object is being represented in this list here.

Now there's actually a way to achieve this by using a magic method inside our class. Now there is a magic method that is called double underscore `__repr__` and `__repr__` stands for representing your objects. So that is why you can actually go ahead and use this magic method.

And then you will have the control to display your objects when you are printing them in the console. Now I actually recommend watching a video that compares between a method that is similar to it, which is called double underscore str. And you can take a look in the description of this entire series to actually watch the video that I'm talking about.

Alright, so let's go ahead and use the `__repr__` method to understand how this is going to work. So I'm going to say def inside our class. And I'm going to use double underscore `__repr__` double underscore and as expected, it will receive the self.

Now what we can do now is returning a string that will be responsible to represent this object. Now, obviously, we don't want to use something that is not unique for each of the instances, because say that I was to use now return item something like that, and run our program, then you can see that I'm going to receive a list with this string five times. But it is going to be hard to identify which instance represents each string here.

So it could be helpful if we were to return a string that could be unique. So I'm going to close the console here and go ahead here and use a formatted string. And in order to make this unique, it is a best practice to represent it exactly like we create the instance like that.

So what I'm going to do here is leaving the item and use a brackets, opener and the closure. And then I'm going to make the return string here as much as equal as possible to the way that we create those instances. So I will start by typing here single quotes to escape from the double quotes that are coming from here.

And I'm going to refer to the value of name by using `self.name`. And then I will leave my single quotes, and I will use a comma like that. And then I will go ahead and refer to the value of our price.

I will use one more comma, and I will say `self.quantity`. Now, if we were to execute our program again, then you can see that now we receive a list that is way more friendly than what we have seen previously. And you can also see that this first element, for example, is quite equivalent to this line here.

Now you might be curious why I worked so hard to return the representative version of our objects the same way that we create them. So that is just a best practice according to Python's documentation, because it will help us to create instances immediately by only the effort of copying and pasting this to a Python console. So if you think about it right now, if you open a Python console, and you import this class, then it will be as easy as grabbing this and pasting to the Python console, and then you will have an instance being created.

So that is the single reason that I have came up with this approach. And also for sure, I just wanted to return a unique string that will really represent our instance. And you can see that it is very easy to identify the instances of our class with this list and with this approach.

# --questions--

## --text--

Which of the following is the correct way to write a constructor?

## --answers--

```py
class Dog:
    def __init__(self, name):
        name = name

    def bark(self):
        print(f"{self.name} says: Woof!")
```

---

```py
class Dog:
    def __init__(name):
        self.name = name

    def bark(self):
        print(f"{self.name} says: Woof!")
```

---

```py
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(f"{self.name} says: Woof!")
```

---

```py
class Dog:
    def __init__ self, name:
        self.name = name

    def bark(self):
        print(f"{self.name} says: Woof!")
```

## --video-solution--

3


