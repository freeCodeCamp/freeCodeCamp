---
title: Data Types
---
# Data Types

Java is a strongly typed language. This means that, in Java, each data type has its own strict definition. There are no implicit data type conversions when any conflicts occur between the data types. Any change in data types should be explicitly declared by the programmer.

Java defines 8 primitive data types : `byte`, `short`, `int`, `long`, `char`, `float`, `double` and `boolean`.

They are divided into the following categories:

*   Integers
*   Floating Point Numbers
*   Characters
*   Boolean Type

The details of each of the data types is given below :

## Integers:

These are of four types: `byte`, `short`, `int`, `long`. It is important to note that these are signed positive and negative values. Signed integers are stored in a computer using [2's complement](http://www.ele.uri.edu/courses/ele447/proj_pages/divid/twos.html). It consists of both negative and positive values but in different formats like `(-1 to -128)` or `(0 to +127)`. An unsigned integer can hold a larger positive value, and no negative value like `(0 to 255)`. Unlike C++ there is no unsigned integer in Java.

### byte:

Byte data type is an 8-bit signed two's complement integer.

    Wrapper Class: Byte

    Minimum value: -128 (-2^7)

    Maximum value: 127 (2^7 -1)

    Default value: 0

    Example: byte a = 10 , byte b = -50;

### short:

Short data type is a 16-bit signed two's complement integer.

    Wrapper Class: Short

    Minimum value: -32,768 (-2^15)

    Maximum value: 32,767 (2^15 -1)

    Default value: 0.

    Example: short s = 10, short r = -1000;

### int:

int data type is a 32-bit signed two's complement integer. It is generally used as the default data type for integral values unless there is a concern about memory.

    Wrapper Class: Integer

    Minimum value: (-2^31)

    Maximum value: (2^31 -1)

    The default value: 0.

    Example: int a = 50000, int b = -20

### long:

Long data type is a 64-bit signed two's complement integer.

    Wrapper Class: Long

    Minimum value: (-2^63)

    Maximum value: (2^63 -1)

    Default value: 0L.

    Example: long a = 100000L, long b = -600000L; 

    By default all integer type variable is "int". So long num=600851475143  will give an error.
    But it can be specified as long by appending the suffix L (or l)

## Floating­ Point​:

These are also called real numbers and are used for expressions involving fractional precision. These are of two types: `float`, `double`. Float is actually avoided in case of precise data such as currency or research data.

### float:

float data type is a single-precision 32-bit [IEEE 754 floating point](http://steve.hollasch.net/cgindex/coding/ieeefloat.html).

    Wrapper Class: Float

    Float is mainly used to save memory in large arrays of floating point numbers.

    Default value: 0.0f.

    Example: float f1 = 24.5f;

    The default data type of floating-point number is double. So float f = 24.5 will introduce an error.
    However, we can append the suffix F (or f) to designate the data type as float.

### double:


double data type is a double-precision 64-bit [IEEE 754 floating point](http://steve.hollasch.net/cgindex/coding/ieeefloat.html). This data type is generally the default choice. This data type should never be used for precise values, such as currency.

    Wrapper Class: Double

    This data type is generally used as the default data type for decimal values.

    Default value: 0.0d.

    Example: double d1 = 123.400778;

## Character:

We use this data type to store characters. This is not the same as the char in C/C++. Java uses a `UNICODE`, internationally accepted character set. Char in Java is 16­bits long while that in C/C++ is 8­bits.

    Wrapper Class: Character

    Minimum value: '\u0000' (or 0).

    Maximum value: '\uffff' (or 65,535).
    
    Default value: null ('\u0000').

    Example: char letterA ='a';

## Boolean:

This is used for storing logical values. A boolean type can have a value of either true or false. This type is generally returned by relational operators.

    There are only two possible values: true and false.

    Wrapper Class: Boolean

    This data type is used for simple flags that track true/false conditions.

    Default value is false.

    Example: boolean b = true, boolean b1 = 1(this is not possible in java and give incompatible type error), boolean b2;

## Reference Data Types:

Apart from primitive data types there are reference variables created using constructors of different classes. Reference variables are used for any class as well as array, String, Scanner, Random, Die etc. Reference variables are initialised using the new keyword.

Example :

```java
public class Box{

    int length, breadth, height;

    public Box(){
        length=5;
        breadth=3;
        height=2;
    }
}

class demo{

    public static void main(String args[]) {
        Box box1 = new Box();                //box1 is the reference variable  
        char[] arr = new char[10];           //arr is the reference variable
    }
}
```

## String:

String is not a primitive data type, but it lets you store multiple character data types in an array and has many methods that can be used. It is used quite commonly when the user types in data and you have to manipulate it. 

In the example below, we try to remove all of the letters from the string and output it:

```java

String input = "My birthday is 10 January 1984 and my favorite number is 42";
String output = "";

for(int i=0;i<input.length();i++){

//if the character at index i on the string is a letter or a space, move on to the next index
if(Character.isLetter(input.charAt(i)) || input.charAt(i)==' '){ 
    
    continue;
}

output = output + input.charAt(i); //the number is added onto the output

}

System.out.println(output);
```


Output: 
```
10198442
```


## Splitting a String Data into multiple integer to facilitate pass by argument for an ArrayList
-------------------------------------------------------------------------------------------------
There may be circumstances when certain user specified String data needs to be splited bitwise for storing or for purposes like pass by ref/arg purposes. For example user put a String in the field 'Date of Birth'.. The objective is to split the String into integer chunk/s 
One easy way to do this -


public class OurDate{

private static final CALENDAR calendar = CALENDAR.getInstance();
private int day;
private int month;
private int year;

public OurDate(){
this (CALENDAR.get(CALENDAR.DATE), CALENDAR.get(CALENDAR.month), CALENDAR.get(CALENDAR.year));

public OurDate(int day, int month, int year)
setDay(day);
setMonth(month);
setYear(year); 

// after setting up setter-getter for all 3 day, month and year
}//end of Class
---------------------------------------------------------------

public class Patient{

private String name;
private int healthCardNo;
private OurDate birthDate;


public Patient(){
this ("unknown" , "null", new OurDate()); 
}

public Patient(String name, int healthCardNo, OurDate birthDate){
setName(name);
setHealthCardNumber(healthCardNo);
setBirthDate(birthDate);

// setting up getter-setter for all variables..

	public OurDate getBirthDate() {
		return birthDate;
	}
	private void setBirthDate(OurDate birthDate) {
		this.birthDate = birthDate;
	}

}//end of Class
-------------------------------------------------------------

public class Appointment{

private Doctor doctor;
private Patient patient;


private OurDate appointmentDate; 


	public Appointment() {
		this(new Patient(),new Doctor(), new OurDate());
	}

	public Appointment(Patient patient,Doctor doctor,OurDate appointmentDate) {
		setDoctor(doctor);
		setPatient(patient);
		setAppointmentDate(appointmentDate);
     }
     // setting up getter-setter for remaining variables..

}//end of class
---------------------------------------------------------------------

public class MedicalClinicUserInterface {

private MedicalClinic clinic;
private Scanner in = new Scanneer(System.in)
private ArrayList<Patient>patients; 
    
public MedicalClinicUserInterface() {
clinic = new MedicalClinic();
	}
    
  public void addPatient() {

	String name;
	int healthCardNumber;
	String dob;


			System.out.print("Enter Name: ");
			name = in.next();

			System.out.print("Enter Health Card Number: ");
			healthCardNumber = in.nextInt();

			System.out.print("Enter birthdate DDMMYYYY: ");
			dob = in.next();


			int day = Integer.parseInt((dob.substring(0, 2)));
			int month = Integer.parseInt((dob.substring(2, 4)));
			int year = Integer.parseInt((dob.substring(4, 8)));


			clinic.addPatients(firstName, lastName, healthCardNumber, new OurDate(day,month,year), patientType);
		}

	}//end of addPatient()
    
