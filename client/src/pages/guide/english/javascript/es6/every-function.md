# JS ES 6 "EVERY" FUNCTION

The new Every function in ES6 is very useful.

it iterates over an array and matches the condition defined in every function if condition doesnot match it returns false 

It takes callback function as an argument in which we decide our condition.

## Example

    var myArray = [20,30,60,10,43];
    
    function callback(value){
	    return value > 40;
    }
    console.log(myArray.every(callback)); // returns false


    
   
   In the above example the myArray have multiple values but some of values are less than 40 and according to our condition we check for  values greater than 40 so it returns false.
    

