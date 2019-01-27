---
title: Error Handling
---

# Error Handling

You represent errors using any type that adopts the  `Error`  protocol.

```Swift
enum PrinterError: Error {
	case outOfPaper
	case noToner
	case onFire
}
```
Use  `throw`  to throw an error and  `throws`  to mark a function that can throw an error. If you throw an error in a function, the function returns immediately and the code that called the function handles the error.

```swift
func send(job: Int, toPrinter printerName: String) throws -> String {
	if printerName == "Never Has Toner" {
		throw PrinterError.noToner
	}
	return "Job sent"
}
```

There are several ways to handle errors. One way is to use  `do`-`catch`. Inside the  `do`block, you mark code that can throw an error by writing  `try`  in front of it. Inside the  `catch`  block, the error is automatically given the name  `error`  unless you give it a different name.

```swift
do {
	let printerResponse = try send(job: 1040, toPrinter: "Bi Sheng")
	print(printerResponse)
} catch {
	print(error)
}
// Prints "Job sent"
```
