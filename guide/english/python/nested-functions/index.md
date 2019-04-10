---
title: Nested Functions in Python
---

### Namespaces

A function’s parameters, plus any variables that are bound (by assignment or by other binding statements, such as def) in the function body, make up the function’s local namespace, also known as local scope. Each of these variables is known as a local variable of the function.

Variables that are not local are known as global variables (in the absence of nested function definitions, which we’ll discuss shortly). Global variables are attributes of the module object, as covered in "Attributes of module objects" on page 140. Whenever a function’s local variable has the same name as a global variable, that name, within the function body, refers to the local variable, not the global one. We express this by saying that the local variable hides the global variable of the same name throughout the function body.

### The global statement

By default, any variable that is bound within a function body is a local variable of the function. If a function needs to rebind some global variables, the first
statement of the function must be:

  global identifiers

where identifiers  is one or more identifiers separated by commas (,). The identifiers listed in a global statement refer to the global variables (i.e., attributes of the module object) that the function needs to rebind. For example, the function counter that we saw in "Other attributes of function objects" on page 73 could be implemented using global and a global variable, rather than an attribute of the function object:

  _count = 0
  def counter():
      global _count
      _count += 1
      return _count

Without the global statement, the counter function would raise an UnboundLocal-Error exception because _count would then be an uninitialized (unbound) local variable. While the global statement enables this kind of programming, this style is often inelegant and unadvisable. As I mentioned earlier, when you want to group together some state and some behavior, the object-oriented mechanisms covered in Chapter 5 are usually best.

Don’t use global if the function body just uses a global variable (including mutating the object bound to that variable if the object is mutable). Use a global statement only if the function body rebinds a global variable (generally by assigning to the variable’s name). As a matter of style, don’t use global unless it’s strictly necessary, as its presence will cause readers of your program to assume the statement is there for some useful purpose. In particular, never use global except as the first statement in a function body.

{mospagebreak title=Nested functions and nested scopes}

A def statement within a function body defines a nested function, and the function whose body includes the def is known as an outer function to the nested one. Code in a nested function’s body may access (but not rebind) local variables of an outer function, also known as free variables of the nested function.

The simplest way to let a nested function access a value is often not to rely on nested scopes, but rather to explicitly pass that value as one of the function’s arguments. If necessary, the argument’s value can be bound when the nested function is defined by using the value as the default for an optional argument. For example:

  def percent1(a, b, c):
      def pc(x, total=a+b+c): return (x*100.0) / total
      print "Percentages are:", pc(a), pc(b), pc(c)

Here’s the same functionality using nested scopes:

  def percent2(a, b, c):
      def pc(x): return (x*100.0) / (a+b+c)
      print "Percentages are:", pc(a), pc(b), pc(c)

In this specific case, percent1 has a tiny advantage: the computation of a+b+c  happens only once, while percent2′s inner function pc repeats the computation three times. However, if the outer function rebinds its local variables between calls to the nested function, repeating the computation can be necessary. It’s therefore advisable to be aware of both approaches, and choose the most appropriate one case by case.

A nested function that accesses values from outer local variables is also known as a closure. The following example shows how to build a closure:

  def make_adder(augend):
      def add(addend):
          return addend+augend
      return add

Closures are an exception to the general rule that the object-oriented mechanisms covered in Chapter 5 are the best way to bundle together data and code. When you need specifically to construct callable objects, with some parameters fixed at object construction time, closures can be simpler and more effective than classes. For example, the result of make_adder(7) is a function that accepts a single argument and adds 7 to that argument. An outer function that returns a closure is a "factory" for members of a family of functions distinguished by some parameters, such as the value of argument augend  in the previous example, and may often help you avoid code duplication.

### lambda Expressions

If a function body is a single return expression statement, you may choose to replace the function with the special lambda expression form:

  lambda parameters: expression

A lambda expression is the anonymous equivalent of a normal function whose body is a single return statement. Note that the lambda syntax does not use the return keyword. You can use a lambda expression wherever you could use a reference to a function. lambda can sometimes be handy when you want to use a simple function as an argument or return value. Here’s an example that uses a lambda expression as an argument to the built-in filter function (covered in filter on page 161):

  aList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  low = 3
  high = 7
  filter(lambda x, l=low,
h=high: h>x>l, aList)         # returns: [4, 5, 6]

As an alternative, you can always use a local def statement that gives the function object a name. You can then use this name as the argument or return value. Here’s the same filter example using a local def statement:

  aList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  low = 3
  high = 7
  def within_bounds(value, l=low, h=high):
      return h>value>l
  filter(within_bounds, aList)       # returns: [4, 5, 6]

While lambda can occasionally be useful, many Python users prefer def, which is more general, and may make your code more readable if you choose a reasonable name for the function.

{mospagebreak title=Generators} 

When the body of a function contains one or more occurrences of the keyword yield, the function is known as a generator. When you call a generator, the function body does not execute. Instead, calling the generator returns a special iterator object that wraps the function body, its local variables (including its parameters), and the current point of execution, which is initially the start of the function.

When the next method of this iterator object is called, the function body executes up to the next yield statement, which takes the form: 

  yield expression

When a yield statement executes, the function execution is "frozen," with current point of execution and local variables intact, and the expression following yield is returned as the result of the next method. When next is called again, execution of the function body resumes where it left off, again up to the next yield statement. If the function body ends, or executes a return statement, the iterator raises a StopIteration exception to indicate that the iteration is finished. return statements in a generator cannot contain expressions.

A generator is a very handy way to build an iterator. Since the most common way to use an iterator is to loop on it with a for statement, you typically call a generator like this:

  for avariable in somegenerator(arguments):

For example, say that you want a sequence of numbers counting up from 1 to N  and then down to 1 again. A generator can help:

  def updown(N):
      for x in xrange(1, N): yield x
      for x in xrange(N, 0, -1): yield x
  for i in updown(3):
print i                  # prints: 1 2 3 2 1

Here is a generator that works somewhat like the built-in xrange function, but returns a sequence of floating-point values instead of a sequence of integers:

  def frange(start, stop, step=1.0):
      while start < stop:
          yield start
          start += step

This frange example is only somewhat like xrange because, for simplicity, it makes arguments start and stop mandatory, and silently assumes step is positive.

Generators are more flexible than functions that returns lists. A generator may build an unbounded iterator, meaning one that returns an infinite stream of results (to use only in loops that terminate by other means, e.g., via a break statement). Further, a generator-built iterator performs lazy evaluation: the iterator computes each successive item only when and if needed, just in time, while the equivalent function does all computations in advance and may require large amounts of memory to hold the results list. Therefore, if all you need is the ability to iterate on a computed sequence, it is often best to compute the sequence in a generator rather than in a function that returns a list. If the caller needs a list of all the items produced by some bounded generator G(arguments), the caller can simply use the following code:

  resulting_list = list(G(arguments))

### Generator expressions

Python 2.4 introduces an even simpler way to code particularly simple generators: generator expressions, commonly known as genexps. The syntax of a genexp is just like that of a list comprehension (as covered in "List comprehensions" on page 67) except that a genexp is enclosed in parentheses (()) instead of brackets ([]); the semantics of a genexp are the same as those of the corresponding list comprehension, except that a genexp produces an iterator yielding one item at a time, while a list comprehension produces a list of all results in memory (therefore, using a genexp, when appropriate, saves memory). For example, to sum the squares of all single-digit integers, in any modern Python, you can code
sum([x*x for x in xrange(10)]); in Python 2.4, you can express this functionality even better, coding it as sum(x*x for x in xrange(10)) (just the same, but omitting the brackets), and obtain exactly the same result while consuming less memory. Note that the parentheses that indicate the function call also "do double duty" and enclose the genexp (no need for extra parentheses).

{mospagebreak title=Generators in Python 2.5} 

In Python 2.5, generators are further enhanced, with the possibility of receiving a value (or an exception) back from the caller as each yield executes. These advanced features allow generators in 2.5 to implement full-fledged co-routines, as explained at http://www.python.org/peps/pep-0342.html. The main change is that, in 2.5, yield is not a statement, but an expression, so it has a value. When a generator is resumed by calling its method next, the corresponding yield’s value is None. To pass a value x  into some generator g  (so that g  receives x as the value of the yield on which it’s suspended), instead of calling g.next(), the caller calls g.send(x) (calling g.send(None) is just like calling g.next()). Also, a bare yield without arguments, in Python 2.5, becomes legal, and equivalent to yield None.

Other Python 2.5 enhancements to generators have to do with exceptions, and are covered in "Generator enhancements" on page 126.

### Recursion

Python supports recursion (i.e., a Python function can call itself), but there is a limit to how deep the recursion can be. By default, Python interrupts recursion and raises a RecursionLimitExceeded exception (covered in "Standard Exception Classes" on page 130) when it detects that the stack of recursive calls has gone over a depth of 1,000. You can change the recursion limit with function setrecursionlimit of module sys, covered in setrecursionlimit on page 171.

However, changing the recursion limit does not give you unlimited recursion; the absolute maximum limit depends on the platform on which your program is running, particularly on the underlying operating system and C runtime library, but it’s typically a few thousand levels. If recursive calls get too deep, your program crashes. Such runaway recursion, after a call to setrecursionlimit that exceeds the platform’s capabilities, is one of the very few ways a Python program can crash–really crash, hard, without the usual safety net of Python’s exception mechanisms. Therefore, be wary of trying to fix a program that is getting RecursionLimitExceeded exceptions by raising the recursion limit too high with setrecursionlimit. Most often, you’d be better advised to look for ways to remove the recursion or, more specifically, limit the depth of recursion that your program needs.

Readers who are familiar with Lisp, Scheme, or functional-programming languages must in particular be aware that Python does not implement the optimization of "tail-call elimination," which is so important in these languages. In Python, any call, recursive or not, has the same cost in terms of both time and memory space, dependent only on the number of arguments: the cost does not change, whether the call is a "tail-call" (meaning that the call is the last operation that the caller executes) or any other, nontail call. 
