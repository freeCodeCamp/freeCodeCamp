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

The do-while loop is used whenever you are sure that a particular process(within the loop) has to be performed at least once. It has many advantages like not initialising the checking variable(eg- char addmore='Y') etc. The semicolon at the end of while is a must.

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
