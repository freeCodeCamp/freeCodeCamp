Basics of File Handling in C
So far the operations using C program are done on a prompt / terminal which are not stored anywhere. But in software industry, most of the programs are written to store the information fetched from the program. One such way is to store the fetched information in a file. Different operations that can be performed on a file are:

Creation of a new file (fopen with attributes as “a” or “a+” or “w” or “w++”)
Opening an existing file (fopen)
Reading from file (fscanf or fgetc)
Writing to a file (fprintf or fputs)
Moving to a specific location in a file (fseek, rewind)
Closing a file (fclose)
The text in the brackets denotes the functions used for performing those operations.

Opening or creating file –
For opening a file, fopen function is used with the required access modes. Some of the commonly used file access modes are:

“r” – Searches file. If the file is opened successfully fopen( ) loads it into memory and sets up a pointer which points to the first character in it. If the file cannot be opened fopen( ) returns NULL.
“w” – Searches file. If the file exists, its contents are overwritten. If the file doesn’t exist, a new file is created. Returns NULL, if unable to open file.
“a” – Searches file. If the file is opened successfully fopen( ) loads it into memory and sets up a pointer that points to the last character in it. If the file doesn’t exist, a new file is created. Returns NULL, if unable to open file.
“r+” – Searches file. If is opened successfully fopen( ) loads it into memory and sets up a pointer which points to the first character in it. Returns NULL, if unable to open the file.
“w+” – Searches file. If the file exists, its contents are overwritten. If the file doesn’t exist a new file is created. Returns NULL, if unable to open file.
“a+” – Searches file. If the file is opened successfully fopen( ) loads it into memory and sets up a pointer which points to the last character in it. If the file doesn’t exist, a new file is created. Returns NULL, if unable to open file.
As given above, if you want to perform operations on binary file, then you have to append ‘b’ at the last. For example, instead of “w” you have to use “wb”, insead of “a+” you have to use “a+b”. For performig the operations on file, a special pointer called File pointer is used which is decalared as

FILE *fp; 
So, the file can be opened as 
fp = fopen(“fileName.txt”, “w”)
The second parameter can be changed to contain all the attributes listed in the above table.



 

Reading from a file –
The file read operations can be perfomed using functions fscanf or fgets. Both the functions performd the same operations as that of printf and gets but with an additional parameter, the file pointer. So, it depends on you if you want to read the file line by line or character by character.

And the code snippet for reading a file is as:

FILE * fp; 
fp = fopen(“fileName.txt”, “r”);
fscanf(fp, "%s %s %s %d", str1, str2, str3, &year);
Writing a file –:

The file write operations can be perfomed by the functions fprintf and fputs with similarities to read operations. The snippet for writing to a file is as :

FILE *fp ; 
fp = fopen(“fileName.txt”, “w”);
fprintf(fp, "%s %s %s %d", "We", "are", "in", 2012);
Closing a file –:
After every successful fie operations, you must always close a file. For closing a file, you have to use fclose function. The snippet for closing a file is given as :

FILE *fp ; 
fp= fopen(“fileName.txt”, “w”);
---------- Some file Operations -------
fclose(fp)
If you like GeeksforGeeks and would like to contribute, you can also write an article using contribute.geeksforgeeks.org or mail your article to contribute@geeksforgeeks.org. See your article appearing on the GeeksforGeeks main page and help other Geeks.

Please write comments if you find anything incorrect, or you want to share more information about the topic discussed above.



 

Recommended Posts:
rename function in C/C++
fgets() and gets() in C language
Output of C programs | Set 63
fsetpos() (Set File Position) in C
Strings in C
Read/Write structure to a file in C
Input-output system calls in C | Create, Open, Close, Read, Write
fseek() in C/C++ with example
Command line arguments in C/C++
Difference between getc(), getchar(), getch() and getche()
C program to delete a file
fopen() for an existing file in write mode
fseek() vs rewind() in C
EOF, getc() and feof() in C
Storage for Strings in C
