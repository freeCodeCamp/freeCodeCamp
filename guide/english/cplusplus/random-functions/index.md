---
title: Random Functions
---

* Random numbers are a convenient way to introduce randomisation into your program. For example, if you want to run any simulations, or play games, delete random indices of an array etc, then random numbers is the way to go.     
* The header file to include for using random numbers in c++ is ` cstdlib`.
* *Pro tip:-*   	 You can use `cpp #include<bits/stdc++.h> ` to include all functions from all header files. 

Function:- rand()    
                  - Returns a pseudo-random number(integer) from 0 to RAND_MAX. Does not take any arguments.     
                  - RAND_MAX is the maximum permissible integer number. It is compiler depedent and usually is 2147483647.
                  
Below is an example:-     
```cpp
#include <cstdlib>
#include <iostream>
using namespace std;

int main() {
  cout << rand() << endl;
  cout << rand() << endl;
  cout << rand() << endl;
  return 0;
}
        
/*
Output:- (Note that the output is random and will differ from what is mentioned here)
1804289383
846930886
1681692777
*/
```


Now, run the program once again. And again. And again. What do you see?
The same output gets printed again and again. 

Lets head back to the definition of rand() function:-     

   rand():- *Returns a **pseudo-random** number(integer) from 0 to RAND_MAX. Does not take any arguments.*    
   
  
    
                     
So what is a pseudorandom number?     
* As the name suggests, a number that is not truly random is pseudorandom.    
* Psuedorandom numbers arent cryptographically secure and are vulnerable to attacks.    
* In the context of C++, the number appears random, but not truly random. The function assumes that every number from 0 to RAND_MAX is equally likely and spits out one number. (In reality, 
this is not the case, but it is close).  For example, the number 5 is used almost everywhere. If a random number spits 5, you might not think that the number is infact, random.     
* The random funtion rand() takes a very big number, applies modulo by a large prime number and does all sorts of operations on a number and returns a value. However complicated it is, its still possible to break it. 

How do we get an unique set of random numbers durng every program execution?

We use `void srand(int seed)`;


* "Seed" is the name given to a number that makes the random sequence generator start at a different starting point everytime. This makes sure that the random function does not spit out the same values during program run.
* **It is important to only invoke the srand call ONCE at the beginning of the program.**
* There is no need for repeat calls to seed the random number generator (in fact, it will make your number less evenly 
distributed). 
* A commonly used technique is to seed the random number generator using the clock, since clock gives you a different output everytime you look at it. So, for the seed, you can take the output of time and plug it into the random number generator.
* The time() function will return the computer’s time. This is expressed in terms of the number of 
seconds that have elapsed since Jan 1, 1970 (the Epoch).  
* The function time(NULL) will return the number of seconds elapsed in computer time. 
* The header file that must be included for time functions: `ctime'.

Code snippet: 
```cpp
#include <ctime>

srand(time(NULL));
cout << rand();

/*
Output: (Will differ from computer to computer, and because of the seed, will also differ from time to time, literally. :D)
1696269016
*/

```
This produces different values each time the program is run.    

Bonus: Tweaking the rand() to your convenience.     
* Since rand() returns a random number from 0 to RAND_MAX, if you want a number between 0 and 8 for example, then do
   -rand()%9. 
   Any number modulo 9 will return a value from 0 to 8. 
* More formally, if you want a number between L (inclusive) and U (inclusive), you must do
 `int num = L + rand()%(U-L+1).`
 Explanation:- rand()%(U-L + 1) returns a random (pseudo-random, dont forget) number betwwen 0 and (U-L). Hence, adding L makes sure we get a value between L and U.
 
 Summary:- 
 1. int rand(): Returns a random number between 0 and RAND_MAX.
 1. void srand(int seed): Used to seed the random number generator. It is sufficient to call this function only *once*.
 
 
 ### Sources:- [Random Number Generation](http://www.math.uaa.alaska.edu/~afkjm/csce211/handouts/RandomFunctions)
