---
title: Files and IO
---

## Files and IO
File is a named location on disk to store related information. It is used to permanently store data in non-volatile memory (e.g. hard disk). Since, random access memory (RAM) is volatile which loses its data when computer is turned off, we use files for future use of the data.

When we want to read from or write to a file we need to open it first. When we are done, it needs to be closed, so that resources that are tied with the file are freed.

Hence, in Python, a file operation takes place in the following order:
1) Open a file
2) Read or write (perform operation)
3) Close the file

Python has many ways of input and output operations. Some of the output operations can be printing a text, console logs and even output a text or spreadsheet file. 

### Output to Screen
Python provides the simplest way to produce output to the screen. 
```python
print "Python is a powerful language.","It is easy to learn."
(Python 2.x)

print("Python is a powerful language.","It is easy to learn.")
(Python 3.x)
```
Output: 
```
Python is a powerful language.It is easy to learn.
```

### Input from User
There are two ways to take input from a user.
<dl>
  <dt> raw_input([prompt]) </dt>
  <dd>Used to read one line from standard input and returns it as a string</dd>
</dl>

```python
str = raw_input("Enter your name: ")
print "Welcome ", str
```
Output: 
```
Enter your name: John Doe
Welcome John Doe
```
<dl>
  <dt>input(prompt)</dt>
  <dd>Similar functionality to raw_input(), but assumes the input is a valid Python expression</dd>
</dl>

```python
str = input("Enter input: ")
print "Input: ", str
```
Output: 
```
Enter input: [x*5 for x in range(2,10,2)]
Input: [10,20,30,40]
```

### Interacting with Files in Python
Using Python, files can be easily opened, read, written and closed. With the available functions :
  1. <code>open()</code>
  2. <code>read()</code>
  3. <code>write()</code>
  4. <code>close()</code>

Example:
```python
file1 = open("foo.txt", "r+")     # Opens the file with read permission.  
file1.write("Python is a powerful language.It is easy to learn.")     # Writes data into the file.
data = file1.read(15)     # Reads first 15 characters in the file.
print "First 15 characters are:\n", data     # Prints output
file1.close()     # Closes the opened file.
```

Output:
```
First 15 characters are:
Python is a pow
```

#### Opening Files
The python method open() can be used to return a file object. It is most commonly used with two arguments which are the file name and the mode of access. The mode of access is used to describe the way the file is accessed or used. 

The most commonly used modes are 'w' which is for writing into the file and 'r' which is used for reading the file while 'r+' is used to read and write the file. 'a' is the mode that is used for appending text into the file. The mode argument is also optional and will be assumed to be 'r' if it is ommitted.

A file has to be closed after the input and output operation has been completed to free up any resources. 

Sample code to open a text file:

``` python
file = open('hello_world.txt','w')
file.write('Hello World!')
file.close()
```

##### Using with
An alternative to using the `open()` function in standalone is to make use of the `with` statement to open a file. This is considered best practice as it allows the Python framework to manage the context of opening the file, and will autmoatically perform any required resource cleanup.

This is adventageous in the fact that it takes the onus off the programmer to close every file that is opened, and that the file will still be closed even if an exception was encountered during an IO operation.

When using the `with` statement is important to note that access to the file will only available within the scope of the `with` block.

To open a file using the `with` statement the `with` keyword is entered, followed by the call to `open(file)`. Following this the variable used as a handle to the open file is declared after the `as` keyword. Once the programs execution returns from this block, the file will be closed automatically.

Sample code to open a text file using the `with` statement:
```
with open('hello_world.txt', 'w') as f:
    f.write('Hello World!')
```

#### More Information:
[Python Documentation - IO](https://docs.python.org/2/tutorial/inputoutput.html)
[Automate the Boring Stuff](https://automatetheboringstuff.com/chapter8/)
[Tutorials Point - Python IO](https://www.tutorialspoint.com/python/python_files_io.htm)
[8 PEP 343: The 'with' statement](https://docs.python.org/2.5/whatsnew/pep-343.html)
