---
title: Format Specifiers
---
# Format Specifiers

Format specifiers define the type of data that is to be printed on standard output. We need format specifiers in order to take the formatted input or print the formatted output. Format specifiers are also called as format string. Format specifier is used during input and output. It is a way to tell the compiler what type of data is in a variable during taking input using scanf() or printing using printf(). Some examples are %c, %d, %f, etc.

Character format specifier : %c

#include <stdio.h>
int main()
{ 
    char ch = 'A'; 
    printf("%c\n", ch); 
    return 0; 
}

Output:
A

Integer format specifier : %d, %i

#include <stdio.h> 
int main() 
{ 
    int x = 45, y = 90; 
    printf("%d\n", x); 
    printf("%i\n", x); 
    return 0; 
} 

Output:
45
45

Double format specifier : %f, %e or %E

#include <stdio.h> 
int main() 
{ 
    float a = 12.67; 
    printf("%f\n", a); 
    printf("%e\n", a); 
    return 0; 
} 

Output:
12.670000
1.267000e+01

Unsigned Octal number for integer : %o

#include <stdio.h> 
int main() 
{ 
    int a = 67; 
    printf("%o\n", a); 
    return 0; 
} 

Output:
103

Unsigned Hexadecimal for integer : %x, %X

#include <stdio.h> 
int main() 
{ 
    int a = 15; 
    printf("%x\n", a); 
    return 0; 
} 

Output:
f

String printing : %s

#include <stdio.h> 
int main() 
{ 
    char a[] = "nitesh"; 
    printf("%s\n", a); 
    return 0; 
} 

Output:
nitesh

----------------------------------------

scanf(char *format, arg1, arg2, …)

decimal integer : %d

#include <stdio.h> 
int main() 
{ 
    int a = 0; 
    scanf("%d", &a); // input is 45 
    printf("%d\n", a); 
    return 0; 
} 

output:
45

Integer may be octal or in hexadecimal : %i

#include <stdio.h> 
int main() 
{ 
    int a = 0; 
    scanf("%i", &a); // input is 017 (octal of 15 ) 
    printf("%d\n", a); 
    scanf("%i", &a); // input is 0xf (hexadecimal of 15 ) 
    printf("%d\n", a); 
    return 0; 
} 

output:
15
15

Floating data type : %f, %e(double), %lf(long double)

#include <stdio.h> 
int main() 
{ 
    float a = 0.0; 
    scanf("%f", &a); // input is 45.65 
    printf("%f\n", a); 
    return 0; 
}

Output:
0.000000

String input : %s

#include <stdio.h> 
int main() 
{ 
    char str[20]; 
    scanf("%s", str); // input is nitesh 
    printf("%s\n", str); 
    return 0; 
} 

Output:
nitesh

Character input : %c

#include <stdio.h> 
int main() 
{ 
    char ch; 
    scanf("%c", &ch); // input is A 
    printf("%c\n", ch); 
    return 0; 
}

output:
A


The % specifiers that you can use in ANSI C are:

| Specifier | Used For |
|:-------------:|:-------------:|
| %c | a single character|
| %s | a string |
| %hi| short(signed)|
| %hu| short(unsigned)|
| %Lf| long double |
| %n | prints nothing |
| %d | a decimal integer|
| %o | an octal (base 8) integer|
| %x | a hexadecimal (base 16) integer |
| %p | an address (or pointer) |
| %f | a floating point number for floats |
| %u | int unsigned decimal |
| %e | a floating point number in scientific notation |
| %E | a floating point number in scientific notation |
| %% | The % symbol! |
