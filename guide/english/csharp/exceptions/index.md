---
title: Exceptions
---

# Exceptions

An exception is an unexpected error that occurs while a program is running, such as an attempt to access a file that does not exist. It will stop the program if not handled.

## Example
If we try to read the text of a file that does not exist:
```
using System.IO;

string content = File.ReadAllText(@"C:\DoesNotExist.txt");
```

A `FileNotFoundException` will be raised.

Some other common exceptions:

* `IndexOutofRangeException`: Attempted to access an array with an invalid index.
* `NullReferenceException`: Attempted to use an unassigned reference variable.
* `DivideByZeroException`: Attempted to divide by 0.


## Best Practices

### Use try/catch/finally Blocks
```
try
{
   var client = new WebClient();
   var resultData = client.DownloadString("http://github.com");
}
catch (Exception ex)
{
   //code for handling exceptions
}
finally
{
   //this code is always executed, does not matter if an exception is thrown or not
}         
```

### Handle Possible Exceptions With Conditions

Instead of

```
try
{
   conn.Close();
}
catch (Exception ex)
{
   //code for handling exceptions.
}
```

Try this

```
if (conn.State != ConnectionState.Closed)
{
    conn.Close();
}
```
