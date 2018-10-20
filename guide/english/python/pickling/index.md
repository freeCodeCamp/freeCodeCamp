---
title: Pickling in Python
---

### TODO: More on pickle functions (like `pickle.dumps`).
## Overview
Pickling refers to serialization and deserialization of an object in Python. It essentially store an object to a file so the user can load it later on. During pickling, the Python object is converted to a binary stream.

## Usage Example
First let's create a class:

    class ExampleClass():
      def __init__(self, integer, string, number_list):
        self.integer = integer
        self.string = string
        self.number_list = number_list
      def print_attributes(self):
        print(self.integer, self.string, self.number_list)
      def print_sum(self):
        print(sum(self.number_list))

    instance = ExampleClass(10, 'rubberducky', [1, 2, 3, 1, 2])
    instance.print_attributes() # Prints 10 rubberducky [1, 2, 3, 1, 2]
    instance.print_sum() # Prints 9
    
Now, let's try pickling it:

    import pickle
    with open('file.pickle', 'wb') as file:
      pickle.dump(instance, file)

This creates the file `file.pickle`. According to <a href='https://stackoverflow.com/questions/40433474/preferred-or-most-common-file-extension-for-pickle-files'>this StackOverflow thread</a>, Python 3's preferred extension is `.pickle`. Now we simply need to lead it:

    import pickle
    with open('file.pickle', 'rb') as file:
      loaded = pickle.load(file)
      loaded.print_attributes() # Prints 10 rubberducky [1, 2, 3, 1, 2]
      loaded.print_sum() # Prints 9
    
It works! Note that both times, `open()`'s mode was `rb` or `wb`, as opposed to the regular `r` or `w` (which stand for read and write). This is because of how pickle works: it uses binary.
    
 <a href='https://docs.python.org/3/library/pickle.html'>Python's Docs on Pickling</a>
