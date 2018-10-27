*Overloading in Java*


Overloading allows different methods to have same name, but different signatures where signature can differ by number of input parameters or type of input parameters or both.
Overloading is related to compile time (or static) polymorphism.

Example-

```
class Adder{  
static int add(int a,int b){return a+b;}  
static int add(int a,int b,int c){return a+b+c;}  
}  
class TestOverloading{  
public static void main(String[] args){  
System.out.println(Adder.add(1,1));  
System.out.println(Adder.add(1,1,1));  
}}  
```
Output-
```
2
3
```
