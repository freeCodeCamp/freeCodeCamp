---
title: do while loop
---
## Do While Loop

The `do while loop` is almost the same as the while loop. The `do while loop` has the following form:
```cpp
do 
{
  // do something;	
} while(expression);
	
```

Note: Remember to use a semicolon ';' at the end of the condition.

## Details about do-while loop

The do-while loop is used whenever you are sure that a particular process(within the loop) has to be performed at least once. It has many advantages like not initializing the checking variable(eg- char addmore='Y') etc. The semicolon at the end of while is a must.

Do something first and then test if we have to continue. The result is that the do block runs at least once. (Because the expression test comes afterward). Take a look at an example:

```cpp
#include <iostream>
	using namespace std;

	int main()
	{
		int counter, howmuch;

		cin >> howmuch;
		counter = 0;
		do
		{
			counter++;
			cout << counter << '\n';
		}
		while ( counter < howmuch);
		return 0;
	}
```

A common mistake with do-while loops is attempting to use a variable that is local to the loop in the conditional statement. This will result in a compilation error because the local variable is not in the correct scope for the conditional statement to use it. Be sure to declare any conditional variables outside of the do while loop.
```cpp
int main()
{
        do {    
           // This will not compile because the counter is in the scope of the do, whereas the while conditional is outside.
           int counter = 10;
        } while (counter < 10);
        return 0;
}

```
