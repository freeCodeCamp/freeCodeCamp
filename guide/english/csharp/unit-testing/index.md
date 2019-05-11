---
title: Unit Testing
---

# Unit Testing

Unit Testing is a way of checking that a small chunk of your code, or a 'unit', works as you expect it to and it is very good practice for producing high quality code.
It is particularly useful in large projects, to quickly and easily track down what unit is causing defects in your wider project.
In commercial development the majority of bugs and issues with code can be mitigated through the use of unit testing. Unit testing also allows for automation testing.
Unit testing is also closely used in conjunction with test driven development.

## Creating a basic unit test

1. Right click ```Solution``` > ```Add``` > ```New Project```
   
2. Select ```Unit Test App (Universal Windows)``` and name the UnitTest project appropriately

3. Reference the solution you are testing, by right clicking the ```References``` tab in the unit test > ```Add Reference``` and select the solution that you are referencing. Then make the class that you are testing publicly accessible.

4. Name the TestMethods appropriately, and then input the ```//Arrange``` ```//Act``` ```//Assert``` parameters within the method body code block.

5. Under the ```// Arrange``` section, each variable involved in that individual test needs to be declared, as well as the ```expectedResult```.

6. Under the ```// Act``` section, the variables that are going to be passed as an input into a given method are placed into the method's parenthesis, and all of this is initialised as an ```actualResult``` variable. 

7. Under the ```// Assert``` section, to check whether the ```expectedResult``` is equal to the ```actualResult``` and then assert this finding to make the test pass using the ```Assert.AreEqual(expectedResult, actualResult)``` class and method.


## Example code
The code below is testing whether the ```MultiplyPointsMethod``` in the ```Multiply Points Class``` will output ```600``` from an input of 6.

```cs
[TestMethod]
		public void BonusPointsOutputTestWithInt6()
		{
			// Arrange
			var userInput = 6;
			var expectedResult = 600;

			// Act
			int actualResult = MultiplyPointsClass.MultiplyPointsMethod(userInput);

			// Assert
			Assert.AreEqual(expectedResult, actualResult);

		}
```

## Running the test
1. Go to ```Test``` > ```Run``` > ```All Tests```
2. If the testing window does not pop up go to ```Test``` > ```Windows``` > ```Test Explorer```
