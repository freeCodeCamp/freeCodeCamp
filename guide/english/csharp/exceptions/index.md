---
title: Exceptions
---

# Exceptions

An exception is an unexpected error that occurs while a program is running, such as an attempt to access a file that does not exist. It will stop the program if not handled.

## Example
If we try to read the text of a file that does not exist:
```csharp
using System.IO;

string content = File.ReadAllText(@"C:\DoesNotExist.txt");
```

A `FileNotFoundException` will be raised.

Some other common exceptions:

* `IndexOutofRangeException`: Attempted to access an array with an invalid index.
* `NullReferenceException`: Attempted to use an unassigned reference variable.
* `DivideByZeroException`: Attempted to divide by 0.

## Get The Message Inside An Exception
Whenever you use the generic `Exception` catch all handler, you can grab the message of what caused the error each time.  It is very simple to do so:

```csharp
    try 
    {
		string content = File.ReadAllText(@"C:\DoesNotExist.txt");
	}
	catch (Exception ex) 
	{ 
		string message = "";
		if (ex.InnerException != null) {
			message = ex.InnerException.Message;
		}
		else {
			message = ex.Message;
		}
		Console.WriteLine(message);
	}
```

## Best Practices

### Use try/catch/finally Blocks
```csharp
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

```csharp
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

```csharp
if (conn.State != ConnectionState.Closed)
{
    conn.Close();
}
```


